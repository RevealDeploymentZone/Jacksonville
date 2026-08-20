import Link from "next/link";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import SchemaScript from "@/components/SchemaScript";
import { buildBreadcrumbSchema, buildServiceSchema, buildFAQSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/data/business";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "HVAC cleaning in Jacksonville, FL | AL Air Duct",
  description:
    "Complete HVAC system cleaning in Jacksonville, FL. Blower wheel, evaporator coil, and air handler cleaning. Serving Duval, St. Johns, Clay and Nassau counties.",
  path: "/services/hvac-cleaning",
});

const faqs = [
  {
    question: "What does HVAC cleaning include beyond duct cleaning?",
    answer:
      "HVAC cleaning covers internal system components that lie outside the duct runs: the blower wheel and housing, the evaporator coil access area, the drain pan, the air handler cabinet interior, and the motor housing. These surfaces accumulate dust and biological material that directly affects system efficiency and air quality, but they're not addressed by duct cleaning alone.",
  },
  {
    question: "How does a dirty blower wheel affect my system?",
    answer:
      "A blower wheel with significant dust buildup becomes unbalanced. It moves less air per rotation, which means the system runs longer to reach the thermostat setpoint. The imbalance also accelerates wear on the motor bearings. A clean blower wheel restores designed airflow and reduces operating load on the motor.",
  },
  {
    question: "Can dirty HVAC components affect air quality?",
    answer:
      "Yes. The blower wheel and air handler cabinet are in the airstream. Accumulated dust and biological material on these surfaces contributes to the particulate load in your conditioned air. In Jacksonville's high-humidity environment, the moisture that condenses on the evaporator coil creates a surface that biological growth can colonize if organic material is present.",
  },
  {
    question: "How often should HVAC components be professionally cleaned in Jacksonville?",
    answer:
      "Most systems operating in Jacksonville's climate benefit from a full component cleaning every three to five years, depending on filter maintenance, occupancy, and system age. Homes where filter changes have been inconsistent, or systems that run ten or more months per year, tend toward the shorter interval.",
  },
  {
    question: "Does HVAC cleaning improve energy efficiency?",
    answer:
      "Cleaning can restore efficiency that has been lost to contamination — particularly a clean blower wheel (which affects airflow directly) and a clean evaporator coil (which affects heat transfer). Whether it produces a measurable reduction in your JEA bill depends on how contaminated the system was to begin with. We won't promise a specific percentage — the evidence varies by system and condition.",
  },
];

export default function HVACCleaningPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.domain },
    { name: "Services", url: `${BUSINESS.domain}/services` },
    { name: "HVAC Cleaning", url: `${BUSINESS.domain}/services/hvac-cleaning` },
  ]);
  const serviceSchema = buildServiceSchema(
    "HVAC Cleaning",
    "hvac-cleaning",
    "Complete HVAC system cleaning in Jacksonville, FL covering blower wheel, evaporator coil, air handler cabinet, and connected duct runs."
  );
  const faqSchema = buildFAQSchema(faqs);

  return (
    <>
      <SchemaScript schema={[breadcrumbSchema, serviceSchema, faqSchema]} />

      <section style={{ background: "#F8FAFC" }} className="section-pad">
        <div className="container-content">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "HVAC cleaning" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5" style={{ color: "#0F172A" }}>
            HVAC cleaning in Jacksonville, FL
          </h1>
          <div className="answer-box max-w-3xl">
            <p className="text-base leading-relaxed" style={{ color: "#0F172A" }}>
              HVAC cleaning addresses the internal components of your system — blower wheel, evaporator coil area, drain pan, and air handler cabinet — that accumulate contamination outside the duct runs themselves. It's typically performed alongside or following duct cleaning for a complete system reset. Pricing depends on system size and condition. AL Air Duct Cleaning Jacksonville serves all of Duval, St. Johns, Clay and Nassau counties.
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
              <h2>What's included in HVAC cleaning</h2>
              <ul>
                {[
                  "Blower wheel cleaning — removes dust and debris from blades to restore balanced airflow",
                  "Motor housing cleaning",
                  "Evaporator coil access area inspection and surface cleaning",
                  "Drain pan cleaning and inspection for standing water or algae",
                  "Air handler cabinet interior cleaning",
                  "Filter slot and media inspection",
                  "All connected duct runs cleaned under negative pressure (when bundled with duct cleaning)",
                  "Post-cleaning condition report",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 !list-none">
                    <CheckCircle size={16} strokeWidth={1.5} style={{ color: "#16A34A", marginTop: "3px", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>

              <h2>Why Jacksonville's climate affects HVAC components specifically</h2>
              <p>
                The evaporator coil in a Jacksonville HVAC system runs wet during most of the year. It removes moisture from the air as part of the dehumidification process, and that moisture drips into the drain pan before exiting through the condensate drain. This is normal. What's not normal is when the drain pan holds standing water because the drain is restricted, or when biological growth colonizes the wet coil face and drain pan because there's organic material present.
              </p>
              <p>
                In northeast Florida's climate, where humidity is sustained for most of the year and systems run long cycles, keeping the coil area clean matters more than it does in drier climates. The <a href="https://www.epa.gov/indoor-air-quality-iaq/should-you-have-air-ducts-your-home-cleaned" target="_blank" rel="noopener noreferrer">EPA's duct cleaning guidance</a> specifically flags biological growth on coils as a situation warranting action — because the coil is in the airstream and contamination there reaches conditioned air directly.
              </p>
              <p>
                Blower wheel contamination is less climate-specific but equally real. In a system where filter changes have been missed, dust passes through the filter media and deposits on the blower wheel blades. Over months and years this builds into a thick layer. A contaminated blower wheel moves less air, creates noise and vibration, and puts additional load on the motor. Cleaning restores the designed airflow characteristics of the system.
              </p>

              <h2>Pricing for HVAC cleaning in Jacksonville</h2>
              <p>
                HVAC cleaning as a standalone service typically costs between <strong>$200 and $400</strong> depending on system size, component condition, and accessibility. Most homeowners bundle HVAC cleaning with full duct cleaning for a complete system job. Combined service packages are priced below the sum of the two services separately. Contact us for a specific estimate.
              </p>
            </div>
            <div>
              <LeadForm headline="Schedule HVAC cleaning" subline="Full system cleaning — response within 1 hour." defaultService="HVAC Cleaning" />
            </div>
          </div>
        </div>
      </section>

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

      <section className="section-pad" style={{ background: "white" }}>
        <div className="container-content">
          <h2 className="text-xl font-bold mb-6" style={{ color: "#0F172A" }}>Related services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: "Air Duct Cleaning", href: "/services/air-duct-cleaning", desc: "Full duct system source removal cleaning." },
              { name: "Sanitization & Deodorization", href: "/services/sanitization-deodorization", desc: "Antimicrobial treatment for HVAC and duct surfaces." },
              { name: "Residential Air Duct Cleaning", href: "/services/residential-air-duct-cleaning", desc: "Home-specific duct and HVAC cleaning." },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="card group">
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#0B5563]" style={{ color: "#0F172A" }}>{s.name}</h3>
                <p className="text-xs" style={{ color: "#475569" }}>{s.desc}</p>
                <div className="mt-2 text-xs font-medium flex items-center gap-1" style={{ color: "#0B5563" }}>Learn more <ArrowRight size={12} strokeWidth={1.5} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
