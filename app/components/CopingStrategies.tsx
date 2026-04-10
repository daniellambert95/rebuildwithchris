const strategies = [
  {
    number: "01",
    title: "Avoid High-Risk Situations",
    subtitle: "Especially Early On",
    body: "In early recovery, your brain is still healing and cravings can be strong. It's often helpful to temporarily avoid people, places, or events that you associate with cocaine use.",
    examples: [
      "Certain parties, clubs, or bars",
      "Specific friends or social circles",
      "Events where drugs are likely to be present",
    ],
    note: "Avoidance is not weakness — it's a protective strategy that gives your recovery time to strengthen.",
  },
  {
    number: "02",
    title: "Replace Old Habits",
    subtitle: "With Healthy Alternatives",
    body: "When cocaine is removed, it leaves both mental and physical gaps. Filling that time with meaningful, healthy activities reduces boredom, improves mood, and builds new routines.",
    examples: [
      "Exercise (gym, walking, swimming, yoga)",
      "Writing or journaling",
      "Meditation or breathing exercises",
      "Creative outlets (music, art, cooking)",
    ],
    note: "The goal isn't to \"stay busy\" — it's to create a life that supports your wellbeing.",
  },
  {
    number: "03",
    title: "Prepare Your Mindset",
    subtitle: "Before High-Risk Situations",
    body: "Some situations can't always be avoided. When that happens, mental preparation can make a real difference.",
    examples: [
      "Visualisation: mentally rehearse staying sober, leaving early, or calling for support",
      "Meditation to rewire the brain and calm the nervous system",
      "Affirmations: \"Cravings pass whether I use or not.\" / \"I am choosing recovery today.\" / \"I don't need cocaine to cope.\"",
    ],
    note: "Practicing these skills regularly makes them more effective when you truly need them.",
  },
];

const supportTips = [
  "Lead with compassion, not blame",
  "Use \"I\" statements and stay calm",
  "Listen without judgment",
  "Set clear, healthy boundaries",
  "Avoid enabling (covering up, giving money, making excuses)",
  "Encourage professional help when they're ready",
  "Take care of your own wellbeing",
];

export default function CopingStrategies() {
  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ background: "#0a0a08" }}>
      <div className="max-w-6xl mx-auto">

        {/* Coping Strategies */}
        <div className="mb-24">
          <div className="mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-2 font-semibold" style={{ color: "#8b1a1a" }}>
              Tools for the Fight
            </p>
            <h2 className="font-['Bebas_Neue'] text-5xl sm:text-7xl" style={{ color: "#f0e6d3" }}>
              DEVELOPING{" "}
              <span style={{ color: "#c9a84c" }}>COPING STRATEGIES</span>
            </h2>
            <div className="section-divider" />
            <p className="text-sm max-w-2xl leading-relaxed" style={{ color: "#a09080" }}>
              Recovery from cocaine isn&apos;t just about stopping use — it&apos;s also about learning new ways to respond to triggers, cravings, and high-risk situations. Building practical coping strategies can greatly reduce the risk of relapse.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {strategies.map((s) => (
              <div
                key={s.number}
                className="border p-6 relative overflow-hidden"
                style={{ borderColor: "#8b1a1a30" }}
              >
                {/* Number watermark */}
                <div
                  className="absolute top-2 right-4 font-['Bebas_Neue'] text-7xl opacity-5 select-none pointer-events-none"
                  style={{ color: "#c9a84c" }}
                >
                  {s.number}
                </div>

                <div className="relative z-10">
                  <div className="font-['Bebas_Neue'] text-sm tracking-widest mb-3" style={{ color: "#8b1a1a" }}>
                    {s.number}
                  </div>
                  <h3 className="font-['Bebas_Neue'] text-2xl tracking-wider mb-1" style={{ color: "#f0e6d3" }}>
                    {s.title}
                  </h3>
                  <p className="text-xs tracking-wider uppercase mb-4" style={{ color: "#c9a84c" }}>
                    {s.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#a09080" }}>
                    {s.body}
                  </p>
                  <div className="space-y-2 mb-4">
                    {s.examples.map((ex, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: "#8b1a1a" }} />
                        <span className="text-xs leading-relaxed" style={{ color: "#c4b49a" }}>{ex}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs italic border-t pt-4" style={{ color: "#a09080", borderColor: "#8b1a1a20" }}>
                    {s.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting someone */}
        <div className="grid lg:grid-cols-2 gap-12 border-t pt-16" style={{ borderColor: "#8b1a1a20" }}>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-2 font-semibold" style={{ color: "#8b1a1a" }}>
              For Families & Loved Ones
            </p>
            <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl mb-4" style={{ color: "#f0e6d3" }}>
              UNDERSTANDING &{" "}
              <span style={{ color: "#c9a84c" }}>SUPPORTING</span>
              {" "}SOMEONE IN ADDICTION
            </h2>
            <div className="section-divider" />
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#a09080" }}>
              <p>Addiction is not a choice or a lack of willpower.</p>
              <p>It&apos;s a condition that affects the brain and behaviour, often driven by stress, trauma, or emotional pain.</p>
              <p>People may want to stop and still feel unable to.</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: "#c9a84c" }}>
              How to Support Someone in Addiction:
            </p>
            <div className="space-y-3">
              {supportTips.map((tip) => (
                <div key={tip} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#8b1a1a" }} />
                  <span className="text-sm" style={{ color: "#c4b49a" }}>{tip}</span>
                </div>
              ))}
            </div>
            <div
              className="mt-6 p-4 border-l-4 text-sm italic"
              style={{ borderColor: "#c9a84c", background: "rgba(201,168,76,0.04)", color: "#f0e6d3" }}
            >
              &ldquo;You can care about someone and still say, &lsquo;This needs to change.&rsquo;&rdquo;
            </div>
            <p className="mt-4 text-xs" style={{ color: "#a09080" }}>
              At RebuildWithChris, support is available — for them and for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
