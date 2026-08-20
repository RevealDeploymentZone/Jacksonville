import Link from "next/link";
import { CheckCircle, Phone, Sparkles, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import SchemaScript from "@/components/SchemaScript";
import { buildBreadcrumbSchema, buildServiceSchema, buildFAQSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/data/business";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Duct sanitization & deodorization in Jacksonville, FL | AL Air Duct",
  description:
    "EPA-registered antimicrobial duct sanitization in Jacksonville, FL. Neutralizes odors from mold, pets, smoke. Applied after cleaning. Free estimates.",
  path: "/services/sanitization-deodorization",
});

const faqs = [
  {
    question: "What does duct sanitization actually do?",
    answer:
      "Sanitization applies an EPA-registered antimicrobial solution to the interior surfaces of cleaned ducts. It neutralizes odor-causing biological material, kills surface microorganisms, and leaves a residue that inhibits future microbial growth on treated surfaces. It doesn't replace cleaning — it's applied after cleaning, to surfaces that are already free of accumulated debris.",
  },
  {
    question: "Is duct sanitization safe for people and pets?",
    answer:
      "We use EPA-registered products specifically approved for use in HVAC systems. The application process requires the system to be off during application and a drying period before the system is restarted. People and pets are kept away from the work area during application. After the drying period, the product is inert on the duct surfaces and the system can be operated normally.",
  },
  {
    question: "Will sanitization get rid of the musty smell when my AC runs?",
    answer:
      "It depends on what's causing the smell. If the odor is from biological material on duct surfaces, sanitization after cleaning addresses it effectively. If the odor comes from condensation buildup in the air handler, a standing water problem in the drain pan, or a moisture source that's still active, the smell will return after treatment. We'll identify the source during the inspection and tell you honestly which problem you have.",
  },
  {
    question: "Is sanitization recommended for Jacksonville homes specifically?",
    answer:
      "Jacksonville's sustained high humidity and long HVAC operating season make duct surfaces more hospitable to biological contamination than in drier markets. For homes where musty odors have been present, where water intrusion has occurred, or where the system has been closed up without use for an extended period, sanitization is a reasonable follow-up to cleaning.",
  },
  {
    question: "How much does duct sanitization add to the cleaning cost?",
    answer:
      "Sanitization is typically priced as an add-on to a duct cleaning job. The cost depends on the total duct surface area treated — generally $100 to $200 for a standard residential home when added to a cleaning package. Contact us for a specific estimate.",
  },
];

export default function SanitizationPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.domain },
    { name: "Services", url: `${BUSINESS.domain}/services` },
    { name: "Sanitization & Deodorization", url: `${BUSINESS.domain}/services/sanitization-deodorization` },
  ]);
  const serviceSchema = buildServiceSchema(
    "Duct Sanitization and Deodorization",
    "sanitization-deodorization",
    "EPA-registered antimicrobial duct sanitization in Jacksonville, FL. Applied after cleaning to neutralize odors and inhibit microbial growth."
  );
  const faqSchema = buildFAQSchema(faqs);

  return (
    <>
      <SchemaScript schema={[breadcrumbSchema, serviceSchema, faqSchema]} />

      <section style={{ background: "#F8FAFC" }} className="section-pad">
        <div className="container-content">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Sanitization & deodorization" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5" style={{ color: "#0F172A" }}>
            Duct sanitization and deodorization in Jacksonville, FL
          </h1>
          <div className="answer-box max-w-3xl">
            <p className="text-base leading-relaxed" style={{ color: "#0F172A" }}>
              Duct sanitization applies an EPA-registered antimicrobial solution to duct surfaces after cleaning. It neutralizes odors from biological growth, pets, and smoke, and inhibits future microbial growth on treated surfaces. The treatment is always applied after a complete duct cleaning — not as a substitute for it. Pricing for residential homes is typically <strong>$100–$200</strong> added to a cleaning package.
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
              <h2>When sanitization makes sense in a Jacksonville home</h2>
              <p>
                Sanitization is not something every duct cleaning requires. In a home where the system is in good condition, no moisture events have occurred, and the cleaning found straightforward dust accumulation, there's no compelling reason to add the treatment. It's an appropriate follow-up in specific situations:
              </p>
              <ul>
                <li><strong>Post-moisture intrusion.</strong> After any flooding, condensate overflow, or water entry into the duct system, the cleaning removes the physical debris but organic residue can remain on surfaces. Sanitization addresses the microbial component of that residue.</li>
                <li><strong>Persistent musty odors after cleaning.</strong> If the system has been cleaned and the odor returns within days of restarting, there's typically a biological source on duct surfaces. Sanitization in a second pass can address what the cleaning didn't fully resolve.</li>
                <li><strong>Pet or smoke residue.</strong> Homes with indoor pets or smokers have organic residue deposited throughout the duct system over time. Cleaning removes the bulk of it; sanitization neutralizes what the brushes can't reach.</li>
                <li><strong>Move-in cleaning for a home with unknown history.</strong> When you don't know what was living or happening in a home, a complete cleaning plus sanitization is a reasonable reset.</li>
                <li><strong>Coastal properties.</strong> Jacksonville Beach, Atlantic Beach, Neptune Beach and Ponte Vedra homes deal with salt-air loading in their HVAC systems. Salt deposits provide a surface that microbial growth colonizes more easily. Sanitization as a regular follow-up to cleaning is more defensible in coastal homes than inland ones.</li>
              </ul>

              <h2>What the treatment process looks like</h2>
              <ul>
                {[
                  "Complete duct cleaning is performed first",
                  "All registers are accessible and system is off",
                  "EPA-registered antimicrobial is applied via fogging or direct application to all duct surfaces",
                  "Application includes supply ducts, return ducts, and air handler cabinet surfaces",
                  "Drying period of 30–60 minutes before system restart",
                  "Post-application walkthrough confirms complete coverage",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 !list-none">
                    <CheckCircle size={16} strokeWidth={1.5} style={{ color: "#16A34A", marginTop: "3px", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>

              <h2>The honest limits of sanitization</h2>
              <p>
                Sanitization does not fix a moisture problem. If your system is developing biological growth because of sustained condensation inside duct runs, a drain pan that doesn't drain properly, or duct insulation that has broken down and allows moisture entry, treating the symptoms without addressing those sources produces diminishing returns. We'll identify these issues during inspection and tell you what they require.
              </p>
              <p>
                Sanitization also does not replace cleaning. Products applied over accumulated debris don't penetrate to duct surfaces. The cleaning comes first, every time.
              </p>
            </div>
            <div>
              <LeadForm headline="Schedule sanitization service" subline="Add deodorization to your duct cleaning — response within 1 hour." defaultService="Sanitization & Deodorization" />
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
              { name: "Air Duct Cleaning", href: "/services/air-duct-cleaning", desc: "Full duct system cleaning — required before sanitization." },
              { name: "Mold Inspection", href: "/services/mold-inspection-removal", desc: "Visual inspection when biological growth is suspected." },
              { name: "HVAC Cleaning", href: "/services/hvac-cleaning", desc: "Internal component cleaning for complete results." },
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
