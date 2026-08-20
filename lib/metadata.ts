import { Metadata } from "next";
import { BUSINESS } from "@/data/business";

export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}): Metadata {
  const url = `${BUSINESS.domain}${opts.path}`;
  const ogImage = opts.ogImage || `${BUSINESS.domain}/images/og-home.jpg`;

  return {
    title: opts.title,
    description: opts.description,
    metadataBase: new URL(BUSINESS.domain),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: BUSINESS.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: opts.title }],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [ogImage],
    },
    other: {
      "geo.region": "US-FL",
      "geo.placename": "Jacksonville, Florida",
    },
  };
}
