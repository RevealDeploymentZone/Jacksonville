import Link from "next/link";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import SchemaScript from "@/components/SchemaScript";
import {
  buildBreadcrumbSchema,
  buildServiceSchema,
  buildFAQSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/data/business";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Air duct cleaning in Jacksonville, FL | AL Air Duct",
  description:
    "Professional air duct cleaning in Jacksonville, FL. NADCA-standard negative pressure methods. Serving Duval, St. Johns, Clay and Nassau counties. Free estimates.",
  path: "/services/air-duct-cleaning",
});

const faqs = [
  {
    question: "How much does air duct cleaning cost in Jacksonville?",
    answer:
      "Jacksonville residential air duct cleaning typically ranges from $300 to $700, depending on the home's square footage, number of vents, system configuration, and whether additional services like sanitization are included. Older homes in Riverside or Avondale with extensive duct runs — some of which run through crawl spaces or unconditioned attics — tend toward the higher end. Contact us for a site-specific estimate.",
  },
  {
    question: "How long does a residential duct cleaning take?",
    answer:
      "Most residential jobs in the 1,500 to 2,500 square foot range take between two and four hours. Larger homes, homes with more complex duct layouts, or homes where the system needs significant work before cleaning begins can take longer. We'll give you a time estimate before we start.",
  },
  {
    question: "Will the technicians make a mess in my home?",
    answer:
      "No. The negative pressure process keeps the entire system under suction toward the collection unit. Nothing is released into your living space. We put down floor protection at work areas and clean up after ourselves. Your furniture and floors stay where they are.",
  },
  {
    question: "Does duct cleaning really work, or is it a waste of money?",
    answer:
      "The EPA is straightforward: duct cleaning removes accumulated debris from duct surfaces. Whether that matters to you depends on what's in the ducts and what you're trying to address. If your ducts are contaminated with biological growth, post-construction dust, pollen, or pet dander, cleaning removes it. Duct cleaning does not fix moisture problems or compensate for a failing filter — those require their own solutions. We'll tell you honestly what we find before recommending additional services.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "Yes. We need someone with authority over the property to be present so we can perform the pre-cleaning walkthrough, document conditions, and answer any questions during the job. We can work around schedules — including early morning and evening appointments.",
  },
  {
    question: "Can duct cleaning help with allergies in Jacksonville's pollen season?",
    answer:
      "It can help. Jacksonville's spring pollen season runs roughly February through April, and your HVAC system deposits fine pollen particles in return duct runs that filters don't fully capture. Cleaning removes that accumulated pollen from duct surfaces. Pairing the cleaning with a high-MERV filter change maximizes the benefit.",
  },
  {
    question: "What is NADCA standard and why does it matter?",
    answer:
      "NADCA (National Air Duct Cleaners Association) sets the industry standard for source removal duct cleaning — the method that actually removes contamination from ducts rather than just loosening and recirculating it. The key elements are negative pressure (the system runs under suction toward a HEPA-filtered collection unit) and physical agitation of duct surfaces. Companies that don't use negative pressure may clean registers and visible surfaces but leave duct walls untouched.",
  },
];

export default function AirDuctCleaningPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.domain },
    { name: "Services", url: `${BUSINESS.domain}/services` },
    { name: "Air Duct Cleaning", url: `${BUSINESS.domain}/services/air-duct-cleaning` },
  ]);
  const serviceSchema = buildServiceSchema(
    "Air Duct Cleaning",
    "air-duct-cleaning",
    "Professional residential and commercial air duct cleaning in Jacksonville, FL using NADCA-standard negative pressure methods."
  );
  const faqSchema = buildFAQSchema(faqs);

  return (
    <>
      <SchemaScript schema={[breadcrumbSchema, serviceSchema, faqSchema]} />

      {/* Hero */}
      <section style={{ background: "#F8FAFC" }} className="section-pad">
        <div className="container-content">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Air duct cleaning" },
            ]}
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5" style={{ color: "#0F172A" }}>
            Air duct cleaning in Jacksonville, FL
          </h1>
          {/* Answer-first paragraph — snippet target */}
          <div id="answer-block" className="answer-box max-w-3xl">
            <p className="text-base leading-relaxed" style={{ color: "#0F172A" }}>
              Professional air duct cleaning in Jacksonville removes accumulated dust, pollen, debris, and biological material from supply and return duct runs using NADCA-standard negative pressure methods. Residential jobs typically cost <strong>$300–$700</strong> and take two to four hours. AL Air Duct Cleaning Jacksonville serves all of Duval, St. Johns, Clay and Nassau counties with same-day availability.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary">
              <Phone size={18} strokeWidth={1.5} />
              Call for same-day service
            </a>
            <Link href="/contact" className="btn-outline">
              Get my free estimate
            </Link>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="prose-content">
              <h2>What's included in a standard air duct cleaning</h2>
              <p>
                A full residential duct cleaning from AL Air Duct Cleaning Jacksonville covers every component in the air distribution system — not just the registers you can see from the floor.
              </p>
              <ul>
                {[
                  "Pre-job inspection with photographic documentation",
                  "All supply duct runs cleaned under negative pressure",
                  "All return duct runs cleaned under negative pressure",
                  "Blower wheel and motor housing cleaned",
                  "Evaporator coil access area inspected and cleaned",
                  "All supply and return registers removed, cleaned, and reinstalled",
                  "HEPA-filtered collection — nothing released into living space",
                  "Post-job walkthrough and condition report",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 !list-none">
                    <CheckCircle size={16} strokeWidth={1.5} style={{ color: "#16A34A", marginTop: "3px", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Optional add-ons include antimicrobial sanitization and deodorization treatment applied to duct surfaces after the cleaning is complete.
              </p>
            </div>

            {/* Lead form */}
            <div>
              <LeadForm
                headline="Get your free estimate"
                subline="Air duct cleaning — no obligation, response within 1 hour."
                defaultService="Air Duct Cleaning"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad" style={{ background: "#F8FAFC" }}>
        <div className="container-content">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#0F172A" }}>
            How air duct cleaning works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: 1, name: "Inspection", text: "We inspect all visible registers, accessible duct runs, and the air handler cabinet. Conditions are photographed before work begins." },
              { step: 2, name: "Negative pressure setup", text: "A HEPA-filtered collection unit is connected to the main duct trunk. All registers are sealed except the work register. The system runs under negative pressure throughout the job." },
              { step: 3, name: "Agitation and extraction", text: "Compressed air whips and rotary brushes dislodge debris from duct walls, driving it toward the collection unit. Supply and return ducts are worked separately." },
              { step: 4, name: "Final inspection", text: "We confirm all registers are clean and properly reinstalled, document post-cleaning conditions, and walk you through findings before leaving." },
            ].map((step) => (
              <div key={step.step} className="card">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4" style={{ background: "#0B5563" }}>
                  {step.step}
                </div>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "#0F172A" }}>{step.name}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#475569" }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who needs it */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container-content prose-content max-w-4xl">
          <h2>Who should schedule air duct cleaning in Jacksonville?</h2>
          <p>
            There is no universal rule that says every home needs duct cleaning every year. The EPA is explicit that cleaning should be based on observable conditions, not a fixed calendar. What that means practically is that certain situations reliably indicate a need for cleaning:
          </p>
          <ul>
            <li><strong>Homes that have never been professionally cleaned.</strong> Many Jacksonville homes — particularly those built in the 1970s, 1980s and 1990s — have original duct systems that have never seen a cleaning crew. That's 30 to 50 years of accumulated debris.</li>
            <li><strong>Post-renovation or construction.</strong> Drywall dust, fiberglass particles from insulation, and construction debris enter duct systems during renovation. A thorough cleaning after major work is not optional — it's practical.</li>
            <li><strong>After any water intrusion.</strong> Storm flooding, condensate overflow, or a broken pipe near the air handler can introduce moisture into ductwork. Moisture and organic debris together create conditions for biological growth. The contamination profile of a water-damaged duct system is different from routine accumulation.</li>
            <li><strong>Move-in cleaning.</strong> If you're moving into a home with an unknown maintenance history — especially relevant for Jacksonville's constant PCS population near NAS Jax and Mayport — a move-in cleaning gives you a documented baseline and removes whatever the previous occupants left behind.</li>
            <li><strong>Persistent indoor allergy or respiratory symptoms.</strong> If occupants notice symptoms that are worse indoors than outdoors, that differential is a signal worth investigating. Duct cleaning is one tool in that investigation — not a guaranteed fix, but a reasonable starting point.</li>
          </ul>

          <h2>Jacksonville-specific conditions that affect duct cleaning</h2>
          <p>
            Several conditions specific to Jacksonville and Northeast Florida directly affect what we find when we open a duct system and what we recommend as a result.
          </p>
          <p>
            <strong>Pine pollen.</strong> Jacksonville's tree canopy — particularly the pine populations across Duval and Nassau counties — produces a heavy pollen load from roughly February through April. Fine pollen particles that pass through or around a clogged filter deposit inside return ducts and are recirculated whenever the system operates. In a climate where the AC runs nine or ten months a year, that recirculation period is long.
          </p>
          <p>
            <strong>Humidity and duct insulation.</strong> Northeast Florida's sustained summer humidity — typically in the mid-to-high 70s percent range — creates conditions where poorly insulated or degraded duct runs form condensation on interior surfaces. That moisture, combined with the organic material that accumulates in any duct system, creates the conditions the <a href="https://www.epa.gov/mold" target="_blank" rel="noopener noreferrer">EPA describes</a> as favorable for biological growth. Duct cleaning removes the accumulated organic material. It does not fix the insulation or seal the duct leaks that allow moisture entry — those issues need their own remediation.
          </p>
          <p>
            <strong>Older homes with retrofit duct systems.</strong> Riverside, Avondale, Springfield, and Ortega have large housing stocks from the early 1900s. Central air was added to most of these homes decades after original construction, often with undersized returns and duct runs through crawl spaces that nobody has accessed since the original installation. These systems carry a different contamination profile than new builds, and they require technicians who have worked inside them.
          </p>

          <h2>Pricing guidance for Jacksonville air duct cleaning</h2>
          <p>
            Pricing for residential duct cleaning in Jacksonville depends on several factors: the home's square footage and number of vents, system configuration (single-zone or multi-zone, the number of return runs), accessibility (duct runs in finished basements or tight attic spaces take more time), and whether additional services like sanitization are included.
          </p>
          <p>
            Range for a standard Jacksonville home: <strong>$300 to $700.</strong> Larger homes with more complex duct layouts, or jobs requiring additional services, will fall outside that range. We provide written estimates before any work begins. There are no surprise charges for accessibility, travel within our service area, or work that takes longer than expected when the extra time is attributable to conditions we should have found in the initial inspection.
          </p>
          <p>
            Be cautious of very low advertised prices (under $100 for a whole-house cleaning). These are typically loss-leader offers that result in upselling on-site or minimal work that doesn't meet NADCA source-removal standards. The difference is whether the job places the system under negative pressure — without that, duct surfaces aren't being cleaned, they're being disturbed.
          </p>
        </div>
      </section>

      {/* Definition boxes */}
      <section style={{ background: "#F8FAFC" }} className="py-10">
        <div className="container-content max-w-4xl">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0F172A" }}>Key terms explained</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { term: "NADCA", def: "National Air Duct Cleaners Association. Sets the industry standard (ACR — Assessment, Cleaning and Restoration of HVAC Systems) for professional duct cleaning. NADCA-standard cleaning requires source removal — physically dislodging and capturing debris under negative pressure." },
              { term: "Negative pressure", def: "Operating condition where the air pressure inside the duct system is lower than the surrounding space. Created by connecting a collection unit to the duct trunk. Debris dislodged during cleaning travels toward the low-pressure collection unit rather than being released into the room." },
              { term: "HEPA filtration", def: "High-Efficiency Particulate Air filter. Captures at least 99.97% of particles 0.3 microns in diameter. Required on collection equipment to prevent dislodged debris — including biological material — from being exhausted back into the building." },
              { term: "Microbial growth", def: "Biological contamination — most commonly mold, mildew, and bacteria — that grows on duct surfaces when moisture and organic material are present. Common in Jacksonville due to sustained high humidity and systems that develop condensation inside duct runs." },
            ].map((item) => (
              <div key={item.term} className="definition-box">
                <span className="font-semibold" style={{ color: "#0F172A" }}>{item.term}</span>
                <span style={{ color: "#475569" }}> — {item.def}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container-content max-w-4xl">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0F172A" }}>
            Duct cleaning vs. related services: what each does
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <caption className="text-sm text-left mb-3" style={{ color: "#475569" }}>
                Understanding which service addresses your situation
              </caption>
              <thead>
                <tr style={{ background: "#F8FAFC" }}>
                  <th scope="col" className="p-3 text-left font-semibold border border-[#E2E8F0]" style={{ color: "#0F172A" }}>Service</th>
                  <th scope="col" className="p-3 text-left font-semibold border border-[#E2E8F0]" style={{ color: "#0F172A" }}>What it does</th>
                  <th scope="col" className="p-3 text-left font-semibold border border-[#E2E8F0]" style={{ color: "#0F172A" }}>When you need it</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Air duct cleaning", "Removes accumulated dust, debris, pollen, and biological material from duct surfaces using negative pressure and physical agitation.", "Routine maintenance (every 3–5 years); after renovation or construction; post move-in; visible or odor-based contamination."],
                  ["HVAC cleaning", "Cleans internal HVAC components — blower wheel, evaporator coil area, air handler cabinet — that are outside the duct runs themselves.", "Systems with visible dust on internal components; any system more than five years old without prior professional cleaning."],
                  ["Sanitization/deodorization", "Applies EPA-registered antimicrobial treatment to duct surfaces. Neutralizes odors and inhibits future microbial growth.", "After any cleaning where moisture-related odors or biological contamination was present; coastal homes with salt loading."],
                  ["Mold remediation (FL licensed)", "Physically removes mold contamination from building materials per Florida Chapter 468, Part XVI. Requires a separate FL DBPR mold remediator licence.", "When mold assessment confirms active growth beyond duct surfaces — on framing, insulation, or drywall near the air handler."],
                ].map(([service, does, when], i) => (
                  <tr key={i}>
                    <td className="p-3 font-medium border border-[#E2E8F0]" style={{ color: "#0F172A" }}>{service}</td>
                    <td className="p-3 border border-[#E2E8F0]" style={{ color: "#475569" }}>{does}</td>
                    <td className="p-3 border border-[#E2E8F0]" style={{ color: "#475569" }}>{when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad" style={{ background: "#F8FAFC" }}>
        <div className="container-content max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: "#0F172A" }}>
            Frequently asked questions — air duct cleaning
          </h2>
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
              { name: "HVAC Cleaning", href: "/services/hvac-cleaning", desc: "Internal HVAC component cleaning." },
              { name: "Sanitization & Deodorization", href: "/services/sanitization-deodorization", desc: "Antimicrobial treatment for duct surfaces." },
              { name: "Mold Inspection", href: "/services/mold-inspection-removal", desc: "Visual inspection and referral." },
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
