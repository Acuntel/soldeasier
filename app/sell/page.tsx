import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { SITE } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sell Your Home Direct and Get an Offer in 48 Hours",
  description:
    "Tell us about your Chicagoland house and receive a fair, no-obligation immediate offer within 48 hours. Sold as-is with no fees and a fully managed closing on your date.",
  alternates: { canonical: "/sell" },
};

const EXPECT = [
  {
    t: "A same-day callback from a real person",
    b: "Brady or Vince personally returns every inquiry the same business day, without a script and without a sales pitch.",
  },
  {
    t: "One easy walkthrough of the property",
    b: "We visit once, usually within forty-eight hours, and we never ask you to clean, repair, or stage anything.",
  },
  {
    t: "A transparent offer in writing",
    b: "Your offer arrives in writing with the math shown, no financing contingencies, and no hidden fees, and you can take all the time you need to decide.",
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
              A written offer within{" "}
              <span className="italic text-brass-300">forty-eight hours</span>
            </h1>
            <div className="mt-6 h-px w-24 bg-brass-400/60" />
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cream-100/80">
              Every submission comes directly to the two of us rather than into
              a lead queue, and we treat it that way. If you would rather talk
              it through first, call{" "}
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-1.5 font-semibold text-brass-300"
              >
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </p>
            <div className="mt-10 space-y-7">
              {EXPECT.map((e) => (
                <div key={e.t} className="border-l border-brass-400/40 pl-5">
                  <h3 className="font-semibold">{e.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-cream-100/70">
                    {e.b}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-ink-900">
            <Suspense
              fallback={
                <div className="h-96 rounded-2xl border border-cream-200 bg-white" />
              }
            >
              <LeadForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
