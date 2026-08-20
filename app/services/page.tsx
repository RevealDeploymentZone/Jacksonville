import Link from "next/link";
import {
  Wind, Flame, Thermometer, Home, Building2, Sparkles, ShieldCheck, ArrowRight
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import SchemaScript from "@/components/SchemaScript";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { BUSINESS, SERVICES } from "@/data/business";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Air duct & HVAC cleaning services in Jacksonville, FL",
  description:
    "Full list of air duct, HVAC, dryer vent, mold inspection and sanitization services in Jacksonville, FL. Residential and commercial. Available 24/7.",
  path: "/services",
});

const serviceIcons: Record<string, React.ReactNode> = {
  Wind: <Wind size={32} strokeWidth={1.5} />,
  Flame: <Flame size={32} strokeWidth={1.5} />,
  Thermometer: <Thermometer size={32} strokeWidth={1.5} />,
  Home: <Home size={32} strokeWidth={1.5} />,
  Building2: <Building2 size={32} strokeWidth={1.5} />,
  Sparkles: <Sparkles size={32} strokeWidth={1.5} />,
  ShieldCheck: <ShieldCheck size={32} strokeWidth={1.5} />,
};

const serviceDetails = [
  {
    slug: "air-duct-cleaning",
    description: "Full residential and commercial duct system cleaning using negative pressure methods and HEPA-filtered collection equipment. We address dust, allergens, pollen, and debris accumulated inside supply and return duct runs.",
    forWhom: "Any home or building where ducts have not been professionally cleaned in the past three to five years, or where occupants notice persistent dust, musty odors, or indoor allergy symptoms.",
  },
  {
    slug: "dryer-vent-cleaning",
    description: "Lint removal from the full dryer vent path — from the machine connection through every bend to the exterior termination. Long vent runs common in Jacksonville multi-story homes accumulate dangerous levels of lint at restrictions.",
    forWhom: "Any home where the dryer takes longer than normal to complete a cycle, the exterior vent flap doesn't open fully, or the last professional cleaning is unknown.",
  },
  {
    slug: "hvac-cleaning",
    description: "Complete HVAC system cleaning covering the blower wheel, evaporator coil access area, air handler cabinet, and connected duct runs. Addresses the internal components where dust and biological material accumulate outside the duct system itself.",
    forWhom: "Homes where routine filter changes have been missed, systems with visible dust on the blower housing, or any HVAC unit more than five years old that hasn't been professionally cleaned.",
  },
  {
    slug: "residential-air-duct-cleaning",
    description: "Residential cleaning tailored to Jacksonville's housing stock — from 1920s Craftsman homes in Riverside with retrofit duct systems to new builds in Nocatee where construction dust has settled into new ductwork.",
    forWhom: "Homeowners buying or moving into a property with unknown duct history, homes with recent renovation or construction, military families completing a PCS move to NAS Jax or Mayport.",
  },
  {
    slug: "commercial-air-duct-cleaning",
    description: "Commercial HVAC duct cleaning for offices, retail spaces, restaurants, medical offices, schools, and multi-unit residential buildings. Scheduled to minimize business disruption — including after-hours and weekend service.",
    forWhom: "Building managers, property owners, and businesses required to maintain indoor air quality standards for occupant health, HVAC warranty compliance, or building code purposes.",
  },
  {
    slug: "sanitization-deodorization",
    description: "Application of EPA-registered antimicrobial treatment to duct surfaces after cleaning. Neutralizes odors from biological growth, pets, smoke, and organic matter. Inhibits future microbial growth on treated surfaces.",
    forWhom: "Homes with persistent musty odors, recently cleaned systems in humid environments, properties where pets or smokers have occupied the space, or any post-cleaning situation where the client wants added protection.",
  },
  {
    slug: "mold-inspection-removal",
    description: "Visual mold inspection and duct cleaning for homes with suspected biological growth. Where findings exceed the scope of duct cleaning, we refer to FL-licensed mold assessors and remediators.",
    forWhom: "Homes with visible growth at registers, strong musty odors, persistent indoor humidity above 60%, or a recent water intrusion event.",
  },
];

export default function ServicesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.domain },
    { name: "Services", url: `${BUSINESS.domain}/services` },
  ]);

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />

      {/* Hero */}
      <section style={{ background: "#F8FAFC" }} className="section-pad">
        <div className="container-content">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5" style={{ color: "#0F172A" }}>
            Air duct and HVAC cleaning services in Jacksonville, FL
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#475569" }}>
            AL Air Duct Cleaning Jacksonville provides residential and commercial duct cleaning, HVAC cleaning, dryer vent cleaning, sanitization, and mold inspection services across Duval, St. Johns, Clay and Nassau counties. All services are available 24 hours a day, seven days a week.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => {
              const detail = serviceDetails.find((d) => d.slug === s.slug);
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="card group flex gap-5"
                >
                  <div
                    className="shrink-0 mt-1 text-[#0B5563] group-hover:text-[#F26522] transition-colors"
                  >
                    {serviceIcons[s.icon]}
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg mb-2 group-hover:text-[#0B5563] transition-colors" style={{ color: "#0F172A" }}>
                      {s.name}
                    </h2>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "#475569" }}>
                      {detail?.description || s.shortDesc}
                    </p>
                    {detail?.forWhom && (
                      <div className="text-xs p-2 rounded-lg" style={{ background: "#F8FAFC", color: "#475569" }}>
                        <strong style={{ color: "#0F172A" }}>Best for: </strong>{detail.forWhom}
                      </div>
                    )}
                    <div className="mt-3 flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all" style={{ color: "#0B5563" }}>
                      Learn more <ArrowRight size={14} strokeWidth={1.5} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section className="section-pad" style={{ background: "#F8FAFC" }}>
        <div className="container-content max-w-xl">
          <LeadForm headline="Request a free estimate" subline="Tell us which service you need and we'll call back within 1 hour." />
        </div>
      </section>
    </>
  );
}
