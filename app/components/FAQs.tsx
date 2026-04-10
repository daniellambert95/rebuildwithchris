"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Is this rehab?",
    a: "No. This is real-world recovery built around structure, discipline, and accountability — not institutions or labels.",
  },
  {
    q: "Do I need to be fully clean before applying?",
    a: "No. But you must be ready to stop. This is for anyone who is done lying to themselves.",
  },
  {
    q: "Do I need meetings or medication?",
    a: "No. This system is built from lived experience, not theory. If you're already under medical care, nothing is interfered with.",
  },
  {
    q: "Is this confidential?",
    a: "Yes. Completely. No groups. No exposure. No sharing unless you choose to.",
  },
  {
    q: "Why should I trust you?",
    a: "I started cocaine at 16. I lived in addiction for 19 years. No rehab. No meetings. I stopped because I refused to miss my daughter's life — and I rebuilt from there.",
  },
  {
    q: "How much does it cost?",
    a: "The programme costs €375 / £325. One payment. Three months. A completely different life.",
  },
];

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faqs" className="relative py-24 px-6" style={{ background: "#0d0d0b" }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs tracking-[0.4em] uppercase mb-2 font-semibold" style={{ color: "#8b1a1a" }}>
            No Bullshit
          </p>
          <h2 className="font-['Bebas_Neue'] text-5xl sm:text-7xl" style={{ color: "#f0e6d3" }}>
            FREQUENTLY ASKED{" "}
            <span style={{ color: "#c9a84c" }}>QUESTIONS</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border transition-all duration-200"
              style={{
                borderColor: open === i ? "#8b1a1a80" : "#8b1a1a20",
                background: open === i ? "rgba(139,26,26,0.06)" : "transparent",
              }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="font-semibold text-sm sm:text-base tracking-wide pr-4"
                  style={{ color: open === i ? "#f0e6d3" : "#c4b49a" }}
                >
                  {faq.q}
                </span>
                <span
                  className="shrink-0 w-6 h-6 flex items-center justify-center border rounded-full transition-all duration-200"
                  style={{
                    borderColor: open === i ? "#8b1a1a" : "#8b1a1a40",
                    color: open === i ? "#c9a84c" : "#a09080",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: "#a09080" }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center border-t pt-10" style={{ borderColor: "#8b1a1a20" }}>
          <p className="text-sm mb-4" style={{ color: "#a09080" }}>
            Still got questions? Chris will answer them directly.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 font-['Bebas_Neue'] text-xl tracking-widest border-2 transition-all duration-200"
            style={{ borderColor: "#c9a84c", color: "#c9a84c" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  );
}
