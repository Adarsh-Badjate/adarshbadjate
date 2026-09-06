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
      <div className="max-w-[1440px] mx-auto px-[clamp(24px,5vw,80px)] flex justify-between items-center h-[52px] md:h-[72px] border-b border-stone-200">
        <a
          href="#top"
          className="font-semibold text-lg md:text-xl text-stone-900 tracking-tight"
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

        {/* Mobile: direct contact button */}
        <a
          href={`mailto:${siteConfig.email}`}
          className="md:hidden text-[13px] font-medium px-3 py-2 rounded-md bg-orange-700 text-white"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
