import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import SchemaScript from "@/components/SchemaScript";
import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/schema";
import { BUSINESS } from "@/data/business";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.domain),
  title: {
    default: "AL Air Duct Cleaning Jacksonville | 24/7 Duct & HVAC Cleaning",
    template: "%s | AL Air Duct Cleaning Jacksonville",
  },
  description:
    "Professional air duct and HVAC cleaning in Jacksonville, FL. Serving Duval, St. Johns, Clay and Nassau counties. Available 24/7. Free estimates.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = buildOrganizationSchema();
  const siteSchema = buildWebSiteSchema();

  return (
    <html lang="en-US" className={`${inter.variable} h-full`}>
      <head>
        <SchemaScript schema={[orgSchema, siteSchema]} />
      </head>
      <body className="min-h-full flex flex-col">
        <TopBar />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
