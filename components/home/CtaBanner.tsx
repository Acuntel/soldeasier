import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-cream-50 sm:py-32">
      <Image
        src="/img/porch.jpg"
        alt=""
        aria-hidden
        fill
        className="object-cover opacity-25"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/40 to-ink-950/80" />
      <div className="wrap relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Hold a real cash offer this{" "}
            <span className="italic text-brass-300">week</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-cream-100/80">
            Tell us about your home today and we will call you back the same
            business day, walk the property within forty-eight hours, and put a
            real number in your hands.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/sell" className="btn-gold">
              Get my cash offer
            </Link>
            <a href={SITE.phoneHref} className="btn-ghost text-cream-50">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
