import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SoldEasier collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <section className="pb-20 pt-36">
      <div className="wrap max-w-3xl space-y-6 leading-relaxed text-ink-700">
        <h1 className="font-display text-4xl font-semibold text-ink-950">
          Privacy Policy
        </h1>
        <p>
          When you submit our form or call us, we collect the contact and
          property details you provide, including your name, phone number,
          email, and information about the home you are selling. We use that
          information for exactly one purpose, which is evaluating your
          property and communicating with you about your offer.
        </p>
        <p>
          We do not sell, rent, or share your information with third-party
          marketers or lead resellers. Your details are shared only with the
          SoldEasier principals and, when a transaction proceeds, with REAL Law
          Group, P.C. and the parties necessary to complete your closing (such
          as the title company).
        </p>
        <p>
          Our website uses only the analytics strictly necessary to operate and
          improve it. We don&apos;t run third-party advertising trackers.
        </p>
        <p>
          To have your information removed, email{" "}
          <a href={`mailto:${SITE.email}`} className="text-brass-600">
            {SITE.email}
          </a>{" "}
          or call {SITE.phone} and we&apos;ll delete it promptly.
        </p>
      </div>
    </section>
  );
}
