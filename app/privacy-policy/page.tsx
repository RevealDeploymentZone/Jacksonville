import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/data/business";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Privacy policy | AL Air Duct Cleaning Jacksonville",
  description: "Privacy policy for AL Air Duct Cleaning Jacksonville.",
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <section style={{ background: "white" }} className="section-pad">
      <div className="container-content max-w-3xl">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy policy" }]} />
        <h1 className="text-3xl font-bold mt-4 mb-8" style={{ color: "#0F172A" }}>Privacy policy</h1>
        <div className="prose-content space-y-5 text-sm">
          <p><strong>Last updated:</strong> August 2026</p>
          <p>
            AL Air Duct Cleaning Jacksonville ("we," "our," or "us") operates the website at {BUSINESS.domain}. This privacy policy describes how we collect, use, and protect information submitted through this site.
          </p>
          <h2>Information we collect</h2>
          <p>
            We collect information you voluntarily provide through our lead and estimate request forms, including your name, phone number, email address, service type, ZIP code, and any message you include. We also collect standard web server logs (IP address, browser type, pages visited) through our hosting provider.
          </p>
          <h2>How we use your information</h2>
          <p>
            We use the information you provide to respond to your estimate requests, schedule service appointments, and communicate about your service. We do not sell your information to third parties. We may use a third-party email or CRM service to manage communications — these services are bound by their own privacy policies.
          </p>
          <h2>Cookies</h2>
          <p>
            This site uses minimal cookies for essential functionality. We may use Google Analytics or similar tools to understand site traffic in aggregate. These tools may place cookies on your device. You can disable cookies in your browser settings.
          </p>
          <h2>Data retention</h2>
          <p>
            We retain lead form submissions for the period necessary to fulfill the service request and for our legitimate business records. You may request deletion of your information by contacting us at the address below.
          </p>
          <h2>Contact</h2>
          <p>
            For privacy questions or to request deletion of your information, contact us at:{" "}
            {!BUSINESS.email.startsWith("[[") ? (
              <a href={`mailto:${BUSINESS.email}`} style={{ color: "#0B5563" }}>{BUSINESS.email}</a>
            ) : (
              <span>[TODO: Add contact email]</span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
