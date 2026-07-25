import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "How It Works — Cash Offer to Closing in 3 Steps",
  description:
    "How selling your Chicagoland house to SoldEasier works: tell us about the home, get a transparent cash offer in 24–48 hours, close on your date with an attorney-managed closing.",
  alternates: { canonical: "/how-it-works" },
};

const STEPS = [
  {
    n: "01",
    title: "Tell us about the home",
    paras: [
      "Fill out the two-minute form or call us directly. We'll ask about the address, the general condition, and your timeline — that's it. No documents to gather, no photos required.",
      "Your information goes straight to Brady and Vince, not into a lead-resale marketplace. We'll call you back the same business day.",
    ],
  },
  {
    n: "02",
    title: "Get a real number",
    paras: [
      "We'll visit the property once, usually within 24–48 hours. Don't clean, don't fix, don't stage — we've seen everything and we price the work honestly.",
      "You get a written cash offer with the math behind it: what the home would be worth updated, what it costs to get there, and our margin. Compare it against a listing, another buyer, anything. There's zero obligation and we never pressure a signature.",
    ],
  },
  {
    n: "03",
    title: "Close on your timeline",
    paras: [
      "Once you accept, REAL Law Group, P.C. prepares the entire closing — title, payoffs, liens, municipal requirements, probate or foreclosure complications included. You'll always know exactly what happens next.",
      "Close in as little as two weeks, or pick a date months out if you need time. At closing you get your proceeds — and unlike financed buyers, cash never falls through at the last minute.",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "How It Works", href: "/how-it-works" },
            ]),
          ),
        }}
      />
      <section className="bg-ink-950 pb-16 pt-36 text-cream-50">
        <div className="wrap">
          <p className="eyebrow mb-4 !text-brass-300">How it works</p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            From first call to cash in hand — without the circus.
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="wrap space-y-14">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="grid gap-6 border-b border-cream-200 pb-14 last:border-0 lg:grid-cols-3">
                <div>
                  <p className="font-display text-6xl font-semibold text-brass-400/50">
                    {s.n}
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-semibold text-ink-950">
                    {s.title}
                  </h2>
                </div>
                <div className="space-y-4 leading-relaxed text-ink-700 lg:col-span-2">
                  {s.paras.map((p) => (
                    <p key={p.slice(0, 20)}>{p}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <div className="text-center">
              <Link href="/sell" className="btn-gold">
                Start with step one
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
