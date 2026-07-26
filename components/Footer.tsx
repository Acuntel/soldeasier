import Link from "next/link";
import QuickForm from "@/components/QuickForm";
import { NAV_LINKS, SITE } from "@/lib/site";
import { SITUATIONS } from "@/lib/situations";
import { TOWNS } from "@/lib/towns";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-cream-100">
      <div className="border-b border-ink-800">
        <div className="wrap flex flex-col gap-6 py-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <p className="font-display text-2xl font-semibold text-cream-50">
              Ready when you are
            </p>
            <p className="mt-2 text-sm leading-relaxed text-cream-100/70">
              Leave your details anywhere on this site and the same two people
              will call you back the same business day.
            </p>
          </div>
          <QuickForm variant="dark" layout="row" className="w-full lg:max-w-2xl" />
        </div>
      </div>
      <div className="wrap grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold text-cream-50">
            Sold<span className="text-brass-400">Easier</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream-100/70">
            We are local home buyers who make immediate offers, and we prepare
            and manage every closing ourselves so the hard part is always
            handled for you.
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
            <li className="pt-2">
              <Link href="/es" className="transition hover:text-brass-300">
                Español
              </Link>
              {" · "}
              <Link href="/pl" className="transition hover:text-brass-300">
                Polski
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
          <ul className="space-y-2.5 text-sm">
            {TOWNS.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/sell-my-house-fast/${t.slug}`}
                  className="transition hover:text-brass-300"
                >
                  Sell in {t.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-cream-100/70">
            We also buy throughout {SITE.serviceCounties.join(", ")} counties,
            including {SITE.serviceTowns.slice(4, 12).join(", ")}, and every
            surrounding suburb.
          </p>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="wrap flex flex-col gap-2 py-5 text-xs text-cream-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>
            SoldEasier is based in Berkeley, Illinois, and buys homes across
            the Chicagoland suburbs directly from their owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
