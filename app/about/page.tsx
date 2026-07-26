import type { Metadata } from "next";
import QuickForm from "@/components/QuickForm";
import Reveal from "@/components/Reveal";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Who We Are, the Two People Behind SoldEasier",
  description:
    "SoldEasier is Vincent Incopero and Brady Schwartz, two local west-suburban buyers who make immediate offers, manage every closing themselves, and give straight answers.",
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
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.15] sm:text-5xl">
            The two people behind the easiest sale you will ever{" "}
            <span className="italic text-brass-300">make</span>
          </h1>
          <div className="mt-7 h-px w-24 bg-brass-400/60" />
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream-100/80">
            SoldEasier exists because selling a house during a hard season
            should never require a call center, a wholesaler, and a leap of
            faith. We are a deliberately small local team based in Berkeley,
            and we answer our own phone.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="wrap space-y-16">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <p className="eyebrow mb-2">The closer</p>
                <h2 className="font-display text-3xl font-semibold text-ink-950">
                  Vincent Incopero
                </h2>
                <p className="mt-1 text-sm font-medium text-brass-600">
                  Co-Founder · Closings & Strategy
                </p>
              </div>
              <div className="space-y-4 leading-relaxed text-ink-700 lg:col-span-2">
                <p>
                  Vince has spent his entire career at the closing table. He
                  started at Chicago&apos;s most recognized title company, and
                  in the years since he has guided hundreds of sales and
                  purchases across the western suburbs. His work carries
                  unusual depth in complicated transactions, including short
                  sales, deed-in-lieu agreements, bank-owned sales, and
                  probate property.
                </p>
                <p>
                  Vince studied finance and economics, so he reads a deal the
                  way an underwriter does. That background is why every
                  SoldEasier offer arrives with the math shown, and why every
                  closing is run by people who have seen every complication a
                  house can hide.
                </p>
                <p className="text-sm text-ink-500">
                  B.S. Finance & Economics, Elmhurst College · Based in
                  Berkeley, Illinois
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
                  Brady runs acquisitions and the technology behind SoldEasier,
                  building the systems that let a two-person team respond
                  faster than companies fifty times our size. When you submit
                  your address it lands directly with him, and he remains your
                  point of contact from the first call through closing day.
                </p>
                <p>
                  His job description is simple to state. He makes sure the
                  offer is real, he makes sure the timeline holds, and he makes
                  sure nobody ever has to chase us for an answer.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl bg-ink-950 p-8 text-cream-50 sm:p-12">
              <h2 className="font-display text-3xl font-semibold">
                Staying small is the entire{" "}
                <span className="italic text-brass-300">point</span>
              </h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-cream-100/80">
                The big national buyers process addresses while we know the
                blocks. We live and work here in Berkeley and the western
                suburbs, and our reputation rides on every single closing. That
                is why there are no re-trades, no assignment games, and no
                pressure tactics. You get a fair number, a firm handshake, and
                a careful team making sure everything lands cleanly.
              </p>
              <p className="mt-8 text-sm text-cream-100/70">
                Tell us where the house is and we will take it from here.
              </p>
              <QuickForm variant="dark" layout="row" className="mt-4 max-w-3xl" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
