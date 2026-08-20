import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import SchemaScript from "@/components/SchemaScript";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { BUSINESS, AREA_CITIES } from "@/data/business";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Contact AL Air Duct Cleaning Jacksonville",
  description:
    "Contact AL Air Duct Cleaning Jacksonville. Get a free estimate for duct cleaning, HVAC cleaning, dryer vent cleaning, or mold inspection. We respond within 1 hour.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.domain },
    { name: "Contact", url: `${BUSINESS.domain}/contact` },
  ]);

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />

      <section style={{ background: "#F8FAFC" }} className="section-pad">
        <div className="container-content">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5" style={{ color: "#0F172A" }}>
            Contact us
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#475569" }}>
            Get a free estimate or ask a question. We respond within one hour, seven days a week.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: "white" }}>
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#0F172A" }}>
                Get in touch
              </h2>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#F0F9FA" }}>
                    <Phone size={18} strokeWidth={1.5} style={{ color: "#0B5563" }} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-0.5" style={{ color: "#0F172A" }}>Phone</div>
                    <a
                      href={`tel:${BUSINESS.phoneRaw}`}
                      className="text-lg font-semibold hover:underline"
                      style={{ color: "#0B5563" }}
                    >
                      {BUSINESS.phone}
                    </a>
                    <p className="text-sm mt-0.5" style={{ color: "#475569" }}>
                      Available 24/7. Same-day service often available.
                    </p>
                  </div>
                </div>

                {!BUSINESS.email.startsWith("[[") && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#F0F9FA" }}>
                      <Mail size={18} strokeWidth={1.5} style={{ color: "#0B5563" }} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-0.5" style={{ color: "#0F172A" }}>Email</div>
                      <a
                        href={`mailto:${BUSINESS.email}`}
                        className="text-base hover:underline"
                        style={{ color: "#0B5563" }}
                      >
                        {BUSINESS.email}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#F0F9FA" }}>
                    <MapPin size={18} strokeWidth={1.5} style={{ color: "#0B5563" }} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-0.5" style={{ color: "#0F172A" }}>Service area</div>
                    <p className="text-sm" style={{ color: "#475569" }}>
                      All of Duval, St. Johns, Clay and Nassau counties, Florida.
                      <br />
                      No travel surcharge within the service zone.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#F0F9FA" }}>
                    <Clock size={18} strokeWidth={1.5} style={{ color: "#0B5563" }} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-0.5" style={{ color: "#0F172A" }}>Hours</div>
                    <p className="text-sm" style={{ color: "#475569" }}>{BUSINESS.hours}</p>
                  </div>
                </div>
              </div>

              {/* Service area quick list */}
              <div>
                <h3 className="text-base font-semibold mb-3" style={{ color: "#0F172A" }}>
                  Cities and communities served
                </h3>
                <div className="flex flex-wrap gap-2">
                  {AREA_CITIES.slice(0, 16).map((c) => (
                    <span
                      key={c.slug}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", color: "#475569" }}
                    >
                      {c.name}
                    </span>
                  ))}
                  <span className="text-xs px-2 py-1" style={{ color: "#94a3b8" }}>
                    +{AREA_CITIES.length - 16} more
                  </span>
                </div>
              </div>
            </div>

            {/* Lead form */}
            <div>
              <LeadForm
                headline="Request a free estimate"
                subline="Tell us what you need and we'll call back within 1 hour."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ background: "#F8FAFC" }}>
        <div className="container-content py-8">
          <div className="rounded-xl overflow-hidden border border-[#E2E8F0]" style={{ height: "340px" }}>
            <iframe
              src={`https://www.google.com/maps/embed/v1/search?key=&q=air+duct+cleaning+Jacksonville+FL&center=${BUSINESS.lat},${BUSINESS.lng}&zoom=11`}
              width="100%"
              height="340"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AL Air Duct Cleaning Jacksonville location map"
            />
          </div>
        </div>
      </section>
    </>
  );
}
