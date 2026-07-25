import type { Metadata } from "next";
import Image from "next/image";
import { Phone } from "lucide-react";
import IntlLeadForm from "@/components/IntlLeadForm";
import { SITE } from "@/lib/site";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Kupimy Twój Dom od Ręki w Chicago i na Przedmieściach",
  description:
    "Kupujemy domy bezpośrednio w Chicago i na przedmieściach. Bez prowizji, bez remontów, a całym zamknięciem transakcji zajmuje się nasz zespół. Natychmiastowa oferta w 48 godzin. Mówimy po polsku.",
  alternates: {
    canonical: "/pl",
    languages: { en: "/", es: "/es", pl: "/pl" },
  },
};

const FAQS = [
  {
    q: "Czy pobieracie prowizję lub opłaty?",
    a: "Nie zapłacisz prowizji agenta, opłat za usługi ani kosztów zamknięcia transakcji. Kwota, którą przedstawiamy na piśmie, to kwota, którą otrzymasz, pomniejszona jedynie o Twoje własne zobowiązania, takie jak istniejący kredyt hipoteczny.",
  },
  {
    q: "Czy muszę robić remont albo sprzątać dom?",
    a: "Niczego nie musisz naprawiać ani sprzątać. Kupujemy dom dokładnie w takim stanie, w jakim jest. Zabierz to, co chcesz zatrzymać, a resztę zostaw nam.",
  },
  {
    q: "Kto zajmuje się zamknięciem transakcji i dokumentami?",
    a: "Każdą transakcję przygotowuje i prowadzi nasz własny zespół, od pierwszej rozmowy aż po dzień podpisania. Jeśli chcesz, zaufana przez Ciebie osoba może razem z Tobą przejrzeć dokumenty.",
  },
  {
    q: "Czy możecie pomóc, jeśli grozi mi egzekucja hipoteczna (foreclosure)?",
    a: "Tak. W Illinois zazwyczaj można sprzedać dom aż do momentu zatwierdzenia licytacji przez sąd, a bezpośrednia sprzedaż przed wyrokiem zwykle chroni znacznie więcej Twojego majątku niż dopuszczenie do licytacji.",
  },
];

const T = {
  language: "Polish" as const,
  name: "Imię i nazwisko",
  phone: "Telefon",
  email: "E-mail (opcjonalnie)",
  address: "Adres nieruchomości",
  city: "Miasto",
  zip: "Kod pocztowy",
  situationLabel: "Co najlepiej opisuje Twoją sytuację?",
  situations: [
    "Na razie tylko sprawdzam możliwości",
    "Egzekucja hipoteczna / zaległe raty",
    "Spadek / postępowanie spadkowe",
    "Rozwód lub separacja",
    "Wynajmowana nieruchomość / lokatorzy",
    "Dom wymaga poważnego remontu",
    "Przeprowadzka lub zamiana na mniejsze",
  ],
  conditionLabel: "W jakim stanie jest dom?",
  conditions: [
    "Gotowy do zamieszkania",
    "Do zamieszkania, ale przestarzały",
    "Wymaga trochę pracy",
    "Wymaga poważnego remontu",
    "Obecnie nie nadaje się do zamieszkania",
  ],
  timelineLabel: "Jak szybko chcesz sprzedać?",
  timelines: [
    "Jak najszybciej",
    "W ciągu 30 dni",
    "Od 1 do 3 miesięcy",
    "Chcę tylko poznać cenę",
  ],
  notes: "Coś, o czym powinniśmy wiedzieć? (lokatorzy, zadłużenie, remonty…)",
  submit: "Chcę otrzymać ofertę",
  successTitle: "Otrzymaliśmy Twoje zgłoszenie i już działamy",
  successBody:
    "Oddzwonimy tego samego dnia roboczego. Jeśli wolisz porozmawiać od razu, zadzwoń pod numer",
  error: "Coś poszło nie tak po naszej stronie, zadzwoń do nas bezpośrednio pod",
  disclaimer:
    "Bez zobowiązań, bez opłat i bez spamu. Te informacje służą wyłącznie do przygotowania Twojej oferty.",
};

export default function PolishPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />
      <section className="relative overflow-hidden bg-ink-950 pb-20 pt-36 text-cream-50">
        <Image
          src="/img/hero.jpg"
          alt="Typowy dom na przedmieściach Chicago"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/40" />
        <div className="wrap relative grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-4 !text-brass-300">
              Kupujemy domy w Chicago i na przedmieściach
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.12] sm:text-5xl">
              Łatwiejszy sposób na sprzedaż{" "}
              <span className="italic text-brass-300">domu</span>
            </h1>
            <div className="mt-6 h-px w-24 bg-brass-400/60" />
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cream-100/85">
              Składamy uczciwe, natychmiastowe oferty za domy w Chicagoland, a
              nasz zespół zajmuje się każdym szczegółem zamknięcia transakcji
              bez żadnych kosztów dla Ciebie. Nigdy nie zapłacisz prowizji,
              nie wykonasz żadnego remontu i sam wybierasz datę zamknięcia.
            </p>
            <ul className="mt-8 space-y-3 text-cream-100/85">
              {[
                "Pisemna natychmiastowa oferta w 48 godzin",
                "Kupujemy dom w obecnym stanie, bez remontów",
                "Zamknięcie w pełni prowadzone przez nas, w cenie",
                "Mówimy po polsku na każdym etapie",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-400" />
                  {x}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-cream-100/60">
              Wolisz porozmawiać przez telefon? Zadzwoń pod{" "}
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-1.5 font-semibold text-brass-300"
              >
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </p>
          </div>
          <div className="text-ink-900">
            <IntlLeadForm t={T} />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="wrap max-w-3xl space-y-8">
          <h2 className="font-display text-3xl font-semibold text-ink-950">
            Najczęściej zadawane pytania
          </h2>
          {FAQS.map((f) => (
            <div key={f.q} className="border-b border-cream-200 pb-8 last:border-0">
              <h3 className="text-lg font-semibold text-ink-950">{f.q}</h3>
              <p className="mt-2 leading-relaxed text-ink-700">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
