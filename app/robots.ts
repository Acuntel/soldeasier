import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Explicitly welcome search + AI answer-engine crawlers (ChatGPT answers pull
// from GPTBot/OAI-SearchBot + the Bing index; Claude from ClaudeBot; etc.)
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "cohere-ai",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...AI_BOTS.map((bot) => ({ userAgent: bot, allow: "/" as const })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
