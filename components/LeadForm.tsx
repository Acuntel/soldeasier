"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
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

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");

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
          Got it — we&apos;re on it.
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-ink-700">
          We&apos;ll reach out the same business day. Want to talk sooner? Call
          us right now at{" "}
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
      onSubmit={onSubmit}
      className="rounded-2xl border border-cream-200 bg-white p-6 shadow-xl shadow-ink-950/5 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" className="field" />
        <input
          name="phone"
          required
          type="tel"
          placeholder="Phone"
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
          className="field sm:col-span-2"
        />
        <input name="city" required placeholder="City" className="field" />
        <input name="zip" placeholder="ZIP" className="field" />
        <select name="situation" className="field sm:col-span-2" defaultValue="">
          <option value="" disabled>
            What best describes your situation?
          </option>
          {SITUATIONS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <select name="timeline" className="field sm:col-span-2" defaultValue="">
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
          placeholder="Anything we should know? (condition, tenants, liens…)"
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
            Get my cash offer <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-600">
          Something went wrong — please call us at {SITE.phone} instead.
        </p>
      )}
      <p className="mt-4 text-center text-xs leading-relaxed text-ink-500">
        No obligation, no fees, no spam. We&apos;ll only use this to prepare
        your offer.
      </p>
    </form>
  );
}
