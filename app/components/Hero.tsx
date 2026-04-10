"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden texture"
      style={{
        background: "linear-gradient(160deg, #0d0d0b 0%, #1a0808 50%, #0d0d0b 100%)",
      }}
    >
      {/* Background grid lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(139,26,26,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Badge logo */}
        <div className="flex justify-center mb-8">
          <Image src="/logo.svg" alt="RebuildWithChris logo" width={120} height={120} className="object-contain" />
        </div>

        {/* Eyebrow */}
        <p
          className="text-xs tracking-[0.4em] uppercase mb-4 font-semibold"
          style={{ color: "#8b1a1a" }}
        >
          Rebuild · Recover · Rise
        </p>

        {/* Main headline */}
        <h1
          className="font-['Bebas_Neue'] text-6xl sm:text-8xl md:text-9xl tracking-wider mb-6"
          style={{ color: "#f0e6d3" }}
        >
          REBUILD
          <br />
          <span style={{ color: "#c9a84c" }}>WITH CHRIS</span>
        </h1>

        {/* Sub-headline */}
        <p
          className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-4 font-light leading-relaxed"
          style={{ color: "#c9a84c" }}
        >
          Break Free From Cocaine Addiction —<br className="hidden sm:block" /> Rebuild Your Life with the 12-Week Programme.
        </p>

        <p
          className="text-base sm:text-lg max-w-xl mx-auto mb-10 font-light"
          style={{ color: "#a09080" }}
        >
          Pull yourself out of the trenches. Build a life you don&apos;t need to escape.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 font-['Bebas_Neue'] text-xl tracking-[0.15em] transition-all duration-200 border-2"
            style={{
              background: "#8b1a1a",
              borderColor: "#8b1a1a",
              color: "#f0e6d3",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#5c0f0f";
              (e.currentTarget as HTMLElement).style.borderColor = "#5c0f0f";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#8b1a1a";
              (e.currentTarget as HTMLElement).style.borderColor = "#8b1a1a";
            }}
          >
            JOIN THE PROGRAMME
          </a>
          <a
            href="#programme"
            className="px-8 py-4 font-['Bebas_Neue'] text-xl tracking-[0.15em] transition-all duration-200 border-2"
            style={{
              background: "transparent",
              borderColor: "#c9a84c",
              color: "#c9a84c",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            SEE WHAT&apos;S INCLUDED
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs tracking-widest uppercase" style={{ color: "#5c5040" }}>
            Scroll
          </span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <path d="M8 0v20M1 14l7 7 7-7" stroke="#8b1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(transparent, #0d0d0b)" }}
      />
    </section>
  );
}
