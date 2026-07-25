import Image from "next/image";
import { Phone } from "lucide-react";
import QuickForm from "@/components/QuickForm";
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
        <QuickForm variant="dark" layout="row" className="mt-10 max-w-3xl" />
        <p className="mt-5 flex flex-wrap items-center gap-x-2 text-sm text-cream-100/60">
          There is never any obligation, and if you would rather talk first,
          call{" "}
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-1.5 font-semibold text-brass-300"
          >
            <Phone className="h-3.5 w-3.5" /> {SITE.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
