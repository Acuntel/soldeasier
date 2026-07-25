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
        <p className="eyebrow mb-6 !text-brass-300">
          Attorney-backed home buying across Chicagoland
        </p>
        <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.12] sm:text-5xl md:text-6xl">
          The easier way to sell your{" "}
          <span className="italic text-brass-300">home</span>
        </h1>
        <div className="mt-7 h-px w-24 bg-brass-400/60" />
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream-100/85">
          We make fair cash offers on Chicagoland homes, and a real estate law
          firm manages every detail of your closing at no cost to you. You will
          never pay a fee, you will never make a repair, and you choose the
          closing date that fits your life.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/sell" className="btn-gold">
            Get my cash offer
          </Link>
          <a href={SITE.phoneHref} className="btn-ghost text-cream-50">
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
        </div>
        <p className="mt-6 max-w-xl text-sm text-cream-100/60">
          There is never any obligation, and the number we quote is the number
          you receive at closing.
        </p>
      </div>
    </section>
  );
}
