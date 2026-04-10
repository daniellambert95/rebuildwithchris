const phases = [
  {
    weeks: "Weeks 1–2",
    label: "Withdrawal & Survival",
    desc: "Not real life — withdrawal, low dopamine, a nervous system stuck in survival mode. This is where most people quit and convince themselves they can't live without it. That belief is false.",
  },
  {
    weeks: "Weeks 3–6",
    label: "Stabilisation Begins",
    desc: "Dopamine begins to regulate naturally. Cravings lose their urgency. Anxiety reduces as the nervous system calms. Training, breathwork, and routine stop feeling forced.",
  },
  {
    weeks: "Weeks 7–10",
    label: "The Shift",
    desc: "Discipline replaces motivation. You sit with cravings without acting on them. You handle stress without escaping. Habits actually start to stick.",
  },
  {
    weeks: "Weeks 11–12",
    label: "The Foundation",
    desc: "You trust yourself again. You're not trying to stay clean — you're living differently. Going back to the old life no longer makes sense.",
  },
];

const changes = [
  "Dopamine begins to regulate naturally",
  "Cravings lose their urgency",
  "Anxiety reduces as the nervous system calms",
  "Training, breathwork, and routine stop feeling forced",
  "Discipline replaces motivation",
];

export default function WhyThreeMonths() {
  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a08 0%, #0f0a0a 100%)" }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5"
        style={{ background: "radial-gradient(ellipse at center, #c9a84c, transparent 60%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="text-xs tracking-[0.4em] uppercase mb-2 font-semibold" style={{ color: "#8b1a1a" }}>
            The Science of the Timeline
          </p>
          <h2 className="font-['Bebas_Neue'] text-5xl sm:text-7xl" style={{ color: "#f0e6d3" }}>
            WHY{" "}
            <span style={{ color: "#c9a84c" }}>3 MONTHS</span>
            {" "}IS THE SWEET SPOT
          </h2>
          <div className="section-divider" />
          <p className="text-base leading-relaxed" style={{ color: "#a09080" }}>
            Three months isn&apos;t random. It&apos;s the minimum amount of time your brain and nervous system need to stabilise after long-term cocaine use.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline phases */}
          <div className="space-y-0">
            {phases.map((phase, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-['Bebas_Neue'] text-sm"
                    style={{
                      background: i === phases.length - 1 ? "#c9a84c" : "#8b1a1a",
                      color: "#f0e6d3",
                    }}
                  >
                    {i + 1}
                  </div>
                  {i < phases.length - 1 && (
                    <div className="w-px flex-1 my-2" style={{ background: "#8b1a1a40" }} />
                  )}
                </div>
                <div className="pb-10">
                  <span className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: "#8b1a1a" }}>
                    {phase.weeks}
                  </span>
                  <h3 className="font-['Bebas_Neue'] text-2xl tracking-wider mt-1 mb-2" style={{ color: "#f0e6d3" }}>
                    {phase.label}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#a09080" }}>
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side: what shifts + quote */}
          <div className="space-y-8">
            <div className="border p-6" style={{ borderColor: "#c9a84c30", background: "rgba(201,168,76,0.04)" }}>
              <h3 className="font-['Bebas_Neue'] text-2xl tracking-wider mb-6" style={{ color: "#c9a84c" }}>
                OVER 90 DAYS, SOMETHING SHIFTS:
              </h3>
              <div className="space-y-3">
                {changes.map((c) => (
                  <div key={c} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#c9a84c" }} />
                    <span className="text-sm" style={{ color: "#c4b49a" }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="p-6 border-l-4"
              style={{ background: "rgba(139,26,26,0.08)", borderColor: "#8b1a1a" }}
            >
              <p className="text-lg italic leading-relaxed font-light" style={{ color: "#f0e6d3" }}>
                &ldquo;This isn&apos;t detox. This is rebuilding your baseline.&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border p-4 text-center" style={{ borderColor: "#8b1a1a30" }}>
                <p className="font-['Bebas_Neue'] text-4xl" style={{ color: "#c9a84c" }}>90</p>
                <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "#a09080" }}>Days</p>
              </div>
              <div className="border p-4 text-center" style={{ borderColor: "#8b1a1a30" }}>
                <p className="font-['Bebas_Neue'] text-4xl" style={{ color: "#c9a84c" }}>12</p>
                <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "#a09080" }}>Weeks</p>
              </div>
              <div className="border p-4 text-center col-span-2" style={{ borderColor: "#8b1a1a30" }}>
                <p className="font-['Bebas_Neue'] text-2xl" style={{ color: "#f0e6d3" }}>1 Life</p>
                <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "#a09080" }}>Rebuilt from the ground up</p>
              </div>
            </div>

            <div
              className="border p-6 text-center"
              style={{ borderColor: "#c9a84c30", background: "rgba(201,168,76,0.04)" }}
            >
              <p className="text-base italic" style={{ color: "#c9a84c" }}>
                &ldquo;I&apos;m not fixed — but I&apos;m solid.&rdquo;
              </p>
              <p className="text-xs mt-2 tracking-widest uppercase" style={{ color: "#5c5040" }}>
                — What most men say after finishing
              </p>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="font-['Bebas_Neue'] text-3xl sm:text-4xl tracking-wider" style={{ color: "#f0e6d3" }}>
            BY THE END OF 3 MONTHS, YOU&apos;RE NOT{" "}
            <span style={{ color: "#8b1a1a" }}>&quot;TRYING TO STAY CLEAN.&quot;</span>
          </p>
          <p className="font-['Bebas_Neue'] text-3xl sm:text-4xl tracking-wider mt-2" style={{ color: "#c9a84c" }}>
            YOU&apos;RE LIVING DIFFERENTLY.
          </p>
        </div>
      </div>
    </section>
  );
}
