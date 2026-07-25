import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import QuickForm from "@/components/QuickForm";
import { TOWNS, getTown } from "@/lib/towns";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return TOWNS.map((t) => ({ town: t.slug }));
}

export const dynamicParams = false;

export function generateMetadata({
  params,
}: {
  params: { town: string };
}): Metadata {
  const t = getTown(params.town);
  if (!t) return {};
  return {
    title: {
      absolute: `Sell My House Fast in ${t.name}, IL | Cash Offer in 48 Hours | SoldEasier`,
    },
    description: `We buy houses for cash in ${t.name}, Illinois. Real ${t.name} transfer-stamp costs, village requirements handled by a law firm, no fees, and a written offer in 48 hours.`,
    alternates: { canonical: `/sell-my-house-fast/${t.slug}` },
  };
}

export default function TownPage({ params }: { params: { town: string } }) {
  const t = getTown(params.town);
  if (!t) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqSchema(t.faqs),
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: `Sell in ${t.name}`, href: `/sell-my-house-fast/${t.slug}` },
            ]),
          ]),
        }}
      />
      <article>
        <header className="bg-ink-950 pb-16 pt-36 text-cream-50">
          <div className="wrap">
            <p className="eyebrow mb-4 !text-brass-300">
              {t.name} · {t.county} County, Illinois
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.15] sm:text-5xl">
              Sell your house fast in{" "}
              <span className="italic text-brass-300">{t.name}</span>
            </h1>
            <div className="mt-7 h-px w-24 bg-brass-400/60" />
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream-100/80">
              {t.intro}
            </p>
          </div>
        </header>

        <div className="wrap grid gap-12 py-16 sm:py-20 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <section>
              <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
                What selling actually costs in {t.name}
              </h2>
              <p className="mt-4 leading-relaxed text-ink-700">
                Every Illinois sale pays a state transfer tax of $1.00 per
                $1,000 of the price and a {t.county} County tax of $0.50 per
                $1,000.{" "}
                {t.tax
                  ? `${t.name} adds its own municipal stamp of ${t.tax}, ${
                      t.taxWhoPays === "Buyer"
                        ? "and the buyer pays it under the village ordinance."
                        : "paid by the seller under the village ordinance."
                    }`
                  : `${t.name} charges no municipal transfer tax of its own, which keeps the closing costs here simpler than in many neighboring towns.`}
              </p>
              <p className="mt-4 rounded-xl border border-cream-200 bg-cream-100 p-5 leading-relaxed text-ink-800">
                {t.taxOn300k}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-500">
                Rates are set by ordinance and change occasionally. REAL Law
                Group, P.C. confirms the exact figures on your closing
                statement, so the number you see in our offer is the number
                that happens.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
                {t.name}&apos;s requirements, handled for you
              </h2>
              <p className="mt-4 leading-relaxed text-ink-700">
                Before a deed can be recorded, {t.name} requires the following
                from a seller, and any one of them can stall a traditional
                closing when it surfaces late. When you sell to us, our law
                firm runs this entire checklist as part of the purchase.
              </p>
              <ul className="mt-5 space-y-3 text-ink-800">
                {t.requirements.map((r) => (
                  <li key={r} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-500" />
                    <span className="leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
                How a cash sale works here
              </h2>
              <p className="mt-4 leading-relaxed text-ink-700">
                Tell us about the property and one of us calls you back the
                same business day. We walk the home once, usually within
                forty-eight hours, and hand you a written cash offer with the
                math shown, including every {t.name} stamp and fee, so the
                number you compare is your true net. Accept whenever you are
                ready, and REAL Law Group, P.C. prepares the entire closing on
                the date you choose.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
                Common questions in {t.name}
              </h2>
              <div className="mt-6 space-y-6">
                {t.faqs.map((f) => (
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
                Get your {t.name} cash offer
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">
                Three fields now, a real number within forty-eight hours, and
                every village requirement handled by our law firm.
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
              <p className="eyebrow mb-3">Nearby towns</p>
              <ul className="space-y-2 text-sm">
                {TOWNS.filter((x) => x.slug !== t.slug)
                  .slice(0, 6)
                  .map((x) => (
                    <li key={x.slug}>
                      <Link
                        href={`/sell-my-house-fast/${x.slug}`}
                        className="text-ink-800 transition hover:text-brass-600"
                      >
                        Sell in {x.name} →
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
