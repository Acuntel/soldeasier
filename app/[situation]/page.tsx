import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import QuickForm from "@/components/QuickForm";
import { SITUATIONS, getSituation } from "@/lib/situations";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return SITUATIONS.map((s) => ({ situation: s.slug }));
}

export const dynamicParams = false;

export function generateMetadata({
  params,
}: {
  params: { situation: string };
}): Metadata {
  const s = getSituation(params.situation);
  if (!s) return {};
  return {
    title: { absolute: `${s.title} | SoldEasier` },
    description: s.metaDescription,
    alternates: { canonical: `/${s.slug}` },
    openGraph: { title: s.title, description: s.metaDescription },
  };
}

export default function SituationPage({
  params,
}: {
  params: { situation: string };
}) {
  const s = getSituation(params.situation);
  if (!s) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(s.faqs),
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: s.nav, href: `/${s.slug}` },
            ]),
          ]),
        }}
      />
      <article>
        <header className="bg-ink-950 pb-16 pt-36 text-cream-50">
          <div className="wrap">
            <p className="eyebrow mb-4 !text-brass-300">
              {s.nav} · Chicagoland
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              {s.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-100/80">
              {s.intro}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/sell" className="btn-gold">
                Get my cash offer
              </Link>
              <a href={SITE.phoneHref} className="btn-ghost text-cream-50">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </div>
        </header>

        <div className="wrap grid gap-12 py-16 sm:py-20 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            {s.body.map((b) => (
              <section key={b.heading}>
                <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
                  {b.heading}
                </h2>
                <p className="mt-4 leading-relaxed text-ink-700">{b.text}</p>
              </section>
            ))}

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
                Common questions
              </h2>
              <div className="mt-6 space-y-6">
                {s.faqs.map((f) => (
                  <div key={f.q}>
                    <h3 className="font-semibold text-ink-950">{f.q}</h3>
                    <p className="mt-2 leading-relaxed text-ink-700">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-cream-200 bg-cream-100 p-7">
              <h3 className="font-display text-xl font-semibold text-ink-950">
                You talk directly with the actual buyers
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">
                There is no call center at SoldEasier. Brady and Vince
                personally handle every Chicagoland home we buy, and REAL Law
                Group, P.C. manages each closing.
              </p>
              <QuickForm className="mt-5" />
              <a
                href={SITE.phoneHref}
                className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-brass-600"
              >
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
            <div className="mt-6 rounded-2xl border border-cream-200 p-7">
              <p className="eyebrow mb-3">Other situations</p>
              <ul className="space-y-2 text-sm">
                {SITUATIONS.filter((x) => x.slug !== s.slug).map((x) => (
                  <li key={x.slug}>
                    <Link
                      href={`/${x.slug}`}
                      className="text-ink-800 transition hover:text-brass-600"
                    >
                      {x.nav} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
