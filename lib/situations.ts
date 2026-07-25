export type Situation = {
  slug: string;
  nav: string;
  title: string; // <title> — keyword-front
  metaDescription: string;
  h1: string;
  intro: string;
  body: { heading: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const SITUATIONS: Situation[] = [
  {
    slug: "stop-foreclosure",
    nav: "Foreclosure",
    title: "Stop Foreclosure in Illinois — Sell Your House Fast for Cash",
    metaDescription:
      "Behind on payments or served a lis pendens in Chicagoland? Sell your house for cash before auction, protect your equity, and let a real-estate law firm handle the legal side.",
    h1: "Facing foreclosure? You have more options than the bank tells you.",
    intro:
      "In Illinois, foreclosure is a court process that typically takes months — which means if you act early, you still control the outcome. A fast cash sale can pay off the loan, stop the case, and put your remaining equity in your pocket instead of losing it at auction.",
    body: [
      {
        heading: "Why timing matters in an Illinois foreclosure",
        text: "Illinois is a judicial foreclosure state: the lender files a lis pendens and a lawsuit, and the clock starts running toward judgment and a sheriff's sale. Early in that timeline you have maximum leverage — the closer the auction gets, the fewer options remain. Selling for cash before judgment usually protects far more of your equity than waiting.",
      },
      {
        heading: "How we help when you're behind on payments",
        text: "We buy your home as-is for cash, on a timeline that beats the court's. Because our closings are managed by REAL Law Group, P.C. — an Elmhurst real-estate law firm with deep experience in foreclosure timelines, short sales, and deed-in-lieu negotiations — payoff letters, lender communication, and court deadlines are handled by people who do this every week.",
      },
      {
        heading: "What if I owe more than the house is worth?",
        text: "That's a short sale, and it's exactly the kind of complex transaction most cash buyers walk away from. Our team has negotiated short sales, deed-in-lieus, and REO transactions for years. We'll give you an honest read on whether a sale, a short sale, or another path is your best move — even if that means we're not the buyer.",
      },
    ],
    faqs: [
      {
        q: "Can I sell my house if foreclosure has already been filed in Illinois?",
        a: "Yes. Until the sheriff's sale is confirmed by the court, you generally still own the home and can sell it. The earlier in the process you sell, the more equity you keep. A cash sale can pay off the loan and end the foreclosure case.",
      },
      {
        q: "Will selling stop the foreclosure auction?",
        a: "Paying off the lender through a sale resolves the default, which ends the foreclosure. Because we buy with cash and our closings are attorney-managed, we can move fast enough to beat most auction timelines when there's reasonable notice.",
      },
      {
        q: "What if I have no equity or owe more than the home's value?",
        a: "We can evaluate a short sale or deed-in-lieu — REAL Law Group, P.C. has extensive experience negotiating both with lenders. You'll get an honest assessment of which path leaves you in the best position.",
      },
    ],
  },
  {
    slug: "sell-inherited-house",
    nav: "Inherited / Probate",
    title: "Sell an Inherited House in Illinois — Probate Handled, Cash Offer",
    metaDescription:
      "Inherited a house in Chicagoland? We buy inherited and probate properties for cash — the estate legal work is handled in-house by a real-estate law firm. No cleanout needed.",
    h1: "Inherited a house? We handle the probate maze — and buy the home.",
    intro:
      "An inherited property usually arrives with paperwork attached: probate court, heirs in different states, a house full of belongings, maybe an old mortgage or liens. Most cash buyers can't deal with any of that. It's our specialty.",
    body: [
      {
        heading: "Probate doesn't have to stall the sale",
        text: "Whether the estate is already open, needs to be opened, or the home sits in a land trust, REAL Law Group, P.C. — the Elmhurst law firm behind our closings, which also practices estate planning and administration — coordinates the legal steps so the sale can actually close. Executors and heirs deal with one team instead of three.",
      },
      {
        heading: "Take what you want, leave the rest",
        text: "Decades of belongings are part of nearly every inherited home. Take the things that matter to your family and leave everything else — furniture, boxes, the garage, all of it. We buy strictly as-is and handle the cleanout after closing.",
      },
      {
        heading: "Fair to every heir",
        text: "With multiple heirs, transparency is everything. You get one clear written cash offer everyone can review — and we're happy to walk any heir (or their attorney) through exactly how we got to the number.",
      },
    ],
    faqs: [
      {
        q: "Can I sell an inherited house before probate is finished in Illinois?",
        a: "Often the sale can be run in parallel with the probate process, with closing timed to the court's approvals. The estate work and the real-estate work are coordinated by the same legal team, which is what keeps it moving.",
      },
      {
        q: "Do I need to clean out my parents' house before selling?",
        a: "No. Take the personal items you want to keep and leave the rest — we buy the home as-is and handle all cleanout after closing.",
      },
      {
        q: "What if the house still has a mortgage or liens on it?",
        a: "Mortgages, tax liens, and municipal liens get paid out of the sale proceeds at closing. Our attorney-managed closing identifies every lien up front so there are no surprises.",
      },
    ],
  },
  {
    slug: "sell-house-divorce",
    nav: "Divorce",
    title: "Selling a House During Divorce in Illinois — Fast, Discreet, Fair",
    metaDescription:
      "Divorcing in Chicagoland? Sell the marital home fast for cash — one written offer both parties can trust, a neutral attorney-managed closing, and no months of showings.",
    h1: "One clean sale, so both of you can move forward.",
    intro:
      "When a marriage ends, the house is usually the biggest asset — and the biggest source of friction. A traditional listing means months of showings, negotiations, and one more thing to disagree about. A direct cash sale replaces all of that with one transparent number and one closing date.",
    body: [
      {
        heading: "Why a cash sale works in a divorce",
        text: "There's no staging, no open houses, no strangers walking through during an already hard season. One written offer, visible to both parties and both attorneys, with a closing date that fits the settlement timeline — in weeks, not months.",
      },
      {
        heading: "Neutral, documented, attorney-managed",
        text: "Our closings are prepared by REAL Law Group, P.C., and we coordinate directly with each spouse's divorce counsel. Proceeds are split at closing exactly as the settlement directs. Everything in writing, nothing left to argue about later.",
      },
      {
        heading: "Discretion, guaranteed",
        text: "No yard sign, no MLS listing, no neighborhood chatter. The sale stays private until it's done.",
      },
    ],
    faqs: [
      {
        q: "Can we sell the house before the divorce is final in Illinois?",
        a: "Usually yes, if both spouses agree or the court orders the sale. We coordinate with both attorneys and time the closing to the settlement so the proceeds are divided exactly as agreed.",
      },
      {
        q: "What if one spouse still lives in the home?",
        a: "That's normal. We schedule one convenient walkthrough and set a closing date that gives the occupying spouse reasonable time to relocate.",
      },
      {
        q: "How fast can a divorce home sale close?",
        a: "With clear title and cooperative parties, as little as two to three weeks — or on whatever date the settlement calls for.",
      },
    ],
  },
  {
    slug: "sell-rental-property",
    nav: "Tired Landlord",
    title: "Sell a Rental Property Fast in Chicagoland — Tenants OK, As-Is",
    metaDescription:
      "Done being a landlord? We buy rental properties for cash across Chicagoland — with tenants in place, deferred maintenance and all. Attorney-handled closing included.",
    h1: "Done being a landlord? Sell the headache, keep the equity.",
    intro:
      "Problem tenants, 2 a.m. calls, code letters from the village, taxes that climb every year — at some point the return isn't worth it. We buy rentals as-is, with tenants in place, and the legal complexity handled.",
    body: [
      {
        heading: "Tenants in place? Not a problem.",
        text: "Active leases, month-to-month tenants, non-paying tenants, even units mid-eviction — we've seen all of it, and none of it stops the sale. You don't need to deliver the property vacant, and you don't need to be the bad guy on the way out.",
      },
      {
        heading: "Deferred maintenance and violations, priced honestly",
        text: "Old roofs, tired mechanicals, open building-code violations — REAL Law Group, P.C. handles building-violation matters as a practice area, so village citations and compliance issues get resolved through the closing rather than blocking it.",
      },
      {
        heading: "A clean exit for your books",
        text: "One closing, one wire, one date you pick. If you're weighing a 1031 exchange or a portfolio sale of several properties, tell us — we can structure around it.",
      },
    ],
    faqs: [
      {
        q: "Can I sell a rental property with tenants still living there?",
        a: "Yes. We buy with tenants in place and honor existing leases. Security deposits and rents are prorated at closing like any professional transaction.",
      },
      {
        q: "My property has open code violations — can I still sell?",
        a: "Yes. Building violations are one of our law firm's practice areas; citations and compliance issues are handled as part of the closing process.",
      },
      {
        q: "Will you buy more than one property at once?",
        a: "Yes — small portfolios are welcome, and a single coordinated closing usually gets you a better outcome than selling them off one by one.",
      },
    ],
  },
  {
    slug: "sell-house-as-is",
    nav: "As-Is / Repairs",
    title: "Sell Your House As-Is in Chicagoland — No Repairs, No Cleaning",
    metaDescription:
      "Roof, foundation, fire or water damage — sell your Chicagoland house 100% as-is for cash. No repairs, no inspections to pass, no cleaning. Attorney-managed closing.",
    h1: "No repairs. No cleaning. No judgment.",
    intro:
      "Every house has a story, and some houses need more than a weekend of work. Whatever the condition — cosmetic wear, major systems, fire or water damage, decades of deferred everything — we'll make a real offer on it exactly as it stands.",
    body: [
      {
        heading: "What 'as-is' actually means with us",
        text: "It means you fix nothing, clean nothing, and disclose honestly — and the offer already accounts for the condition. No post-inspection renegotiation, no repair credits invented at the closing table. The number we put in writing is the number you get.",
      },
      {
        heading: "Homes other buyers walk away from",
        text: "Financed buyers need the house to pass an appraisal and often an FHA checklist. Cash removes all of that. Foundation issues, mold, failed septic, hoarding situations, unpermitted additions — these end listings, but they don't end our offers.",
      },
      {
        heading: "The paperwork is still white-glove",
        text: "A rough house doesn't mean a rough closing. Every SoldEasier sale is prepared and managed by REAL Law Group, P.C., so title, payoffs, and municipal requirements are handled cleanly regardless of the home's condition.",
      },
    ],
    faqs: [
      {
        q: "Do I need to clean or empty the house before closing?",
        a: "No. Take what you want and leave the rest — furniture, appliances, anything. We handle removal after closing.",
      },
      {
        q: "Will you really buy a house with fire or water damage?",
        a: "Yes. We price the restoration into our offer and buy the property exactly as it stands. The same applies to foundation problems, mold, and storm damage.",
      },
      {
        q: "How is your as-is offer calculated?",
        a: "We start from what the home would be worth fully updated (based on nearby sales), subtract the real cost of getting it there plus our margin, and show you the math. Transparent enough to compare against any other option.",
      },
    ],
  },
];

export function getSituation(slug: string) {
  return SITUATIONS.find((s) => s.slug === slug);
}
