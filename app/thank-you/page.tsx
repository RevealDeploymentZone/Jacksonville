import Link from "next/link";
import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you — AL Air Duct Cleaning Jacksonville",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="section-pad" style={{ background: "#F8FAFC", minHeight: "60vh" }}>
      <div className="container-content flex flex-col items-center justify-center text-center max-w-lg mx-auto">
        <CheckCircle size={64} strokeWidth={1.5} style={{ color: "#16A34A" }} className="mb-6" />
        <h1 className="text-3xl font-bold mb-3" style={{ color: "#0F172A" }}>
          Request received!
        </h1>
        <p className="text-lg mb-8" style={{ color: "#475569" }}>
          Thank you for reaching out. We'll call you back within 1 hour to confirm your appointment.
        </p>
        <Link href="/" className="btn-primary">
          Back to homepage
        </Link>
      </div>
    </section>
  );
}
