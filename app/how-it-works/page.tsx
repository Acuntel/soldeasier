import type { Metadata } from "next";
import QuickForm from "@/components/QuickForm";
import Reveal from "@/components/Reveal";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "How It Works, From Cash Offer to Attorney-Managed Closing",
  description:
    "How selling your Chicagoland house to SoldEasier works: one conversation, a transparent cash offer within 48 hours, and an attorney-managed closing on the date you choose.",
  alternates: { canonical: "/how-it-works" },
};

const STAGES = [
  {
    title: "The first conversation",
    paras: [
      "Fill out the two-minute form or call us directly, and tell us about the address, the general condition, and your timeline. There are no documents to gather and there are no photos required of you.",
      "Your information goes straight to Brady and Vince rather than into a lead resale marketplace, and one of us will call you back the same business day.",
    ],
  },
  {
    title: "The walkthrough and your written offer",
    paras: [
      "We visit the property once, usually within forty-eight hours, and you should not clean, fix, or stage anything before we arrive. We have seen every condition imaginable and we price the work honestly.",
      "You then receive a written cash offer with the math behind it, meaning what the home would be worth fully updated, what the work truly costs, and our margin. Compare it against a listing or against any other offer, because there is zero obligation and we never pressure a signature.",
    ],
  },
  {
    title: "Closing day on your schedule",
    paras: [
      "Once you accept, REAL Law Group, P.C. prepares the entire closing, including title, payoffs, liens, municipal requirements, and any probate or foreclosure complications along the way. You will always know exactly what happens next.",
      "You can close in as little as two weeks or pick a date months away if you need the time. Because we pay cash, the sale never falls through at the last minute, and you walk away with your proceeds on the day you chose.",
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
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.15] sm:text-5xl">
            From the first call to cash in{" "}
            <span className="italic text-brass-300">hand</span>
          </h1>
          <div className="mt-7 h-px w-24 bg-brass-400/60" />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="wrap space-y-14">
          {STAGES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="grid gap-6 border-b border-cream-200 pb-14 last:border-0 lg:grid-cols-3">
                <div>
                  <div className="mb-4 h-px w-16 bg-brass-500/70" />
                  <h2 className="font-display text-3xl font-semibold leading-snug text-ink-950">
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
            <div className="mx-auto max-w-2xl rounded-2xl border border-cream-200 bg-cream-100 p-8 text-center">
              <h2 className="font-display text-2xl font-semibold text-ink-950">
                Start the conversation right here
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-700">
                Three fields is all it takes, and one of us will call you back
                the same business day.
              </p>
              <QuickForm className="mt-6 text-left" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
