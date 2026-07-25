"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { gaEvent } from "@/lib/gtag";
import { SITE } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const SITUATIONS = [
  "Just exploring my options",
  "Facing foreclosure / behind on payments",
  "Inherited a property / probate",
  "Divorce or separation",
  "Tired landlord / rental property",
  "Home needs major repairs",
  "Relocating or downsizing",
];

const CONDITIONS = [
  "Move-in ready",
  "Livable but dated",
  "Needs some work",
  "Needs major work",
  "Not livable right now",
];

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const params = useSearchParams();
  const prefilled = !!(params.get("name") || params.get("address"));
  const finishedRef = useRef(false);

  // Partial-lead recovery: a visitor who arrived from a quick form gave us
  // name, phone, and address. If they leave before completing this form,
  // beacon those three fields as a clearly marked partial so the contact is
  // never lost. Fires once, and never after a successful submit.
  const name = params.get("name") ?? "";
  const phone = params.get("phone") ?? "";
  const address = params.get("address") ?? "";
  useEffect(() => {
    if (!name || !phone || !address) return;
    let sent = false;
    function beacon() {
      if (sent || finishedRef.current || document.visibilityState !== "hidden")
        return;
      sent = true;
      navigator.sendBeacon(
        "/api/lead",
        new Blob(
          [JSON.stringify({ partial: true, name, phone, address })],
          { type: "application/json" },
        ),
      );
    }
    document.addEventListener("visibilitychange", beacon);
    window.addEventListener("pagehide", beacon);
    return () => {
      document.removeEventListener("visibilitychange", beacon);
      window.removeEventListener("pagehide", beacon);
    };
  }, [name, phone, address]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(await res.text());
      finishedRef.current = true;
      gaEvent("generate_lead", { form: "full" });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-brass-400 bg-white p-10 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-brass-500" />
        <h3 className="mt-4 font-display text-2xl font-semibold text-ink-950">
          We received your details and we are on it
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-ink-700">
          We will reach out the same business day. If you would like to talk
          sooner, call us right now at{" "}
          <a href={SITE.phoneHref} className="font-semibold text-brass-600">
            {SITE.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      id="offer"
      onSubmit={onSubmit}
      className="rounded-2xl border border-cream-200 bg-white p-6 shadow-xl shadow-ink-950/5 sm:p-8"
    >
      {prefilled && (
        <p className="mb-5 rounded-lg bg-cream-100 px-4 py-3 text-sm text-ink-700">
          We carried over your first three answers, and a few more details are
          all we need to prepare your offer.
        </p>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Your name"
          defaultValue={params.get("name") ?? ""}
          className="field"
        />
        <input
          name="phone"
          required
          type="tel"
          placeholder="Phone"
          defaultValue={params.get("phone") ?? ""}
          className="field"
        />
        <input
          name="email"
          type="email"
          placeholder="Email (optional)"
          className="field sm:col-span-2"
        />
        <input
          name="address"
          required
          placeholder="Property address"
          defaultValue={params.get("address") ?? ""}
          className="field sm:col-span-2"
        />
        <input name="city" required placeholder="City" className="field" />
        <input name="zip" placeholder="ZIP" className="field" />
        <select
          name="situation"
          required
          className="field sm:col-span-2"
          defaultValue=""
        >
          <option value="" disabled>
            What best describes your situation?
          </option>
          {SITUATIONS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <select
          name="condition"
          required
          className="field sm:col-span-2"
          defaultValue=""
        >
          <option value="" disabled>
            What condition is the home in?
          </option>
          {CONDITIONS.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <select
          name="timeline"
          required
          className="field sm:col-span-2"
          defaultValue=""
        >
          <option value="" disabled>
            How soon do you want to sell?
          </option>
          <option>As soon as possible</option>
          <option>Within 30 days</option>
          <option>1–3 months</option>
          <option>Just getting a number</option>
        </select>
        <textarea
          name="notes"
          rows={3}
          placeholder="Anything we should know? (tenants, liens, repairs…)"
          className="field sm:col-span-2"
        />
        {/* honeypot */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-gold mt-6 w-full disabled:opacity-60"
      >
        {status === "sending" ? (
          <LoaderCircle className="h-4 w-4 animate-spin" />
        ) : (
          <>
            Send me my offer <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-600">
          Something went wrong on our end, so please call us directly at{" "}
          {SITE.phone}.
        </p>
      )}
      <p className="mt-4 text-center text-xs leading-relaxed text-ink-500">
        There is no obligation, no fee, and no spam, and we only use this
        information to prepare your offer.
      </p>
    </form>
  );
}
