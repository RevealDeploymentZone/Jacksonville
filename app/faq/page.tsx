import Link from "next/link";
import { Phone } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import SchemaScript from "@/components/SchemaScript";
import { buildBreadcrumbSchema, buildFAQSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/data/business";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "FAQ — air duct cleaning in Jacksonville, FL | AL Air Duct",
  description:
    "Answers to common questions about air duct cleaning in Jacksonville, FL. Cost, frequency, process, mold, pollen, and more. AL Air Duct Cleaning Jacksonville.",
  path: "/faq",
});

const faqCategories = [
  {
    category: "Cost and pricing",
    faqs: [
      {
        question: "How much does air duct cleaning cost in Jacksonville?",
        answer:
          "Residential air duct cleaning in Jacksonville typically costs between $300 and $700 for a standard home, depending on size, vent count, system configuration, and whether additional services like sanitization are included. Older homes with crawl-space duct runs or multiple systems tend toward the higher end. We provide written estimates before work begins.",
      },
      {
        question: "What does dryer vent cleaning cost?",
        answer:
          "Standalone dryer vent cleaning in Jacksonville is typically $100 to $200 depending on vent length and complexity. Multi-story homes with rooftop terminations are at the higher end. Combined dryer vent and duct cleaning packages are priced below the sum of both services.",
      },
      {
        question: "Is a very low-priced duct cleaning legitimate?",
        answer:
          "Advertised prices under $100 for a whole-house cleaning are almost always loss-leader offers that result in on-site upselling or minimal work that doesn't meet NADCA source-removal standards. The differentiator is whether the job places the system under negative pressure. Without that, duct surfaces aren't being cleaned — they're being disturbed.",
      },
    ],
  },
  {
    category: "Frequency and scheduling",
    faqs: [
      {
        question: "How often should I clean my air ducts in Jacksonville?",
        answer:
          "The EPA recommends cleaning based on observable conditions rather than a fixed schedule. In Northeast Florida, where HVAC systems run nine to ten months a year, spring pollen loads are heavy, and humidity is sustained at high levels, most homeowners see meaningful contamination in three to five years. Homes with pets, recent flooding, renovation, or occupants with respiratory conditions should lean toward the shorter end.",
      },
      {
        question: "Do I need to clean ducts every year?",
        answer:
          "Not necessarily. Annual cleaning is appropriate for dryer vents and often for filter changes, but duct cleaning frequency depends on actual conditions in the system. We don't recommend annual duct cleaning as a blanket rule — we recommend cleaning when conditions indicate it's needed.",
      },
      {
        question: "How quickly can you schedule in Jacksonville?",
        answer:
          "We can typically schedule within 24 to 72 hours. Same-day service is available for urgent situations. We operate 24/7 and offer early morning, evening, and weekend appointments.",
      },
    ],
  },
  {
    category: "The cleaning process",
    faqs: [
      {
        question: "What is NADCA-standard duct cleaning?",
        answer:
          "NADCA (National Air Duct Cleaners Association) standard cleaning, also called source removal cleaning, requires placing the duct system under negative pressure using HEPA-filtered collection equipment connected to the duct trunk, then using physical agitation tools to dislodge debris from duct walls and drive it toward the collection unit. It's the difference between cleaning the duct surfaces and blowing air through them.",
      },
      {
        question: "How long does a residential duct cleaning take?",
        answer:
          "Most homes in the 1,500 to 2,500 square foot range take two to four hours. Larger homes, more complex duct layouts, or systems with significant buildup take longer. We'll give you an estimate before starting.",
      },
      {
        question: "Do I need to do anything to prepare for a duct cleaning?",
        answer:
          "Clear access to all supply and return registers and to the air handler. If you have pets, plan to keep them away from work areas during the job. Other than that, we handle the preparation and cleanup.",
      },
      {
        question: "Will a duct cleaning make a mess in my house?",
        answer:
          "No. The negative pressure system keeps everything moving toward the collection unit. We put down floor protection at work areas. Registers are removed and cleaned individually. Your furniture and belongings stay where they are.",
      },
    ],
  },
  {
    category: "Jacksonville-specific questions",
    faqs: [
      {
        question: "Does duct cleaning help with pine pollen in Jacksonville?",
        answer:
          "Yes. Jacksonville's pine pollen season runs roughly February through April, and your HVAC system deposits fine pollen particles in return ducts that filters don't fully capture. Cleaning removes that accumulated pollen. Pairing it with a filter change maximizes the effect.",
      },
      {
        question: "Should I clean ducts in my Riverside or Avondale historic home?",
        answer:
          "These homes often have retrofit duct systems installed decades after original construction — sometimes with undersized returns, crawl-space runs, and conditions that have never been inspected. If the system has never been professionally cleaned, a cleaning with a full inspection is a reasonable starting point. We have experience with this housing stock specifically.",
      },
      {
        question: "Do you serve Nocatee, Mandarin, Fernandina Beach, and Nassau County?",
        answer:
          "Yes. We cover the full four-county service area — Duval, St. Johns, Clay and Nassau — without a travel surcharge. Jacksonville's size means many companies decline calls from the outer reaches. We don't.",
      },
      {
        question: "What should military families know about move-in duct cleaning?",
        answer:
          "Moving into a home with an unknown maintenance history near NAS Jacksonville or Mayport is a good reason to schedule a cleaning. You don't know what the previous occupants had in the home or how the system was maintained. A move-in cleaning gives you a documented baseline and removes whatever was left behind. We schedule quickly and accommodate PCS timelines.",
      },
      {
        question: "My house smells musty when the AC runs — is it mold?",
        answer:
          "Not necessarily. Musty odors when the AC starts have several common causes: accumulated organic debris in duct runs, biological growth in the air handler or drain pan, or standing water in the condensate system. An inspection identifies the source. Some of these are addressed by duct cleaning alone; others require additional work. We'll tell you honestly which situation you have.",
      },
    ],
  },
  {
    category: "Mold and indoor air quality",
    faqs: [
      {
        question: "Can duct cleaning prevent mold?",
        answer:
          "Cleaning removes the accumulated organic material that provides a food source for biological growth. Combined with addressing moisture sources (the actual cause), this reduces the likelihood of recurring mold growth on duct surfaces. Cleaning alone does not prevent mold if the moisture conditions that support it aren't corrected.",
      },
      {
        question: "What is the difference between duct cleaning and mold remediation in Florida?",
        answer:
          "Duct cleaning removes debris from duct surfaces. Mold remediation, as defined by Florida Chapter 468, Part XVI, is a separate licensed activity involving the removal of mold contamination from building materials. Florida law requires separate DBPR licences for mold assessment and mold remediation, and prohibits the same firm from doing both on the same project. If our inspection finds conditions requiring remediation, we refer you to Florida-licensed professionals.",
      },
      {
        question: "Does duct cleaning improve indoor air quality?",
        answer:
          "The EPA's position is that duct cleaning removes accumulated contaminants from duct surfaces, which reduces their presence in the conditioned air. Whether this produces a perceptible improvement in air quality depends on the contamination level before cleaning and other factors in the home (outdoor air infiltration, occupant activity, filtration quality). We won't promise a specific health outcome — the evidence varies by situation.",
      },
    ],
  },
];

export default function FAQPage() {
  const allFaqs = faqCategories.flatMap((c) => c.faqs);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.domain },
    { name: "FAQ", url: `${BUSINESS.domain}/faq` },
  ]);
  const faqSchema = buildFAQSchema(allFaqs);

  return (
    <>
      <SchemaScript schema={[breadcrumbSchema, faqSchema]} />

      <section style={{ background: "#F8FAFC" }} className="section-pad">
        <div className="container-content">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5" style={{ color: "#0F172A" }}>
            Frequently asked questions
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#475569" }}>
            Answers to common questions about air duct cleaning, HVAC service, mold, and indoor air quality in Jacksonville and Northeast Florida.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: "white" }}>
        <div className="container-content max-w-4xl">
          <div className="space-y-12">
            {faqCategories.map((cat, ci) => (
              <div key={ci}>
                <h2 className="text-xl font-bold mb-6 pb-3 border-b border-[#E2E8F0]" style={{ color: "#0F172A" }}>
                  {cat.category}
                </h2>
                <div className="space-y-4">
                  {cat.faqs.map((faq, fi) => (
                    <div key={fi} className="card">
                      <h3 className="font-semibold text-base mb-3" style={{ color: "#0F172A" }}>
                        {faq.question}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl text-center" style={{ background: "#F8FAFC" }}>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#0F172A" }}>
              Question not answered here?
            </h2>
            <p className="text-sm mb-4" style={{ color: "#475569" }}>
              Call us or send a message. We respond within one hour.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary inline-flex">
                <Phone size={16} strokeWidth={1.5} />
                Call {BUSINESS.phone}
              </a>
              <Link href="/contact" className="btn-outline inline-flex">Send us a message</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
