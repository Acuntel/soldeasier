"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

// Sticky bottom action bar on phones. Distressed sellers browse late at
// night on mobile, and one thumb-reach call button converts better than
// any section further down the page.
export default function MobileBar() {
  const pathname = usePathname();
  if (pathname === "/sell") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-700 bg-ink-950/95 px-3 py-2.5 backdrop-blur md:hidden">
      <div className="flex gap-2">
        <a
          href={SITE.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-brass-400/60 py-3 text-sm font-semibold text-brass-300"
        >
          <Phone className="h-4 w-4" /> Call now
        </a>
        <Link
          href="/sell#offer"
          className="flex flex-1 items-center justify-center rounded-full bg-brass-500 py-3 text-sm font-semibold text-ink-950"
        >
          Get my offer
        </Link>
      </div>
    </div>
  );
}
