import Link from "next/link";
import { MapPin } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import SchemaScript from "@/components/SchemaScript";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { BUSINESS, AREA_CITIES } from "@/data/business";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Service areas — Jacksonville, FL and Northeast Florida | AL Air Duct",
  description:
    "AL Air Duct Cleaning Jacksonville serves all of Duval, St. Johns, Clay and Nassau counties. Find your city and learn about local air duct cleaning conditions.",
  path: "/areas",
});

const countyGroups = [
  { county: "Duval County", description: "Jacksonville and all its neighborhoods — from historic Riverside to Bartram Park." },
  { county: "Duval Beaches", description: "Jacksonville Beach, Neptune Beach, Atlantic Beach and surrounding coastal communities." },
  { county: "St. Johns County", description: "Nocatee, St. Augustine, Ponte Vedra Beach, Julington Creek and more." },
  { county: "Clay County", description: "Orange Park, Fleming Island, Middleburg, Oakleaf Plantation and surrounding areas." },
  { county: "Nassau County", description: "Fernandina Beach, Yulee, Amelia Island and the northern tier of our service area." },
];

export default function AreasPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.domain },
    { name: "Service areas", url: `${BUSINESS.domain}/areas` },
  ]);

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />

      <section style={{ background: "#F8FAFC" }} className="section-pad">
        <div className="container-content">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Service areas" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5" style={{ color: "#0F172A" }}>
            Service areas across Northeast Florida
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#475569" }}>
            AL Air Duct Cleaning Jacksonville covers all four counties in Northeast Florida — Duval, St. Johns, Clay and Nassau — without a travel surcharge anywhere in the service zone.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: "white" }}>
        <div className="container-content">
          {countyGroups.map((group) => {
            const cities = AREA_CITIES.filter((c) => c.county === group.county);
            if (!cities.length) return null;
            return (
              <div key={group.county} className="mb-12">
                <h2 className="text-xl font-bold mb-2" style={{ color: "#0F172A" }}>{group.county}</h2>
                <p className="text-sm mb-5" style={{ color: "#475569" }}>{group.description}</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {cities.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/areas/${c.slug}`}
                      className="flex items-center gap-2 p-3 rounded-lg border border-[#E2E8F0] hover:border-[#0B5563] hover:text-[#0B5563] transition-colors text-sm font-medium"
                      style={{ color: "#475569" }}
                    >
                      <MapPin size={14} strokeWidth={1.5} style={{ color: "#F26522" }} />
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
