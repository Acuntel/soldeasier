import type { Metadata } from "next";
import { Phone } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { SITE } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sell Your Home for Cash — Get an Offer in 24–48 Hours",
  description:
    "Tell us about your Chicagoland house and get a fair, no-obligation cash offer within 24–48 hours. As-is, no fees, attorney-managed closing on your date.",
  alternates: { canonical: "/sell" },
};

const EXPECT = [
  {
    t: "Same-day callback",
    b: "A real person — Brady or Vince — calls you back the same business day. No call center, no script.",
  },
  {
    t: "Walkthrough in 24–48 hours",
    b: "One quick visit. We never ask you to clean, repair, or stage anything.",
  },
  {
    t: "A real offer, in writing",
    b: "A transparent cash number with no financing contingencies and no hidden fees. Take all the time you need.",
  },
];

export default function SellPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Sell Your Home", href: "/sell" },
            ]),
          ),
        }}
      />
      <section className="bg-ink-950 pb-24 pt-36 text-cream-50">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-4 !text-brass-300">Sell your home</p>
            <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Two minutes now.
              <br />A cash offer within 48 hours.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-cream-100/80">
              Every submission goes directly to the two of us — not a lead
              queue. Prefer to talk?{" "}
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-1.5 font-semibold text-brass-300"
              >
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </p>
            <div className="mt-10 space-y-6">
              {EXPECT.map((e, i) => (
                <div key={e.t} className="flex gap-4">
                  <p className="font-display text-2xl font-semibold text-brass-400/70">
                    {i + 1}
                  </p>
                  <div>
                    <h3 className="font-semibold">{e.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-cream-100/70">
                      {e.b}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-ink-900">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
