export type Town = {
  slug: string;
  name: string;
  county: "Cook" | "DuPage";
  tax: string | null; // municipal transfer tax, null = none
  taxWhoPays: "Seller" | "Buyer" | null;
  taxOn300k: string; // worked example on a $300,000 sale
  requirements: string[];
  intro: string;
  faqs: { q: string; a: string }[];
};

// Municipal transfer-tax and point-of-sale data verified July 2026 against
// ATG (Attorneys' Title Guaranty Fund) municipal ordinance summaries and
// village websites. Rates change occasionally; REAL Law Group confirms the
// exact figures on every closing statement.
export const TOWNS: Town[] = [
  {
    slug: "elmhurst",
    name: "Elmhurst",
    county: "DuPage",
    tax: "$1.50 per $1,000 of the sale price",
    taxWhoPays: "Seller",
    taxOn300k:
      "On a $300,000 sale the Elmhurst stamp costs the seller $450, on top of $300 in state and $150 in county transfer tax.",
    requirements: [
      "A transfer stamp application with the deed, PTAX form, and signed contract, submitted 72 hours before the stamp is issued",
      "A final water meter reading with the final bill and all sums owed the city paid",
      "A sump pump inspection for single family homes",
    ],
    intro:
      "Elmhurst is our home base, and our office sits right on York Street. When we buy a house here we are buying in our own backyard, which means we already know the city's 72 hour stamp lead time, the sump pump inspection, and every step of the York Street closing routine.",
    faqs: [
      {
        q: "Does Elmhurst have a real estate transfer tax?",
        a: "Elmhurst charges $1.50 per $1,000 of the sale price, paid by the seller, in addition to the standard state and DuPage County transfer taxes. The city also requires the stamp application 72 hours in advance, a paid final water bill, and a sump pump inspection on single family homes. When you sell to us, our law firm handles that entire checklist.",
      },
      {
        q: "How fast can you buy my house in Elmhurst?",
        a: "Because our office is in Elmhurst, we can usually walk the property within a day and close in as little as two weeks. The city's 72 hour stamp requirement is built into our closing timeline, so it never delays your date.",
      },
    ],
  },
  {
    slug: "villa-park",
    name: "Villa Park",
    county: "DuPage",
    tax: null,
    taxWhoPays: null,
    taxOn300k:
      "On a $300,000 sale you pay no village transfer tax at all, only $300 in state and $150 in DuPage County transfer tax.",
    requirements: [
      "A pre transfer point of sale inspection with a $50 fee",
      "A final water meter reading before the transfer",
    ],
    intro:
      "Villa Park sits minutes from our Elmhurst office, and it is one of the most common places we buy. The village keeps selling simple with no municipal transfer tax, though it does require a point of sale inspection that catches many sellers off guard at the closing table.",
    faqs: [
      {
        q: "Does Villa Park have a real estate transfer tax?",
        a: "Villa Park charges no municipal transfer tax, so only the standard state and DuPage County stamps apply. The village does require a pre transfer inspection with a $50 fee and a final water reading, and we coordinate both when we buy your home.",
      },
      {
        q: "Do I need to pass the Villa Park inspection before selling as is?",
        a: "The village inspection still happens on an as is sale, but any findings become our problem rather than yours. We buy the house in its current condition and resolve compliance items through the closing.",
      },
    ],
  },
  {
    slug: "lombard",
    name: "Lombard",
    county: "DuPage",
    tax: null,
    taxWhoPays: null,
    taxOn300k:
      "On a $300,000 sale you pay no village transfer tax, only $300 in state and $150 in DuPage County transfer tax.",
    requirements: ["A final water meter reading before the transfer"],
    intro:
      "Lombard is one of the easiest towns in DuPage County to sell in, with no municipal transfer tax and no village inspection standing between you and your closing. That makes it a place where a cash sale can move at full speed, and we regularly close Lombard homes in two to three weeks.",
    faqs: [
      {
        q: "Does Lombard have a real estate transfer tax?",
        a: "Lombard charges no municipal transfer tax. You pay only the standard Illinois and DuPage County transfer taxes, which together come to $1.50 per $1,000 of the sale price, and the village asks only for a final water meter reading.",
      },
      {
        q: "How fast can a Lombard house close for cash?",
        a: "With no village inspection and no municipal stamp process, Lombard closings are among the fastest we do. With clear title we can realistically close in two weeks.",
      },
    ],
  },
  {
    slug: "addison",
    name: "Addison",
    county: "DuPage",
    tax: "$2.50 per $1,000 of the sale price",
    taxWhoPays: "Buyer",
    taxOn300k:
      "On a $300,000 sale the Addison stamp is $750, and unusually for the area the buyer pays it, which means we cover it when we buy your home. You pay only $300 in state and $150 in county tax.",
    requirements: [
      "A transfer stamp from Village Hall with a copy of the PTAX form and unexecuted deed",
      "A sump pump inspection and a separate sewer inspection",
      "A permit release from Community Development and a paid final water bill",
    ],
    intro:
      "Addison layers more requirements onto a sale than almost any of its neighbors, with a sump pump inspection, a sewer inspection, and a permit release all standing between contract and closing. The good news for sellers is that Addison's transfer tax lands on the buyer, so when we purchase your home that stamp is our cost, not yours.",
    faqs: [
      {
        q: "Who pays the transfer tax in Addison?",
        a: "Addison's transfer tax of $2.50 per $1,000 is paid by the buyer, which is unusual for the western suburbs. When we buy your house, we pay that stamp, and you pay only the standard state and county taxes.",
      },
      {
        q: "What inspections does Addison require before a sale?",
        a: "Addison requires a sump pump inspection, a sewer inspection, and a permit release from Community Development before it issues transfer stamps. Open permits on the property surface at this stage and stop many traditional sales. Our law firm resolves them as part of the closing.",
      },
    ],
  },
  {
    slug: "berwyn",
    name: "Berwyn",
    county: "Cook",
    tax: "$10.00 per $1,000 of the sale price",
    taxWhoPays: "Seller",
    taxOn300k:
      "On a $300,000 sale the Berwyn stamp costs the seller $3,000, the highest in the western suburbs, on top of $300 in state and $150 in Cook County transfer tax.",
    requirements: [
      "A mandatory pre transfer city inspection",
      "A final water meter reading and payment of every outstanding debt owed to the city",
      "Original deed with completed PTAX forms, paid by cash, cashier's check, or money order only",
    ],
    intro:
      "Berwyn combines the highest transfer tax in the western suburbs with a mandatory city inspection and a requirement that every outstanding debt to the city is paid before stamps are issued. Sellers are routinely surprised at how much of their equity the city collects on the way out, which makes an accurate net sheet more important here than almost anywhere else.",
    faqs: [
      {
        q: "How much is the Berwyn transfer tax when selling a house?",
        a: "Berwyn charges $10 per $1,000 of the sale price, so a $300,000 sale costs the seller $3,000 in city stamps alone. Our written offers for Berwyn homes always show your true net after the city takes its share, so there are no surprises at closing.",
      },
      {
        q: "Can I sell a Berwyn house as is with the city inspection requirement?",
        a: "The city inspection still occurs, but on a sale to us the findings are priced into our offer and handled on our side of the table. You are not asked to make repairs before closing.",
      },
    ],
  },
  {
    slug: "bellwood",
    name: "Bellwood",
    county: "Cook",
    tax: "$5.00 per $1,000 of the sale price",
    taxWhoPays: "Seller",
    taxOn300k:
      "On a $300,000 sale the Bellwood stamp costs the seller $1,500, on top of $300 in state and $150 in Cook County transfer tax.",
    requirements: [
      "A pre transfer inspection with a $175 fee plus a public sidewalk inspection",
      "A final water reading with the bill and all sums due paid",
      "The original notarized deed, PTAX form, and an original plat of survey",
    ],
    intro:
      "Bellwood asks more paperwork of its sellers than most villages, including an original plat of survey, a notarized deed, a $175 village inspection, and even a sidewalk inspection. We buy homes in Bellwood regularly, our team knows the Village Hall process well, and the survey and inspection logistics are handled for you.",
    faqs: [
      {
        q: "What does Bellwood require before I can sell my house?",
        a: "Bellwood requires a $5 per $1,000 transfer stamp paid by the seller, a village inspection with a $175 fee, a sidewalk inspection, a paid final water bill, and an original plat of survey with your notarized deed. Missing paperwork stalls many Bellwood closings, and our law firm assembles all of it as part of the purchase.",
      },
      {
        q: "What if I do not have a plat of survey for my Bellwood home?",
        a: "Most sellers do not have their original survey on hand. Ordering a new one is a routine step that we arrange and pay for as part of the closing when needed.",
      },
    ],
  },
  {
    slug: "hillside",
    name: "Hillside",
    county: "Cook",
    tax: "$7.50 per $1,000 of the sale price",
    taxWhoPays: "Buyer",
    taxOn300k:
      "On a $300,000 sale the Hillside stamp is $2,250, and the buyer pays it, which means we cover it when we buy your home. You pay only $300 in state and $150 in county tax.",
    requirements: [
      "A pre transfer inspection with a $50 fee",
      "A paid final water bill",
      "The original PTAX form and a plat of survey",
    ],
    intro:
      "Hillside is one of the towns our lead tracker watches most closely, and we make offers here every month. The village's transfer tax falls on the buyer rather than the seller, so when we purchase your home the $7.50 per $1,000 stamp is our expense, and your side of the ledger holds only the standard state and county taxes.",
    faqs: [
      {
        q: "Who pays the transfer tax when selling a house in Hillside?",
        a: "Hillside places its transfer tax of $7.50 per $1,000 on the buyer. When we buy your house we pay that stamp, and you pay only the state and Cook County taxes, which total $1.50 per $1,000.",
      },
      {
        q: "Does Hillside require an inspection before closing?",
        a: "Hillside requires a pre transfer inspection with a $50 fee along with a paid water bill, a PTAX form, and a plat of survey. All of it is coordinated by our closing team when we are the buyer.",
      },
    ],
  },
  {
    slug: "northlake",
    name: "Northlake",
    county: "Cook",
    tax: null,
    taxWhoPays: null,
    taxOn300k:
      "Northlake charges no percentage transfer tax. Instead a flat $250 fee covers the mandatory city inspection and the transfer stamp, alongside $300 in state and $150 in county tax on a $300,000 sale.",
    requirements: [
      "A mandatory pre sale inspection of every improved property, applied for at least 21 days before the sale",
      "A flat $250 fee covering the inspection, any re inspection, and the transfer stamp",
      "A final water reading with a paid bill and a plat of survey",
    ],
    intro:
      "Northlake runs one of the strictest point of sale programs in Cook County, and no property can legally change hands without passing its city inspection first. The 21 day application window catches sellers constantly and blows up closing dates on traditional sales. We plan for it from day one, so our closing timelines in Northlake actually hold.",
    faqs: [
      {
        q: "Can I sell my Northlake house without the city inspection?",
        a: "Northlake's ordinance requires a pre sale inspection of every improved property before transfer, applied for at least 21 days ahead, and the city will not issue the transfer stamp without it. There is no way around the inspection, but on a sale to us the compliance findings are our responsibility rather than yours.",
      },
      {
        q: "Does Northlake have a transfer tax?",
        a: "Northlake charges no percentage based transfer tax. A flat $250 fee covers the mandatory inspection and the transfer stamp, and only the standard state and county taxes apply beyond it.",
      },
    ],
  },
  {
    slug: "westchester",
    name: "Westchester",
    county: "Cook",
    tax: null,
    taxWhoPays: null,
    taxOn300k:
      "Westchester charges no transfer tax. A $125 inspection fee and the standard $300 state and $150 county taxes are the only costs on a $300,000 sale.",
    requirements: [
      "A mandatory pre sale inspection with a $125 fee for a single family home, ending in a Certificate of Compliance",
      "A final water meter reading requested three days ahead, with the bill and all village debts paid",
    ],
    intro:
      "Westchester pairs no transfer tax with a strict Certificate of Compliance program, meaning the village inspects every home before it changes hands and lists what must be fixed. On a traditional sale those findings become repair negotiations. On a sale to us they are simply part of the price, and the certificate process is handled by our team.",
    faqs: [
      {
        q: "What is Westchester's Certificate of Compliance when selling?",
        a: "Westchester inspects every home before a sale and issues a Certificate of Compliance, or a temporary occupancy agreement when items remain open. The village will not stamp the deed without it. When we buy your home, the compliance items are ours to resolve and the fee and scheduling are handled for you.",
      },
      {
        q: "Does Westchester charge a transfer tax?",
        a: "Westchester has no municipal transfer tax. The costs on the village side are a $125 single family inspection fee and a final water bill, plus the standard state and Cook County taxes.",
      },
    ],
  },
  {
    slug: "oak-park",
    name: "Oak Park",
    county: "Cook",
    tax: "$8.00 per $1,000 of the sale price",
    taxWhoPays: "Seller",
    taxOn300k:
      "On a $300,000 sale the Oak Park stamp costs the seller $2,400, on top of $300 in state and $150 in Cook County transfer tax.",
    requirements: [
      "A transfer stamp from Village Hall with a copy of the contract or PTAX form",
      "A final water and sewer meter reading with the final bill paid",
    ],
    intro:
      "Oak Park charges one of the larger transfer taxes in the area at $8 per $1,000, but it spares sellers the village inspection that its neighbors require, so the process itself is straightforward. On the historic housing stock here, deferred maintenance is common and rarely a problem for us, because we price century old homes honestly and buy them as they stand.",
    faqs: [
      {
        q: "How much is the Oak Park transfer tax?",
        a: "Oak Park charges $8 per $1,000 of the sale price, paid by the seller, so a $300,000 sale carries a $2,400 village stamp plus the standard state and county taxes. Our written offers show your net after all stamps so you can compare options honestly.",
      },
      {
        q: "Does Oak Park require an inspection before selling a house?",
        a: "Oak Park requires no pre sale village inspection, only the transfer stamp and a final water and sewer reading. That makes it one of the simpler Cook County villages to close in, and a cash sale can move quickly here.",
      },
    ],
  },
];

export function getTown(slug: string) {
  return TOWNS.find((t) => t.slug === slug);
}
