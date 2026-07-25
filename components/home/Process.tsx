import Link from "next/link";
import Reveal from "@/components/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Tell us about the home",
    body: "Two minutes online, or one phone call. Address, condition, timeline — that's all we need to get started.",
  },
  {
    n: "02",
    title: "Get a real number",
    body: "We visit within 24–48 hours and make a transparent cash offer on the spot. Take your time — there's zero obligation.",
  },
  {
    n: "03",
    title: "Close on your timeline",
    body: "Our law firm prepares everything. Close in as little as two weeks — or pick the date that fits your life. Walk away with cash.",
  },
];

export default function Process() {
  return (
    <section className="bg-ink-950 py-20 text-cream-50 sm:py-28">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-4 !text-brass-300">The process</p>
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Three steps. No circus.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12}>
              <p className="font-display text-5xl font-semibold text-brass-400/60">
                {s.n}
              </p>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-cream-100/70">{s.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <Link href="/sell" className="btn-gold mt-14">
            Start with step one
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
