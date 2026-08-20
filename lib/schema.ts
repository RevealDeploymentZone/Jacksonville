import { BUSINESS, hasRealReviews, SERVICES, AREA_CITIES } from "@/data/business";

export function buildOrganizationSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "LocalBusiness"],
    "@id": `${BUSINESS.domain}/#organization`,
    name: BUSINESS.name,
    url: BUSINESS.domain,
    logo: {
      "@type": "ImageObject",
      url: `${BUSINESS.domain}/images/logo.png`,
      width: 300,
      height: 100,
    },
    image: `${BUSINESS.domain}/images/og-home.jpg`,
    telephone: BUSINESS.phoneRaw,
    email: BUSINESS.email.startsWith("[[") ? undefined : BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      postalCode: BUSINESS.zip.startsWith("[[") ? undefined : BUSINESS.zip,
      addressCountry: BUSINESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.lat,
      longitude: BUSINESS.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      { "@type": "County", name: "Duval County", addressRegion: "FL" },
      { "@type": "County", name: "St. Johns County", addressRegion: "FL" },
      { "@type": "County", name: "Clay County", addressRegion: "FL" },
      { "@type": "County", name: "Nassau County", addressRegion: "FL" },
      ...AREA_CITIES.map((c) => ({
        "@type": "City",
        name: c.name,
        addressRegion: "FL",
      })),
    ],
    sameAs: [
      BUSINESS.social.facebook,
      BUSINESS.social.googleMaps,
      BUSINESS.social.yelp,
    ].filter(Boolean),
    priceRange: "$$",
  };

  if (hasRealReviews) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.reviewAverage,
      reviewCount: BUSINESS.reviewCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return schema;
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BUSINESS.domain}/#website`,
    url: BUSINESS.domain,
    name: BUSINESS.name,
    publisher: { "@id": `${BUSINESS.domain}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BUSINESS.domain}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildServiceSchema(serviceName: string, serviceSlug: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    name: `${serviceName} in Jacksonville, FL`,
    description,
    provider: { "@id": `${BUSINESS.domain}/#organization` },
    areaServed: [
      { "@type": "City", name: "Jacksonville", addressRegion: "FL" },
      { "@type": "County", name: "Duval County", addressRegion: "FL" },
      { "@type": "County", name: "St. Johns County", addressRegion: "FL" },
      { "@type": "County", name: "Clay County", addressRegion: "FL" },
      { "@type": "County", name: "Nassau County", addressRegion: "FL" },
    ],
    url: `${BUSINESS.domain}/services/${serviceSlug}`,
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${BUSINESS.domain}/blog/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Person",
      name: article.authorName,
    },
    publisher: { "@id": `${BUSINESS.domain}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BUSINESS.domain}/blog/${article.slug}`,
    },
  };
}

export function buildHowToSchema(name: string, steps: { name: string; text: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function buildSpeakableSchema(cssSelectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };
}
