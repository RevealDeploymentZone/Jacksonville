import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { BUSINESS } from "@/data/business";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Terms of service | AL Air Duct Cleaning Jacksonville",
  description: "Terms of service for AL Air Duct Cleaning Jacksonville.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section style={{ background: "white" }} className="section-pad">
      <div className="container-content max-w-3xl">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms of service" }]} />
        <h1 className="text-3xl font-bold mt-4 mb-8" style={{ color: "#0F172A" }}>Terms of service</h1>
        <div className="prose-content space-y-5 text-sm">
          <p><strong>Last updated:</strong> August 2026</p>
          <p>
            By using the website at {BUSINESS.domain} or by engaging the services of AL Air Duct Cleaning Jacksonville, you agree to the following terms.
          </p>
          <h2>Services</h2>
          <p>
            AL Air Duct Cleaning Jacksonville provides air duct cleaning, HVAC cleaning, dryer vent cleaning, sanitization, and related services in Northeast Florida. Service scope, pricing, and scheduling are confirmed before work begins. Estimates provided via this website are preliminary and subject to on-site verification.
          </p>
          <h2>Service limitations</h2>
          <p>
            Air duct cleaning is a maintenance service that removes accumulated debris from duct surfaces. It does not guarantee resolution of health symptoms, eliminate all indoor allergens, or compensate for systemic moisture problems, equipment failure, or ventilation deficiencies. Any representations about health benefits on this site reflect the general evidence base and are not guarantees of specific outcomes for any individual.
          </p>
          <h2>Florida mold licensing</h2>
          <p>
            Mold assessment and mold remediation in Florida are regulated activities under Chapter 468, Part XVI, Florida Statutes. Services described as "mold inspection" on this site refer to visual inspection as part of duct cleaning assessment. Licensed mold remediation work, where required, is referred to Florida-licensed professionals.
          </p>
          <h2>Accuracy of site content</h2>
          <p>
            We make reasonable efforts to keep pricing guidance and service descriptions current. Actual pricing is determined per job. Licence numbers and credentials displayed are those held at the time of publication and should be verified with the Florida DBPR before relying on them for compliance purposes.
          </p>
          <h2>Limitation of liability</h2>
          <p>
            To the extent permitted by Florida law, AL Air Duct Cleaning Jacksonville's liability for any claim arising from services rendered or use of this website is limited to the amount paid for the specific service at issue.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about these terms:{" "}
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
