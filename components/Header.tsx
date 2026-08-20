"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { BUSINESS, SERVICES } from "@/data/business";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services", hasDropdown: true },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="container-content">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg"
              style={{ background: "#0B5563" }}
              aria-hidden="true"
            >
              AL
            </div>
            <div>
              <div className="font-bold text-sm leading-tight" style={{ color: "#0F172A" }}>
                AL Air Duct Cleaning
              </div>
              <div className="text-xs" style={{ color: "#475569" }}>
                Jacksonville, FL
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} className="relative group">
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#475569] hover:text-[#0B5563] transition-colors rounded-lg hover:bg-[#F8FAFC]"
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                  >
                    {link.label}
                    <ChevronDown size={14} strokeWidth={1.5} />
                  </button>
                  <div className="absolute top-full left-0 w-64 bg-white border border-[#E2E8F0] rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-sm font-semibold text-[#0B5563] hover:bg-[#F8FAFC]"
                    >
                      All services
                    </Link>
                    <div className="border-t border-[#E2E8F0] my-1" />
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block px-4 py-2 text-sm text-[#475569] hover:text-[#0B5563] hover:bg-[#F8FAFC]"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-[#475569] hover:text-[#0B5563] transition-colors rounded-lg hover:bg-[#F8FAFC]"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-semibold text-[#0B5563] hover:text-[#094a57]"
            >
              <Phone size={16} strokeWidth={1.5} />
              {BUSINESS.phone}
            </a>
            <Link href="/contact" className="btn-primary text-sm px-4 py-2">
              Free estimate
            </Link>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center gap-1 text-sm font-semibold"
              style={{ color: "#0B5563" }}
              aria-label="Call us"
            >
              <Phone size={18} strokeWidth={1.5} />
            </a>
            <button
              className="p-2 rounded-lg hover:bg-[#F8FAFC] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X size={22} strokeWidth={1.5} style={{ color: "#0F172A" }} />
              ) : (
                <Menu size={22} strokeWidth={1.5} style={{ color: "#0F172A" }} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#E2E8F0] bg-white">
          <nav className="container-content py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-[#475569] hover:text-[#0B5563] hover:bg-[#F8FAFC] rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div className="ml-4 mt-1 flex flex-col gap-1">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block px-3 py-2 text-sm text-[#475569] hover:text-[#0B5563] hover:bg-[#F8FAFC] rounded-lg"
                        onClick={() => setMobileOpen(false)}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-[#E2E8F0] mt-2 flex flex-col gap-2">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-secondary w-full">
                <Phone size={16} strokeWidth={1.5} />
                Call {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="btn-primary w-full"
                onClick={() => setMobileOpen(false)}
              >
                Get my free estimate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
