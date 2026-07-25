import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site";
import { SITUATIONS } from "@/lib/situations";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-cream-100">
      <div className="wrap grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold text-cream-50">
            Sold<span className="text-brass-400">Easier</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream-100/70">
            We are local, attorney-backed cash home buyers, and every closing
            is prepared and managed by REAL Law Group, P.C. so the hard part is
            always handled for you.
          </p>
          <p className="mt-4 text-sm text-cream-100/70">
            {SITE.address.street}
            <br />
            {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
          </p>
          <a
            href={SITE.phoneHref}
            className="mt-2 inline-block text-sm font-semibold text-brass-300"
          >
            {SITE.phone}
          </a>
        </div>

        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/sell" className="transition hover:text-brass-300">
                Sell Your Home
              </Link>
            </li>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="transition hover:text-brass-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="transition hover:text-brass-300">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">We Can Help With</p>
          <ul className="mb-8 space-y-2.5 text-sm">
            {SITUATIONS.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="transition hover:text-brass-300"
                >
                  {s.nav}
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow mb-4">Where We Buy</p>
          <p className="text-sm leading-relaxed text-cream-100/70">
            {SITE.serviceTowns.join(" · ")}, and throughout{" "}
            {SITE.serviceCounties.join(", ")} counties.
          </p>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="wrap flex flex-col gap-2 py-5 text-xs text-cream-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>
            Every closing is handled by REAL Law Group, P.C. in Elmhurst,
            Illinois, and sellers are always welcome to retain their own
            counsel.
          </p>
        </div>
      </div>
    </footer>
  );
}
