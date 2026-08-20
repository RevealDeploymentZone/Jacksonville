import Link from "next/link";
import { CheckCircle, Phone, Home, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import SchemaScript from "@/components/SchemaScript";
import { buildBreadcrumbSchema, buildServiceSchema, buildFAQSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/data/business";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Residential air duct cleaning in Jacksonville, FL | AL Air Duct",
  description:
    "Residential air duct cleaning in Jacksonville, FL. Specialists in historic Riverside and Avondale homes, new builds, and military PCS move-in cleaning. Free estimates.",
  path: "/services/residential-air-duct-cleaning",
});

const faqs = [
  {
    question: "How do I know if my Jacksonville home's ducts need cleaning?",
    answer:
      "The clearest signs are visible debris or discoloration at supply registers, a musty or dusty odor when the AC starts, dust accumulating on surfaces unusually fast, or allergy symptoms that are noticeably worse indoors than outdoors. If your home has never had the ducts professionally cleaned, or if you've recently moved in, those are both good reasons to schedule an inspection.",
  },
  {
    question: "Do you clean ducts in older homes with non-standard duct configurations?",
    answer:
      "Yes. Riverside, Avondale, Springfield and Ortega homes from the 1910s–1950s frequently have retrofit duct systems with undersized returns, crawl-space runs, and configurations that aren't in any manual. Our technicians have worked inside these systems and know what to expect. We don't turn down jobs because the ductwork is complicated.",
  },
  {
    question: "What is a move-in duct cleaning and when is it recommended?",
    answer:
      "A move-in duct cleaning is performed before or shortly after occupying a home with unknown duct maintenance history. It removes whatever the previous occupants left behind — which might include pet dander, smoke residue, mold spores, or decades of unfiltered dust. It also gives you a documented baseline for the system's condition. We recommend it for any home where the duct history is unknown, which describes most resale purchases.",
  },
  {
    question: "How long in advance should I schedule a PCS move-in cleaning?",
    answer:
      "We can typically schedule within 24 to 72 hours. Same-day service is available for urgent situations. We understand that PCS timelines don't accommodate three-week waiting lists and we staff accordingly.",
  },
  {
    question: "Will the cleaning disturb my family or pets?",
    answer:
      "The job requires access to all registers and the air handler, and there will be some equipment noise. Most homeowners prefer to be present but not in the immediate work area. Pets should be kept away from work areas during the job. Total disruption time in your living space is minimal — most of the work is at the registers and in mechanical areas.",
  },
];

export default function ResidentialPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.domain },
    { name: "Services", url: `${BUSINESS.domain}/services` },
    { name: "Residential Air Duct Cleaning", url: `${BUSINESS.domain}/services/residential-air-duct-cleaning` },
  ]);
  const serviceSchema = buildServiceSchema(
    "Residential Air Duct Cleaning",
    "residential-air-duct-cleaning",
    "Residential air duct cleaning in Jacksonville, FL for all home types — historic homes, new builds, and PCS move-in cleaning for military families."
  );
  const faqSchema = buildFAQSchema(faqs);

  return (
    <>
      <SchemaScript schema={[breadcrumbSchema, serviceSchema, faqSchema]} />

      <section style={{ background: "#F8FAFC" }} className="section-pad">
        <div className="container-content">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Residential air duct cleaning" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5" style={{ color: "#0F172A" }}>
            Residential air duct cleaning in Jacksonville, FL
          </h1>
          <div className="answer-box max-w-3xl">
            <p className="text-base leading-relaxed" style={{ color: "#0F172A" }}>
              Residential air duct cleaning in Jacksonville is tailored to the home's actual duct configuration — not a one-size-fits-all process. From 1920s Riverside homes with retrofit duct systems to Nocatee new builds full of post-construction dust, each house presents different conditions. AL Air Duct Cleaning Jacksonville handles them all, including PCS move-in cleaning for military families relocating to NAS Jax or Mayport.
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
              <h2>Jacksonville's residential housing stock — what we work with</h2>
              <p>
                Jacksonville's residential market spans more housing age and type than most Florida cities. The Northside and Arlington have ranch-style homes built in the 1960s and 1970s with original fiberglass duct wrapped in insulation that's been deteriorating for fifty years. Riverside, Avondale, Springfield and Ortega have wood-frame Craftsmans and bungalows where central air was retrofitted in the 1970s or 1980s — often poorly. San Marco and Mandarin have everything from mid-century builds to 1990s subdivisions. Nocatee, Bartram Park and the Southside have new builds where post-construction dust has settled into factory-installed ductwork that's never been touched.
              </p>
              <p>
                Each of these situations presents a different cleaning requirement. A 1930s Avondale home with crawl-space duct runs needs different equipment positioning and access planning than a 2022 Nocatee townhome. Technicians who've worked exclusively in new construction can miss what's happening in the older stock, and vice versa. Our Jacksonville team has experience across the full range.
              </p>

              <h2>What's included in residential cleaning</h2>
              <ul>
                {[
                  "Pre-job inspection with photographic documentation",
                  "All supply duct runs cleaned under negative pressure",
                  "All return duct runs cleaned under negative pressure",
                  "Blower wheel and motor housing cleaned",
                  "All registers removed, cleaned, and reinstalled",
                  "Post-job condition report with recommendations",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 !list-none">
                    <CheckCircle size={16} strokeWidth={1.5} style={{ color: "#16A34A", marginTop: "3px", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>

              <h2>Pricing for residential duct cleaning</h2>
              <p>
                Residential duct cleaning in Jacksonville typically ranges from <strong>$300 to $700</strong> depending on home size, vent count, system configuration, and accessibility. Homes with crawl-space duct runs, multiple air handlers, or systems requiring additional time to access properly may fall above this range. We provide written estimates before work begins.
              </p>
            </div>
            <div>
              <LeadForm headline="Get your free estimate" subline="Residential duct cleaning — response within 1 hour." defaultService="Residential Air Duct Cleaning" />
            </div>
          </div>
        </div>
      </section>

      {/* PCS / Military section */}
      <section className="section-pad" style={{ background: "#F8FAFC" }}>
        <div className="container-content max-w-4xl">
          <div className="p-8 rounded-xl" style={{ background: "#0B5563" }}>
            <div className="flex items-start gap-4">
              <Home size={32} strokeWidth={1.5} className="text-white shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-white mb-3">
                  Military move-in cleaning for NAS Jax and Mayport families
                </h2>
                <div className="prose-content space-y-4">
                  <p style={{ color: "#bfdbfe" }}>
                    Moving into a new home on a PCS timeline is different from buying a house on your own schedule. You often have a fixed move-in date, limited time to evaluate the home before you're living in it, and no knowledge of what the previous occupants did or didn't maintain. For military families relocating to Jacksonville for assignments at NAS Jacksonville or Naval Station Mayport, that describes nearly every move.
                  </p>
                  <p style={{ color: "#bfdbfe" }}>
                    A move-in duct cleaning is a practical step, not a luxury add-on. It removes whatever was left in the system by the previous occupants — which might include pet dander if they had animals, residue if anyone smoked, or simply years of dust accumulation that nobody tracked. It gives you a documented starting baseline. And it takes two to four hours, which fits within most PCS schedules.
                  </p>
                  <p style={{ color: "#bfdbfe" }}>
                    We work with military families and understand the scheduling realities. We can typically schedule within 24 to 72 hours and offer early morning, evening, and weekend appointments for families working around report dates.
                  </p>
                </div>
                <a href={`tel:${BUSINESS.phoneRaw}`} className="mt-5 inline-flex items-center gap-2 bg-white font-semibold px-5 py-3 rounded-lg hover:bg-orange-50 transition-colors text-sm" style={{ color: "#0B5563" }}>
                  <Phone size={16} strokeWidth={1.5} />
                  Call to schedule your move-in cleaning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ background: "white" }}>
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

      <section className="section-pad" style={{ background: "#F8FAFC" }}>
        <div className="container-content">
          <h2 className="text-xl font-bold mb-6" style={{ color: "#0F172A" }}>Related services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: "Air Duct Cleaning", href: "/services/air-duct-cleaning", desc: "Full duct system source removal cleaning." },
              { name: "HVAC Cleaning", href: "/services/hvac-cleaning", desc: "Internal HVAC component cleaning." },
              { name: "Sanitization & Deodorization", href: "/services/sanitization-deodorization", desc: "Antimicrobial treatment after cleaning." },
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
