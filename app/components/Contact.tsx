"use client";
import { useState } from "react";


type State = "idle" | "submitting" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [state, setState] = useState<State>("idle");

  const set = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setState("sent");
    } catch {
      setState("error");
    }
  };

  const inputClass = "w-full px-4 py-3 text-sm border bg-transparent outline-none transition-colors";
  const inputStyle = { borderColor: "#8b1a1a30", color: "#f0e6d3" };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden" style={{ background: "#080806" }}>
      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 opacity-10"
        style={{ background: "radial-gradient(ellipse at bottom center, #8b1a1a, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-xs tracking-[0.4em] uppercase mb-2 font-semibold" style={{ color: "#8b1a1a" }}>
            Take the First Step
          </p>
          <h2 className="font-['Bebas_Neue'] text-5xl sm:text-7xl" style={{ color: "#f0e6d3" }}>
            REBUILD.{" "}
            <span style={{ color: "#c9a84c" }}>RECOVER.</span>
            {" "}RISE.
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-sm max-w-md mx-auto" style={{ color: "#a09080" }}>
            Want to know more? Get in touch to join the 3-Month Programme. Reach out to RebuildWithChris today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div>
            <h3 className="font-['Bebas_Neue'] text-2xl tracking-wider mb-6" style={{ color: "#f0e6d3" }}>
              GET IN TOUCH
            </h3>

            {state === "sent" ? (
              <div className="border-2 p-12 text-center" style={{ borderColor: "#c9a84c40" }}>
                <p className="font-['Bebas_Neue'] text-5xl mb-4" style={{ color: "#c9a84c" }}>
                  MESSAGE SENT.
                </p>
                <p className="text-sm" style={{ color: "#a09080" }}>
                  Chris will be in touch with you directly. You took the right step.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#a09080" }}>
                      First name *
                    </label>
                    <input
                      required
                      value={form.firstName}
                      onChange={(e) => set("firstName", e.target.value)}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="John"
                      onFocus={(e) => (e.target.style.borderColor = "#c9a84c")}
                      onBlur={(e) => (e.target.style.borderColor = "#8b1a1a30")}
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#a09080" }}>
                      Last name *
                    </label>
                    <input
                      required
                      value={form.lastName}
                      onChange={(e) => set("lastName", e.target.value)}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="Smith"
                      onFocus={(e) => (e.target.style.borderColor = "#c9a84c")}
                      onBlur={(e) => (e.target.style.borderColor = "#8b1a1a30")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#a09080" }}>
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    className={inputClass}
                    style={inputStyle}
                    placeholder="your@email.com"
                    onFocus={(e) => (e.target.style.borderColor = "#c9a84c")}
                    onBlur={(e) => (e.target.style.borderColor = "#8b1a1a30")}
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#a09080" }}>
                    Telephone with country code (+00) *
                  </label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    className={inputClass}
                    style={inputStyle}
                    placeholder="+353 or +44..."
                    onFocus={(e) => (e.target.style.borderColor = "#c9a84c")}
                    onBlur={(e) => (e.target.style.borderColor = "#8b1a1a30")}
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#a09080" }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    className={inputClass + " resize-none"}
                    style={inputStyle}
                    placeholder="Tell Chris where you're at..."
                    onFocus={(e) => (e.target.style.borderColor = "#c9a84c")}
                    onBlur={(e) => (e.target.style.borderColor = "#8b1a1a30")}
                  />
                </div>

                {state === "error" && (
                  <p className="text-sm" style={{ color: "#8b1a1a" }}>
                    Something went wrong. Please try again or contact Chris directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="w-full py-4 font-['Bebas_Neue'] text-xl tracking-widest border-2 transition-all duration-200 disabled:opacity-50"
                  style={{ background: "#8b1a1a", borderColor: "#8b1a1a", color: "#f0e6d3" }}
                  onMouseEnter={(e) => {
                    if (state !== "submitting") (e.currentTarget as HTMLElement).style.background = "#5c0f0f";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#8b1a1a";
                  }}
                >
                  {state === "submitting" ? "SENDING..." : "SUBMIT"}
                </button>
              </form>
            )}
          </div>

          {/* Right: Book a Call / Calendly */}
          <div className="space-y-6">
            <h3 className="font-['Bebas_Neue'] text-2xl tracking-wider" style={{ color: "#f0e6d3" }}>
              BOOK A CALL
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#a09080" }}>
              Prefer to speak directly? Book a free 15-minute call with Chris. No pressure. No pitch. Just an honest conversation about where you&apos;re at and whether the programme is right for you.
            </p>

            {/* Calendly embed placeholder */}
            <div
              id="calendly-embed"
              className="border-2 p-8 text-center"
              style={{ borderColor: "#c9a84c30", background: "rgba(201,168,76,0.03)" }}
            >
              <p className="font-['Bebas_Neue'] text-xl tracking-wider mb-3" style={{ color: "#c9a84c" }}>
                CALENDLY BOOKING
              </p>
              <p className="text-xs mb-6" style={{ color: "#5c5040" }}>
                [Calendly embed will load here once Chris&apos;s account is connected]
              </p>
              {/* Replace the href below with Chris's Calendly link */}
              <a
                href="https://calendly.com/REPLACE_WITH_CHRIS_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 font-['Bebas_Neue'] text-xl tracking-widest border-2 transition-all duration-200"
                style={{ borderColor: "#c9a84c", color: "#c9a84c" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                BOOK FREE CALL
              </a>
            </div>

            {/* Confidentiality note */}
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: "#8b1a1a" }}>
              <p className="text-xs leading-relaxed" style={{ color: "#a09080" }}>
                <span className="font-semibold" style={{ color: "#f0e6d3" }}>100% Confidential.</span>{" "}
                No groups. No exposure. No sharing unless you choose to. Everything stays between you and Chris.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
