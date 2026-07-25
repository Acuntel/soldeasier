import Image from "next/image";
import Reveal from "@/components/Reveal";

const POINTS = [
  "You keep one point of contact from the first call through closing day, and it is always one of us.",
  "The offer we put in writing is the exact amount you receive, with no last-minute renegotiation.",
  "A licensed Illinois real estate law firm prepares and manages your entire closing from start to finish.",
  "Liens, probate, title tangles, and foreclosure deadlines are all handled by people who resolve them every week.",
];

export default function Difference() {
  return (
    <section className="py-20 sm:py-28">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/img/home2.jpg"
              alt="A modest suburban Chicagoland bungalow on an ordinary street"
              fill
              className="object-cover"
              sizes="(min-width:1024px) 36rem, 100vw"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow mb-4">Why SoldEasier</p>
          <h2 className="font-display text-4xl font-semibold leading-tight text-ink-950 sm:text-5xl">
            The biggest buyers are rarely the{" "}
            <span className="italic text-brass-600">best</span> buyers
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">
            The national house-buying brands run on call centers, wholesale
            assignment games, and offers that quietly shrink before closing
            day. We stay deliberately small, so when you call you are talking
            with the two people who actually write the check.
          </p>
          <ul className="mt-8 space-y-4 text-ink-800">
            {POINTS.map((t) => (
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
