import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const SITUATIONS = [
  {
    href: "/stop-foreclosure",
    title: "Facing foreclosure",
    body: "If you are behind on payments or holding a lis pendens, a fast direct sale can stop the clock and protect your equity before auction.",
  },
  {
    href: "/sell-inherited-house",
    title: "Inherited a property",
    body: "We handle probate court, out-of-state heirs, and houses full of belongings, then buy the home on your family's timeline.",
  },
  {
    href: "/sell-house-divorce",
    title: "Divorce or separation",
    body: "One clean and discreet sale lets both parties move forward without enduring months of showings.",
  },
  {
    href: "/sell-rental-property",
    title: "Tired landlord",
    body: "Whether you have problem tenants or years of deferred maintenance, you can sell with tenants in place and never touch a repair.",
  },
  {
    href: "/sell-house-as-is",
    title: "Major repairs needed",
    body: "From tired roofs to fire and water damage, we buy homes in every condition and never ask you to fix a thing.",
  },
  {
    href: "/sell",
    title: "Relocating or downsizing",
    body: "A guaranteed sale on your schedule means your next chapter is never held hostage by this one.",
  },
];

export default function Situations() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-4">We can help when</p>
          <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight text-ink-950 sm:text-5xl">
            Whatever brought you here, the sale itself will be{" "}
            <span className="italic text-brass-600">simple</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SITUATIONS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <Link
                href={s.href}
                className="group flex h-full flex-col rounded-2xl border border-cream-200 bg-white p-7 transition hover:border-brass-400 hover:shadow-lg hover:shadow-ink-950/5"
              >
                <h3 className="text-lg font-semibold text-ink-950">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                  {s.body}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brass-600">
                  Learn more{" "}
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
