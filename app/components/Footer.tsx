import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t py-12 px-6" style={{ borderColor: "#8b1a1a30", background: "#080806" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Image src="/logo.svg" alt="RebuildWithChris logo" width={52} height={52} className="object-contain" />
          <div>
            <div className="font-['Bebas_Neue'] text-lg tracking-widest" style={{ color: "#c9a84c" }}>
              REBUILDWITHCHRIS
            </div>
            <div className="text-xs tracking-[0.2em] uppercase" style={{ color: "#a09080" }}>
              Rebuild · Recover · Rise
            </div>
          </div>
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs" style={{ color: "#a09080" }}>
            © {new Date().getFullYear()} RebuildWithChris. All rights reserved.
          </p>
          <p className="text-xs mt-1" style={{ color: "#5c5040" }}>
            Built for people who are ready to rebuild.
          </p>
        </div>
      </div>
    </footer>
  );
}
