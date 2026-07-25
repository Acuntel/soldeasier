"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

type Props = {
  variant?: "dark" | "light";
  layout?: "row" | "stack";
  className?: string;
};

// Step one of the two-step lead flow. Collects the three essentials and
// carries the visitor to /sell, where the full form finishes the lead.
// Nothing is emailed until the full form is completed there.
export default function QuickForm({
  variant = "light",
  layout = "stack",
  className = "",
}: Props) {
  const router = useRouter();
  const dark = variant === "dark";

  const field = dark
    ? "w-full rounded-lg border border-cream-200/25 bg-ink-800/70 px-4 py-3 text-sm text-cream-50 placeholder:text-cream-100/50 focus:border-brass-400 focus:outline-none focus:ring-1 focus:ring-brass-400"
    : "field";

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    for (const key of ["name", "phone", "address"]) {
      const v = String(data.get(key) || "").trim();
      if (v) params.set(key, v);
    }
    router.push(`/sell?${params.toString()}#offer`);
  }

  return (
    <form onSubmit={onSubmit} className={className}>
      <div
        className={
          layout === "row"
            ? "grid gap-3 sm:grid-cols-[1fr_1fr_1.4fr_auto]"
            : "flex flex-col gap-3"
        }
      >
        <input name="name" required placeholder="Your name" className={field} />
        <input
          name="phone"
          required
          type="tel"
          placeholder="Phone"
          className={field}
        />
        <input
          name="address"
          required
          placeholder="Property address"
          className={field}
        />
        <button type="submit" className="btn-gold !px-6">
          Get my offer <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
