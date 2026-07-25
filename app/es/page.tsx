import type { Metadata } from "next";
import Image from "next/image";
import { Phone } from "lucide-react";
import IntlLeadForm from "@/components/IntlLeadForm";
import { SITE } from "@/lib/site";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Vendemos Su Casa Rápido por Dinero en Efectivo en Chicago",
  description:
    "Compramos casas en efectivo en los suburbios de Chicago. Sin comisiones, sin reparaciones y con un bufete de abogados de bienes raíces manejando su cierre. Oferta en 48 horas.",
  alternates: {
    canonical: "/es",
    languages: { en: "/", es: "/es", pl: "/pl" },
  },
};

const FAQS = [
  {
    q: "¿Cobran alguna comisión o tarifa?",
    a: "No pagará comisiones de agente, tarifas de servicio ni costos de cierre. La oferta que ponemos por escrito es la cantidad que usted recibe, menos únicamente sus propios pagos pendientes como una hipoteca existente.",
  },
  {
    q: "¿Tengo que hacer reparaciones o limpiar la casa?",
    a: "No necesita reparar ni limpiar nada. Compramos la casa exactamente como está, y usted se lleva lo que quiera y deja el resto.",
  },
  {
    q: "¿Quién maneja el cierre y los documentos legales?",
    a: "Cada cierre es preparado y administrado por REAL Law Group, P.C., un bufete de abogados de bienes raíces en Elmhurst, Illinois. Usted también puede traer a su propio abogado si lo prefiere.",
  },
  {
    q: "¿Pueden ayudar si estoy en proceso de ejecución hipotecaria?",
    a: "Sí. En Illinois generalmente puede vender su casa hasta que el tribunal confirme la venta del alguacil, y vender por efectivo antes del juicio normalmente protege mucho más de su patrimonio que dejar que la casa se vaya a subasta.",
  },
];

const T = {
  language: "Spanish" as const,
  name: "Su nombre",
  phone: "Teléfono",
  email: "Correo electrónico (opcional)",
  address: "Dirección de la propiedad",
  city: "Ciudad",
  zip: "Código postal",
  situationLabel: "¿Cuál describe mejor su situación?",
  situations: [
    "Solo estoy explorando mis opciones",
    "Ejecución hipotecaria / pagos atrasados",
    "Herencia / sucesión (probate)",
    "Divorcio o separación",
    "Propiedad de alquiler / inquilinos",
    "La casa necesita reparaciones mayores",
    "Mudanza o reducción de tamaño",
  ],
  conditionLabel: "¿En qué condición está la casa?",
  conditions: [
    "Lista para habitar",
    "Habitable pero anticuada",
    "Necesita algo de trabajo",
    "Necesita trabajo mayor",
    "No es habitable ahora",
  ],
  timelineLabel: "¿Qué tan pronto quiere vender?",
  timelines: [
    "Lo antes posible",
    "Dentro de 30 días",
    "De 1 a 3 meses",
    "Solo quiero saber el precio",
  ],
  notes: "¿Algo que debamos saber? (inquilinos, deudas, reparaciones…)",
  submit: "Quiero mi oferta en efectivo",
  successTitle: "Recibimos su información y estamos en ello",
  successBody:
    "Le llamaremos el mismo día hábil. Si prefiere hablar ahora, llámenos al",
  error: "Algo salió mal de nuestro lado, por favor llámenos directamente al",
  disclaimer:
    "Sin obligación, sin tarifas y sin spam. Solo usamos esta información para preparar su oferta.",
};

export default function SpanishPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />
      <section className="relative overflow-hidden bg-ink-950 pb-20 pt-36 text-cream-50">
        <Image
          src="/img/hero.jpg"
          alt="Una casa típica de los suburbios de Chicago"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/40" />
        <div className="wrap relative grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-4 !text-brass-300">
              Compramos casas en Chicago y sus suburbios
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.12] sm:text-5xl">
              La manera más fácil de vender su{" "}
              <span className="italic text-brass-300">casa</span>
            </h1>
            <div className="mt-6 h-px w-24 bg-brass-400/60" />
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cream-100/85">
              Hacemos ofertas justas en efectivo por casas en Chicagoland, y un
              bufete de abogados de bienes raíces maneja cada detalle de su
              cierre sin costo para usted. Nunca pagará comisiones, nunca hará
              reparaciones, y usted elige la fecha de cierre.
            </p>
            <ul className="mt-8 space-y-3 text-cream-100/85">
              {[
                "Oferta en efectivo por escrito en 48 horas",
                "Compramos la casa tal como está, sin reparaciones",
                "Cierre manejado por abogados, incluido sin costo",
                "Hablamos español durante todo el proceso",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-400" />
                  {x}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-cream-100/60">
              ¿Prefiere hablar por teléfono? Llámenos al{" "}
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
            Preguntas frecuentes
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
