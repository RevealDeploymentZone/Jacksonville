import Link from "next/link";
import { Phone, Clock } from "lucide-react";
import { BUSINESS } from "@/data/business";

export default function TopBar() {
  return (
    <div className="bg-[#0B5563] text-white text-sm">
      <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-1 py-2">
        <div className="flex items-center gap-2">
          <Clock size={14} strokeWidth={1.5} />
          <span>Open 24/7 — serving all of Duval, St. Johns, Clay and Nassau</span>
        </div>
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="flex items-center gap-2 font-semibold hover:text-orange-200 transition-colors"
        >
          <Phone size={14} strokeWidth={1.5} />
          {BUSINESS.phone}
        </a>
      </div>
    </div>
  );
}
