import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Who We Are — The Attorney & The Builder Behind SoldEasier",
  description:
    "SoldEasier is Vincent Incopero — Elmhurst real-estate attorney and founder of REAL Law Group, P.C. — and Brady Schwartz. Local buyers, attorney-managed closings, straight answers.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Who We Are", href: "/about" },
            ]),
          ),
        }}
      />
      <section className="bg-ink-950 pb-16 pt-36 text-cream-50">
        <div className="wrap">
          <p className="eyebrow mb-4 !text-brass-300">Who we are</p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Two people. One promise:
            <br />
            the easiest sale you&apos;ve ever made.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-100/80">
            SoldEasier exists because selling a house in a hard season
            shouldn&apos;t require a call center, a wholesaler, and a leap of
            faith. We&apos;re a deliberately small, attorney-backed team based
            in Elmhurst — and we answer our own phone.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="wrap space-y-16">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <p className="eyebrow mb-2">The attorney</p>
                <h2 className="font-display text-3xl font-semibold text-ink-950">
                  Vincent Incopero
                </h2>
                <p className="mt-1 text-sm font-medium text-brass-600">
                  Co-Founder · Managing Partner, REAL Law Group, P.C.
                </p>
              </div>
              <div className="space-y-4 leading-relaxed text-ink-700 lg:col-span-2">
                <p>
                  Vince has spent his career on the legal side of the closing
                  table. Before founding REAL Law Group, P.C. in Elmhurst, he
                  worked at Chicago&apos;s most recognized title company and
                  practiced at the city&apos;s largest plaintiff&apos;s firm.
                  His practice concentrates on real-estate sales and purchases,
                  business organizations, and estate planning — and his team
                  has an unusual depth in distressed transactions: short
                  sales, deed-in-lieus, REO sales, and probate property.
                </p>
                <p>
                  With degrees in finance and economics before law school, Vince
                  reads a deal the way an underwriter does — which is why every
                  SoldEasier offer comes with the math shown, and every closing
                  is handled by a team that has seen every complication a house
                  can hide.
                </p>
                <p className="text-sm text-ink-500">
                  J.D., The John Marshall Law School · B.S. Finance &
                  Economics, Elmhurst College · Illinois bar; U.S. District
                  Court, N.D. Illinois · Illinois Real Estate Lawyers
                  Association
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <p className="eyebrow mb-2">The builder</p>
                <h2 className="font-display text-3xl font-semibold text-ink-950">
                  Brady Schwartz
                </h2>
                <p className="mt-1 text-sm font-medium text-brass-600">
                  Co-Founder · Acquisitions
                </p>
              </div>
              <div className="space-y-4 leading-relaxed text-ink-700 lg:col-span-2">
                <p>
                  Brady runs acquisitions and the technology behind SoldEasier
                  — the systems that let a two-person team respond faster than
                  companies fifty times the size. When you submit your address,
                  it lands directly with him, and he&apos;s your point of
                  contact from the first call through closing day.
                </p>
                <p>
                  His job is simple: make sure the offer is real, the timeline
                  holds, and nobody ever has to chase us for an answer.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl bg-ink-950 p-8 text-cream-50 sm:p-12">
              <h2 className="font-display text-3xl font-semibold">
                Why &ldquo;smaller&rdquo; is the whole point
              </h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-cream-100/80">
                The big national buyers process addresses. We know the blocks.
                We live and work here — Elmhurst, the western suburbs, and
                across Chicagoland — and our reputation rides on every single
                closing. That&apos;s why there are no re-trades, no assignment
                games, and no pressure tactics. Just a fair number, a firm
                handshake, and a law firm making sure it all lands cleanly.
              </p>
              <Link href="/sell" className="btn-gold mt-8">
                Get my cash offer
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
