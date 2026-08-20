import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting (per IP, resets on server restart)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now > record.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) return false;
  record.count++;
  return true;
}

function validateLeadData(data: Record<string, unknown>): string[] {
  const errors: string[] = [];

  const name = data.name as string;
  const phone = data.phone as string;

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.push("Name is required");
  }
  if (!phone || typeof phone !== "string" || !/^\+?[\d\s\-().]{7,}$/.test(phone.trim())) {
    errors.push("Valid phone number is required");
  }
  // Check for suspicious patterns
  if (name && (name.includes("http") || name.includes("<"))) {
    errors.push("Invalid name");
  }

  return errors;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate
    const errors = validateLeadData(body);
    if (errors.length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const leadData = {
      name: String(body.name || "").trim(),
      phone: String(body.phone || "").trim(),
      email: String(body.email || "").trim(),
      service: String(body.service || "").trim(),
      zip: String(body.zip || "").trim(),
      message: String(body.message || "").trim(),
      submittedAt: new Date().toISOString(),
      source: "website-lead-form",
    };

    // Send email notification if configured
    const emailTo = process.env.LEAD_EMAIL_TO;
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;

    if (emailTo) {
      // TODO: Integrate with your email provider (e.g., Resend, SendGrid, Postmark)
      // Example with Resend:
      // const resend = new Resend(process.env.RESEND_API_KEY);
      // await resend.emails.send({
      //   from: "leads@jacksonville.alairductcleaning.com",
      //   to: emailTo,
      //   subject: `New lead: ${leadData.name} — ${leadData.service || "general inquiry"}`,
      //   text: JSON.stringify(leadData, null, 2),
      // });
      console.log("Lead received (email not configured):", leadData);
    }

    if (webhookUrl) {
      // POST to webhook (e.g., Zapier, Make, custom CRM)
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      }).catch((err) => {
        console.error("Webhook delivery failed:", err);
        // Don't fail the request if webhook fails
      });
    }

    // Log to console as fallback (replace with your notification system)
    console.log("Lead form submission:", JSON.stringify(leadData));

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Lead form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
