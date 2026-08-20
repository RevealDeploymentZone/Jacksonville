import Link from "next/link";
import { CheckCircle, Phone, Flame, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import SchemaScript from "@/components/SchemaScript";
import { buildBreadcrumbSchema, buildServiceSchema, buildFAQSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/data/business";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Dryer vent cleaning in Jacksonville, FL | AL Air Duct",
  description:
    "Professional dryer vent cleaning in Jacksonville, FL. Removes lint buildup that causes longer drying times and dryer fires. Serving all four counties. Free estimates.",
  path: "/services/dryer-vent-cleaning",
});

const faqs = [
  {
    question: "How often should I clean my dryer vent in Jacksonville?",
    answer:
      "The National Fire Protection Association recommends annual dryer vent cleaning. In Jacksonville homes where the dryer vent runs a longer path — through multiple floors, across the full width of the house to a side wall, or up to a rooftop termination — lint accumulates faster and annual cleaning is essential. If your dryer is taking more than one cycle to dry a normal load, schedule a cleaning immediately.",
  },
  {
    question: "What are the signs of a blocked dryer vent?",
    answer:
      "A dryer that takes longer than normal to complete a cycle. Clothes that are still damp after a full cycle. The dryer exterior or laundry room becoming unusually hot. A burning smell during operation. The exterior vent flap not fully opening when the dryer is running. Excess lint building up on or behind the dryer.",
  },
  {
    question: "Can a blocked dryer vent cause a fire?",
    answer:
      "Yes. The National Fire Protection Association identifies failure to clean dryer vents as the leading cause of home dryer fires. Lint is highly combustible. In a restricted vent, the dryer's exhaust temperature can reach the ignition temperature of accumulated lint. This is not a remote possibility — it's the leading cause of appliance fires in US homes.",
  },
  {
    question: "How long does dryer vent cleaning take?",
    answer:
      "Most residential dryer vent cleanings take 45 minutes to one and a half hours, depending on vent length and complexity. Multi-story homes with long vent runs take longer than single-story homes with short, straight vents.",
  },
  {
    question: "Do you clean rooftop dryer vent terminations?",
    answer:
      "Yes. Jacksonville homes where the dryer vent terminates through the roof rather than a side wall are common, particularly in multi-story townhomes. Rooftop terminations accumulate lint at the flapper mechanism and are frequently blocked. We clean the full vent path including the termination cap.",
  },
];

export default function DryerVentPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.domain },
    { name: "Services", url: `${BUSINESS.domain}/services` },
    { name: "Dryer Vent Cleaning", url: `${BUSINESS.domain}/services/dryer-vent-cleaning` },
  ]);
  const serviceSchema = buildServiceSchema(
    "Dryer Vent Cleaning",
    "dryer-vent-cleaning",
    "Professional dryer vent cleaning in Jacksonville, FL. Removes lint buildup to prevent fires and restore dryer efficiency."
  );
  const faqSchema = buildFAQSchema(faqs);

  return (
    <>
      <SchemaScript schema={[breadcrumbSchema, serviceSchema, faqSchema]} />

      <section style={{ background: "#F8FAFC" }} className="section-pad">
        <div className="container-content">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Dryer vent cleaning" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5" style={{ color: "#0F172A" }}>
            Dryer vent cleaning in Jacksonville, FL
          </h1>
          <div className="answer-box max-w-3xl">
            <p className="text-base leading-relaxed" style={{ color: "#0F172A" }}>
              Professional dryer vent cleaning removes accumulated lint from the full vent path — from the machine connection through every bend to the exterior or rooftop termination. The <a href="https://www.nfpa.org" target="_blank" rel="noopener noreferrer">National Fire Protection Association</a> identifies clogged dryer vents as the leading cause of home dryer fires. Most Jacksonville homes need cleaning <strong>annually</strong>. AL Air Duct Cleaning serves all four Northeast Florida counties with same-day availability.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary">
              <Phone size={18} strokeWidth={1.5} />
              Call for same-day service
            </a>
            <Link href="/contact" className="btn-outline">Get my free estimate</Link>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "white" }}>
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="prose-content">
              <h2>Why dryer vent cleaning matters in Jacksonville</h2>
              <p>
                Every dryer produces lint. Every dryer vent accumulates it. In a short, straight vent with a clear path to the exterior, lint accumulation is slow. In a multi-story Jacksonville townhome where the vent runs up two floors and exits through a rooftop cap, lint collects at every bend and restriction — sometimes to the point of near-complete blockage.
              </p>
              <p>
                When airflow is restricted, two things happen. First, the dryer's exhaust heat can't escape efficiently, so the dryer has to run longer to dry the same load. Second, the temperature inside the restricted vent rises. Lint ignites at relatively low temperatures, and a blocked vent can reach those temperatures during normal dryer operation. This is why the NFPA ranks failure to clean dryer vents as the single leading cause of home dryer fires.
              </p>
              <p>
                Jacksonville's housing mix creates specific challenges. Multi-story homes in Mandarin, Bartram Park and the Southside frequently have long, complex vent runs. Older townhomes in Riverside and Avondale sometimes have original metal duct that has developed interior corrosion, which traps lint more aggressively. New construction in Nocatee and Fruit Cove may have shorter vent paths, but the foil flex duct sometimes used in new builds crushes and restricts more easily than rigid metal.
              </p>

              <h2>What's included in a dryer vent cleaning</h2>
              <ul>
                {[
                  "Full inspection of the vent path from machine to termination",
                  "Removal of accumulated lint using rotary brush and vacuum system",
                  "Inspection and cleaning of the exterior or rooftop termination cap",
                  "Verification of adequate airflow after cleaning",
                  "Confirmation that the flexible connection between the dryer and wall duct is properly seated",
                  "Report on vent condition and any recommendations",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 !list-none">
                    <CheckCircle size={16} strokeWidth={1.5} style={{ color: "#16A34A", marginTop: "3px", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>

              <h2>Signs your dryer vent needs cleaning</h2>
              <ul>
                {[
                  "A normal load takes more than one cycle to dry completely",
                  "Clothes are hotter than usual after a normal cycle",
                  "The laundry room feels warmer than it should while the dryer runs",
                  "A burning smell during dryer operation",
                  "The exterior vent flap doesn't open visibly when the dryer runs",
                  "Visible lint accumulation outside the lint trap or behind the dryer",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 !list-none">
                    <Flame size={16} strokeWidth={1.5} style={{ color: "#F26522", marginTop: "3px", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>

              <h2>Pricing for dryer vent cleaning in Jacksonville</h2>
              <p>
                Dryer vent cleaning in Jacksonville typically costs between <strong>$100 and $200</strong> as a standalone service, depending on vent length and complexity. Multi-story homes with rooftop terminations generally fall toward the higher end. Combined dryer vent and air duct cleaning packages are available at a reduced combined rate. Contact us for a specific estimate.
              </p>
            </div>
            <div>
              <LeadForm headline="Schedule dryer vent cleaning" subline="Same-day available. Response within 1 hour." defaultService="Dryer Vent Cleaning" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ background: "#F8FAFC" }}>
        <div className="container-content max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: "#0F172A" }}>Frequently asked questions</h2>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <div key={i} className="card">
                <h3 className="font-semibold text-base mb-3" style={{ color: "#0F172A" }}>{faq.question}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container-content">
          <h2 className="text-xl font-bold mb-6" style={{ color: "#0F172A" }}>Related services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: "Air Duct Cleaning", href: "/services/air-duct-cleaning", desc: "Full duct system cleaning under negative pressure." },
              { name: "HVAC Cleaning", href: "/services/hvac-cleaning", desc: "Internal HVAC component cleaning." },
              { name: "Residential Air Duct Cleaning", href: "/services/residential-air-duct-cleaning", desc: "Home-specific duct cleaning services." },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="card group">
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#0B5563]" style={{ color: "#0F172A" }}>{s.name}</h3>
                <p className="text-xs" style={{ color: "#475569" }}>{s.desc}</p>
                <div className="mt-2 text-xs font-medium flex items-center gap-1" style={{ color: "#0B5563" }}>
                  Learn more <ArrowRight size={12} strokeWidth={1.5} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
