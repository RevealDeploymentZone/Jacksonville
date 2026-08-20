"use client";

import Link from "next/link";
import { Phone, FileText } from "lucide-react";
import { BUSINESS } from "@/data/business";

export default function MobileCTABar() {
  return (
    <div className="mobile-cta-bar" role="complementary" aria-label="Quick contact">
      <a
        href={`tel:${BUSINESS.phoneRaw}`}
        className="flex-1 btn-secondary text-sm py-2.5 px-3"
      >
        <Phone size={15} strokeWidth={1.5} />
        Call now
      </a>
      <Link
        href="/contact"
        className="flex-1 btn-primary text-sm py-2.5 px-3"
      >
        <FileText size={15} strokeWidth={1.5} />
        Free estimate
      </Link>
    </div>
  );
}
