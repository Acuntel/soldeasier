import QuickForm from "@/components/QuickForm";
import Reveal from "@/components/Reveal";

const ROWS: [string, string, string, string][] = [
  [
    "Fees and commissions",
    "None at any point",
    "Five to six percent",
    "Often hidden in the price",
  ],
  [
    "Repairs and cleaning",
    "Never required",
    "Expected before listing",
    "Used to cut the offer",
  ],
  [
    "Time to close",
    "As soon as two weeks",
    "Sixty to ninety days",
    "Thirty days or longer",
  ],
  [
    "Certainty of closing",
    "Cash, so it cannot fall through",
    "Depends on the buyer's loan",
    "Offers renegotiated late",
  ],
  [
    "Who you deal with",
    "The two founders directly",
    "Rotating agents and showings",
    "A call center queue",
  ],
  [
    "Legal work",
    "Law firm included at no cost",
    "You hire your own attorney",
    "You are on your own",
  ],
];

export default function Compare() {
  return (
    <section className="bg-ink-950 py-20 text-cream-50 sm:py-28">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-4 !text-brass-300">Your three options</p>
          <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            See how the numbers actually{" "}
            <span className="italic text-brass-300">compare</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12 overflow-x-auto rounded-2xl border border-ink-700">
            <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-ink-700">
                  <th className="px-5 py-4 font-medium text-cream-100/60" />
                  <th className="bg-ink-800/60 px-5 py-4 font-display text-base font-semibold text-brass-300">
                    SoldEasier
                  </th>
                  <th className="px-5 py-4 font-medium text-cream-100/80">
                    Listing with an agent
                  </th>
                  <th className="px-5 py-4 font-medium text-cream-100/80">
                    National cash chains
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map(([label, us, agent, chain]) => (
                  <tr
                    key={label}
                    className="border-b border-ink-800 last:border-0"
                  >
                    <td className="px-5 py-4 font-medium text-cream-100/60">
                      {label}
                    </td>
                    <td className="bg-ink-800/60 px-5 py-4 font-semibold text-cream-50">
                      {us}
                    </td>
                    <td className="px-5 py-4 text-cream-100/70">{agent}</td>
                    <td className="px-5 py-4 text-cream-100/70">{chain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-12 max-w-xl text-cream-100/70">
            The first column takes about two minutes to find out, and it starts
            right here.
          </p>
          <QuickForm variant="dark" layout="row" className="mt-5 max-w-3xl" />
        </Reveal>
      </div>
    </section>
  );
}
