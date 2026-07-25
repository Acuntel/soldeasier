import type { Metadata } from "next";
import Link from "next/link";
import { FAQS } from "@/lib/faqs";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ — Selling Your House for Cash in Chicagoland",
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
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Everything sellers ask us — answered straight.
          </h1>
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
          <div className="pt-4 text-center">
            <p className="text-ink-700">Still have a question?</p>
            <Link href="/sell" className="btn-gold mt-4">
              Ask us while getting your offer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
