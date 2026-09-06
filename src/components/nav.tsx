"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/portfolio";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#agents", label: "AI Agents" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stone-50/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-[clamp(24px,5vw,80px)] flex justify-between items-center h-[72px] border-b border-stone-200">
        <a
          href="#top"
          className="font-semibold text-[15px] text-stone-900 tracking-tight"
        >
          {siteConfig.name}
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-orange-700 font-medium hover:text-orange-800 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-stone-600"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {mobileOpen ? (
              <path d="M5 5l10 10M15 5L5 15" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-stone-50/95 backdrop-blur-md border-b border-stone-200 px-8 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-stone-600 hover:text-stone-900 py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-orange-700 font-medium py-1"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
