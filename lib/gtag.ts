export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

type GtagParams = Record<string, string | number | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function gaEvent(name: string, params: GtagParams = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}
