"use client";

import { useState, useRef } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const honeypotRef = useRef<HTMLInputElement>(null);

  function validate(data: FormData) {
    const errs: Record<string, string> = {};
    const name = data.get("name") as string;
    const phone = data.get("phone") as string;

    if (!name || name.trim().length < 2) errs.name = "Please enter your full name.";
    if (!phone || !/^\+?[\d\s\-().]{7,}$/.test(phone.trim()))
      errs.phone = "Please enter a valid phone number.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot check
    if (honeypotRef.current?.value) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus("loading");
    setErrors({});

    try {
      const res = await fetch("https://formsubmit.co/ajax/info@alhomeservices.us", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email") || "not provided",
          service: data.get("service") || "Not specified",
          zip: data.get("zip") || "Not specified",
          message: data.get("message") || "",
          _subject: "New Lead — AL Air Duct Cleaning Jacksonville",
          _captcha: "false",
        }),
      });

      const json = await res.json();
      if (json.success === "true" || json.success === true) {
        setStatus("success");
        form.reset();
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "generate_lead", {
            event_category: "lead_form",
            event_label: data.get("service") as string,
          });
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card text-center py-10">
        <CheckCircle
          size={48}
          strokeWidth={1.5}
          className="mx-auto mb-4"
          style={{ color: "#16A34A" }}
        />
        <h3 className="text-xl font-semibold mb-2" style={{ color: "#0F172A" }}>
          Request received
        </h3>
        <p className="text-[#475569]">
          We'll call you back within 1 hour. Thank you for reaching out.
        </p>
      </div>
    );
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

      <form onSubmit={handleSubmit} noValidate>
        {/* Honeypot — hidden from real users */}
        <input
          ref={honeypotRef}
          name="_gotcha"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          style={{ position: "absolute", left: "-9999px", opacity: 0 }}
          aria-hidden="true"
        />

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

        {status === "error" && (
          <div className="mt-3 flex items-center gap-2 text-sm text-red-600">
            <AlertCircle size={16} strokeWidth={1.5} />
            Something went wrong. Please call us directly or try again.
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full mt-4"
        >
          {status === "loading" ? (
            "Sending..."
          ) : (
            <>
              <Send size={16} strokeWidth={1.5} />
              Get my free estimate
            </>
          )}
        </button>
        <p className="text-xs text-center mt-2" style={{ color: "#94a3b8" }}>
          No spam. No obligation. Calls returned within 1 hour.
        </p>
      </form>
    </div>
  );
}
