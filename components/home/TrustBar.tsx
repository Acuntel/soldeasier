import { Banknote, CalendarCheck, FileCheck, Home } from "lucide-react";

const ITEMS = [
  { icon: FileCheck, label: "Every closing fully managed" },
  { icon: Banknote, label: "No financing fall-throughs" },
  { icon: Home, label: "Any condition, sold as-is" },
  { icon: CalendarCheck, label: "You pick the closing date" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-cream-200 bg-cream-100">
      <div className="wrap grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon className="h-5 w-5 shrink-0 text-brass-600" />
            <p className="text-sm font-medium text-ink-800">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
