// Vidconvert — Approach, Banner, Process

// ===== APPROACH =====
const Approach = () => (
  <section id="approach" className="section section-cream">
    <div className="container">
      <div className="flex items-center justify-between" style={{ marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
        <div style={{ maxWidth: 720 }}>
          <span className="eyebrow">Our approach</span>
          <h2 className="display h-lg" style={{ marginTop: 18, marginBottom: 0 }}>
            We sit at the intersection of <span className="hi" style={{ background: "var(--c-coral)", color: "var(--cream)" }}>science</span> &amp; <span className="hi" style={{ background: "var(--c-blue)", color: "var(--cream)" }}>style</span>.
          </h2>
        </div>
        <div style={{ maxWidth: 380, fontSize: 17, color: "#3A3730" }}>
          Most agencies are great at one or the other. Beautiful creative
          that doesn&rsquo;t convert, or hard-charging media buying that
          looks like everyone else. <strong>We refuse to pick one.</strong>
        </div>
      </div>

      <div className="approach-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 20,
      }}>
        <ApproachCard
          eyebrow="01 — Science"
          title="Test, learn, deploy capital"
          body="Structured testing frameworks. We make small bets every week so we can confidently double down on the winners."
          tag="Media"
          color="var(--c-blue)"
          art={<BarChart />}
        />
        <ApproachCard
          eyebrow="02 — Style"
          title="Creative that earns the click"
          body="Native-feeling, scroll-stopping ads built for the platform — not retrofitted from a TV spot."
          tag="Creative"
          color="var(--c-coral)"
          art={<Funnel />}
        />
        <ApproachCard
          eyebrow="03 — System"
          title="Build a flywheel, not a campaign"
          body="Performance compounds when creative, audiences and offer are tuned together. We build all three."
          tag="Strategy"
          color="var(--accent)"
          art={<Puzzle />}
        />
      </div>

      <style>{`
        @media (max-width: 880px) {
          .approach-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  </section>
);

const ApproachCard = ({ eyebrow, title, body, tag, color, art }) => (
  <div style={{
    background: "var(--cream-2)",
    border: "2px solid var(--ink)",
    borderRadius: 22,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    minHeight: 460,
    position: "relative"
  }}>
    <div className="flex items-center justify-between" style={{ marginBottom: 16 }}>
      <span style={{
        fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.12em",
        textTransform: "uppercase", color: "#3A3730"
      }}>{eyebrow}</span>
      <span style={{
        background: color, color: "var(--ink)",
        border: "2px solid var(--ink)",
        padding: "3px 10px", borderRadius: 99,
        fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700,
        letterSpacing: "0.04em", textTransform: "uppercase"
      }}>{tag}</span>
    </div>
    <div style={{ flex: 1, padding: "12px 0", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 200 }}>
      {art}
    </div>
    <h3 className="display" style={{ fontSize: 26, lineHeight: 1.05, margin: 0, marginBottom: 10 }}>
      {title}
    </h3>
    <p style={{ margin: 0, fontSize: 15, color: "#3A3730", lineHeight: 1.5 }}>{body}</p>
  </div>
);

// ===== BANNER STRIP =====
const Banner = () => {
  const items = ["Meta Ads", "✺", "Creative Production", "✺", "Landing Pages", "✺", "Lifecycle", "✺", "Analytics", "✺"];
  return (
    <section style={{ background: "var(--accent)", color: "var(--ink)", padding: "28px 0", overflow: "hidden", borderTop: "2px solid var(--ink)", borderBottom: "2px solid var(--ink)" }}>
      <div className="marquee">
        <div className="marquee-track" style={{ animationDuration: "30s" }}>
          {[...items, ...items, ...items].map((c, i) => (
            <span key={i} className="display" style={{
              fontWeight: 800, fontSize: "clamp(28px, 4vw, 56px)", letterSpacing: "-0.03em"
            }}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

// ===== PROCESS =====
const Process = () => {
  const [active, setActive] = React.useState(0);
  const steps = [
    {
      n: "01",
      title: "Audit & diagnose",
      sub: "Week 1",
      body: "We pull the curtain back on your account, creative library, funnel and offer. You get a 40-page teardown — yours to keep, even if we never work together.",
      bullets: ["Account health & wasted spend", "Creative scoring", "Funnel friction map"],
      art: <Target />,
      tint: "var(--c-blue)"
    },
    {
      n: "02",
      title: "Build the engine",
      sub: "Weeks 2–4",
      body: "We rebuild your account architecture for compounding learning. New campaign structure, a creative testing matrix, and a measurement plan you can actually trust.",
      bullets: ["Campaign restructure", "Creative testing matrix", "Server-side tracking"],
      art: <Funnel />,
      tint: "var(--accent)"
    },
    {
      n: "03",
      title: "Scale with discipline",
      sub: "Month 2+",
      body: "Three creative concepts shipped per week. Weekly profit reviews. Quarterly offer & landing page tests. The boring stuff that quietly compounds.",
      bullets: ["3 new concepts / week", "Weekly profit review", "Quarterly offer tests"],
      art: <BarChart />,
      tint: "var(--c-mint)"
    },
    {
      n: "04",
      title: "Hand back a flywheel",
      sub: "Always",
      body: "Every system we build is documented and yours. No black boxes, no agency hostage situations. Stay because you want to — not because you have to.",
      bullets: ["Full documentation", "Trained internal team", "Transparent reporting"],
      art: <Puzzle />,
      tint: "var(--c-coral)"
    },
  ];

  return (
    <section id="process" className="section bg-dots" style={{ position: "relative" }}>
      <div className="container">
        <div style={{ maxWidth: 760, marginBottom: 64 }}>
          <span className="eyebrow">How we work</span>
          <h2 className="display h-lg" style={{ marginTop: 18, marginBottom: 18 }}>
            A process built for{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              boring, repeatable
              <svg viewBox="0 0 200 12" preserveAspectRatio="none" style={{
                position: "absolute", left: 0, right: 0, bottom: -8, width: "100%", height: 12
              }}>
                <path d="M2 8 Q 50 2 100 8 T 198 8" stroke="var(--accent)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}
            wins.
          </h2>
          <p className="muted" style={{ fontSize: 18, maxWidth: 600 }}>
            No black boxes. Just four phases, every quarter. Click a phase to see what happens.
          </p>
        </div>

        <div className="process-shell" style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 380px) 1fr",
          gap: 32,
          alignItems: "stretch",
        }}>
          {/* Step list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {steps.map((s, i) => {
              const on = i === active;
              return (
                <button key={i}
                  onClick={() => setActive(i)}
                  style={{
                    textAlign: "left",
                    padding: "20px 22px",
                    borderRadius: 18,
                    border: on ? "2px solid var(--cream)" : "1px solid var(--line)",
                    background: on ? "var(--bg-2)" : "transparent",
                    transition: "all 0.18s ease",
                    display: "flex", alignItems: "center", gap: 18,
                    cursor: "pointer"
                  }}
                >
                  <div style={{
                    width: 44, height: 44, flexShrink: 0,
                    borderRadius: 12,
                    background: on ? s.tint : "transparent",
                    border: on ? "2px solid var(--ink)" : "1px dashed var(--line-strong)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--mono)", fontWeight: 700, fontSize: 13,
                    color: on ? "var(--ink)" : "var(--muted)"
                  }}>
                    {s.n}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="display" style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>{s.title}</div>
                    <div className="muted" style={{ fontSize: 13, marginTop: 2 }}>{s.sub}</div>
                  </div>
                  <span style={{ opacity: on ? 1 : 0.3, transition: "opacity 0.15s", fontSize: 18 }}>→</span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div style={{
            background: "var(--bg-2)",
            border: "1px solid var(--line)",
            borderRadius: 24,
            padding: 36,
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 32,
            alignItems: "center",
            minHeight: 480,
          }}>
            <div>
              <div className="flex items-center gap-3" style={{ marginBottom: 16, flexWrap: "wrap" }}>
                <span style={{
                  background: steps[active].tint, color: "var(--ink)",
                  border: "2px solid var(--ink)",
                  padding: "4px 12px", borderRadius: 99,
                  fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.06em", textTransform: "uppercase",
                  whiteSpace: "nowrap"
                }}>Phase {steps[active].n}</span>
                <span className="muted" style={{ fontSize: 13, whiteSpace: "nowrap" }}>{steps[active].sub}</span>
              </div>
              <h3 className="display" style={{ fontSize: "clamp(32px, 4vw, 48px)", margin: 0, lineHeight: 1, marginBottom: 18 }}>
                {steps[active].title}
              </h3>
              <p style={{ fontSize: 16, color: "var(--cream)", opacity: 0.78, margin: 0, marginBottom: 24 }}>
                {steps[active].body}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {steps[active].bullets.map((b, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14 }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: 5,
                      background: steps[active].tint,
                      border: "1.5px solid var(--ink)",
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      fontSize: 11, color: "var(--ink)", fontWeight: 800
                    }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              background: "var(--bg)",
              border: "1px solid var(--line)",
              borderRadius: 18, padding: 24,
              display: "flex", alignItems: "center", justifyContent: "center",
              minHeight: 320
            }}>
              {steps[active].art}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 980px) {
            .process-shell { grid-template-columns: 1fr !important; }
            .process-shell > div:last-child { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
};

Object.assign(window, { Approach, Banner, Process });
