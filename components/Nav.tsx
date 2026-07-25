"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const dark = !scrolled && pathname === "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        dark && !open
          ? "bg-transparent py-4"
          : "bg-ink-950/95 py-2.5 shadow-lg shadow-ink-950/20 backdrop-blur"
      }`}
    >
      <div className="wrap flex items-center justify-between">
        <Link href="/" className="group flex items-baseline gap-0.5">
          <span className="font-display text-2xl font-semibold tracking-tight text-cream-50">
            Sold<span className="text-brass-400">Easier</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition hover:text-brass-300 ${
                pathname === l.href ? "text-brass-300" : "text-cream-100"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 text-sm text-cream-100 transition hover:text-brass-300"
          >
            <Phone className="h-3.5 w-3.5" />
            {SITE.phone}
          </a>
          <Link href="/sell" className="btn-gold !px-5 !py-2.5">
            Sell Your Home
          </Link>
        </nav>

        <button
          className="text-cream-50 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-800 bg-ink-950/98 px-5 pb-6 pt-3 md:hidden">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-3 text-base text-cream-100"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 py-3 text-base text-cream-100"
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <Link href="/sell" className="btn-gold mt-3 w-full">
            Sell Your Home
          </Link>
        </div>
      )}
    </header>
  );
}
