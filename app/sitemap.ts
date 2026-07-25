import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SITUATIONS } from "@/lib/situations";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = [
    { path: "", priority: 1.0 },
    { path: "/sell", priority: 0.9 },
    { path: "/how-it-works", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/faq", priority: 0.7 },
  ];
  return [
    ...staticPages.map((p) => ({
      url: `${SITE.url}${p.path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: p.priority,
    })),
    ...SITUATIONS.map((s) => ({
      url: `${SITE.url}/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
