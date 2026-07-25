import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Lead notifications for Brady + Vince. Transport order:
//   1. Resend        — if RESEND_API_KEY is set (future upgrade, best deliverability)
//   2. Gmail SMTP    — GMAIL_USER + GMAIL_APP_PASSWORD (current primary)
//   3. FormSubmit    — last resort (403s from Vercel egress IPs; works locally)
const FORMSUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/02e88bc6db3dda1ad60ea8b7bc98ee9e";
const CC_EMAIL = "info@reallawgroup.com";
const TO_EMAIL = "bradyschwartz25@gmail.com";

type Lead = Record<string, string>;

function clean(v: unknown, max = 500): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  let body: Lead;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }

  // honeypot — bots fill every field
  if (clean(body.company)) return NextResponse.json({ ok: true });

  const lead = {
    name: clean(body.name),
    phone: clean(body.phone),
    email: clean(body.email),
    address: clean(body.address),
    city: clean(body.city),
    zip: clean(body.zip, 12),
    situation: clean(body.situation),
    timeline: clean(body.timeline),
    notes: clean(body.notes, 2000),
  };

  if (!lead.name || !lead.phone || !lead.address) {
    return NextResponse.json(
      { error: "name, phone and address are required" },
      { status: 422 },
    );
  }

  const subject = `🏠 New SoldEasier lead — ${lead.address}, ${lead.city}`;
  const lines = Object.entries(lead)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k[0].toUpperCase()}${k.slice(1)}: ${v}`)
    .join("\n");

  const resendKey = process.env.RESEND_API_KEY;
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  try {
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
          reply_to: lead.email || undefined,
          subject,
          text: `${lines}\n\nSubmitted via soldeasier.com`,
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
        replyTo: lead.email || undefined,
        subject,
        text: `${lines}\n\nSubmitted via soldeasier.com`,
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
          ...lead,
          source: "soldeasier.com",
        }),
      });
      if (!res.ok) throw new Error(`formsubmit ${res.status}`);
    }
  } catch (err) {
    console.error("lead email failed:", err);
    return NextResponse.json({ error: "email failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
