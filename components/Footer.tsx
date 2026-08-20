import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Share2, Star } from "lucide-react";
import { BUSINESS, SERVICES, AREA_CITIES } from "@/data/business";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "All services", href: "/services" },
    { label: "Customer reviews", href: "/reviews" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Sitemap", href: "/sitemap.xml" },
    { label: "Privacy policy", href: "/privacy-policy" },
    { label: "Terms of service", href: "/terms" },
  ];

  return (
    <footer style={{ background: "#0F172A", color: "#94a3b8" }}>
      {/* Main footer */}
      <div className="container-content py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logo-jax.png"
                alt="AL Air Duct Cleaning Jacksonville"
                width={140}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Professional air duct and HVAC cleaning across Duval, St. Johns, Clay and Nassau counties. Available 24 hours a day, seven days a week.
            </p>
            <div className="flex items-center gap-3">
              {BUSINESS.social.facebook && (
                <a
                  href={BUSINESS.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#1e293b] hover:bg-[#0B5563] transition-colors"
                  aria-label="Facebook"
                >
                  <Share2 size={16} strokeWidth={1.5} />
                </a>
              )}
              {BUSINESS.social.googleMaps && (
                <a
                  href={BUSINESS.social.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#1e293b] hover:bg-[#0B5563] transition-colors"
                  aria-label="Google Business Profile"
                >
                  <Star size={16} strokeWidth={1.5} />
                </a>
              )}
            </div>
            {/* Licences */}
            {(BUSINESS.licenses.dbprHvac || BUSINESS.licenses.nadca || BUSINESS.licenses.insurance) && (
              <div className="mt-4 p-3 rounded-lg bg-[#1e293b] text-xs space-y-1">
                {BUSINESS.licenses.dbprHvac && (
                  <div>FL HVAC Lic: <span className="text-white">{BUSINESS.licenses.dbprHvac}</span></div>
                )}
                {BUSINESS.licenses.nadca && (
                  <div>NADCA Member: <span className="text-white">{BUSINESS.licenses.nadca}</span></div>
                )}
                {BUSINESS.licenses.insurance && (
                  <div>Insured: <span className="text-white">{BUSINESS.licenses.insurance}</span></div>
                )}
              </div>
            )}
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Our services</h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm hover:text-white transition-colors font-medium" style={{ color: "#F26522" }}>
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Quick links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Quick links</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="flex items-start gap-2 hover:text-white transition-colors"
                >
                  <Phone size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                  {BUSINESS.phone}
                </a>
              </li>
              {!BUSINESS.email.startsWith("[[") && (
                <li>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="flex items-start gap-2 hover:text-white transition-colors"
                  >
                    <Mail size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                    {BUSINESS.email}
                  </a>
                </li>
              )}
              <li className="flex items-start gap-2">
                <MapPin size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                <span>
                  {BUSINESS.city}, {BUSINESS.state}
                  <br />
                  Serving Duval, St. Johns, Clay & Nassau Counties
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                {BUSINESS.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Service area city list */}
        <div className="mt-10 pt-8 border-t border-[#1e293b]">
          <h4 className="text-white text-sm font-semibold mb-3">Service areas</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {AREA_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/areas/${city.slug}`}
                className="text-xs hover:text-white transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-[#1e293b]">
        <div className="container-content py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <span>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </span>
          <span>
            <Link href="/privacy-policy" className="hover:text-white mr-4">Privacy policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of service</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
