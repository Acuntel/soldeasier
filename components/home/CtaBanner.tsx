import Image from "next/image";
import { Phone } from "lucide-react";
import QuickForm from "@/components/QuickForm";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section
      id="offer-form"
      className="relative overflow-hidden bg-ink-950 py-24 text-cream-50 sm:py-32"
    >
      <Image
        src="/img/porch.jpg"
        alt=""
        aria-hidden
        fill
        className="object-cover opacity-25"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/40 to-ink-950/80" />
      <div className="wrap relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Hold a real cash offer this{" "}
              <span className="italic text-brass-300">week</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-cream-100/80">
              Tell us about your home right here and we will call you back the
              same business day, walk the property within forty-eight hours,
              and put a real number in your hands.
            </p>
            <QuickForm
              variant="dark"
              layout="row"
              className="mx-auto mt-9 text-left"
            />
            <p className="mt-5 text-sm text-cream-100/60">
              You can also reach us directly at{" "}
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-1.5 font-semibold text-brass-300"
              >
                <Phone className="h-3.5 w-3.5" /> {SITE.phone}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
