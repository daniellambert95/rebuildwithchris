import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
      style={{ background: "#0d0d0b" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,26,26,0.12), transparent 70%)" }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/logo.svg"
          alt="RebuildWithChris"
          width={80}
          height={80}
          className="object-contain mb-8 opacity-60"
        />

        <p className="text-xs tracking-[0.4em] uppercase mb-4 font-semibold" style={{ color: "#8b1a1a" }}>
          Page Not Found
        </p>

        <h1 className="font-['Bebas_Neue'] text-[10rem] sm:text-[14rem] leading-none mb-0" style={{ color: "#1a1008" }}>
          404
        </h1>

        <p className="font-['Bebas_Neue'] text-3xl sm:text-5xl tracking-wider -mt-4 mb-6" style={{ color: "#f0e6d3" }}>
          WRONG TURN.
        </p>

        <p className="text-sm max-w-xs leading-relaxed mb-10" style={{ color: "#a09080" }}>
          This page doesn&apos;t exist — but your rebuild does. Head back and keep going.
        </p>

        <Link
          href="/"
          className="px-8 py-4 font-['Bebas_Neue'] text-xl tracking-widest border-2 transition-all duration-200"
          style={{ background: "#8b1a1a", borderColor: "#8b1a1a", color: "#f0e6d3" }}
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
