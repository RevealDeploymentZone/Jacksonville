/*
 * IMPORTANT — FLORIDA MOLD LICENSING COMPLIANCE NOTE
 *
 * This page is rendered in the "mold assessor AND remediator licences NOT held" branch.
 * Florida Chapter 468, Part XVI, Florida Statutes regulates mold assessment and mold
 * remediation as SEPARATE licensed activities. The same company CANNOT perform both
 * assessment and remediation on the same project.
 *
 * Because BUSINESS.licenses.dbprMoldRemediator and BUSINESS.licenses.dbprMoldAssessor
 * are currently null, this page:
 *   - Does NOT claim "mold removal" or "mold remediation" as a service
 *   - Does NOT use the words "remediation" as a service claim
 *   - Describes the service as "visual mold inspection and duct cleaning"
 *   - Refers customers to FL-licensed mold assessors and remediators for work
 *     beyond this scope
 *
 * BEFORE GOING LIVE: Have client confirm current licence status and the
 * assessor/remediator separation rule with Florida DBPR or their attorney.
 * Update BUSINESS.licenses values accordingly, then review this page's
 * conditional rendering logic. Do NOT publish claims of licensed mold work
 * without verified licence numbers.
 *
 * Florida DBPR mold licensing: https://www.myfloridalicense.com
 */

import Link from "next/link";
import { CheckCircle, Phone, ShieldCheck, AlertTriangle, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import SchemaScript from "@/components/SchemaScript";
import { buildBreadcrumbSchema, buildServiceSchema, buildFAQSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/data/business";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Mold inspection & duct cleaning in Jacksonville, FL | AL Air Duct",
  description:
    "Visual mold inspection and duct cleaning in Jacksonville, FL. When conditions require licensed remediation, we refer to qualified FL-licensed professionals. Free estimates.",
  path: "/services/mold-inspection-removal",
});

const faqs = [
  {
    question: "What is the difference between duct cleaning and mold remediation in Florida?",
    answer:
      "Duct cleaning removes accumulated debris — including biological material — from duct surfaces. Mold remediation, as defined by Florida Chapter 468, Part XVI, is a separate licensed activity that involves physically removing mold contamination from building materials. Florida law requires a separate DBPR mold remediator licence for remediation work, and prohibits the same firm from performing both mold assessment and mold remediation on the same project. If we find conditions during an inspection that suggest remediation is needed, we refer to licensed Florida mold professionals.",
  },
  {
    question: "What does your mold inspection service actually include?",
    answer:
      "Our inspection is a visual assessment of accessible duct surfaces, registers, the air handler cabinet, and the immediate areas around the system. We document what we observe with photos. If we find evidence of biological growth that's limited to duct surfaces, cleaning and sanitization can address it. If we observe conditions suggesting active growth in wall cavities, behind the air handler, or on building materials — or if the contamination extent is unclear from visual inspection — we refer to a licensed mold assessor.",
  },
  {
    question: "What are signs that my Jacksonville home might have mold in the ductwork?",
    answer:
      "A musty odor that gets stronger when the AC runs. Visible dark discoloration around registers or in the air handler cabinet. Indoor humidity that stays above 60% despite running the air conditioning. Allergy or respiratory symptoms in occupants that are worse indoors than outdoors. Recent water intrusion — storm flooding, a condensate overflow, or a plumbing leak near the HVAC system.",
  },
  {
    question: "My house smells musty — is that always mold?",
    answer:
      "Not always. Musty odors when the AC runs are common in Jacksonville and have several possible sources. Accumulated organic material in duct runs (dust, biological debris) produces odors when air moves through it — this can be addressed by duct cleaning. Standing water in the condensate drain pan produces odors and can promote biological growth — drain cleaning and pan treatment address it. Active mold growth on building materials requires a different response. A visual inspection lets us identify which situation is most likely.",
  },
  {
    question: "Should I be worried about mold if I've had flooding in my home?",
    answer:
      "Flooding that affected areas near the HVAC system — particularly a crawl-space air handler or ductwork running through a flooded space — warrants an inspection. Water in ductwork creates conditions for biological growth that will progress if not addressed. The inspection will tell you what conditions exist, and from there you'll know whether cleaning addresses the issue or whether additional steps are needed.",
  },
  {
    question: "Why does Florida have special rules about mold work?",
    answer:
      "Florida has had well-publicized problems with predatory mold remediation companies — particularly after hurricanes — that inflated the scope of work and created unnecessary alarm. The state legislature passed Chapter 468, Part XVI, partly in response to that history, requiring separate assessor and remediator licences and prohibiting the same firm from doing both on the same project. The intent is to separate the diagnosis from the treatment so that neither party has a financial incentive to overstate the other's scope.",
  },
];

export default function MoldPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.domain },
    { name: "Services", url: `${BUSINESS.domain}/services` },
    { name: "Mold Inspection & Removal", url: `${BUSINESS.domain}/services/mold-inspection-removal` },
  ]);
  const serviceSchema = buildServiceSchema(
    "Mold Inspection and Duct Cleaning",
    "mold-inspection-removal",
    "Visual mold inspection and duct cleaning in Jacksonville, FL. Referral to FL-licensed mold assessors and remediators when conditions require it."
  );
  const faqSchema = buildFAQSchema(faqs);

  const hasMoldLicence = !!(BUSINESS.licenses.dbprMoldRemediator || BUSINESS.licenses.dbprMoldAssessor);

  return (
    <>
      <SchemaScript schema={[breadcrumbSchema, serviceSchema, faqSchema]} />

      <section style={{ background: "#F8FAFC" }} className="section-pad">
        <div className="container-content">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Mold inspection" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5" style={{ color: "#0F172A" }}>
            Mold inspection and duct cleaning in Jacksonville, FL
          </h1>
          <div className="answer-box max-w-3xl">
            <p className="text-base leading-relaxed" style={{ color: "#0F172A" }}>
              AL Air Duct Cleaning Jacksonville provides visual mold inspection and duct cleaning for Jacksonville homes where biological contamination is suspected. When our inspection finds conditions that require licensed mold assessment or remediation — work regulated under <a href="https://www.myfloridalicense.com" target="_blank" rel="noopener noreferrer">Florida Chapter 468, Part XVI</a> — we refer to qualified Florida-licensed professionals. We will not overstate scope to create work that isn't ours to do.
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

      {/* Florida compliance notice */}
      <section style={{ background: "#fff7ed" }} className="py-6">
        <div className="container-content max-w-4xl">
          <div className="flex items-start gap-3 p-5 rounded-xl border border-orange-200">
            <AlertTriangle size={20} strokeWidth={1.5} style={{ color: "#F26522", flexShrink: 0, marginTop: "2px" }} />
            <div>
              <h2 className="font-semibold text-sm mb-2" style={{ color: "#0F172A" }}>
                What we do and don't do — Florida mold licensing
              </h2>
              <p className="text-sm" style={{ color: "#475569" }}>
                Florida law (Chapter 468, Part XVI) requires separate licences for mold assessment and mold remediation. It also prohibits the same firm from performing both on the same project. Our scope at this time is <strong>visual inspection and duct cleaning</strong>. We do not claim to perform mold remediation. When we observe conditions suggesting active growth beyond duct surfaces, we refer you to a Florida-licensed mold assessor. This is not a limitation — it's the legally correct process, and it protects you from having the same company assess and remediate, which Florida specifically prohibits.
              </p>
              {hasMoldLicence && (
                <p className="text-sm mt-2" style={{ color: "#475569" }}>
                  {BUSINESS.licenses.dbprMoldRemediator && (
                    <>FL Mold Remediator Licence: <strong style={{ color: "#0F172A" }}>{BUSINESS.licenses.dbprMoldRemediator}</strong><br /></>
                  )}
                  {BUSINESS.licenses.dbprMoldAssessor && (
                    <>FL Mold Assessor Licence: <strong style={{ color: "#0F172A" }}>{BUSINESS.licenses.dbprMoldAssessor}</strong></>
                  )}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "white" }}>
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="prose-content">
              <h2>What our inspection and duct cleaning service covers</h2>
              <ul>
                {[
                  "Visual inspection of all accessible supply and return registers",
                  "Visual inspection of the air handler cabinet and blower housing",
                  "Photographic documentation of observed conditions",
                  "Full duct cleaning under negative pressure with HEPA-filtered collection",
                  "Sanitization treatment of duct surfaces (when applicable and requested)",
                  "Written report describing observed conditions and any referral recommendations",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 !list-none">
                    <CheckCircle size={16} strokeWidth={1.5} style={{ color: "#16A34A", marginTop: "3px", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>

              <h2>Why mold is genuinely common in Jacksonville ductwork</h2>
              <p>
                Jacksonville sits in a humid subtropical climate. The <a href="https://www.floridahealth.gov" target="_blank" rel="noopener noreferrer">Florida Department of Health</a> and the <a href="https://www.epa.gov/mold" target="_blank" rel="noopener noreferrer">EPA's mold guidance</a> are consistent: mold grows where moisture and organic material are present. In a duct system running ten months a year in a climate with sustained high humidity, the conditions for biological growth are present year-round.
              </p>
              <p>
                This doesn't mean every Jacksonville home has mold in the ducts. It means the conditions here are more favorable for it than in drier markets, and that homeowners who notice persistent musty odors or visible discoloration at registers have a reasonable basis for concern. An inspection is the first step toward knowing what you're actually dealing with.
              </p>

              <h2>The honest picture on mold and health</h2>
              <p>
                The EPA is direct about what the evidence supports. Mold exposure can affect the health of individuals with mold allergies, asthma, or compromised immune systems. For people without those sensitivities, normal levels of mold exposure are unlikely to cause acute symptoms. The <a href="https://www.lung.org/clean-air/indoor-air" target="_blank" rel="noopener noreferrer">American Lung Association</a> recommends controlling moisture as the primary intervention — cleaning and treatment of existing growth is secondary to stopping the source.
              </p>
              <p>
                We won't use mold to frighten you into work you don't need. Jacksonville homeowners have been targeted by exactly that approach for years, and it has understandably made people skeptical of any contractor who mentions mold. Our approach is to document what we observe, explain what it means, and let you decide what to do about it with accurate information.
              </p>

              <h2>When to call a Florida-licensed mold assessor</h2>
              <p>
                If our inspection finds evidence of biological growth that extends beyond duct surfaces — onto building materials, inside wall cavities, or on the framing around the air handler — you need a licensed mold assessor, not a duct cleaning company. An assessor's report will define the scope of any remediation required. A licensed remediator then performs that work. Under Florida law, the same firm cannot do both. We'll provide referrals to Florida-licensed professionals if inspection findings indicate that's the appropriate next step.
              </p>
            </div>
            <div>
              <LeadForm headline="Schedule a mold inspection" subline="Visual inspection and duct cleaning — response within 1 hour." defaultService="Mold Inspection & Removal" />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ background: "#F8FAFC" }} className="section-pad">
        <div className="container-content max-w-4xl">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0F172A" }}>
            Duct cleaning vs. mold remediation: which do you need?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <caption className="text-sm text-left mb-3" style={{ color: "#475569" }}>
                Understanding the difference between these two services matters for getting the right help
              </caption>
              <thead>
                <tr style={{ background: "#F8FAFC" }}>
                  <th scope="col" className="p-3 text-left font-semibold border border-[#E2E8F0]" style={{ color: "#0F172A" }}>Situation</th>
                  <th scope="col" className="p-3 text-left font-semibold border border-[#E2E8F0]" style={{ color: "#0F172A" }}>Right service</th>
                  <th scope="col" className="p-3 text-left font-semibold border border-[#E2E8F0]" style={{ color: "#0F172A" }}>Why</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Musty smell when AC runs, no visible growth", "Duct cleaning + sanitization", "Organic debris on duct surfaces is the likely source. Cleaning removes it."],
                  ["Dark spots at registers or in air handler cabinet", "Duct cleaning + mold inspection", "Visual inspection documents what's there; cleaning addresses duct-surface contamination."],
                  ["Visible growth on building materials near HVAC", "FL-licensed mold assessor first", "Scope exceeds duct cleaning. Assessment required before remediation."],
                  ["Post-flooding with water in duct system", "Duct cleaning + assessment referral", "Water intrusion contamination profile needs both duct cleaning and evaluation of surrounding materials."],
                  ["Confirmed active growth, assessment completed", "FL-licensed mold remediator", "Licensed work required by Florida law. Cannot be combined with assessment by same firm."],
                ].map(([situation, service, why], i) => (
                  <tr key={i}>
                    <td className="p-3 border border-[#E2E8F0]" style={{ color: "#0F172A" }}>{situation}</td>
                    <td className="p-3 border border-[#E2E8F0] font-medium" style={{ color: "#0B5563" }}>{service}</td>
                    <td className="p-3 border border-[#E2E8F0]" style={{ color: "#475569" }}>{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

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
              { name: "Air Duct Cleaning", href: "/services/air-duct-cleaning", desc: "Full duct system cleaning under negative pressure." },
              { name: "Sanitization & Deodorization", href: "/services/sanitization-deodorization", desc: "Antimicrobial treatment applied after cleaning." },
              { name: "HVAC Cleaning", href: "/services/hvac-cleaning", desc: "Internal component cleaning including coil area." },
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
