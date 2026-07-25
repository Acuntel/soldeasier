import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink-950 text-cream-50">
      <Image
        src="/img/hero.jpg"
        alt="A beautiful Chicagoland home at dusk"
        fill
        priority
        className="object-cover opacity-45"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/30" />

      <div className="wrap relative pb-24 pt-40">
        <p className="eyebrow mb-5 !text-brass-300">
          Attorney-backed home buying · Chicagoland
        </p>
        <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.08] sm:text-6xl md:text-7xl">
          Sell your home.
          <br />
          <span className="text-brass-300">Easier.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-100/85">
          A fair cash offer from local buyers you can actually reach — with a
          real-estate law firm managing every detail of your closing, included.
          No listings. No repairs. No fees. Close on the date you choose.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link href="/sell" className="btn-gold">
            Get my cash offer
          </Link>
          <a href={SITE.phoneHref} className="btn-ghost text-cream-50">
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
        </div>
        <p className="mt-6 text-sm text-cream-100/60">
          No obligation. No pressure. Just a real number.
        </p>
      </div>
    </section>
  );
}
