import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
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
      "Sell Your House Fast for Cash in Chicagoland | Attorney-Backed | SoldEasier",
    template: "%s | SoldEasier",
  },
  description: SITE.description,
  keywords: [
    "sell my house fast Chicago",
    "we buy houses Elmhurst IL",
    "cash home buyers DuPage County",
    "sell house as-is Chicago suburbs",
    "attorney backed home sale Illinois",
    "sell inherited house Illinois",
    "stop foreclosure sell house Illinois",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    title: "Sell Your House Fast for Cash in Chicagoland | SoldEasier",
    description: SITE.description,
  },
  twitter: { card: "summary_large_image" },
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
      </body>
    </html>
  );
}
