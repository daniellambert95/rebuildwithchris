"use client";
import { useState } from "react";

const questions = [
  "Do you use cocaine more often or in larger amounts than you intend to?",
  "Do you feel a strong urge or craving to use cocaine?",
  "Do you use cocaine to cope with stress, pressure, or emotions?",
  "Have you tried to cut down or stop using cocaine but couldn't?",
  "Do you feel anxious, low, irritable, or exhausted after using?",
  "Do you need more cocaine than before to get the same effect?",
  "Have you hidden, minimised, or lied about your cocaine use?",
  "Has cocaine affected your sleep, appetite, or mental health?",
  "Have relationships, work, or responsibilities suffered because of your use?",
  "Do you keep using even though you know it's harming you?",
  "Do you feel flat, unmotivated, or disconnected when you're not using?",
  "Do you worry about where your cocaine use is heading?",
];

type Stage = "quiz" | "results" | "sent";

export default function Assessment() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [stage, setStage] = useState<Stage>("quiz");
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", privacy: false });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const yesCount = Object.values(answers).filter(Boolean).length;
  const highRisk = yesCount >= 5;
  const progress = (currentQ / questions.length) * 100;

  const answer = (val: boolean) => {
    const updated = { ...answers, [currentQ]: val };
    setAnswers(updated);
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setStage("results");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.privacy) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, yesCount, answers }),
      });
      if (!res.ok) throw new Error("Failed");
      setModalOpen(false);
      setStage("sent");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="assessment" className="relative py-24 px-6" style={{ background: "#0d0d0b" }}>
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs tracking-[0.4em] uppercase mb-2 font-semibold" style={{ color: "#8b1a1a" }}>
            Honest Check-In
          </p>
          <h2 className="font-['Bebas_Neue'] text-5xl sm:text-7xl" style={{ color: "#f0e6d3" }}>
            COCAINE USE{" "}
            <span style={{ color: "#c9a84c" }}>SELF-ASSESSMENT</span>
          </h2>
          <div className="section-divider" />
          <p className="text-sm leading-relaxed" style={{ color: "#a09080" }}>
            Answer honestly. This is for you, not anyone else.
          </p>
        </div>

        {/* QUIZ */}
        {stage === "quiz" && (
          <div>
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-xs mb-2">
                <span style={{ color: "#a09080" }}>Question {currentQ + 1} of {questions.length}</span>
                <span style={{ color: "#5c5040" }}>{currentQ} answered</span>
              </div>
              <div className="h-1 rounded-full overflow-hidden" style={{ background: "#1a1a18" }}>
                <div
                  className="h-1 rounded-full transition-all duration-500"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #8b1a1a, #c9a84c)",
                  }}
                />
              </div>
            </div>

            {/* Question card */}
            <div
              className="border p-8 sm:p-12"
              style={{ borderColor: "#8b1a1a30", background: "rgba(139,26,26,0.04)" }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-['Bebas_Neue'] text-lg shrink-0"
                  style={{ background: "#8b1a1a", color: "#f0e6d3" }}
                >
                  {currentQ + 1}
                </div>
                <div className="h-px flex-1" style={{ background: "#8b1a1a30" }} />
                <span className="text-xs tracking-widest uppercase" style={{ color: "#5c5040" }}>
                  {questions.length - currentQ - 1} left
                </span>
              </div>

              <p className="text-xl sm:text-2xl font-light leading-relaxed mb-10" style={{ color: "#f0e6d3" }}>
                {questions[currentQ]}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => answer(true)}
                  className="py-5 font-['Bebas_Neue'] text-2xl tracking-widest border-2 transition-all duration-150"
                  style={{ borderColor: "#8b1a1a", color: "#f0e6d3", background: "transparent" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#8b1a1a"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  YES
                </button>
                <button
                  onClick={() => answer(false)}
                  className="py-5 font-['Bebas_Neue'] text-2xl tracking-widest border-2 transition-all duration-150"
                  style={{ borderColor: "#c9a84c40", color: "#c9a84c", background: "transparent" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.12)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  NO
                </button>
              </div>
            </div>

            {/* Answered dots */}
            {currentQ > 0 && (
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {Array.from({ length: currentQ }).map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{ background: answers[i] ? "#8b1a1a" : "#c9a84c40" }}
                    title={`Q${i + 1}: ${answers[i] ? "Yes" : "No"}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* RESULTS */}
        {stage === "results" && (
          <div
            className="border-2 p-8 sm:p-12 text-center"
            style={{
              borderColor: highRisk ? "#8b1a1a" : "#c9a84c40",
              background: highRisk ? "rgba(139,26,26,0.08)" : "rgba(201,168,76,0.04)",
            }}
          >
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#a09080" }}>
              Your Result
            </p>
            <p className="font-['Bebas_Neue'] text-7xl sm:text-8xl mb-2" style={{ color: highRisk ? "#8b1a1a" : "#c9a84c" }}>
              {yesCount}<span className="text-4xl" style={{ color: "#5c5040" }}>/12</span>
            </p>
            <p className="font-['Bebas_Neue'] text-2xl tracking-wider mb-6" style={{ color: "#f0e6d3" }}>
              {highRisk ? "YOUR USE MAY BE CAUSING HARM" : `${yesCount} YES ANSWER${yesCount !== 1 ? "S" : ""}`}
            </p>
            <p className="text-sm leading-relaxed max-w-md mx-auto mb-8" style={{ color: "#a09080" }}>
              {highRisk
                ? "You don't need to hit rock bottom to get help. Early support can prevent long-term damage to your health, relationships, and wellbeing."
                : "Even if you're not there yet — if you're here, something made you look. That matters."}
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="px-10 py-4 font-['Bebas_Neue'] text-2xl tracking-widest border-2 transition-all duration-200"
              style={{ background: "#8b1a1a", borderColor: "#8b1a1a", color: "#f0e6d3" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#5c0f0f"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#8b1a1a"; }}
            >
              SEND MY RESULTS TO CHRIS
            </button>
          </div>
        )}

        {/* SENT */}
        {stage === "sent" && (
          <div className="border-2 p-12 text-center" style={{ borderColor: "#c9a84c40" }}>
            <div className="font-['Bebas_Neue'] text-7xl mb-4" style={{ color: "#c9a84c" }}>SENT.</div>
            <p className="text-base mb-2" style={{ color: "#f0e6d3" }}>Chris has your results.</p>
            <p className="text-sm" style={{ color: "#a09080" }}>
              He&apos;ll reach out to you directly. You took the first step.
            </p>
          </div>
        )}
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.85)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}
        >
          <div
            className="w-full max-w-md border p-8 relative"
            style={{ background: "#0d0d0b", borderColor: "#8b1a1a60" }}
          >
            {/* Close */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center transition-colors"
              style={{ color: "#5c5040" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#f0e6d3"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#5c5040"; }}
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <h3 className="font-['Bebas_Neue'] text-3xl tracking-wider mb-1" style={{ color: "#f0e6d3" }}>
              ONE LAST STEP
            </h3>
            <p className="text-sm mb-6" style={{ color: "#a09080" }}>
              Your results ({yesCount}/12 YES) will be sent confidentially. Chris will reach out directly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#a09080" }}>
                  Name *
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full px-4 py-3 text-sm border bg-transparent outline-none transition-colors"
                  style={{ borderColor: "#8b1a1a40", color: "#f0e6d3" }}
                  placeholder="Your name"
                  onFocus={(e) => (e.target.style.borderColor = "#c9a84c")}
                  onBlur={(e) => (e.target.style.borderColor = "#8b1a1a40")}
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#a09080" }}>
                  Email *
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full px-4 py-3 text-sm border bg-transparent outline-none transition-colors"
                  style={{ borderColor: "#8b1a1a40", color: "#f0e6d3" }}
                  placeholder="your@email.com"
                  onFocus={(e) => (e.target.style.borderColor = "#c9a84c")}
                  onBlur={(e) => (e.target.style.borderColor = "#8b1a1a40")}
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <div className="relative mt-0.5 shrink-0">
                  <input
                    type="checkbox"
                    required
                    checked={form.privacy}
                    onChange={(e) => setForm((f) => ({ ...f, privacy: e.target.checked }))}
                    className="sr-only"
                  />
                  <div
                    className="w-5 h-5 border-2 flex items-center justify-center transition-all duration-150"
                    style={{
                      borderColor: form.privacy ? "#c9a84c" : "#8b1a1a40",
                      background: form.privacy ? "rgba(201,168,76,0.15)" : "transparent",
                    }}
                  >
                    {form.privacy && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4l3 3 5-6" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-xs leading-relaxed" style={{ color: "#a09080" }}>
                  I accept the{" "}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#c9a84c" }}>
                    privacy policy
                  </a>
                  . My results will be shared confidentially with Chris Jenkins for the purpose of follow-up support. *
                </span>
              </label>

              {error && <p className="text-sm" style={{ color: "#8b1a1a" }}>{error}</p>}

              <button
                type="submit"
                disabled={submitting || !form.privacy}
                className="w-full py-4 font-['Bebas_Neue'] text-xl tracking-widest border-2 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ background: "#8b1a1a", borderColor: "#8b1a1a", color: "#f0e6d3" }}
                onMouseEnter={(e) => {
                  if (!submitting && form.privacy) (e.currentTarget as HTMLElement).style.background = "#5c0f0f";
                }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#8b1a1a"; }}
              >
                {submitting ? "SENDING..." : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
