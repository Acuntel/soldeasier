import { SITE } from "./site";

const orgId = `${SITE.url}/#organization`;
const siteId = `${SITE.url}/#website`;

export function baseGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "RealEstateAgent"],
        "@id": orgId,
        name: SITE.name,
        url: SITE.url,
        telephone: SITE.phone,
        email: SITE.email,
        slogan: SITE.tagline,
        description: SITE.description,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.state,
          postalCode: SITE.address.zip,
          addressCountry: "US",
        },
        areaServed: SITE.serviceCounties.map((c) => ({
          "@type": "AdministrativeArea",
          name: `${c} County, IL`,
        })),
        knowsAbout: [
          "cash home buying",
          "selling a house as-is",
          "probate and inherited property sales",
          "pre-foreclosure home sales",
          "short sales and deed in lieu",
          "real estate closings",
        ],
        memberOf: {
          "@type": "Organization",
          name: "REAL Law Group, P.C.",
          url: "https://reallawgroup.com",
        },
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: SITE.url,
        name: SITE.name,
        publisher: { "@id": orgId },
      },
      {
        "@type": "Service",
        name: "Cash home buying with attorney-managed closing",
        provider: { "@id": orgId },
        serviceType: "We buy houses for cash",
        areaServed: "Chicago metropolitan area, Illinois",
      },
    ],
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.href}`,
    })),
  };
}
