import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import SchemaScript from "@/components/SchemaScript";
import { buildBreadcrumbSchema, buildServiceSchema, buildFAQSchema } from "@/lib/schema";
import { BUSINESS, SERVICES, AREA_CITIES } from "@/data/business";
import { AREA_CONTENT } from "@/data/areas";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return AREA_CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const content = AREA_CONTENT.find((a) => a.slug === city);
  const cityData = AREA_CITIES.find((c) => c.slug === city);

  if (!content && !cityData) return {};

  const name = content?.name || cityData?.name || city;
  const county = content?.county || cityData?.county || "Duval";

  const title = content?.metaTitle || `Air duct cleaning in ${name}, FL | AL Air Duct Cleaning`;
  const description =
    content?.metaDesc ||
    `Professional air duct cleaning in ${name}, ${county} County, FL. NADCA-standard methods, free estimates, 24/7 availability. AL Air Duct Cleaning Jacksonville.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${BUSINESS.domain}/areas/${city}`,
    },
    openGraph: {
      title,
      description,
      url: `${BUSINESS.domain}/areas/${city}`,
      siteName: BUSINESS.name,
      type: "website",
      locale: "en_US",
    },
  };
}

const areaFAQs = (cityName: string) => [
  {
    question: `Do you serve ${cityName}?`,
    answer: `Yes. ${cityName} is fully within our service area. We cover all of Duval, St. Johns, Clay and Nassau counties without a travel surcharge.`,
  },
  {
    question: `How quickly can you schedule in ${cityName}?`,
    answer: `We typically schedule within 24 to 72 hours. Same-day service is available for urgent situations. We operate 24/7.`,
  },
  {
    question: `How much does air duct cleaning cost in ${cityName}?`,
    answer: `Pricing in ${cityName} follows the same structure as throughout our service area — typically $300–$700 for a standard residential home, depending on size, vent count, and system configuration. Contact us for a specific estimate.`,
  },
];

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;

  const cityData = AREA_CITIES.find((c) => c.slug === city);
  if (!cityData) notFound();

  const content = AREA_CONTENT.find((a) => a.slug === city);
  const cityName = content?.name || cityData.name;
  const county = content?.county || cityData.county;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.domain },
    { name: "Areas", url: `${BUSINESS.domain}/areas` },
    { name: cityName, url: `${BUSINESS.domain}/areas/${city}` },
  ]);
  const serviceSchema = buildServiceSchema(
    "Air Duct Cleaning",
    "air-duct-cleaning",
    `Professional air duct cleaning in ${cityName}, FL by AL Air Duct Cleaning Jacksonville.`
  );
  const faqSchema = buildFAQSchema(areaFAQs(cityName));

  // For cities without custom content, render a standard area page
  const nearbyAreas = content?.nearbyAreas
    ? AREA_CITIES.filter((c) => content.nearbyAreas.includes(c.slug))
    : AREA_CITIES.filter((c) => c.county === cityData.county && c.slug !== city).slice(0, 4);

  return (
    <>
      <SchemaScript schema={[breadcrumbSchema, serviceSchema, faqSchema]} />

      {/* Hero */}
      <section style={{ background: "#F8FAFC" }} className="section-pad">
        <div className="container-content">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Service areas", href: "/areas" },
              { label: cityName },
            ]}
          />
          <div className="flex items-center gap-2 mt-4 mb-3">
            <MapPin size={16} strokeWidth={1.5} style={{ color: "#F26522" }} />
            <span className="eyebrow">{county} County</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5" style={{ color: "#0F172A" }}>
            {content?.h1 || `Air duct cleaning in ${cityName}, FL`}
          </h1>
          {content ? (
            <div className="answer-box max-w-3xl">
              <p className="text-base leading-relaxed" style={{ color: "#0F172A" }}>
                {content.intro}
              </p>
            </div>
          ) : (
            <div className="answer-box max-w-3xl">
              <p className="text-base leading-relaxed" style={{ color: "#0F172A" }}>
                AL Air Duct Cleaning Jacksonville provides professional air duct and HVAC cleaning in {cityName}, {county} County, FL. We serve all of Duval, St. Johns, Clay and Nassau counties using NADCA-standard negative pressure methods. Free estimates and 24/7 availability.
              </p>
            </div>
          )}
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

      {/* Main content */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container-content">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Body content */}
            <div className="lg:col-span-2">
              {content ? (
                <>
                  <div className="prose-content space-y-4 text-base">
                    {content.body.split("\n\n").map((para, i) => {
                      if (para.startsWith("**") && para.includes("**\n")) {
                        const [heading, ...rest] = para.split("\n");
                        return (
                          <div key={i}>
                            <h2 style={{ color: "#0F172A", fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                              {heading.replace(/\*\*/g, "")}
                            </h2>
                            <p>{rest.join("\n")}</p>
                          </div>
                        );
                      }
                      if (para.startsWith("**") && para.endsWith("**")) {
                        return (
                          <h2 key={i} style={{ color: "#0F172A", fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                            {para.replace(/\*\*/g, "")}
                          </h2>
                        );
                      }
                      return <p key={i} style={{ color: "#475569" }}>{para.replace(/\*\*(.*?)\*\*/g, '$1')}</p>;
                    })}
                  </div>

                  <div className="mt-8 p-5 rounded-xl" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                    <h3 className="font-semibold text-sm mb-2" style={{ color: "#0F172A" }}>Housing notes for {cityName}</h3>
                    <p className="text-sm" style={{ color: "#475569" }}>{content.housingNote}</p>
                    <div className="mt-3 pt-3 border-t border-[#E2E8F0]">
                      <p className="text-sm" style={{ color: "#475569" }}>{content.localHook}</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="prose-content">
                  <h2>Air duct and HVAC cleaning in {cityName}</h2>
                  <p>
                    AL Air Duct Cleaning Jacksonville provides residential and commercial air duct cleaning, HVAC cleaning, dryer vent cleaning, sanitization, and mold inspection services in {cityName} and throughout {county} County. Our technicians use NADCA-standard negative pressure methods — the same process on every job, regardless of location.
                  </p>
                  <p>
                    {cityName} is fully within our four-county service area. We quote the same pricing structure as any other location in our service zone and schedule within the same 24-to-72-hour window. No travel surcharge.
                  </p>
                  <h2>Services available in {cityName}</h2>
                  <ul>
                    {SERVICES.map((s) => (
                      <li key={s.slug} className="flex items-start gap-3 !list-none">
                        <CheckCircle size={16} strokeWidth={1.5} style={{ color: "#16A34A", marginTop: "3px", flexShrink: 0 }} />
                        <span>{s.name}</span>
                      </li>
                    ))}
                  </ul>
                  <h2>Pricing in {cityName}</h2>
                  <p>
                    Residential duct cleaning in {cityName} follows the same pricing structure as throughout our service area — typically $300 to $700 for a standard home, depending on size and configuration. Contact us for a specific estimate.
                  </p>
                </div>
              )}

              {/* FAQs */}
              <div className="mt-10">
                <h2 className="text-xl font-bold mb-5" style={{ color: "#0F172A" }}>
                  Questions about service in {cityName}
                </h2>
                <div className="space-y-4">
                  {areaFAQs(cityName).map((faq, i) => (
                    <div key={i} className="card">
                      <h3 className="font-semibold text-sm mb-2" style={{ color: "#0F172A" }}>{faq.question}</h3>
                      <p className="text-sm" style={{ color: "#475569" }}>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <LeadForm
                headline={`Get your free estimate in ${cityName}`}
                subline="Response within 1 hour."
                compact
              />

              {/* Services list */}
              <div className="card">
                <h3 className="font-semibold text-sm mb-3" style={{ color: "#0F172A" }}>Our services</h3>
                <ul className="space-y-2">
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-2 text-sm hover:underline"
                        style={{ color: "#0B5563" }}
                      >
                        <ArrowRight size={12} strokeWidth={1.5} />
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nearby areas */}
              {nearbyAreas.length > 0 && (
                <div className="card">
                  <h3 className="font-semibold text-sm mb-3" style={{ color: "#0F172A" }}>Nearby areas we serve</h3>
                  <ul className="space-y-2">
                    {nearbyAreas.map((a) => (
                      <li key={a.slug}>
                        <Link
                          href={`/areas/${a.slug}`}
                          className="flex items-center gap-2 text-sm hover:underline"
                          style={{ color: "#0B5563" }}
                        >
                          <MapPin size={12} strokeWidth={1.5} />
                          {a.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
