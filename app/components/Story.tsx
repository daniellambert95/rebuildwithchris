const timeline = [
  { label: "Age 16", text: "One line. That's all it took to start nearly two decades of chaos." },
  { label: "19 Years", text: "Cocaine took everything — my football career, relationships, family, jobs, identity." },
  { label: "Two Overdoses", text: "Heart stopping. Oxygen therapy. Psychosis. My nose collapsing. Teeth falling out." },
  { label: "Spain → Home", text: "Lost my home in Spain. Ended up back in my parents' house — the same room where so much trauma began." },
  { label: "Kylie", text: "I fought because of my daughter. I fought so she'd never have to go through what I went through." },
  { label: "Today", text: "Kylie will grow up with a present father. Not a shadow consumed by addiction. That same chance is yours." },
];

export default function Story() {
  return (
    <section id="story" className="relative py-24 px-6 overflow-hidden">
      {/* Subtle side glow */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full opacity-10"
        style={{
          background: "radial-gradient(ellipse at left center, #8b1a1a, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.4em] uppercase mb-2 font-semibold" style={{ color: "#8b1a1a" }}>
            The Man Behind the Programme
          </p>
          <h2 className="font-['Bebas_Neue'] text-5xl sm:text-7xl" style={{ color: "#f0e6d3" }}>
            MY NAME IS{" "}
            <span style={{ color: "#c9a84c" }}>CHRIS JENKINS</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: main text */}
          <div className="space-y-6 text-base leading-relaxed" style={{ color: "#c4b49a" }}>
            <p>
              For 19 years I battled cocaine addiction. I was only 16 years old when it started — one line that turned into nearly two decades of chaos, destruction, and near-death experiences.
            </p>
            <p>
              My addiction took everything from me. It ruined my football career, destroyed relationships, tore my family apart, cost me jobs, and stripped away my confidence and identity.
            </p>

            <div className="border-l-2 pl-6 py-2 space-y-2" style={{ borderColor: "#8b1a1a" }}>
              <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#8b1a1a" }}>
                Over the years I went through:
              </p>
              {[
                "Two overdoses",
                "Oxygen therapy",
                "My heart stopping",
                "Teeth falling out",
                "My nose collapsing",
                "Psychosis",
                "Loneliness, shame, and isolation",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#8b1a1a" }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p>
              It didn&apos;t stop there. I lost my home in Spain and ended up back in my parents&apos; house — in the same room where so much of my trauma began. Coming back to that room felt like facing every demon I had ever run from, but I fought anyway.
            </p>
            <p>
              I fought because of my daughter, Kylie. I fought to get back to her. I fought so she would never, ever have to go through what I went through. Kylie will grow up with a present father now — not a shadow consumed by addiction.
            </p>

            <div
              className="p-6 border-l-4"
              style={{ background: "rgba(139,26,26,0.1)", borderColor: "#8b1a1a" }}
            >
              <p className="text-base italic leading-relaxed" style={{ color: "#f0e6d3" }}>
                &ldquo;I want that same chance for everyone still struggling. Addiction doesn&apos;t just break the person using; it breaks families, relationships, children, and futures. That&apos;s why I created this business, to turn my pain into power. You&apos;ve got this brother, I am here to show you it can be done, you have to fucking want this.&rdquo;
              </p>
              <p className="mt-4 text-sm tracking-[0.2em] uppercase font-semibold" style={{ color: "#c9a84c" }}>
                — Chris Jenkins, RebuildWithChris
              </p>
            </div>
          </div>

          {/* Right: timeline */}
          <div className="space-y-0">
            <p className="text-xs tracking-[0.3em] uppercase mb-8 font-semibold" style={{ color: "#a09080" }}>
              The road that built the programme
            </p>
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4">
                {/* Line */}
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full shrink-0 mt-1" style={{ background: i === timeline.length - 1 ? "#c9a84c" : "#8b1a1a" }} />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 my-1" style={{ background: "#8b1a1a40" }} />
                  )}
                </div>
                {/* Content */}
                <div className="pb-8">
                  <div className="font-['Bebas_Neue'] text-lg tracking-wider mb-1" style={{ color: "#c9a84c" }}>
                    {item.label}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#a09080" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recovery Coach badge */}
        <div className="mt-16 border p-8 text-center max-w-xl mx-auto" style={{ borderColor: "#c9a84c30" }}>
          <p className="font-['Bebas_Neue'] text-3xl tracking-widest mb-2" style={{ color: "#c9a84c" }}>
            RECOVERY COACH
          </p>
          <p className="text-sm tracking-[0.3em] uppercase" style={{ color: "#8b1a1a" }}>
            Built by an addict, for addicts
          </p>
          <div className="mt-4 text-sm leading-relaxed" style={{ color: "#a09080" }}>
            You need a new life, new routines, and habits to override the reward system drugs hijacked. That&apos;s why you think you want to use. It&apos;s not weakness — it&apos;s conditioning.
          </div>
        </div>
      </div>
    </section>
  );
}
