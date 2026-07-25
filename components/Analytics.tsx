"use client";

import { useEffect } from "react";
import Script from "next/script";
import { GA_ID, gaEvent } from "@/lib/gtag";

// GA4 loader (dormant until NEXT_PUBLIC_GA_ID is set in Vercel env) plus a
// site-wide phone-click conversion event on every tel: link.
export default function Analytics() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as HTMLElement | null)?.closest?.(
        'a[href^="tel:"]',
      ) as HTMLAnchorElement | null;
      if (a) gaEvent("phone_click", { link_url: a.href });
    }
    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!GA_ID) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
