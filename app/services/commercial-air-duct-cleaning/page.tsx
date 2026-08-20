import Link from "next/link";
import { CheckCircle, Phone, Building2, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import SchemaScript from "@/components/SchemaScript";
import { buildBreadcrumbSchema, buildServiceSchema, buildFAQSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/data/business";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Commercial air duct cleaning in Jacksonville, FL | AL Air Duct",
  description:
    "Commercial HVAC duct cleaning in Jacksonville, FL for offices, retail, restaurants, medical, and multi-unit buildings. After-hours scheduling available. Free estimates.",
  path: "/services/commercial-air-duct-cleaning",
});

const faqs = [
  {
    question: "Can commercial duct cleaning be scheduled after hours to avoid disruption?",
    answer:
      "Yes. We offer evening, overnight, and weekend scheduling for commercial clients whose operations can't accommodate a daytime crew. The scope and timeline will be confirmed before the job — most commercial jobs require more lead time than residential, and we build the schedule around your operational needs.",
  },
  {
    question: "Do you work in occupied commercial buildings?",
    answer:
      "Yes, with appropriate precautions. We use negative pressure equipment that keeps debris contained in the collection unit rather than releasing it into the space. For occupied buildings, we typically work zone by zone rather than the whole system at once, minimizing disruption to active areas.",
  },
  {
    question: "What commercial property types do you service in Jacksonville?",
    answer:
      "Office buildings, retail spaces, restaurants and food service, medical and dental offices, schools and childcare facilities, hotels, warehouses with conditioned space, and multi-unit residential buildings. Each has different compliance considerations and we're familiar with the requirements relevant to each building type.",
  },
  {
    question: "Can commercial duct cleaning help with HVAC warranty compliance?",
    answer:
      "Many commercial HVAC warranties require documented maintenance to remain valid. A professional cleaning with a written condition report can be part of the maintenance documentation your building's HVAC warranty requires. We provide written pre- and post-job documentation for every commercial job.",
  },
  {
    question: "How is commercial duct cleaning priced?",
    answer:
      "Commercial pricing is based on the total linear footage of ductwork, system complexity, the number of units, and scheduling requirements (after-hours work carries a premium). We provide written estimates after an on-site or documented assessment. We don't provide binding commercial quotes by phone without a site review.",
  },
];

export default function CommercialPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.domain },
    { name: "Services", url: `${BUSINESS.domain}/services` },
    { name: "Commercial Air Duct Cleaning", url: `${BUSINESS.domain}/services/commercial-air-duct-cleaning` },
  ]);
  const serviceSchema = buildServiceSchema(
    "Commercial Air Duct Cleaning",
    "commercial-air-duct-cleaning",
    "Commercial HVAC duct cleaning in Jacksonville, FL for offices, retail, restaurants, medical offices, and multi-unit buildings."
  );
  const faqSchema = buildFAQSchema(faqs);

  return (
    <>
      <SchemaScript schema={[breadcrumbSchema, serviceSchema, faqSchema]} />

      <section style={{ background: "#F8FAFC" }} className="section-pad">
        <div className="container-content">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Commercial air duct cleaning" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5" style={{ color: "#0F172A" }}>
            Commercial air duct cleaning in Jacksonville, FL
          </h1>
          <div className="answer-box max-w-3xl">
            <p className="text-base leading-relaxed" style={{ color: "#0F172A" }}>
              Commercial air duct cleaning in Jacksonville covers HVAC ductwork in offices, retail spaces, restaurants, medical facilities, schools, and multi-unit residential buildings. Work is scheduled to minimize operational disruption — including after-hours, overnight, and weekend availability. AL Air Duct Cleaning Jacksonville serves all four Northeast Florida counties with written pre- and post-job documentation on every commercial job.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary">
              <Phone size={18} strokeWidth={1.5} />
              Call to discuss commercial service
            </a>
            <Link href="/contact" className="btn-outline">Get a commercial estimate</Link>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "white" }}>
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="prose-content">
              <h2>Commercial properties we service in Jacksonville</h2>
              <ul>
                {[
                  "Office buildings — single and multi-tenant",
                  "Retail stores and shopping centers",
                  "Restaurants and food service facilities",
                  "Medical and dental offices",
                  "Outpatient clinics and urgent care centers",
                  "Schools, daycares, and educational facilities",
                  "Hotels and extended-stay properties",
                  "Warehouses and distribution centers with conditioned space",
                  "Multi-unit residential buildings (condominiums, apartment complexes)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 !list-none">
                    <CheckCircle size={16} strokeWidth={1.5} style={{ color: "#16A34A", marginTop: "3px", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>

              <h2>Commercial duct cleaning in Jacksonville's climate</h2>
              <p>
                Commercial HVAC systems in Jacksonville run nearly year-round. Office buildings, retail spaces, and restaurants on the Southside, Baymeadows corridor, and downtown run their systems continuously from spring through late fall. That continuous operation accelerates contamination buildup compared to comparable facilities in cooler markets.
              </p>
              <p>
                Medical facilities and food service establishments have specific indoor air quality requirements that make regular duct maintenance part of compliance, not just general upkeep. Jacksonville's restaurant and medical office markets are both significant, and we have experience with the documentation requirements that operators in those industries need from their HVAC maintenance providers.
              </p>
              <p>
                For property managers handling multiple buildings in Jacksonville — particularly in the Southside, Baymeadows, and Deerwood/Tinseltown corridor — we offer building maintenance agreements that provide scheduled service for multiple properties at pre-agreed pricing. Contact us to discuss what that looks like for your portfolio.
              </p>

              <h2>Commercial pricing</h2>
              <p>
                Commercial duct cleaning is priced per linear foot of ductwork, adjusted for system complexity, scheduling requirements, and access conditions. We don't provide binding commercial estimates by phone — a site review or documented system plan is required. Contact us to schedule an assessment. All commercial work includes written pre- and post-cleaning documentation.
              </p>
            </div>
            <div>
              <LeadForm headline="Request a commercial estimate" subline="We'll call back within 1 hour to discuss your property." defaultService="Commercial Air Duct Cleaning" />
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
              { name: "Air Duct Cleaning", href: "/services/air-duct-cleaning", desc: "NADCA-standard duct cleaning process." },
              { name: "HVAC Cleaning", href: "/services/hvac-cleaning", desc: "Full system internal component cleaning." },
              { name: "Sanitization & Deodorization", href: "/services/sanitization-deodorization", desc: "Antimicrobial treatment for commercial ducts." },
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
