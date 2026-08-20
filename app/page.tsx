import Link from "next/link";
import {
  Phone,
  Wind,
  Flame,
  Thermometer,
  Home,
  Building2,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  MapPin,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";
import SchemaScript from "@/components/SchemaScript";
import {
  buildFAQSchema,
  buildHowToSchema,
  buildSpeakableSchema,
  buildBreadcrumbSchema,
} from "@/lib/schema";
import { BUSINESS, SERVICES, AREA_CITIES, hasRealReviews, hasYearsInBusiness, hasJobsCompleted } from "@/data/business";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Jacksonville air duct cleaning | AL Air Duct Cleaning",
  description:
    "AL Air Duct Cleaning Jacksonville serves all of Duval, St. Johns, Clay and Nassau counties. NADCA-standard methods, 24/7 availability, free estimates.",
  path: "/",
});

const serviceIcons: Record<string, React.ReactNode> = {
  Wind: <Wind size={28} strokeWidth={1.5} />,
  Flame: <Flame size={28} strokeWidth={1.5} />,
  Thermometer: <Thermometer size={28} strokeWidth={1.5} />,
  Home: <Home size={28} strokeWidth={1.5} />,
  Building2: <Building2 size={28} strokeWidth={1.5} />,
  Sparkles: <Sparkles size={28} strokeWidth={1.5} />,
  ShieldCheck: <ShieldCheck size={28} strokeWidth={1.5} />,
};

const homeFAQs = [
  {
    question: "How much does air duct cleaning cost in Jacksonville?",
    answer:
      "In Jacksonville, professional air duct cleaning typically ranges from $300 to $700 for a standard residential system, depending on home size, number of vents, system age, and whether sanitization is included. Older homes in Riverside or Avondale with extensive duct runs often fall toward the higher end. Contact us for an accurate quote based on your specific system.",
  },
  {
    question: "How often should Jacksonville homeowners clean their air ducts?",
    answer:
      "The EPA and NADCA recommend cleaning when there is visible contamination, persistent odors, or evidence of moisture intrusion. In Northeast Florida's humid subtropical climate — where systems run nine to ten months a year and pine pollen loads are substantial — most homeowners benefit from cleaning every three to five years, or after any flooding or water intrusion event.",
  },
  {
    question: "Does duct cleaning help with pine pollen in Jacksonville?",
    answer:
      "Yes. Jacksonville's spring pollen season runs roughly February through April. Your HVAC system draws pollen-laden air across the filter and deposits fine particles in return ducts. Cleaning removes accumulated pollen from the duct surfaces, and pairing it with a higher-MERV filter change reduces recirculation significantly.",
  },
  {
    question: "Do you serve all of Jacksonville's neighborhoods?",
    answer:
      "Yes. Jacksonville is the largest city by land area in the contiguous US, and many companies decline calls from Nocatee, Mandarin, the Northside and Nassau County. We cover the full service area — all of Duval, St. Johns, Clay and Nassau counties — with no travel surcharge within this zone.",
  },
  {
    question: "Are you available for emergency or same-day service?",
    answer:
      "We operate 24 hours a day, seven days a week. Call the number above and we will schedule at the earliest available time. Same-day service is available for urgent situations including post-storm water intrusion and strong musty odors.",
  },
];

const howToSteps = [
  { name: "Initial inspection", text: "Our technician inspects all visible duct registers, the air handler cabinet, and accessible duct runs. We document conditions with photos before any work begins." },
  { name: "System preparation", text: "We seal all supply and return registers except the one connected to the vacuum equipment, protecting your furniture and floors." },
  { name: "Negative pressure setup", text: "We connect a HEPA-filtered negative air machine directly to your main duct trunk, placing the entire system under negative pressure so all dislodged debris travels toward the machine rather than into your living space." },
  { name: "Agitation of supply ducts", text: "Technicians work through each supply duct using a combination of compressed air whips and rotary brushes to dislodge debris from duct walls and drive it toward the collection unit." },
  { name: "Return duct cleaning", text: "Return ducts are cleaned with the same agitation tools. Return lines in older Jacksonville homes with undersized returns often carry the heaviest debris load." },
  { name: "Air handler and blower cleaning", text: "The blower wheel, motor housing, and evaporator coil access are cleaned to remove accumulated dust, which directly affects efficiency and cooling capacity." },
  { name: "Register and grille cleaning", text: "Each supply and return grille is removed, cleaned with antimicrobial solution, dried, and reinstalled." },
  { name: "Post-cleaning inspection and documentation", text: "We perform a final inspection of the entire system, record post-cleaning conditions, and walk you through our findings before leaving." },
];

export default function HomePage() {
  const faqSchema = buildFAQSchema(homeFAQs);
  const howToSchema = buildHowToSchema("How air duct cleaning works", howToSteps);
  const speakableSchema = buildSpeakableSchema(["#answer-block", "#how-often"]);

  const duvalAreas = AREA_CITIES.filter(c => c.county === "Duval");
  const beachAreas = AREA_CITIES.filter(c => c.county === "Duval Beaches");
  const stjohnsAreas = AREA_CITIES.filter(c => c.county === "St. Johns");
  const clayAreas = AREA_CITIES.filter(c => c.county === "Clay");
  const nassauAreas = AREA_CITIES.filter(c => c.county === "Nassau");

  return (
    <>
      <SchemaScript schema={[faqSchema, howToSchema, speakableSchema]} />

      {/* ── 1. HERO ──────────────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: "linear-gradient(135deg, #0B5563 0%, #073e49 100%)" }}
        aria-labelledby="hero-heading"
      >
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: copy */}
            <div className="text-white">
              {hasRealReviews && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < Math.floor(BUSINESS.reviewAverage) ? "#F26522" : "none"}
                        stroke="#F26522"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-orange-200">
                    {BUSINESS.reviewAverage} stars · {BUSINESS.reviewCount} reviews
                  </span>
                </div>
              )}

              <h1
                id="hero-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5"
              >
                Jacksonville air duct cleaning — from Riverside to the Beaches
              </h1>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                AL Air Duct Cleaning Jacksonville serves all of Duval, St. Johns, Clay and Nassau counties. Whether your home is a 1920s Craftsman in Avondale or a new build in Nocatee, we bring NADCA-standard equipment and trained technicians to your door — 24 hours a day, seven days a week.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary">
                  <Phone size={18} strokeWidth={1.5} />
                  Call for same-day service
                </a>
                <Link href="/contact" className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}>
                  Get my free estimate
                </Link>
              </div>

              {/* Trust chips */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  "24/7 availability",
                  "No travel surcharge",
                  "HEPA-filtered equipment",
                  "Free, no-pressure estimates",
                ].map((chip) => (
                  <div key={chip} className="flex items-center gap-2 text-sm text-blue-100">
                    <CheckCircle size={15} strokeWidth={1.5} style={{ color: "#F26522" }} />
                    {chip}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: lead form */}
            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. ANSWER BLOCK (AEO) ───────────────────────────────────── */}
      <section className="py-8" style={{ background: "#F8FAFC" }}>
        <div className="container-content">
          <div id="answer-block" className="answer-box max-w-3xl">
            <p className="eyebrow mb-2">Quick answer</p>
            <h2 className="text-lg font-semibold mb-2" style={{ color: "#0F172A" }}>
              How much does air duct cleaning cost in Jacksonville?
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#0F172A" }}>
              Professional air duct cleaning in Jacksonville typically costs between <strong>$300 and $700</strong> for a standard residential home. Price varies with home size, vent count, system age, and whether sanitization is added. Older Riverside and Avondale homes with longer duct runs tend toward the upper end. Call for a free, no-obligation estimate.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. STATS STRIP ──────────────────────────────────────────── */}
      {(hasYearsInBusiness || hasJobsCompleted || hasRealReviews) && (
        <section style={{ background: "#0B5563" }}>
          <div className="container-content py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
              {hasYearsInBusiness && (
                <div>
                  <div className="text-4xl font-bold" style={{ color: "#F26522" }}>
                    {BUSINESS.yearsInBusiness}+
                  </div>
                  <div className="text-sm text-blue-200 mt-1">Years in business</div>
                </div>
              )}
              {hasJobsCompleted && (
                <div>
                  <div className="text-4xl font-bold" style={{ color: "#F26522" }}>
                    {BUSINESS.jobsCompleted}+
                  </div>
                  <div className="text-sm text-blue-200 mt-1">Jobs completed</div>
                </div>
              )}
              {hasRealReviews && (
                <>
                  <div>
                    <div className="text-4xl font-bold" style={{ color: "#F26522" }}>
                      {BUSINESS.reviewAverage}
                    </div>
                    <div className="text-sm text-blue-200 mt-1">Average rating</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold" style={{ color: "#F26522" }}>
                      {BUSINESS.reviewCount}+
                    </div>
                    <div className="text-sm text-blue-200 mt-1">Verified reviews</div>
                  </div>
                </>
              )}
              <div>
                <div className="text-4xl font-bold" style={{ color: "#F26522" }}>24/7</div>
                <div className="text-sm text-blue-200 mt-1">Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold" style={{ color: "#F26522" }}>4</div>
                <div className="text-sm text-blue-200 mt-1">Counties served</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 4. WHY JACKSONVILLE ─────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container-content">
          <p className="eyebrow mb-3">Local expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl" style={{ color: "#0F172A" }}>
            Why Jacksonville homeowners choose us
          </h2>
          <p className="text-lg mb-10 max-w-2xl" style={{ color: "#475569" }}>
            Jacksonville presents conditions you won't find in other Florida markets. Each one affects your ductwork differently, and each one deserves a specific response.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Coverage across the largest city in the contiguous US",
                body: "Jacksonville covers more than 840 square miles — more than any other city in the lower 48. Many HVAC companies quietly decline jobs from Nocatee, Mandarin, the Northside, and Nassau County. We cover the full four-county service area without a travel surcharge. If you've been told 'we don't come out that far,' call us instead.",
              },
              {
                title: "Pine pollen season is a real indoor air problem",
                body: "The yellow film that coats every car and porch in Jacksonville from February through April doesn't stop at your doorstep. Your HVAC system pulls that pollen load through the filter and deposits fine particles in the return ductwork. Without cleaning, your AC recirculates that residue long after allergy season ends. Pairing a duct cleaning with a filter swap is the most practical thing most Jacksonville homeowners can do for spring air quality.",
              },
              {
                title: "Historic homes with retrofit ductwork",
                body: "Riverside, Avondale, Springfield and Ortega have housing stock from the early 1900s. Central air was added to most of these homes decades after construction — often with undersized returns, crawl-space duct runs, and flex duct connections that nobody has inspected since the Carter administration. These systems carry different risk profiles than new builds and need technicians who've worked inside them.",
              },
              {
                title: "Military moves and homes with unknown histories",
                body: "NAS Jacksonville and Naval Station Mayport drive more PCS relocations than most Florida markets. Moving into a home with unknown duct history is different from scheduling routine maintenance — you don't know whether the previous occupants had pets, smokers, moisture events, or a decade-old filter that nobody changed. Move-in duct cleaning is a practical reset, not an upsell, and we schedule it around PCS timelines.",
              },
              {
                title: "Coastal salt air and system corrosion",
                body: "Jacksonville Beach, Neptune Beach, Atlantic Beach and Ponte Vedra sit in a salt-air environment that accelerates corrosion on HVAC components in ways that inland systems don't experience. Salt loading inside duct systems is real, and it compounds other contamination issues. Coastal homes benefit from more frequent inspections and cleaning cycles.",
              },
              {
                title: "Storm-season water intrusion is a different job",
                body: "Northeast Florida takes tropical systems and flooding. When water enters ductwork — through a flooded crawl space, a storm-damaged return, or an HVAC condensate overflow — the cleaning required is fundamentally different from routine maintenance. The contamination profile is different, the drying requirements are different, and the moisture source must be addressed before cleaning does any lasting good.",
              },
            ].map((item, i) => (
              <div key={i} className="card">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-4"
                  style={{ background: "#F26522" }}
                >
                  {i + 1}
                </div>
                <h3 className="font-semibold text-base mb-2" style={{ color: "#0F172A" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SERVICES GRID ──────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "#F8FAFC" }}>
        <div className="container-content">
          <p className="eyebrow mb-3">What we do</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0F172A" }}>
            Our services
          </h2>
          <p className="text-lg mb-10 max-w-2xl" style={{ color: "#475569" }}>
            From routine annual cleaning to post-storm water intrusion assessments, we handle every aspect of residential and commercial duct system care in Northeast Florida.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card group flex flex-col"
              >
                <div
                  className="mb-4 text-[#0B5563] group-hover:text-[#F26522] transition-colors"
                >
                  {serviceIcons[s.icon]}
                </div>
                <h3 className="font-semibold text-base mb-2" style={{ color: "#0F172A" }}>
                  {s.name}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "#475569" }}>
                  {s.shortDesc}
                </p>
                <div
                  className="mt-3 flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all"
                  style={{ color: "#0B5563" }}
                >
                  Learn more <ArrowRight size={14} strokeWidth={1.5} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. REVIEWS ──────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container-content">
          <p className="eyebrow mb-3">What customers say</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0F172A" }}>
            Customer reviews
          </h2>

          {hasRealReviews ? (
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {/* TODO: Replace these with 3 real, verified reviews from actual customers */}
              <div className="card">
                <p className="text-sm text-[#94a3b8] mb-4">
                  [Real customer review to be added here — do not publish placeholder text]
                </p>
                <div className="font-semibold text-sm text-[#0F172A]">TODO: Real customer name</div>
                <div className="text-xs text-[#475569]">TODO: Neighbourhood, Jacksonville, FL</div>
              </div>
            </div>
          ) : (
            <div className="mt-6 p-6 rounded-xl border border-[#E2E8F0] text-center">
              <p className="text-[#475569] mb-4">
                See what Jacksonville homeowners are saying about AL Air Duct Cleaning.
              </p>
              {BUSINESS.social.googleMaps ? (
                <a
                  href={BUSINESS.social.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex"
                >
                  Read our Google reviews
                </a>
              ) : (
                <Link href="/reviews" className="btn-secondary inline-flex">
                  View all reviews
                </Link>
              )}
            </div>
          )}
          <div className="mt-6 text-center">
            <Link href="/reviews" style={{ color: "#0B5563" }} className="text-sm font-medium hover:underline">
              See all customer reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. MID-PAGE CTA BAND ─────────────────────────────────── */}
      <section style={{ background: "#F26522" }}>
        <div className="container-content py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Ready for cleaner air in Jacksonville?
              </h2>
              <p className="text-orange-100">
                Call now or request a free estimate — we respond within 1 hour.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors text-base"
                style={{ color: "#F26522", minHeight: "48px" }}
              >
                <Phone size={18} strokeWidth={1.5} />
                {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white transition-colors text-base"
                style={{ minHeight: "48px" }}
              >
                Get my free estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. ABOUT PREVIEW ─────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow mb-3">About us</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#0F172A" }}>
                Local technicians who know Northeast Florida's homes
              </h2>
              <div className="space-y-4 prose-content">
                <p>
                  AL Air Duct Cleaning Jacksonville is part of the AL Air Duct Cleaning network serving major US markets. Our Jacksonville team works specifically in Northeast Florida, which means every technician on your job has direct experience with the housing stock, climate conditions, and duct configurations this market presents — from 1920s wood-frame homes in Riverside to three-year-old builds in Nocatee.
                </p>
                <p>
                  Northeast Florida's climate is subtropical with sustained humidity from June through September, a heavy pine pollen season in late winter and early spring, and a hurricane season that occasionally sends water into places it has no business being. These are not abstract concerns — they directly determine what we find when we open up a duct system, and how we address it.
                </p>
                <p>
                  We use NADCA-standard negative pressure methods on every residential job. That means a truck-mounted or portable HEPA-filtered collection unit placed under negative pressure so that everything we dislodge from the duct walls travels toward the machine, not into your living room. We document conditions before and after every job.
                </p>
                <p>
                  The military community around NAS Jacksonville and Naval Station Mayport has specific needs — move-in cleaning on tight PCS timelines, homes with unknown maintenance histories, and a scheduling reality that doesn't always allow for a three-week wait. We work with that. Call and ask about our military scheduling options.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/about" className="btn-outline inline-flex">
                  Read our full story
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "NADCA-standard methods", icon: <CheckCircle size={20} strokeWidth={1.5} style={{ color: "#16A34A" }} /> },
                { label: "HEPA-filtered equipment", icon: <CheckCircle size={20} strokeWidth={1.5} style={{ color: "#16A34A" }} /> },
                { label: "Before-and-after documentation", icon: <CheckCircle size={20} strokeWidth={1.5} style={{ color: "#16A34A" }} /> },
                { label: "No subcontractors", icon: <CheckCircle size={20} strokeWidth={1.5} style={{ color: "#16A34A" }} /> },
                { label: "Fully insured", icon: <CheckCircle size={20} strokeWidth={1.5} style={{ color: "#16A34A" }} /> },
                { label: "Upfront pricing", icon: <CheckCircle size={20} strokeWidth={1.5} style={{ color: "#16A34A" }} /> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 card">
                  {item.icon}
                  <span className="text-sm font-medium" style={{ color: "#0F172A" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. TRUST GRID ──────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "#F8FAFC" }}>
        <div className="container-content">
          <p className="eyebrow mb-3">Credentials</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: "#0F172A" }}>
            Licences and certifications
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BUSINESS.licenses.nadca && (
              <div className="card">
                <ShieldCheck size={24} strokeWidth={1.5} style={{ color: "#0B5563" }} className="mb-3" />
                <h3 className="font-semibold text-sm mb-1" style={{ color: "#0F172A" }}>NADCA Member</h3>
                <p className="text-xs text-[#475569]">Member ID: {BUSINESS.licenses.nadca}</p>
                <p className="text-xs text-[#475569] mt-1">National Air Duct Cleaners Association standard methods.</p>
              </div>
            )}
            {BUSINESS.licenses.dbprHvac && (
              <div className="card">
                <ShieldCheck size={24} strokeWidth={1.5} style={{ color: "#0B5563" }} className="mb-3" />
                <h3 className="font-semibold text-sm mb-1" style={{ color: "#0F172A" }}>FL HVAC Contractor</h3>
                <p className="text-xs text-[#475569]">DBPR Licence: {BUSINESS.licenses.dbprHvac}</p>
                <p className="text-xs text-[#475569] mt-1">Licensed by the Florida Department of Business and Professional Regulation.</p>
              </div>
            )}
            {BUSINESS.licenses.dbprMoldRemediator && (
              <div className="card">
                <ShieldCheck size={24} strokeWidth={1.5} style={{ color: "#0B5563" }} className="mb-3" />
                <h3 className="font-semibold text-sm mb-1" style={{ color: "#0F172A" }}>FL Licensed Mold Remediator</h3>
                <p className="text-xs text-[#475569]">MRSR Licence: {BUSINESS.licenses.dbprMoldRemediator}</p>
                <p className="text-xs text-[#475569] mt-1">Licensed under Chapter 468, Part XVI, Florida Statutes.</p>
              </div>
            )}
            {BUSINESS.licenses.insurance && (
              <div className="card">
                <ShieldCheck size={24} strokeWidth={1.5} style={{ color: "#0B5563" }} className="mb-3" />
                <h3 className="font-semibold text-sm mb-1" style={{ color: "#0F172A" }}>Fully insured</h3>
                <p className="text-xs text-[#475569]">{BUSINESS.licenses.insurance}</p>
              </div>
            )}
            {/* Always-shown qualitative credentials */}
            <div className="card">
              <ShieldCheck size={24} strokeWidth={1.5} style={{ color: "#0B5563" }} className="mb-3" />
              <h3 className="font-semibold text-sm mb-1" style={{ color: "#0F172A" }}>HEPA-filtered equipment</h3>
              <p className="text-xs text-[#475569]">All collection equipment uses HEPA filtration so dislodged debris is captured, not recirculated into your home.</p>
            </div>
            <div className="card">
              <ShieldCheck size={24} strokeWidth={1.5} style={{ color: "#0B5563" }} className="mb-3" />
              <h3 className="font-semibold text-sm mb-1" style={{ color: "#0F172A" }}>Background-checked technicians</h3>
              <p className="text-xs text-[#475569]">Every technician on your job passes a background check before entering your home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. WHY IT MATTERS (E-E-A-T anchor) ─────────────────── */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container-content max-w-4xl">
          <p className="eyebrow mb-3">Northeast Florida indoor air quality</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: "#0F172A" }}>
            Why Jacksonville's climate makes duct cleaning different
          </h2>

          <div className="prose-content space-y-6 text-base">
            <p>
              Jacksonville sits in a humid subtropical climate zone (Köppen Cfa), which means high humidity persists through most of the year. The National Weather Service Jacksonville office records average relative humidity in the mid-to-high 70s percent range through summer months, with indoor systems working continuously from roughly April through November. A system running ten months a year accumulates contamination faster than one running six, and the moisture it's pulling through the structure creates conditions that routine cleaning can address — but only if the moisture source itself is dealt with first.
            </p>
            <p>
              The <a href="https://www.epa.gov/indoor-air-quality-iaq/should-you-have-air-ducts-your-home-cleaned" target="_blank" rel="noopener noreferrer">EPA's guidance on duct cleaning</a> is worth reading in full because it's honest about what cleaning does and doesn't accomplish. Cleaning removes accumulated dust, debris, and biological growth from duct surfaces. It does not fix a moisture problem. If condensation is forming inside your duct runs — common in Jacksonville homes where duct insulation has degraded, where ducts run through unconditioned attics, or where return leakage is pulling humid outdoor air into the system — cleaning the ducts without correcting the moisture entry will produce diminishing returns on each subsequent cleaning. The American Lung Association's <a href="https://www.lung.org/clean-air/indoor-air" target="_blank" rel="noopener noreferrer">indoor air quality resources</a> describe the mechanism: biological growth thrives in environments with sustained humidity above 60%. Inside an uninsulated or poorly-sealed duct system in Northeast Florida, that threshold is crossed routinely.
            </p>
            <p>
              Jacksonville's spring pollen load is substantial. The city's tree canopy — particularly the loblolly pine and longleaf pine populations across Duval and Nassau counties — produces the yellow pollen film that locals know from February through April. According to the <a href="https://aafa.org/allergy-capitals/" target="_blank" rel="noopener noreferrer">Asthma and Allergy Foundation of America</a>, Jacksonville regularly ranks among higher-challenge cities for seasonal allergy sufferers. Your HVAC system filters outdoor air at the return registers, but fine pollen particles that pass through or around a loaded filter deposit inside the duct runs and are then recirculated whenever the system runs — which, in this climate, is nearly always.
            </p>
            <p>
              Dryer vent cleaning is a fire prevention issue that isn't optional. The <a href="https://www.nfpa.org" target="_blank" rel="noopener noreferrer">National Fire Protection Association</a> identifies failure to clean dryer vents as the leading cause of home dryer fires. In multi-story Jacksonville homes where the dryer vent runs a long path to an exterior wall or rooftop termination, lint accumulates at bends and restrictions and can reach ignition temperature during normal dryer operation. This is not a matter of bad equipment — it's a matter of accumulated material that cleaning removes.
            </p>
            <p>
              Mold in Jacksonville ductwork is a real issue that has also been used to frighten homeowners into unnecessary spending. The honest picture: <a href="https://www.epa.gov/mold" target="_blank" rel="noopener noreferrer">EPA mold guidance</a> and <a href="https://www.floridahealth.gov" target="_blank" rel="noopener noreferrer">Florida Department of Health resources</a> are consistent that small amounts of surface mold are common in humid climates, that it becomes a meaningful health concern primarily for individuals with mold allergies or compromised immune systems, and that addressing the moisture source is the necessary first step — without that, mold returns. Duct cleaning removes biological material from surfaces. Mold remediation as defined under Florida law (Chapter 468, Part XVI) is a distinct licensed activity. If we find conditions that suggest active mold growth during a cleaning, we'll tell you clearly what we observed, and refer you to a licensed assessor or remediator if the scope is beyond duct cleaning.
            </p>

            {/* Signs section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#0F172A" }}>
                Signs your ducts need cleaning
              </h3>
              <ul className="space-y-2">
                {[
                  "Musty or stale odor when the AC starts running",
                  "Visible dust or debris coming from supply registers",
                  "Dust accumulating on surfaces within days of cleaning",
                  "Allergy or asthma symptoms that are noticeably worse indoors than outdoors",
                  "Indoor humidity that won't drop below 60% despite running the AC",
                  "Visible discoloration, growth, or debris at registers",
                  "Pollen film returning inside the home days after dusting",
                  "No record of cleaning since the current HVAC system was installed",
                ].map((sign, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={16} strokeWidth={1.5} style={{ color: "#16A34A", marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ color: "#475569" }}>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How often */}
            <div id="how-often" className="mt-8 p-6 rounded-xl" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#0F172A" }}>
                How often should you clean ducts in Northeast Florida?
              </h3>
              <p style={{ color: "#475569" }}>
                The EPA does not specify mandatory cleaning intervals and notes that cleaning is recommended when contamination is present rather than on a fixed schedule. That said, Northeast Florida's conditions — ten months of active HVAC operation, high sustained humidity, heavy spring pollen loads, and older housing stock with degraded duct insulation — mean that most homeowners see meaningful contamination accumulation in three to five years. Homes with pets, recent flooding, construction or renovation, or occupants with respiratory sensitivities should lean toward the shorter end of that range. Coastal homes (Jacksonville Beach, Atlantic Beach, Neptune Beach, Ponte Vedra) should also factor in salt loading and inspect more frequently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. 8-STEP PROCESS ──────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "#F8FAFC" }}>
        <div className="container-content">
          <p className="eyebrow mb-3">How it works</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0F172A" }}>
            Our 8-step cleaning process
          </h2>
          <p className="text-lg mb-10 max-w-2xl" style={{ color: "#475569" }}>
            Every residential job follows the same structured process. Nothing is skipped to save time.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {howToSteps.map((step, i) => (
              <div key={i} className="card relative">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4"
                  style={{ background: "#0B5563" }}
                >
                  {i + 1}
                </div>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "#0F172A" }}>
                  {step.name}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#475569" }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. BENEFITS GRID ───────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container-content">
          <p className="eyebrow mb-3">What you get</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: "#0F172A" }}>
            Benefits of professional duct cleaning
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Wind size={24} strokeWidth={1.5} />,
                title: "Improved indoor air quality",
                body: "Removing accumulated dust, debris, and biological material from duct surfaces reduces the particulate load in the air you breathe. This matters especially for households with allergy sufferers, asthma, or young children.",
              },
              {
                icon: <Sparkles size={24} strokeWidth={1.5} />,
                title: "Allergy and pollen relief",
                body: "Jacksonville's spring pollen season is intense. Cleaning removes pollen deposits from return ducts that your filter missed, reducing recirculation of allergens during and after peak season.",
              },
              {
                icon: <Thermometer size={24} strokeWidth={1.5} />,
                title: "HVAC efficiency",
                body: "Dust buildup on blower wheels, evaporator coils, and duct surfaces makes your system work harder to move the same volume of air. Clean systems move more air with less effort.",
              },
              {
                icon: <CheckCircle size={24} strokeWidth={1.5} />,
                title: "Extended HVAC lifespan",
                body: "Systems that run cleaner run longer. Reducing particulate buildup on moving components and heat exchange surfaces decreases wear and the likelihood of early component failure.",
              },
              {
                icon: <ShieldCheck size={24} strokeWidth={1.5} />,
                title: "Mold and moisture prevention",
                body: "Removing organic debris from duct surfaces eliminates food sources for microbial growth. Combined with proper moisture management, clean ducts are less hospitable to biological contamination.",
              },
              {
                icon: <Flame size={24} strokeWidth={1.5} />,
                title: "Dryer fire prevention",
                body: "The NFPA identifies lint buildup in dryer vents as the leading cause of home dryer fires. Annual dryer vent cleaning removes the accumulated lint that can reach ignition temperature during normal dryer operation.",
              },
            ].map((item, i) => (
              <div key={i} className="card flex flex-col gap-3">
                <div style={{ color: "#0B5563" }}>{item.icon}</div>
                <h3 className="font-semibold text-base" style={{ color: "#0F172A" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. SERVICE AREAS ─────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "#F8FAFC" }}>
        <div className="container-content">
          <p className="eyebrow mb-3">Where we work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0F172A" }}>
            Service areas across Northeast Florida
          </h2>
          <p className="text-lg mb-10 max-w-2xl" style={{ color: "#475569" }}>
            We cover four counties — no travel surcharge anywhere in our service zone.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { county: "Duval County", cities: duvalAreas, description: "Jacksonville proper, including historic neighbourhoods like Riverside, Avondale and Ortega, as well as Mandarin, Baymeadows and the Northside." },
              { county: "The Beaches", cities: beachAreas, description: "Jacksonville Beach, Neptune Beach, Atlantic Beach and Ponte Vedra Beach — coastal homes with salt-air exposure and specific maintenance considerations." },
              { county: "St. Johns County", cities: stjohnsAreas, description: "Nocatee, Fruit Cove, Julington Creek and St. Augustine — ranging from new builds to historic homes in one of Florida's fastest-growing counties." },
              { county: "Clay County", cities: clayAreas, description: "Orange Park, Fleming Island, Middleburg and Oakleaf Plantation — suburban communities west of Jacksonville along the First Coast." },
              { county: "Nassau County", cities: nassauAreas, description: "Fernandina Beach, Yulee and Amelia Island — the northern tier of the service area, including coastal properties with unique exposure conditions." },
              { county: "Westside / Orange Park", cities: [], description: "The western reaches of Duval County and Clay County corridor. Many homes here were built in the 1970s and 1980s and have original duct systems that have never been professionally cleaned." },
            ].map((area, i) => (
              <div key={i} className="card">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} strokeWidth={1.5} style={{ color: "#F26522" }} />
                  <h3 className="font-semibold text-base" style={{ color: "#0F172A" }}>{area.county}</h3>
                </div>
                <p className="text-sm mb-4" style={{ color: "#475569" }}>{area.description}</p>
                {area.cities.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {area.cities.slice(0, 4).map((c) => (
                      <Link
                        key={c.slug}
                        href={`/areas/${c.slug}`}
                        className="text-xs px-2 py-1 rounded-full border border-[#E2E8F0] text-[#475569] hover:border-[#0B5563] hover:text-[#0B5563] transition-colors"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 14. MAP EMBED ──────────────────────────────────────────── */}
      <section style={{ background: "white" }}>
        <div className="container-content py-8">
          <h2 className="text-xl font-semibold mb-4" style={{ color: "#0F172A" }}>
            Find us in Jacksonville, FL
          </h2>
          <div className="rounded-xl overflow-hidden border border-[#E2E8F0]" style={{ height: "340px" }}>
            <iframe
              src={`https://www.google.com/maps/embed/v1/search?key=&q=air+duct+cleaning+Jacksonville+FL&center=${BUSINESS.lat},${BUSINESS.lng}&zoom=11`}
              width="100%"
              height="340"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AL Air Duct Cleaning Jacksonville service area map"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "#F8FAFC" }}>
        <div className="container-content max-w-3xl">
          <p className="eyebrow mb-3">Common questions</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: "#0F172A" }}>
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {homeFAQs.map((faq, i) => (
              <div key={i} className="card">
                <h3 className="font-semibold text-base mb-3" style={{ color: "#0F172A" }}>
                  {faq.question}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="btn-outline inline-flex">
              View all FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* ── 15. FINAL CTA ─────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "#0B5563" }}>
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Schedule your Jacksonville air duct cleaning
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Free estimate. No obligation. We cover all of Duval, St. Johns, Clay and Nassau counties — and we respond within the hour.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary">
              <Phone size={18} strokeWidth={1.5} />
              Call for same-day service
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white transition-colors text-base"
              style={{ minHeight: "48px", color: "white" }}
            >
              Get my free estimate
            </Link>
          </div>
          <p className="text-sm text-blue-200 mt-6">{BUSINESS.hours}</p>
        </div>
      </section>
    </>
  );
}
