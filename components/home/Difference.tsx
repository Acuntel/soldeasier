import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Difference() {
  return (
    <section className="py-20 sm:py-28">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/img/home2.jpg"
              alt="A well-kept suburban Chicago home"
              fill
              className="object-cover"
              sizes="(min-width:1024px) 36rem, 100vw"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow mb-4">Why SoldEasier</p>
          <h2 className="font-display text-4xl font-semibold leading-tight text-ink-950 sm:text-5xl">
            Bigger isn&apos;t better.
            <br />
            Closer is.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">
            The national &ldquo;we buy houses&rdquo; brands run on call centers,
            assignment games, and offers that shrink before closing. We&apos;re
            deliberately smaller — when you call, you talk to the people
            actually writing the check.
          </p>
          <ul className="mt-8 space-y-4 text-ink-800">
            {[
              "One point of contact from first call to closing — a relationship, not a ticket number.",
              "The number we offer is the number you get. No last-minute re-trades.",
              "A licensed Illinois real-estate law firm prepares and manages the entire closing.",
              "Liens, probate, title tangles, foreclosure timelines — the complex work is handled in-house.",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-500" />
                <span className="leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
