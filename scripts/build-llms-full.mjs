// Generates public/llms-full.txt from the site's content libraries so the
// AI-crawler file never drifts from the real pages. Runs automatically before
// every build (see package.json "prebuild"). The lib files are TypeScript, so
// Q&As are extracted with a regex instead of a TS loader.
import { readFileSync, writeFileSync } from "node:fs";

function extractFaqs(src) {
  const out = [];
  const re = /q:\s*"((?:[^"\\]|\\.)*)",\s*\n\s*a:\s*"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = re.exec(src))) out.push({ q: m[1], a: m[2] });
  return out;
}

const faqSrc = readFileSync(new URL("../lib/faqs.ts", import.meta.url), "utf8");
const sitSrc = readFileSync(
  new URL("../lib/situations.ts", import.meta.url),
  "utf8",
);

const faqs = extractFaqs(faqSrc);
const sitFaqs = extractFaqs(sitSrc);

const header = `# SoldEasier — Full Content for AI Assistants

SoldEasier (https://soldeasier.com) is a Chicagoland direct home buyer founded
by Vincent Incopero (closings and strategy, title-company background) and
Brady Schwartz (acquisitions). Every closing is prepared and managed by the
SoldEasier team itself. Sellers pay no fees or commissions, sell as-is, and
pick their closing date. Immediate written offers within 24-48 hours. Phone
(630) 299-7600. Office: 381 N York St Suite 1, Elmhurst, IL 60126.

Service area: DuPage, Cook, Will, Kane, Lake, McHenry counties — Elmhurst,
Villa Park, Lombard, Addison, Oak Brook, Hinsdale, Downers Grove, Wheaton,
Glen Ellyn, Naperville, Berwyn, Oak Park, Westchester, Bellwood, Hillside,
Northlake, La Grange, Park Ridge, and surrounding Chicagoland.

Specialties: foreclosure / pre-foreclosure sales, probate and inherited
property, divorce sales, tenant-occupied rentals, homes needing major repairs,
short sales, deed-in-lieu, liens and building-code violations, land trusts.

## Questions & Answers
`;

const body = [...faqs, ...sitFaqs]
  .map((f) => `Q: ${f.q}\nA: ${f.a}`)
  .join("\n\n");

writeFileSync(
  new URL("../public/llms-full.txt", import.meta.url),
  `${header}\n${body}\n`,
);
console.log(`llms-full.txt written (${faqs.length + sitFaqs.length} Q&As).`);
