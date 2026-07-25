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
    title: "Stop Foreclosure in Illinois and Sell Your House Fast for Cash",
    metaDescription:
      "Behind on payments or served a lis pendens in Chicagoland? Sell your house for cash before auction, protect your equity, and let a real estate law firm handle the legal side.",
    h1: "You have more options than the bank wants you to believe",
    intro:
      "Foreclosure in Illinois is a court process that typically takes months, which means that if you act early you still control the outcome. A fast cash sale can pay off the loan, stop the case, and put your remaining equity in your pocket instead of losing it at auction.",
    body: [
      {
        heading: "Why timing matters in an Illinois foreclosure",
        text: "Illinois is a judicial foreclosure state, so the lender files a lis pendens and a lawsuit, and the clock starts running toward judgment and a sheriff's sale. Early in that timeline you hold maximum leverage, and the closer the auction gets, the fewer options remain on the table. Selling for cash before judgment usually protects far more of your equity than waiting ever will.",
      },
      {
        heading: "How we help when you are behind on payments",
        text: "We buy your home as-is for cash, on a timeline that beats the court's schedule. Because our closings are managed by REAL Law Group, P.C., an Elmhurst real estate law firm with deep experience in foreclosure timelines, short sales, and deed-in-lieu negotiations, the payoff letters, lender communication, and court deadlines are all handled by people who do this work every single week.",
      },
      {
        heading: "What happens if I owe more than the house is worth",
        text: "That situation is called a short sale, and it is exactly the kind of complex transaction most cash buyers walk away from. Our team has negotiated short sales, deed-in-lieu agreements, and bank-owned transactions for years. We will give you an honest read on whether a sale, a short sale, or another path leaves you in the best position, even when that means we are not the buyer.",
      },
    ],
    faqs: [
      {
        q: "Can I sell my house if foreclosure has already been filed in Illinois?",
        a: "You can still sell, because until the sheriff's sale is confirmed by the court you generally still own the home. The earlier in the process you sell, the more of your equity you keep, and a cash sale can pay off the loan and end the foreclosure case entirely.",
      },
      {
        q: "Will selling the house stop the foreclosure auction?",
        a: "Paying off the lender through a sale resolves the default, which ends the foreclosure case. Because we buy with cash and our closings are attorney-managed, we can usually move fast enough to beat the auction timeline when there is reasonable notice.",
      },
      {
        q: "What if I have no equity or owe more than the home's value?",
        a: "We can evaluate a short sale or a deed-in-lieu arrangement, because REAL Law Group, P.C. has extensive experience negotiating both with lenders. You will get an honest assessment of which path leaves you in the strongest position.",
      },
    ],
  },
  {
    slug: "sell-inherited-house",
    nav: "Inherited / Probate",
    title: "Sell an Inherited House in Illinois with Probate Handled for You",
    metaDescription:
      "Inherited a house in Chicagoland? We buy inherited and probate properties for cash, and the estate legal work is handled in-house by a real estate law firm. No cleanout needed.",
    h1: "We handle the probate maze and then buy the home",
    intro:
      "An inherited property usually arrives with paperwork attached, from probate court and heirs in different states to a house full of belongings and sometimes an old mortgage or liens. Most cash buyers cannot deal with any of that, and it happens to be our specialty.",
    body: [
      {
        heading: "Probate does not have to stall the sale",
        text: "Whether the estate is already open, still needs to be opened, or the home sits inside a land trust, the legal steps are coordinated by REAL Law Group, P.C., the Elmhurst law firm behind our closings, which also practices estate planning and administration. Executors and heirs deal with one team instead of juggling three, and that is what keeps the sale moving.",
      },
      {
        heading: "Take what you want and leave the rest behind",
        text: "Decades of belongings are part of nearly every inherited home we see. Take the things that matter to your family and leave everything else where it sits, including the furniture, the boxes, and the garage. We buy strictly as-is and we handle the entire cleanout after closing.",
      },
      {
        heading: "A process that is fair to every heir",
        text: "When multiple heirs are involved, transparency becomes everything. You get one clear written cash offer that everyone can review together, and we are happy to walk any heir or their attorney through exactly how we arrived at the number.",
      },
    ],
    faqs: [
      {
        q: "Can I sell an inherited house before probate is finished in Illinois?",
        a: "In many cases the sale can run in parallel with the probate process, with the closing timed to the court's approvals. The estate work and the real estate work are coordinated by the same legal team, which is exactly what keeps everything moving forward.",
      },
      {
        q: "Do I need to clean out my parents' house before selling?",
        a: "There is no cleanout required at any point. Take the personal items you want to keep and leave the rest behind, because we buy the home as-is and handle all removal after closing.",
      },
      {
        q: "What if the house still has a mortgage or liens on it?",
        a: "Mortgages, tax liens, and municipal liens all get paid out of the sale proceeds at closing. Our attorney-managed closing identifies every lien up front so there are never any surprises at the table.",
      },
    ],
  },
  {
    slug: "sell-house-divorce",
    nav: "Divorce",
    title: "Selling a House During Divorce in Illinois, Fast and Discreet",
    metaDescription:
      "Divorcing in Chicagoland? Sell the marital home fast for cash with one written offer both parties can trust, a neutral attorney-managed closing, and no months of showings.",
    h1: "One clean sale so both of you can move forward",
    intro:
      "When a marriage ends, the house is usually the biggest asset on the table and the biggest source of friction between the parties. A traditional listing means months of showings, negotiations, and one more thing to disagree about, while a direct cash sale replaces all of that with one transparent number and one closing date.",
    body: [
      {
        heading: "Why a cash sale works so well in a divorce",
        text: "There is no staging, there are no open houses, and there are no strangers walking through during an already difficult season. Both parties and both attorneys see one written offer, with a closing date that fits the settlement timeline in weeks rather than months.",
      },
      {
        heading: "Neutral, documented, and attorney-managed",
        text: "Our closings are prepared by REAL Law Group, P.C., and we coordinate directly with each spouse's divorce counsel throughout the process. Proceeds are split at closing exactly as the settlement directs, with everything in writing and nothing left to argue about later.",
      },
      {
        heading: "Discretion comes guaranteed with us",
        text: "There is no yard sign, no listing on the MLS, and no neighborhood chatter about your situation. The sale stays completely private until it is finished.",
      },
    ],
    faqs: [
      {
        q: "Can we sell the house before the divorce is final in Illinois?",
        a: "Most couples can sell before the divorce is final, provided both spouses agree or the court orders the sale. We coordinate with both attorneys and time the closing to the settlement so the proceeds are divided exactly as agreed.",
      },
      {
        q: "What if one spouse still lives in the home?",
        a: "That arrangement is completely normal in our experience. We schedule one convenient walkthrough and set a closing date that gives the occupying spouse reasonable time to relocate comfortably.",
      },
      {
        q: "How fast can a divorce home sale close?",
        a: "With clear title and cooperative parties, the sale can close in as little as two to three weeks, or on whatever date the settlement calls for.",
      },
    ],
  },
  {
    slug: "sell-rental-property",
    nav: "Tired Landlord",
    title: "Sell a Rental Property Fast in Chicagoland with Tenants in Place",
    metaDescription:
      "Done being a landlord? We buy rental properties for cash across Chicagoland with tenants in place, deferred maintenance and all, with an attorney-handled closing included.",
    h1: "Sell the headache and keep every dollar of equity",
    intro:
      "Problem tenants, calls at two in the morning, code letters from the village, and taxes that climb every year eventually outweigh the return. We buy rentals as-is, with tenants in place, and with all of the legal complexity handled for you.",
    body: [
      {
        heading: "Tenants in place are never a problem",
        text: "Active leases, month-to-month tenants, non-paying tenants, and even units in the middle of an eviction are all situations we have bought through before. You never need to deliver the property vacant, and you never need to be the bad guy on your way out the door.",
      },
      {
        heading: "Deferred maintenance and violations, priced honestly",
        text: "Old roofs, tired mechanicals, and open building-code violations are all part of the rental business. Because REAL Law Group, P.C. handles building-violation matters as an actual practice area, village citations and compliance issues get resolved through the closing rather than blocking it.",
      },
      {
        heading: "A clean exit for your books and your life",
        text: "You get one closing, one wire, and one date that you pick yourself. If you are weighing a 1031 exchange or thinking about selling several properties together, tell us early and we will structure the deal around it.",
      },
    ],
    faqs: [
      {
        q: "Can I sell a rental property with tenants still living there?",
        a: "Selling with tenants in place is completely routine for us, and we honor every existing lease. Security deposits and rents are prorated at closing exactly like any professional transaction.",
      },
      {
        q: "My property has open code violations, so can I still sell?",
        a: "Open violations do not stop a sale to us, because building violations are one of our law firm's practice areas. Citations and compliance issues are handled as part of the closing process itself.",
      },
      {
        q: "Will you buy more than one property at once?",
        a: "Small portfolios are always welcome here, and a single coordinated closing usually gets you a better outcome than selling the properties off one by one.",
      },
    ],
  },
  {
    slug: "sell-house-as-is",
    nav: "As-Is / Repairs",
    title: "Sell Your House As-Is in Chicagoland with No Repairs or Cleaning",
    metaDescription:
      "Roof, foundation, fire or water damage? Sell your Chicagoland house completely as-is for cash, with no repairs, no inspections to pass, and an attorney-managed closing.",
    h1: "Sell the house exactly as it stands today",
    intro:
      "Every house has a story, and some houses need far more than a weekend of work. Whatever the condition happens to be, from cosmetic wear to major systems to fire or water damage, we will make a real offer on the property exactly as it stands.",
    body: [
      {
        heading: "What selling as-is actually means with us",
        text: "It means you fix nothing, you clean nothing, and you simply disclose honestly, because the offer already accounts for the condition. There is no renegotiation after an inspection and there are no repair credits invented at the closing table. The number we put in writing is the number you receive.",
      },
      {
        heading: "We buy the homes other buyers walk away from",
        text: "Financed buyers need the house to pass an appraisal and often a strict FHA checklist, while cash removes all of that friction. Foundation issues, mold, failed septic systems, hoarding situations, and unpermitted additions end most listings, but they do not end our offers.",
      },
      {
        heading: "The paperwork still gets white-glove treatment",
        text: "A rough house never means a rough closing with us. Every SoldEasier sale is prepared and managed by REAL Law Group, P.C., so the title work, the payoffs, and the municipal requirements are handled cleanly regardless of the home's condition.",
      },
    ],
    faqs: [
      {
        q: "Do I need to clean or empty the house before closing?",
        a: "There is nothing you need to clean or remove before closing. Take what you want and leave the rest behind, including furniture and appliances, because we handle all removal after the sale.",
      },
      {
        q: "Will you really buy a house with fire or water damage?",
        a: "Damaged homes are a regular part of what we buy, and we price the restoration work into our offer honestly. The same holds true for foundation problems, mold, and storm damage.",
      },
      {
        q: "How is your as-is offer calculated?",
        a: "We start from what the home would be worth fully updated based on nearby sales, subtract the real cost of getting it there along with our margin, and then show you the math. The offer is transparent enough to compare against any other option you have.",
      },
    ],
  },
];

export function getSituation(slug: string) {
  return SITUATIONS.find((s) => s.slug === slug);
}
