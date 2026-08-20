"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { SERVICES } from "@/data/business";

interface LeadFormProps {
  headline?: string;
  subline?: string;
  compact?: boolean;
  defaultService?: string;
}

export default function LeadForm({
  headline = "Get your free estimate",
  subline = "No obligation. We respond within 1 hour.",
  compact = false,
  defaultService = "",
}: LeadFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs: Record<string, string> = {};
    const name = data.get("name") as string;
    const phone = data.get("phone") as string;

    if (!name || name.trim().length < 2) errs.name = "Please enter your full name.";
    if (!phone || !/^\+?[\d\s\-().]{7,}$/.test(phone.trim()))
      errs.phone = "Please enter a valid phone number.";

    if (Object.keys(errs).length > 0) {
      e.preventDefault();
      setErrors(errs);
      return;
    }
    setErrors({});
    // Valid — let the form POST natively to FormSubmit.co
  }

  return (
    <div className="card">
      {!compact && (
        <div className="mb-5">
          <h3 className="text-xl font-semibold mb-1" style={{ color: "#0F172A" }}>
            {headline}
          </h3>
          <p className="text-sm" style={{ color: "#475569" }}>
            {subline}
          </p>
        </div>
      )}

      <form
        action="https://formsubmit.co/info@alhomeservices.us"
        method="POST"
        onSubmit={handleSubmit}
      >
        {/* FormSubmit.co config */}
        <input type="hidden" name="_subject" value="New Lead — AL Air Duct Cleaning Jacksonville" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://al-air-duct-jacksonville.vercel.app/thank-you" />
        {/* Honeypot */}
        <input name="_honey" type="text" style={{ display: "none" }} />

        <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
          {/* Full name */}
          <div>
            <label
              htmlFor="lead-name"
              className="block text-sm font-medium mb-1"
              style={{ color: "#0F172A" }}
            >
              Full name <span style={{ color: "#F26522" }}>*</span>
            </label>
            <input
              id="lead-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5563] ${
                errors.name ? "border-red-400 bg-red-50" : "border-[#E2E8F0]"
              }`}
              placeholder="Jane Smith"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="lead-phone"
              className="block text-sm font-medium mb-1"
              style={{ color: "#0F172A" }}
            >
              Phone <span style={{ color: "#F26522" }}>*</span>
            </label>
            <input
              id="lead-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5563] ${
                errors.phone ? "border-red-400 bg-red-50" : "border-[#E2E8F0]"
              }`}
              placeholder="(904) 555-0100"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="lead-email"
              className="block text-sm font-medium mb-1"
              style={{ color: "#0F172A" }}
            >
              Email
            </label>
            <input
              id="lead-email"
              name="email"
              type="email"
              autoComplete="email"
              className="w-full border border-[#E2E8F0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5563]"
              placeholder="jane@example.com"
            />
          </div>

          {/* Service */}
          <div>
            <label
              htmlFor="lead-service"
              className="block text-sm font-medium mb-1"
              style={{ color: "#0F172A" }}
            >
              Service needed
            </label>
            <select
              id="lead-service"
              name="service"
              defaultValue={defaultService}
              className="w-full border border-[#E2E8F0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5563] bg-white"
            >
              <option value="">— Select a service —</option>
              {SERVICES.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name}
                </option>
              ))}
              <option value="Not sure">Not sure</option>
            </select>
          </div>

          {/* ZIP */}
          <div>
            <label
              htmlFor="lead-zip"
              className="block text-sm font-medium mb-1"
              style={{ color: "#0F172A" }}
            >
              ZIP code
            </label>
            <input
              id="lead-zip"
              name="zip"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              className="w-full border border-[#E2E8F0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5563]"
              placeholder="32207"
              maxLength={10}
            />
          </div>

          {/* Message */}
          <div className={compact ? "" : "sm:col-span-2"}>
            <label
              htmlFor="lead-message"
              className="block text-sm font-medium mb-1"
              style={{ color: "#0F172A" }}
            >
              Message
            </label>
            <textarea
              id="lead-message"
              name="message"
              rows={3}
              className="w-full border border-[#E2E8F0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5563] resize-none"
              placeholder="Describe what you need or any questions you have..."
            />
          </div>
        </div>

        <button type="submit" className="btn-primary w-full mt-4">
          <Send size={16} strokeWidth={1.5} />
          Get my free estimate
        </button>
        <p className="text-xs text-center mt-2" style={{ color: "#94a3b8" }}>
          No spam. No obligation. Calls returned within 1 hour.
        </p>
      </form>
    </div>
  );
}
