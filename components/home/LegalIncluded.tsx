import Image from "next/image";
import Reveal from "@/components/Reveal";

const COVERED = [
  "Probate & inherited property",
  "Foreclosure timelines & short sales",
  "Deed-in-lieu negotiations",
  "Liens & building code violations",
  "Land trusts & title issues",
  "Estate coordination with heirs",
];

export default function LegalIncluded() {
  return (
    <section className="py-20 sm:py-28">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <p className="eyebrow mb-4">The hard parts are handled</p>
          <h2 className="font-display text-4xl font-semibold leading-tight text-ink-950 sm:text-5xl">
            The complicated work comes{" "}
            <span className="italic text-brass-600">included</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">
            Most buyers hand you a contract and wish you luck with the
            paperwork. SoldEasier prepares and manages the entire closing for
            you, and we have deep experience with the distressed and
            complicated situations that make other buyers walk away.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {COVERED.map((t) => (
              <li
                key={t}
                className="rounded-lg border border-cream-200 bg-white px-4 py-3 text-sm font-medium text-ink-800"
              >
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-ink-500">
            If you would like anyone you trust to review the paperwork with
            you, we are glad to coordinate with them directly.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/img/kitchen.jpg"
              alt="An ordinary kitchen in an everyday Chicagoland home"
              fill
              className="object-cover"
              sizes="(min-width:1024px) 36rem, 100vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
