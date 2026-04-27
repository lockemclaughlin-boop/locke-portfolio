// Vidconvert — Work, Voices, CTA, Footer

// ===== WORK / CASE STUDIES =====
const Work = () => {
  const cases = [
    {
      brand: "Unlock Patients",
      tag: "Healthcare · Lead gen",
      headline: "Cut CPL by 61% in 90 days",
      stat: "$3.2M",
      stat_label: "Profitable pipeline",
      stat2: "−61%",
      stat2_label: "Cost per booked patient",
      tint: "var(--c-coral)",
      art: <Funnel />
    },
    {
      brand: "Jessie Lane Interiors",
      tag: "Home & Lifestyle · DTC",
      headline: "From local studio to 8-figure run-rate",
      stat: "9.1×",
      stat_label: "Blended ROAS",
      stat2: "+412%",
      stat2_label: "YoY revenue",
      tint: "var(--accent)",
      art: <BarChart />
    },
    {
      brand: "Not Enough Attire",
      tag: "Fashion · DTC",
      headline: "Scaled to $1M months — profitably",
      stat: "$1.4M",
      stat_label: "Best month to date",
      stat2: "4.7×",
      stat2_label: "Meta ROAS",
      tint: "var(--c-mint)",
      art: <Target />
    },
    {
      brand: "Chi O",
      tag: "Beauty · Subscription",
      headline: "Doubled subscribers, halved CAC",
      stat: "2.1×",
      stat_label: "Subscriber base",
      stat2: "−48%",
      stat2_label: "Acquisition cost",
      tint: "var(--c-blue)",
      art: <Puzzle />
    },
  ];

  return (
    <section id="work" className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div className="flex items-center justify-between" style={{ marginBottom: 56, flexWrap: "wrap", gap: 20 }}>
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className="display h-lg" style={{ marginTop: 18, marginBottom: 0 }}>
              Numbers that <span className="hi">moved markets</span>.
            </h2>
          </div>
          <a href="#cta" className="btn btn-ghost">All case studies →</a>
        </div>

        <div className="work-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
        }}>
          {cases.map((c, i) => (
            <article key={i} style={{
              background: "var(--bg-2)",
              border: "1px solid var(--line)",
              borderRadius: 26,
              padding: 28,
              display: "flex",
              flexDirection: "column",
              gap: 22,
              minHeight: 460,
              position: "relative",
              overflow: "hidden"
            }}>
              <div className="flex items-center justify-between" style={{ gap: 12 }}>
                <div className="flex items-center gap-3" style={{ minWidth: 0, flex: 1 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, background: c.tint,
                    border: "2px solid var(--ink)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--display)", fontWeight: 800, fontSize: 14, color: "var(--ink)",
                    letterSpacing: "-0.04em",
                    flexShrink: 0
                  }}>
                    {c.brand.split(" ").map(w => w[0]).slice(0,2).join("")}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: 14, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.brand}</div>
                    <div className="muted" style={{ fontSize: 12, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.tag}</div>
                  </div>
                </div>
                <span className="chip" style={{ whiteSpace: "nowrap", flexShrink: 0 }}>Case study</span>
              </div>

              <h3 className="display" style={{ fontSize: 32, lineHeight: 1, margin: 0, letterSpacing: "-0.025em", maxWidth: "90%" }}>
                {c.headline}
              </h3>

              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12,
                marginTop: "auto"
              }}>
                <div style={{
                  background: "var(--bg)", border: "1px solid var(--line)",
                  borderRadius: 16, padding: 18
                }}>
                  <div className="display" style={{ fontSize: 36, fontWeight: 800, lineHeight: 1, color: c.tint }}>
                    {c.stat}
                  </div>
                  <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>{c.stat_label}</div>
                </div>
                <div style={{
                  background: "var(--bg)", border: "1px solid var(--line)",
                  borderRadius: 16, padding: 18
                }}>
                  <div className="display" style={{ fontSize: 36, fontWeight: 800, lineHeight: 1 }}>
                    {c.stat2}
                  </div>
                  <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>{c.stat2_label}</div>
                </div>
              </div>

              {/* corner art */}
              <div style={{
                position: "absolute", right: -40, top: 60, width: 200, opacity: 0.18,
                transform: "rotate(8deg)", pointerEvents: "none"
              }}>{c.art}</div>
            </article>
          ))}
        </div>

        <style>{`
          @media (max-width: 880px) {
            .work-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
};

// ===== TESTIMONIAL SLIDER =====
const Voices = () => {
  const quotes = [
    {
      q: "They handed us a 40-page audit before we'd even signed a contract. The week they took over, our blended ROAS went from 2.1 to 4.6. We've never looked back.",
      name: "Mara Klein",
      role: "Founder, Jessie Lane Interiors",
      tint: "var(--accent)",
      initials: "MK"
    },
    {
      q: "Most agencies try to look smart. Vidconvert just makes the numbers go up. They ship more creative in a week than our last team did in a quarter.",
      name: "Devon Park",
      role: "Head of Growth, Unlock Patients",
      tint: "var(--c-coral)",
      initials: "DP"
    },
    {
      q: "We hired them to scale Meta. They ended up rebuilding our entire funnel, our landing page system, and most of how we think about creative. Worth every dollar.",
      name: "Ren Castillo",
      role: "CEO, Not Enough Attire",
      tint: "var(--c-mint)",
      initials: "RC"
    },
    {
      q: "The transparency is the unlock. Weekly profit calls, every dashboard shared, no smoke and mirrors. I finally trust my paid channel again.",
      name: "Sloane Iverson",
      role: "Marketing Lead, Chi O",
      tint: "var(--c-blue)",
      initials: "SI"
    },
  ];

  const [idx, setIdx] = React.useState(0);
  const next = () => setIdx((i) => (i + 1) % quotes.length);
  const prev = () => setIdx((i) => (i - 1 + quotes.length) % quotes.length);

  React.useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, []);

  const cur = quotes[idx];

  return (
    <section id="voices" className="section" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="container">
        <div className="flex items-center justify-between" style={{ marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
          <div>
            <span className="eyebrow">Voices</span>
            <h2 className="display h-lg" style={{ marginTop: 18, marginBottom: 0 }}>
              Founders who&rsquo;ve been in the trenches with us.
            </h2>
          </div>
        </div>

        <div style={{
          background: "var(--bg)",
          border: "1px solid var(--line)",
          borderRadius: 28,
          padding: "48px 44px",
          position: "relative",
          minHeight: 360,
          overflow: "hidden"
        }}>
          {/* big quote mark */}
          <div className="display" aria-hidden="true" style={{
            position: "absolute", top: 0, left: 24,
            fontSize: 240, lineHeight: 0.85, color: cur.tint,
            opacity: 0.18, fontWeight: 800,
            transition: "color 0.3s ease"
          }}>"</div>

          <div style={{ position: "relative", maxWidth: 920 }}>
            <p key={idx} className="display" style={{
              fontSize: "clamp(22px, 2.6vw, 36px)",
              lineHeight: 1.2,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              margin: 0,
              animation: "fadeIn 0.4s ease"
            }}>
              {cur.q}
            </p>

            <div className="flex items-center justify-between" style={{ marginTop: 40, flexWrap: "wrap", gap: 16 }}>
              <div className="flex items-center gap-3">
                <Avatar initials={cur.initials} color={cur.tint} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{cur.name}</div>
                  <div className="muted" style={{ fontSize: 13 }}>{cur.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex gap-2" style={{ alignItems: "center" }}>
                  {quotes.map((_, i) => (
                    <button key={i} onClick={() => setIdx(i)} aria-label={`Quote ${i+1}`}
                      style={{
                        width: i === idx ? 28 : 8, height: 8, borderRadius: 99,
                        background: i === idx ? cur.tint : "var(--line-strong)",
                        transition: "all 0.25s ease",
                        cursor: "pointer", border: "none", padding: 0
                      }} />
                  ))}
                </div>
                <button onClick={prev} className="btn btn-ghost" style={{ padding: "10px 14px", fontSize: 14 }}>←</button>
                <button onClick={next} className="btn btn-ghost" style={{ padding: "10px 14px", fontSize: 14 }}>→</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

// ===== CTA =====
const CTA = () => (
  <section id="cta" style={{ padding: "120px 0", background: "var(--accent)", color: "var(--ink)", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", top: 40, left: "6%", transform: "rotate(-12deg)" }}>
      <Star size={64} color="var(--ink)" spikes={10} />
    </div>
    <div style={{ position: "absolute", bottom: 60, right: "8%", transform: "rotate(14deg)" }}>
      <Smiley size={64} color="var(--cream)" />
    </div>
    <div style={{ position: "absolute", top: "40%", right: "12%" }}>
      <Bolt size={52} />
    </div>

    <div className="container text-center" style={{ position: "relative", maxWidth: 920 }}>
      <span className="eyebrow" style={{ color: "#3A3730" }}>
        <span style={{
          width:6,height:6,borderRadius:99,background:"#0E0D0B",
          display:"inline-block", marginRight: 8
        }} />
        Free · No commitment · 48hr turnaround
      </span>
      <h2 className="display" style={{
        fontSize: "clamp(48px, 8vw, 112px)", lineHeight: 0.95,
        margin: "24px 0 24px", letterSpacing: "-0.04em"
      }}>
        Ready to kick off<br />your growth journey?
      </h2>
      <p style={{ fontSize: 19, maxWidth: 580, margin: "0 auto 36px", color: "#3A3730" }}>
        Book a 30-minute call. We&rsquo;ll audit your last 90 days of Meta spend and tell you exactly where the leaks are. Yours to keep.
      </p>
      <div className="flex items-center gap-4" style={{ justifyContent: "center", flexWrap: "wrap" }}>
        <a href="mailto:hello@vidconvert.studio" className="btn" style={{
          background: "var(--ink)", color: "var(--cream)",
          border: "2px solid var(--ink)", padding: "18px 26px", fontSize: 16
        }}>
          Book a strategy call →
        </a>
        <a href="mailto:hello@vidconvert.studio" className="btn" style={{
          background: "transparent", color: "var(--ink)",
          border: "2px solid var(--ink)", padding: "18px 26px", fontSize: 16
        }}>
          hello@vidconvert.studio
        </a>
      </div>
    </div>
  </section>
);

// ===== FOOTER =====
const Footer = () => (
  <footer style={{ background: "var(--bg)", padding: "80px 0 36px", borderTop: "1px solid var(--line)" }}>
    <div className="container">
      <div className="footer-grid" style={{
        display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 40,
        marginBottom: 64
      }}>
        <div>
          <Logo />
          <p className="muted" style={{ marginTop: 18, maxWidth: 320, fontSize: 14 }}>
            Vidconvert Studios is a performance marketing agency for ambitious DTC and lead-gen brands. Specialists in Meta ads, creative, and full-funnel growth.
          </p>
          <div className="flex gap-3" style={{ marginTop: 20 }}>
            <span className="chip">Meta Business Partner</span>
            <span className="chip">Est. 2021</span>
          </div>
        </div>

        {[
          { h: "Studio", links: ["Approach", "Process", "Work", "Voices"] },
          { h: "Services", links: ["Meta Ads", "Creative Production", "Landing Pages", "Lifecycle"] },
          { h: "Contact", links: ["Book a call", "hello@vidconvert.studio", "@vidconvert", "LinkedIn"] },
        ].map((col, i) => (
          <div key={i}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>{col.h}</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {col.links.map((l, j) => <li key={j} style={{ fontSize: 14 }}><a href="#" style={{ opacity: 0.85 }}>{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>

      {/* big wordmark */}
      <div style={{
        fontFamily: "var(--display)", fontWeight: 800,
        fontSize: "clamp(72px, 18vw, 280px)",
        letterSpacing: "-0.05em", lineHeight: 0.85,
        background: "linear-gradient(180deg, var(--cream) 30%, transparent 100%)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        margin: "20px 0 30px",
        userSelect: "none"
      }}>
        vidconvert<span style={{
          background: "linear-gradient(180deg, var(--accent) 30%, transparent 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>.</span>
      </div>

      <div className="flex items-center justify-between" style={{ borderTop: "1px solid var(--line)", paddingTop: 24, flexWrap: "wrap", gap: 12 }}>
        <span className="muted" style={{ fontSize: 13, fontFamily: "var(--mono)" }}>© 2026 Vidconvert Studios — Built with no black boxes.</span>
        <span className="muted" style={{ fontSize: 13, fontFamily: "var(--mono)" }}>Made in Brooklyn + Toronto</span>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  </footer>
);

Object.assign(window, { Work, Voices, CTA, Footer });
