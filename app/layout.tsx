import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import Nav from "@/components/Nav";
import { SITE } from "@/lib/site";
import { baseGraph } from "@/lib/schema";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Sell Your House Fast in Chicagoland | Immediate Offers | SoldEasier",
    template: "%s | SoldEasier",
  },
  description: SITE.description,
  keywords: [
    "sell my house fast Chicago",
    "we buy houses Elmhurst IL",
    "direct home buyers DuPage County",
    "sell house as-is Chicago suburbs",
    "immediate offer on my house Illinois",
    "sell inherited house Illinois",
    "stop foreclosure sell house Illinois",
  ],
  alternates: {
    canonical: "/",
    languages: { en: "/", es: "/es", pl: "/pl" },
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    title: "Sell Your House Fast in Chicagoland | SoldEasier",
    description: SITE.description,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(baseGraph()) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
        <div className="h-16 md:hidden" aria-hidden />
        <MobileBar />
        <Analytics />
      </body>
    </html>
  );
}
