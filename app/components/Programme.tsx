"use client";

const included = [
  {
    title: "Daily Accountability (WhatsApp)",
    body: "Morning. Evening. Night. You are never alone with urges.",
  },
  {
    title: "3-Month Structured Gym Program",
    body: "Built for Recovery — Not Ego. 12-Week Progressive Training Plan. Dopamine Re-Training Done Properly. Discipline & Routine Installed. Nervous System Supportive Programming. Gym becomes your anchor — not your escape.",
    note: "*A 12 week PT program alone costs more than this entire system.",
  },
  {
    title: "Nutrition for Recovery",
    body: "Stabilize mood. Improve sleep. Reduce cravings. Fuel your brain properly.",
  },
  {
    title: "Breathwork & Nervous System Tools",
    body: "Shut down anxiety and urges in real time. Control your state — don't be controlled by it.",
  },
  {
    title: "Weekly Coaching Call",
    body: "Accountability. Honesty. Progress tracking. Direction.",
  },
  {
    title: "Urge & Trigger Training",
    body: "Understand cravings before they hit. Know how to stop them properly.",
  },
  {
    title: "The Recovery Pack",
    body: "19 years addicted. Started at 16. Everything learned — without you having to live it.",
  },
];

const notFor = ["Casual users", "Dabblers", "People looking for motivation"];
const thisIsFor = ["Men who are done", "Men who are serious", "Men who are ready to stop"];
const results = ["Clear head", "Stable mood", "Strong body", "No chaos", "No cocaine"];

const nots = [
  { icon: "❌", text: "NOT A LECTURE" },
  { icon: "❌", text: "NOT A QUICK FIX" },
  { icon: "✅", text: "THE TRUTH" },
  { icon: "✅", text: "THE WORK" },
  { icon: "✅", text: "THE REBUILD" },
];

export default function Programme() {
  return (
    <section id="programme" className="relative py-24 px-6 overflow-hidden" style={{ background: "#0a0a08" }}>
      {/* Glow */}
      <div
        className="absolute top-1/2 right-0 w-1/3 h-full opacity-10 -translate-y-1/2"
        style={{ background: "radial-gradient(ellipse at right center, #8b1a1a, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-4">
          <p className="text-xs tracking-[0.4em] uppercase mb-2 font-semibold" style={{ color: "#8b1a1a" }}>
            The System
          </p>
          <h2 className="font-['Bebas_Neue'] text-5xl sm:text-7xl" style={{ color: "#f0e6d3" }}>
            12-WEEK <span style={{ color: "#c9a84c" }}>RECOVERY</span> PROGRAMME
          </h2>
          <div className="section-divider" />
        </div>

        {/* Taglines */}
        <div className="mb-12 space-y-2">
          {[
            "You don't relapse because you're weak.",
            "You relapse because cocaine trained your brain.",
            "Remove the drug without rebuilding the system — and the system collapses.",
          ].map((line, i) => (
            <p key={i} className={`text-base sm:text-lg font-light ${i === 2 ? "" : ""}`} style={{ color: "#a09080" }}>
              {line}
            </p>
          ))}
          <p className="font-['Bebas_Neue'] text-3xl tracking-wider mt-4" style={{ color: "#c9a84c" }}>
            This rebuilds the system.
          </p>
        </div>

        {/* What's included */}
        <div className="mb-16">
          <h3 className="font-['Bebas_Neue'] text-3xl tracking-wider mb-8" style={{ color: "#f0e6d3" }}>
            WHAT&apos;S INCLUDED
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {included.map((item, i) => (
              <div
                key={i}
                className="p-5 border flex gap-4 transition-all duration-200 group"
                style={{ borderColor: "#8b1a1a30", background: "rgba(139,26,26,0.04)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#8b1a1a80";
                  (e.currentTarget as HTMLElement).style.background = "rgba(139,26,26,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#8b1a1a30";
                  (e.currentTarget as HTMLElement).style.background = "rgba(139,26,26,0.04)";
                }}
              >
                <div
                  className="shrink-0 w-6 h-6 flex items-center justify-center mt-0.5"
                  style={{ color: "#c9a84c" }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="1" y="1" width="16" height="16" rx="2" stroke="#c9a84c" strokeWidth="1.5" />
                    <path d="M4 9l3.5 3.5L14 6" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm tracking-wide mb-1" style={{ color: "#f0e6d3" }}>
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#a09080" }}>
                    {item.body}
                  </p>
                  {item.note && (
                    <p className="text-xs mt-2 italic" style={{ color: "#5c5040" }}>
                      {item.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Not/Yes grid + This is for + Results */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* What it is / isn't */}
          <div className="border p-6" style={{ borderColor: "#8b1a1a30" }}>
            <h3 className="font-['Bebas_Neue'] text-2xl tracking-wider mb-6" style={{ color: "#f0e6d3" }}>
              REAL RECOVERY
            </h3>
            <div className="space-y-3">
              {nots.map((n, i) => (
                <div key={i} className="flex items-center gap-3 text-sm" style={{ color: "#a09080" }}>
                  <span className="text-base">{n.icon}</span>
                  <span className={n.icon === "✅" ? "font-semibold" : ""} style={{ color: n.icon === "✅" ? "#f0e6d3" : "#a09080" }}>
                    {n.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t text-sm space-y-1" style={{ borderColor: "#8b1a1a30", color: "#a09080" }}>
              <p>Not therapy talk.</p>
              <p>A system built from 19 years of addiction — and the fight back.</p>
            </div>
          </div>

          {/* This is for */}
          <div className="border p-6" style={{ borderColor: "#c9a84c30" }}>
            <h3 className="font-['Bebas_Neue'] text-2xl tracking-wider mb-6" style={{ color: "#c9a84c" }}>
              THIS IS FOR:
            </h3>
            <div className="space-y-3 mb-6">
              {thisIsFor.map((t) => (
                <p key={t} className="text-sm font-semibold" style={{ color: "#f0e6d3" }}>
                  {t}.
                </p>
              ))}
            </div>
            <div className="pt-4 border-t" style={{ borderColor: "#c9a84c20" }}>
              <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "#8b1a1a" }}>
                Not for:
              </p>
              {notFor.map((t) => (
                <p key={t} className="text-sm" style={{ color: "#5c5040" }}>
                  {t}.
                </p>
              ))}
            </div>
          </div>

          {/* The result */}
          <div className="border p-6" style={{ borderColor: "#8b1a1a30", background: "rgba(139,26,26,0.06)" }}>
            <h3 className="font-['Bebas_Neue'] text-2xl tracking-wider mb-6" style={{ color: "#f0e6d3" }}>
              THE RESULT
            </h3>
            <div className="space-y-3">
              {results.map((r) => (
                <div key={r} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#c9a84c" }} />
                  <span className="text-sm font-semibold" style={{ color: "#f0e6d3" }}>
                    {r}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div
          className="border-2 p-8 sm:p-12 text-center max-w-2xl mx-auto relative overflow-hidden"
          style={{ borderColor: "#c9a84c40" }}
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{ background: "radial-gradient(ellipse at center, #c9a84c, transparent 70%)" }}
          />
          <div className="relative z-10">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#8b1a1a" }}>
              Investment
            </p>
            <h3 className="font-['Bebas_Neue'] text-3xl sm:text-4xl tracking-wider mb-2" style={{ color: "#f0e6d3" }}>
              3-MONTH RECOVERY SYSTEM
            </h3>
            <div className="flex items-center justify-center gap-4 my-6">
              <span className="font-['Bebas_Neue'] text-5xl sm:text-6xl" style={{ color: "#c9a84c" }}>
                €375
              </span>
              <span className="text-2xl" style={{ color: "#5c5040" }}>/</span>
              <span className="font-['Bebas_Neue'] text-5xl sm:text-6xl" style={{ color: "#c9a84c" }}>
                £325
              </span>
            </div>
            <p className="text-sm mb-8" style={{ color: "#a09080" }}>
              One payment. Three months. A completely different life.
            </p>
            <a
              href="#contact"
              className="inline-block px-10 py-4 font-['Bebas_Neue'] text-2xl tracking-[0.15em] border-2 transition-all duration-200"
              style={{ background: "#8b1a1a", borderColor: "#8b1a1a", color: "#f0e6d3" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#5c0f0f";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#8b1a1a";
              }}
            >
              START YOUR REBUILD
            </a>
            <p className="text-xs mt-4 italic" style={{ color: "#5c5040" }}>
              If you&apos;re done — this works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
