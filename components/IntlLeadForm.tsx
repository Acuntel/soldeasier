"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { gaEvent } from "@/lib/gtag";
import { SITE } from "@/lib/site";

export type IntlFormStrings = {
  language: "Spanish" | "Polish";
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  situationLabel: string;
  situations: string[];
  conditionLabel: string;
  conditions: string[];
  timelineLabel: string;
  timelines: string[];
  notes: string;
  submit: string;
  successTitle: string;
  successBody: string;
  error: string;
  disclaimer: string;
};

export default function IntlLeadForm({ t }: { t: IntlFormStrings }) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, language: t.language }),
      });
      if (!res.ok) throw new Error(await res.text());
      gaEvent("generate_lead", { form: `full_${t.language.toLowerCase()}` });
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
          {t.successTitle}
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-ink-700">
          {t.successBody}{" "}
          <a href={SITE.phoneHref} className="font-semibold text-brass-600">
            {SITE.phone}
          </a>
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
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder={t.name} className="field" />
        <input
          name="phone"
          required
          type="tel"
          placeholder={t.phone}
          className="field"
        />
        <input
          name="email"
          type="email"
          placeholder={t.email}
          className="field sm:col-span-2"
        />
        <input
          name="address"
          required
          placeholder={t.address}
          className="field sm:col-span-2"
        />
        <input name="city" required placeholder={t.city} className="field" />
        <input name="zip" placeholder={t.zip} className="field" />
        <select
          name="situation"
          required
          className="field sm:col-span-2"
          defaultValue=""
        >
          <option value="" disabled>
            {t.situationLabel}
          </option>
          {t.situations.map((s) => (
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
            {t.conditionLabel}
          </option>
          {t.conditions.map((c) => (
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
            {t.timelineLabel}
          </option>
          {t.timelines.map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
        <textarea
          name="notes"
          rows={3}
          placeholder={t.notes}
          className="field sm:col-span-2"
        />
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
            {t.submit} <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-600">
          {t.error} {SITE.phone}
        </p>
      )}
      <p className="mt-4 text-center text-xs leading-relaxed text-ink-500">
        {t.disclaimer}
      </p>
    </form>
  );
}
