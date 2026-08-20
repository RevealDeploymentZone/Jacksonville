import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import SchemaScript from "@/components/SchemaScript";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { BUSINESS, hasRealReviews } from "@/data/business";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Customer reviews — AL Air Duct Cleaning Jacksonville",
  description:
    "Real customer reviews for AL Air Duct Cleaning Jacksonville. See what homeowners across Duval, St. Johns, Clay and Nassau counties say about our service.",
  path: "/reviews",
});

export default function ReviewsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.domain },
    { name: "Reviews", url: `${BUSINESS.domain}/reviews` },
  ]);

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />

      <section style={{ background: "#F8FAFC" }} className="section-pad">
        <div className="container-content">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Customer reviews" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5" style={{ color: "#0F172A" }}>
            Customer reviews
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#475569" }}>
            We don't fabricate testimonials. Every review displayed here is from a real customer. If you'd like to read more, the links below go directly to our verified profiles.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: "white" }}>
        <div className="container-content max-w-4xl">
          {/* Review summary — only shown with real data */}
          {hasRealReviews && (
            <div className="card mb-8 flex items-center gap-6">
              <div className="text-center">
                <div className="text-5xl font-bold" style={{ color: "#0F172A" }}>{BUSINESS.reviewAverage}</div>
                <div className="flex justify-center mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={i < Math.floor(BUSINESS.reviewAverage) ? "#F26522" : "none"}
                      stroke="#F26522"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <div className="text-sm mt-1" style={{ color: "#475569" }}>{BUSINESS.reviewCount} reviews</div>
              </div>
            </div>
          )}

          {/* Reviews or placeholder */}
          {hasRealReviews ? (
            <div className="space-y-5">
              {/* TODO: Replace with 3+ real, verified reviews from actual customers.
                   Include: reviewer name, neighbourhood, review text, date, source (Google/Yelp).
                   Do NOT publish this placeholder content. */}
              <div className="card p-6 border-2 border-dashed border-[#E2E8F0]">
                <p className="text-sm font-medium mb-2" style={{ color: "#F26522" }}>
                  TODO: Add real customer reviews here
                </p>
                <p className="text-sm" style={{ color: "#475569" }}>
                  Once you have verified Google or Yelp reviews, add them as individual review cards with:
                  reviewer name, neighbourhood, star rating, review text, date, and source.
                  Update BUSINESS.reviewCount and BUSINESS.reviewAverage in data/business.ts to reflect real numbers.
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg mb-4" style={{ color: "#475569" }}>
                We're collecting verified reviews from customers across Jacksonville.
              </p>
              <p className="text-base mb-8" style={{ color: "#475569" }}>
                In the meantime, see what homeowners are saying on our verified profiles:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {BUSINESS.social.googleMaps && (
                  <a
                    href={BUSINESS.social.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex"
                  >
                    <ExternalLink size={16} strokeWidth={1.5} />
                    Read Google reviews
                  </a>
                )}
                {BUSINESS.social.yelp && (
                  <a
                    href={BUSINESS.social.yelp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline inline-flex"
                  >
                    <ExternalLink size={16} strokeWidth={1.5} />
                    Read Yelp reviews
                  </a>
                )}
                {!BUSINESS.social.googleMaps && !BUSINESS.social.yelp && (
                  <p className="text-sm" style={{ color: "#94a3b8" }}>
                    TODO: Add Google Business Profile URL and/or Yelp URL in data/business.ts
                  </p>
                )}
              </div>
            </div>
          )}

          <div className="mt-12 p-6 rounded-xl" style={{ background: "#F8FAFC" }}>
            <h2 className="text-xl font-semibold mb-3" style={{ color: "#0F172A" }}>
              Leave a review
            </h2>
            <p className="text-sm mb-4" style={{ color: "#475569" }}>
              If you're a customer and want to share your experience, we'd genuinely appreciate an honest review on Google or Yelp.
            </p>
            <div className="flex flex-wrap gap-3">
              {BUSINESS.social.googleMaps && (
                <a
                  href={BUSINESS.social.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm inline-flex"
                >
                  Review us on Google
                </a>
              )}
              {BUSINESS.social.yelp && (
                <a
                  href={BUSINESS.social.yelp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm inline-flex"
                >
                  Review us on Yelp
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
