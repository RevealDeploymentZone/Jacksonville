import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Phone } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import SchemaScript from "@/components/SchemaScript";
import { buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from "@/lib/schema";
import { BUSINESS } from "@/data/business";
import { BLOG_POSTS } from "@/data/blog";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return BLOG_POSTS.filter((p) => p.content).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDesc,
    alternates: { canonical: `${BUSINESS.domain}/blog/${slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDesc,
      url: `${BUSINESS.domain}/blog/${slug}`,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.authorName],
    },
  };
}

// Simple markdown-to-HTML-ish renderer for our blog content
function renderContent(content: string) {
  const sections: React.ReactNode[] = [];
  const paras = content.split("\n\n");

  paras.forEach((para, i) => {
    if (para.startsWith("## ")) {
      sections.push(
        <h2 key={i} className="text-2xl font-bold mt-8 mb-4" style={{ color: "#0F172A" }}>
          {para.replace("## ", "")}
        </h2>
      );
    } else if (para.startsWith("### ")) {
      sections.push(
        <h3 key={i} className="text-xl font-semibold mt-6 mb-3" style={{ color: "#0F172A" }}>
          {para.replace("### ", "")}
        </h3>
      );
    } else if (para.startsWith("- ") || para.includes("\n- ")) {
      const items = para.split("\n").filter(l => l.startsWith("- "));
      sections.push(
        <ul key={i} className="list-disc pl-6 space-y-2 mb-4">
          {items.map((item, j) => (
            <li key={j} style={{ color: "#475569" }}
              dangerouslySetInnerHTML={{
                __html: item
                  .replace("- ", "")
                  .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#0F172A">$1</strong>')
                  .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:#0B5563;text-decoration:underline">$1</a>'),
              }}
            />
          ))}
        </ul>
      );
    } else if (para.startsWith("1. ")) {
      const items = para.split("\n").filter(l => /^\d+\.\s/.test(l));
      sections.push(
        <ol key={i} className="list-decimal pl-6 space-y-2 mb-4">
          {items.map((item, j) => (
            <li key={j} style={{ color: "#475569" }}
              dangerouslySetInnerHTML={{
                __html: item
                  .replace(/^\d+\.\s/, "")
                  .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#0F172A">$1</strong>')
                  .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:#0B5563;text-decoration:underline">$1</a>'),
              }}
            />
          ))}
        </ol>
      );
    } else {
      sections.push(
        <p
          key={i}
          className="mb-4 leading-relaxed"
          style={{ color: "#475569" }}
          dangerouslySetInnerHTML={{
            __html: para
              .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#0F172A">$1</strong>')
              .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:#0B5563;text-decoration:underline">$1</a>'),
          }}
        />
      );
    }
  });

  return sections;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug && p.content);
  if (!post) notFound();

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.domain },
    { name: "Blog", url: `${BUSINESS.domain}/blog` },
    { name: post.title, url: `${BUSINESS.domain}/blog/${slug}` },
  ]);
  const articleSchema = buildArticleSchema({
    title: post.title,
    description: post.metaDesc,
    slug: post.slug,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    authorName: post.authorName,
  });

  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.slug !== slug && p.content
  ).slice(0, 2);

  return (
    <>
      <SchemaScript schema={[breadcrumbSchema, articleSchema]} />

      <section style={{ background: "#F8FAFC" }} className="section-pad">
        <div className="container-content max-w-4xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.category },
            ]}
          />
          <div className="flex items-center gap-3 mt-4 mb-4">
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full"
              style={{ background: "#F0F9FA", color: "#0B5563" }}
            >
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0F172A" }}>
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: "#475569" }}>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} strokeWidth={1.5} />
              <time dateTime={post.datePublished}>
                {new Date(post.datePublished).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-1.5">
              <User size={14} strokeWidth={1.5} />
              <span>{post.authorName}</span>
              {post.authorTitle && <span>· {post.authorTitle}</span>}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "white" }}>
        <div className="container-content">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Article */}
            <article className="lg:col-span-2">
              <div className="text-base leading-relaxed">
                {renderContent(post.content!)}
              </div>

              {/* Internal links to services */}
              <div className="mt-10 p-5 rounded-xl" style={{ background: "#F0F9FA", border: "1px solid #b3dde3" }}>
                <h3 className="font-semibold text-sm mb-3" style={{ color: "#0F172A" }}>
                  Related services from AL Air Duct Cleaning Jacksonville
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Air duct cleaning", href: "/services/air-duct-cleaning" },
                    { name: "HVAC cleaning", href: "/services/hvac-cleaning" },
                    { name: "Mold inspection", href: "/services/mold-inspection-removal" },
                  ].map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="text-sm font-medium hover:underline"
                      style={{ color: "#0B5563" }}
                    >
                      {s.name} →
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <Link href="/blog" className="flex items-center gap-2 text-sm font-medium hover:underline" style={{ color: "#0B5563" }}>
                  <ArrowLeft size={14} strokeWidth={1.5} />
                  Back to all articles
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <LeadForm
                headline="Get a free estimate"
                subline="Serving all of Northeast Florida. Response within 1 hour."
                compact
              />

              {relatedPosts.length > 0 && (
                <div className="card">
                  <h3 className="font-semibold text-sm mb-3" style={{ color: "#0F172A" }}>Related articles</h3>
                  <div className="space-y-3">
                    {relatedPosts.map((p) => (
                      <Link key={p.slug} href={`/blog/${p.slug}`} className="block">
                        <div className="text-sm font-medium hover:underline" style={{ color: "#0B5563" }}>
                          {p.title}
                        </div>
                        <div className="text-xs mt-0.5" style={{ color: "#94a3b8" }}>{p.category}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="card text-center">
                <p className="text-sm mb-3" style={{ color: "#475569" }}>Questions? We're available 24/7.</p>
                <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary w-full text-sm">
                  <Phone size={14} strokeWidth={1.5} />
                  {BUSINESS.phone}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
