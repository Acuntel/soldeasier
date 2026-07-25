import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { POSTS, formatDate } from "@/lib/blog";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Insights on Selling a House in Chicagoland",
  description:
    "Straight answers on foreclosure timelines, probate sales, as-is offers, and the real math of selling a Chicagoland house directly, written by the buyers themselves.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const [featured, ...rest] = POSTS;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Insights", href: "/blog" },
            ]),
          ),
        }}
      />
      <section className="bg-ink-950 pb-16 pt-36 text-cream-50">
        <div className="wrap">
          <p className="eyebrow mb-4 !text-brass-300">Insights</p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.15] sm:text-5xl">
            Straight answers about selling a{" "}
            <span className="italic text-brass-300">home</span>
          </h1>
          <div className="mt-7 h-px w-24 bg-brass-400/60" />
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream-100/80">
            Everything here is written by the two people who actually buy the
            houses, covering the timelines, the paperwork, and the honest math
            most buyers would rather keep vague.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="wrap">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group block rounded-2xl border border-cream-200 bg-white p-8 transition hover:border-brass-400 hover:shadow-lg hover:shadow-ink-950/5 sm:p-10"
            >
              <p className="eyebrow mb-3">
                {featured.category} · {formatDate(featured.date)}
              </p>
              <h2 className="max-w-3xl font-display text-3xl font-semibold leading-snug text-ink-950 group-hover:text-brass-600 sm:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-ink-700">
                {featured.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brass-600">
                Read the article{" "}
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.07}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-cream-200 bg-white p-7 transition hover:border-brass-400 hover:shadow-lg hover:shadow-ink-950/5"
                >
                  <p className="eyebrow mb-3 !text-[0.62rem]">
                    {p.category} · {formatDate(p.date)}
                  </p>
                  <h2 className="font-display text-xl font-semibold leading-snug text-ink-950 group-hover:text-brass-600">
                    {p.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                    {p.excerpt}
                  </p>
                  <span className="mt-4 text-xs font-medium text-ink-500">
                    {p.minutes} minute read
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
