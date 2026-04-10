"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Story", href: "#story" },
  { label: "Programme", href: "#programme" },
  { label: "Assessment", href: "#assessment" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0d0d0b]/95 backdrop-blur border-b border-[#8b1a1a]/30 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="RebuildWithChris logo" width={48} height={48} className="object-contain" />
          <div className="hidden sm:block">
            <div
              className="font-['Bebas_Neue'] text-xl tracking-widest"
              style={{ color: "#c9a84c" }}
            >
              REBUILDWITHCHRIS
            </div>
            <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "#a09080" }}>
              Rebuild · Recover · Rise
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-widest uppercase transition-colors duration-200"
              style={{ color: "#a09080" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#a09080")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 text-sm tracking-widest uppercase font-semibold border transition-all duration-200"
            style={{
              borderColor: "#8b1a1a",
              color: "#f0e6d3",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#8b1a1a";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            Join Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            style={{ background: "#c9a84c" }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            style={{ background: "#c9a84c" }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ background: "#c9a84c" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t px-6 py-6 flex flex-col gap-4" style={{ background: "#0d0d0b", borderColor: "#8b1a1a30" }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase"
              style={{ color: "#a09080" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-3 text-sm tracking-widest uppercase font-semibold text-center border"
            style={{ borderColor: "#8b1a1a", color: "#f0e6d3" }}
          >
            Join Now
          </a>
        </div>
      )}
    </header>
  );
}
