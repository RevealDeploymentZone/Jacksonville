import Link from "next/link";
import { CheckCircle, Phone, Shield, Users, Award, MapPin } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import SchemaScript from "@/components/SchemaScript";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { BUSINESS, SERVICES } from "@/data/business";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "About AL Air Duct Cleaning Jacksonville",
  description:
    "About AL Air Duct Cleaning Jacksonville — our history, team, approach to air duct cleaning in Northeast Florida, and what makes us different from other providers.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.domain },
    { name: "About", url: `${BUSINESS.domain}/about` },
  ]);

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />

      <section style={{ background: "#F8FAFC" }} className="section-pad">
        <div className="container-content">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About us" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5" style={{ color: "#0F172A" }}>
            About AL Air Duct Cleaning Jacksonville
          </h1>
          <p className="text-lg max-w-3xl" style={{ color: "#475569" }}>
            Local air duct and HVAC cleaning specialists serving all of Northeast Florida — with specific expertise in the housing stock, climate conditions, and system configurations this market presents.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: "white" }}>
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="prose-content">
              <h2>Who we are</h2>
              <p>
                AL Air Duct Cleaning Jacksonville is part of the AL Air Duct Cleaning network, a group of locally operated air duct and HVAC cleaning services across multiple US markets. Each location is staffed by technicians who work specifically in their market — not a national franchise sending whoever is available from wherever. The Jacksonville team works in Northeast Florida, which means every person on your job has direct experience with the housing stock, climate conditions, and system types this market presents.
              </p>
              <p>
                Jacksonville is a genuinely unusual market. It's the largest city by land area in the contiguous United States. It has neighborhoods with housing from the early 1900s where central air was retrofitted decades later. It has a coastal zone with salt-air exposure conditions that inland systems don't face. It has a substantial military population doing constant PCS moves into homes with unknown maintenance histories. And it has a humid subtropical climate where HVAC systems run nine to ten months a year, creating contamination conditions that develop faster than in cooler markets.
              </p>
              <p>
                These conditions require technicians who've actually worked in them — who know what a 1930s Riverside Craftsman with a crawl-space return looks like from the inside, and who understand why the same cleaning process produces different results in a Nocatee new build versus an Arlington ranch house from 1968. That's what we bring.
              </p>

              <h2>Our approach to duct cleaning</h2>
              <p>
                We use NADCA-standard source removal methods on every residential job. That phrase describes a specific technical process: the entire duct system is placed under negative pressure using HEPA-filtered collection equipment connected to the main duct trunk. Agitation tools — compressed air whips and rotary brushes — are used to dislodge debris from duct wall surfaces and drive it toward the collection unit. Nothing is released into the living space.
              </p>
              <p>
                The alternative — cleaning registers, blowing air through ducts without collection equipment, or applying chemicals without mechanical cleaning — doesn't meet NADCA standards and doesn't produce the same results. We don't use those methods. If you've had a previous cleaning that didn't seem to do anything, there's a reasonable chance it wasn't a source removal cleaning.
              </p>
              <p>
                We document conditions before and after every job with photographs. We provide a written report. We explain what we found and what we did. If we find something during the job that changes the scope, we stop and discuss it with you before proceeding.
              </p>

              <h2>What we won't do</h2>
              <p>
                We won't upsell services you don't need. Duct cleaning doesn't fix moisture problems, failing equipment, or inadequate ventilation. If we observe conditions during a job that suggest a different problem — condensate drainage issues, duct leakage, failing insulation — we'll tell you, and we'll tell you who handles that kind of work. That's not us losing a sale. That's giving you information that actually solves the problem.
              </p>
              <p>
                We won't claim mold remediation services we're not licenced to perform. Florida regulates mold assessment and remediation under Chapter 468, Part XVI. We perform visual inspection and duct cleaning. When inspection findings suggest work that requires a licensed mold assessor or remediator, we refer you to the right person.
              </p>
              <p>
                We won't fabricate reviews or post fake testimonials. The reviews on our site are from actual customers. If you don't see many yet, it's because we'd rather have none than manufactured ones.
              </p>

              <h2>The AL Air Duct Cleaning network</h2>
              <p>
                The Jacksonville operation is part of a multi-city network that includes locations serving other major US markets. The network provides training standards, equipment protocols, and quality benchmarks that individual operations implement locally. What that means for you: a Jacksonville job follows the same process standard as an AL Air Duct Cleaning job in any other market, with local technicians who know the specific conditions here.
              </p>
            </div>

            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold text-base mb-4" style={{ color: "#0F172A" }}>Our credentials</h3>
                <div className="space-y-3">
                  {[
                    { label: "NADCA-standard negative pressure methods", icon: <Award size={16} strokeWidth={1.5} style={{ color: "#0B5563" }} /> },
                    { label: "HEPA-filtered collection equipment", icon: <Shield size={16} strokeWidth={1.5} style={{ color: "#0B5563" }} /> },
                    { label: "Background-checked technicians", icon: <Users size={16} strokeWidth={1.5} style={{ color: "#0B5563" }} /> },
                    { label: "Before-and-after documentation on every job", icon: <CheckCircle size={16} strokeWidth={1.5} style={{ color: "#16A34A" }} /> },
                    { label: "Fully insured", icon: <Shield size={16} strokeWidth={1.5} style={{ color: "#0B5563" }} /> },
                    { label: "No subcontractors", icon: <CheckCircle size={16} strokeWidth={1.5} style={{ color: "#16A34A" }} /> },
                    { label: "24/7 availability", icon: <CheckCircle size={16} strokeWidth={1.5} style={{ color: "#16A34A" }} /> },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      {item.icon}
                      <span className="text-sm" style={{ color: "#475569" }}>{item.label}</span>
                    </div>
                  ))}
                  {BUSINESS.licenses.dbprHvac && (
                    <div className="flex items-center gap-3">
                      <Award size={16} strokeWidth={1.5} style={{ color: "#0B5563" }} />
                      <span className="text-sm" style={{ color: "#475569" }}>FL HVAC Contractor Lic: {BUSINESS.licenses.dbprHvac}</span>
                    </div>
                  )}
                  {BUSINESS.licenses.nadca && (
                    <div className="flex items-center gap-3">
                      <Award size={16} strokeWidth={1.5} style={{ color: "#0B5563" }} />
                      <span className="text-sm" style={{ color: "#475569" }}>NADCA Member ID: {BUSINESS.licenses.nadca}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold text-base mb-4" style={{ color: "#0F172A" }}>Service area</h3>
                <div className="flex items-start gap-2 text-sm" style={{ color: "#475569" }}>
                  <MapPin size={16} strokeWidth={1.5} style={{ color: "#F26522", marginTop: "2px", flexShrink: 0 }} />
                  <span>All of Duval, St. Johns, Clay and Nassau counties in Northeast Florida. No travel surcharge within the service zone.</span>
                </div>
              </div>

              <LeadForm headline="Get your free estimate" subline="No obligation. We respond within 1 hour." compact />
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="section-pad" style={{ background: "#F8FAFC" }}>
        <div className="container-content">
          <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: "#0F172A" }}>
            What guides our work
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Honesty before upselling",
                body: "We tell you what we find, what it means, and what your options are. We don't frame conditions to maximize additional work. If you need something beyond duct cleaning, we'll tell you who does that and why.",
              },
              {
                title: "Technical standards matter",
                body: "NADCA-standard source removal cleaning produces different results than blowing air through registers and calling it done. We use the right equipment and the right process on every job, not shortcuts that look the same on paper.",
              },
              {
                title: "You need documentation",
                body: "Photographic documentation before and after every job gives you a record of what the system looked like and what changed. That documentation has value — for your own records, for HVAC warranty purposes, and for any future sale of the property.",
              },
              {
                title: "Coverage is part of the product",
                body: "Jacksonville's size means that 'we cover the Jacksonville area' can mean anything. We cover the full four-county service zone — Nocatee, Mandarin, Fernandina Beach, Orange Park — without a travel surcharge and without telling you we'll 'check if a technician is available in your area'.",
              },
              {
                title: "Military families deserve specifics",
                body: "PCS move-in cleaning for homes with unknown histories is a distinct, high-value service that most companies treat as routine. We schedule it like it matters — quickly, with documentation, and with an understanding of what military move timelines look like.",
              },
              {
                title: "Moisture problems require real solutions",
                body: "We won't clean ducts three times when what a home actually needs is better duct insulation or a condensate drain repair. Identifying the actual problem is part of the service. We'd rather refer you to the right fix than keep you as a repeat customer for the wrong one.",
              },
            ].map((item, i) => (
              <div key={i} className="card">
                <h3 className="font-semibold text-base mb-2" style={{ color: "#0F172A" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
