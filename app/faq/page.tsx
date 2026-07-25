import type { Metadata } from "next";
import QuickForm from "@/components/QuickForm";
import { FAQS } from "@/lib/faqs";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ on Selling Your House for Cash in Chicagoland",
  description:
    "Every question sellers ask us: fees, how the cash offer is calculated, as-is sales, foreclosure and probate timelines, closing speed, and who you'll actually talk to.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema([...FAQS]),
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "FAQ", href: "/faq" },
            ]),
          ]),
        }}
      />
      <section className="bg-ink-950 pb-16 pt-36 text-cream-50">
        <div className="wrap">
          <p className="eyebrow mb-4 !text-brass-300">Questions, answered</p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.15] sm:text-5xl">
            Everything sellers ask us, answered{" "}
            <span className="italic text-brass-300">straight</span>
          </h1>
          <div className="mt-7 h-px w-24 bg-brass-400/60" />
        </div>
      </section>
      <section className="py-16 sm:py-24">
        <div className="wrap max-w-3xl space-y-10">
          {FAQS.map((f) => (
            <div key={f.q} className="border-b border-cream-200 pb-10 last:border-0">
              <h2 className="text-xl font-semibold text-ink-950">{f.q}</h2>
              <p className="mt-3 leading-relaxed text-ink-700">{f.a}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-cream-200 bg-cream-100 p-8">
            <h2 className="font-display text-2xl font-semibold text-ink-950">
              Ask us anything while getting your offer
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-700">
              Leave your details here and we will answer every question you
              have on the same call.
            </p>
            <QuickForm className="mt-6" />
          </div>
        </div>
      </section>
    </>
  );
}
