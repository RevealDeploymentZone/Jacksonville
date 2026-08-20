import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import SchemaScript from "@/components/SchemaScript";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/data/business";
import { BLOG_POSTS } from "@/data/blog";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Blog — air duct & indoor air quality in Jacksonville, FL",
  description:
    "Guides, pricing info, and expert advice on air duct cleaning, indoor air quality, and HVAC maintenance for Jacksonville homeowners.",
  path: "/blog",
});

export default function BlogPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.domain },
    { name: "Blog", url: `${BUSINESS.domain}/blog` },
  ]);

  const fullPosts = BLOG_POSTS.filter((p) => p.content);
  const stubPosts = BLOG_POSTS.filter((p) => !p.content);

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />

      <section style={{ background: "#F8FAFC" }} className="section-pad">
        <div className="container-content">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5" style={{ color: "#0F172A" }}>
            Air duct and indoor air quality resources
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#475569" }}>
            Practical guides for Jacksonville homeowners on duct cleaning, indoor air quality, mold, HVAC maintenance, and what's specific to Northeast Florida's climate.
          </p>
        </div>
      </section>

      {/* Full posts */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container-content">
          <h2 className="text-xl font-bold mb-6" style={{ color: "#0F172A" }}>Featured articles</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {fullPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card group flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full"
                    style={{ background: "#F0F9FA", color: "#0B5563" }}
                  >
                    {post.category}
                  </span>
                </div>
                <h2
                  className="font-semibold text-base mb-2 flex-1 group-hover:text-[#0B5563] transition-colors leading-snug"
                  style={{ color: "#0F172A" }}
                >
                  {post.title}
                </h2>
                <p className="text-sm mb-4" style={{ color: "#475569" }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#E2E8F0]">
                  <div className="flex items-center gap-1 text-xs" style={{ color: "#94a3b8" }}>
                    <Calendar size={12} strokeWidth={1.5} />
                    {new Date(post.datePublished).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <div className="text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: "#0B5563" }}>
                    Read <ArrowRight size={12} strokeWidth={1.5} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Upcoming posts */}
          <h2 className="text-xl font-bold mb-6" style={{ color: "#0F172A" }}>Coming soon</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {stubPosts.map((post) => (
              <div key={post.slug} className="card flex flex-col gap-2">
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full w-fit"
                  style={{ background: "#F8FAFC", color: "#475569" }}
                >
                  {post.category}
                </span>
                <h3 className="font-semibold text-base" style={{ color: "#0F172A" }}>
                  {post.title}
                </h3>
                <p className="text-sm" style={{ color: "#475569" }}>{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
