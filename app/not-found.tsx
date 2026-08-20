import Link from "next/link";
import { Home, Search, Phone } from "lucide-react";
import { BUSINESS, SERVICES } from "@/data/business";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-lg">
        <div
          className="text-6xl font-bold mb-4"
          style={{ color: "#0B5563" }}
        >
          404
        </div>
        <h1 className="text-2xl font-bold mb-3" style={{ color: "#0F172A" }}>
          Page not found
        </h1>
        <p className="text-base mb-8" style={{ color: "#475569" }}>
          The page you're looking for doesn't exist. Use the links below or call us directly.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Link href="/" className="btn-secondary inline-flex">
            <Home size={16} strokeWidth={1.5} />
            Go to homepage
          </Link>
          <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary inline-flex">
            <Phone size={16} strokeWidth={1.5} />
            Call us now
          </a>
        </div>

        <div className="card text-left">
          <h2 className="font-semibold text-sm mb-3" style={{ color: "#0F172A" }}>
            Main services
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="text-sm hover:underline"
                style={{ color: "#0B5563" }}
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
