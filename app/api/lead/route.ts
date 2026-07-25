import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Lead notifications for Brady + Vince. Email transport order:
//   1. Resend        — if RESEND_API_KEY is set (future upgrade, best deliverability)
//   2. Gmail SMTP    — GMAIL_USER + GMAIL_APP_PASSWORD (current primary)
//   3. FormSubmit    — last resort (403s from Vercel egress IPs; works locally)
// A Telegram ping to Brady fires in parallel for speed-to-lead.
const FORMSUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/02e88bc6db3dda1ad60ea8b7bc98ee9e";
const CC_EMAIL = "vincent@reallawgroup.com";
const TO_EMAIL = "bradyschwartz25@gmail.com";

type Lead = Record<string, string>;

function clean(v: unknown, max = 500): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

async function telegramPing(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;
  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
  } catch (err) {
    console.error("telegram ping failed:", err);
  }
}

async function sendEmail(subject: string, text: string, replyTo?: string) {
  const resendKey = process.env.RESEND_API_KEY;
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  if (resendKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || "SoldEasier <leads@soldeasier.com>",
        to: [TO_EMAIL, CC_EMAIL],
        reply_to: replyTo || undefined,
        subject,
        text,
      }),
    });
    if (!res.ok) throw new Error(`resend ${res.status}`);
  } else if (gmailUser && gmailPass) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: gmailUser, pass: gmailPass },
    });
    await transporter.sendMail({
      from: `"SoldEasier Leads" <${gmailUser}>`,
      to: [TO_EMAIL, CC_EMAIL],
      replyTo: replyTo || undefined,
      subject,
      text,
    });
  } else {
    const res = await fetch(FORMSUBMIT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: "https://soldeasier.com",
        Referer: "https://soldeasier.com/sell",
      },
      body: JSON.stringify({
        _subject: subject,
        _cc: CC_EMAIL,
        _template: "table",
        text,
        source: "soldeasier.com",
      }),
    });
    if (!res.ok) throw new Error(`formsubmit ${res.status}`);
  }
}

export async function POST(req: Request) {
  let body: Lead & { partial?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }

  // honeypot — bots fill every field
  if (clean(body.company)) return NextResponse.json({ ok: true });

  const isPartial = body.partial === true || body.partial === "true";

  const lead = {
    name: clean(body.name),
    phone: clean(body.phone),
    email: clean(body.email),
    address: clean(body.address),
    city: clean(body.city),
    zip: clean(body.zip, 12),
    situation: clean(body.situation),
    condition: clean(body.condition),
    timeline: clean(body.timeline),
    language: clean(body.language, 20),
    notes: clean(body.notes, 2000),
  };

  if (isPartial) {
    // Step-one abandonment: name + phone + address is enough to save the lead.
    if (!lead.name || !lead.phone || !lead.address) {
      return NextResponse.json({ ok: true });
    }
  } else {
    const required = [
      "name",
      "phone",
      "address",
      "city",
      "situation",
      "condition",
      "timeline",
    ] as const;
    if (required.some((k) => !lead[k])) {
      return NextResponse.json(
        { error: "missing required fields" },
        { status: 422 },
      );
    }
  }

  const langNote = lead.language
    ? ` They used the ${lead.language} version of the site, so contact them in ${lead.language}.`
    : "";
  const subject = isPartial
    ? `⚠️ Partial website lead: ${lead.address}`
    : `🏠 Website lead: ${lead.address}, ${lead.city}`;
  const intro = isPartial
    ? `Source: the soldeasier.com WEBSITE FORM, but INCOMPLETE. This seller entered their name, phone, and address, then left before finishing the full form. Treat it as warm but unconfirmed.${langNote}`
    : `Source: the soldeasier.com WEBSITE FORM. This seller reached out to us directly and is expecting contact today.${langNote}`;
  const lines = [
    intro,
    "What to do: call them if you have time when you read this, or text Brady the phone number at (847) 212-2142 and he will make the call.",
    "",
    ...Object.entries(lead)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k[0].toUpperCase()}${k.slice(1)}: ${v}`),
  ].join("\n");

  const tg = [
    isPartial ? "⚠️ PARTIAL website lead (left mid-form)" : "🌐 NEW WEBSITE LEAD",
    `${lead.name} · ${lead.phone}`,
    [lead.address, lead.city].filter(Boolean).join(", "),
    [lead.situation, lead.condition, lead.timeline]
      .filter(Boolean)
      .join(" · "),
    lead.language ? `Language: ${lead.language}` : "",
    "Full details in email. Call fast — speed wins these.",
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const [emailResult] = await Promise.allSettled([
      sendEmail(subject, `${lines}\n\nSubmitted via soldeasier.com`, lead.email),
      telegramPing(tg),
    ]);
    if (emailResult.status === "rejected") throw emailResult.reason;
  } catch (err) {
    console.error("lead email failed:", err);
    // A partial is best-effort; never surface an error for it.
    if (isPartial) return NextResponse.json({ ok: true });
    return NextResponse.json({ error: "email failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
