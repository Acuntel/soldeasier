"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { SITE } from "@/lib/site";

type Props = {
  variant?: "dark" | "light";
  layout?: "row" | "stack";
  className?: string;
};

type Status = "idle" | "sending" | "sent" | "error";

export default function QuickForm({
  variant = "light",
  layout = "stack",
  className = "",
}: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const dark = variant === "dark";

  const field = dark
    ? "w-full rounded-lg border border-cream-200/25 bg-ink-800/70 px-4 py-3 text-sm text-cream-50 placeholder:text-cream-100/50 focus:border-brass-400 focus:outline-none focus:ring-1 focus:ring-brass-400"
    : "field";

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
      <div
        className={`flex items-start gap-3 rounded-xl border p-5 ${
          dark
            ? "border-brass-400/50 bg-ink-800/70 text-cream-50"
            : "border-brass-400 bg-white text-ink-900"
        } ${className}`}
      >
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brass-400" />
        <p className="text-sm leading-relaxed">
          We received your details and one of us will call you back the same
          business day. If you would like to talk sooner, call us at{" "}
          <a
            href={SITE.phoneHref}
            className="font-semibold text-brass-400"
          >
            {SITE.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={className}>
      <div
        className={
          layout === "row"
            ? "grid gap-3 sm:grid-cols-[1fr_1fr_1.4fr_auto]"
            : "flex flex-col gap-3"
        }
      >
        <input name="name" required placeholder="Your name" className={field} />
        <input
          name="phone"
          required
          type="tel"
          placeholder="Phone"
          className={field}
        />
        <input
          name="address"
          required
          placeholder="Property address"
          className={field}
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
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-gold !px-6 disabled:opacity-60"
        >
          {status === "sending" ? (
            <LoaderCircle className="h-4 w-4 animate-spin" />
          ) : (
            <>
              Get my cash offer <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
      {status === "error" && (
        <p
          className={`mt-3 text-sm ${dark ? "text-red-300" : "text-red-600"}`}
        >
          Something went wrong on our end, so please call us directly at{" "}
          {SITE.phone}.
        </p>
      )}
    </form>
  );
}
