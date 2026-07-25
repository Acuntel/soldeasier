import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import QuickForm from "@/components/QuickForm";
import { POSTS, formatDate, getPost } from "@/lib/blog";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = getPost(params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { title: p.title, description: p.excerpt, type: "article" },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            schema,
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Insights", href: "/blog" },
              { name: post.title, href: `/blog/${post.slug}` },
            ]),
          ]),
        }}
      />
      <article>
        <header className="bg-ink-950 pb-14 pt-36 text-cream-50">
          <div className="wrap">
            <p className="eyebrow mb-4 !text-brass-300">
              {post.category} · {formatDate(post.date)} · {post.minutes} minute
              read
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.15] sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-7 h-px w-24 bg-brass-400/60" />
          </div>
        </header>

        <div className="wrap grid gap-12 py-14 sm:py-16 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <p className="text-lg leading-relaxed text-ink-700">
              {post.excerpt}
            </p>
            {post.sections.map((s) => (
              <section key={s.h}>
                <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
                  {s.h}
                </h2>
                <p className="mt-4 leading-relaxed text-ink-700">{s.p}</p>
              </section>
            ))}
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-cream-200 bg-cream-100 p-7">
              <h3 className="font-display text-xl font-semibold text-ink-950">
                Ready for a real number on your home?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">
                A written cash offer arrives within forty-eight hours, and the
                closing is managed by REAL Law Group, P.C. at no cost to you.
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
              <p className="eyebrow mb-3">Keep reading</p>
              <ul className="space-y-3 text-sm">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="leading-snug text-ink-800 transition hover:text-brass-600"
                    >
                      {p.title}
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
