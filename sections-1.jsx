// Vidconvert — Nav, Hero, ClientBar

const { useState, useEffect, useRef } = React;

// ===== NAV =====
const Nav = () => (
  <nav style={{
    position: "sticky", top: 0, zIndex: 50,
    background: "rgba(14,13,11,0.72)",
    backdropFilter: "blur(14px)",
    borderBottom: "1px solid var(--line)"
  }}>
    <div className="container flex items-center justify-between" style={{ height: 72 }}>
      <Logo />
      <div className="flex items-center gap-8" style={{ fontSize: 14 }}>
        <a href="#approach" style={{ opacity: 0.8 }}>Approach</a>
        <a href="#process" style={{ opacity: 0.8 }}>Process</a>
        <a href="#work" style={{ opacity: 0.8 }}>Work</a>
        <a href="#voices" style={{ opacity: 0.8 }}>Voices</a>
      </div>
      <a href="#cta" className="btn btn-primary" style={{ padding: "12px 18px", fontSize: 14 }}>
        Book a strategy call →
      </a>
    </div>
  </nav>
);

// ===== HERO =====
const Hero = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let f; let start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / 1400);
      setCount(Math.round(p * 312));
      if (p < 1) f = requestAnimationFrame(tick);
    };
    f = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(f);
  }, []);

  return (
    <section className="bg-dots" style={{ paddingTop: 80, paddingBottom: 100, position: "relative", overflow: "hidden" }}>
      {/* floating stickers */}
      <div style={{ position: "absolute", top: 110, left: "6%", transform: "rotate(-8deg)" }}>
        <Star size={56} color="var(--c-coral)" spikes={10} />
      </div>
      <div style={{ position: "absolute", top: 380, left: "3%", transform: "rotate(14deg)" }}>
        <Smiley size={48} color="var(--c-mint)" />
      </div>
      <div style={{ position: "absolute", top: 200, right: "5%", transform: "rotate(8deg)" }}>
        <Bolt size={62} />
      </div>

      <div className="container">
        <div className="flex items-center gap-3" style={{ marginBottom: 28 }}>
          <span className="chip"><span style={{
            width:6,height:6,borderRadius:99,background:"var(--c-mint)",
            boxShadow:"0 0 0 3px rgba(124,255,107,0.18)"
          }} /> Booking Q3 — 2 spots left</span>
          <span className="chip" style={{ borderColor: "var(--line)" }}>Meta Business Partner</span>
        </div>

        <h1 className="display h-xl" style={{ maxWidth: 1100, margin: 0 }}>
          We turn ad spend<br />
          into <span className="hi">compounding</span> growth<br />
          for impactful brands.
        </h1>

        <div className="flex items-center gap-8" style={{ marginTop: 44, flexWrap: "wrap" }}>
          <a href="#cta" className="btn btn-primary">
            Get your free growth audit
            <span aria-hidden="true">→</span>
          </a>
          <a href="#process" className="btn btn-ghost">
            See how we work
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex" }}>
              {[
                { i: "JL", c: "var(--c-coral)" },
                { i: "UP", c: "var(--accent)" },
                { i: "NA", c: "var(--c-mint)" },
                { i: "CO", c: "var(--c-blue)" },
              ].map((a, i) => (
                <div key={i} style={{ marginLeft: i === 0 ? 0 : -10 }}>
                  <Avatar initials={a.i} color={a.c} />
                </div>
              ))}
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.3 }}>
              <div style={{ fontWeight: 600 }}>{count}+ DTC brands scaled</div>
              <div className="muted">since 2021</div>
            </div>
          </div>
        </div>

        {/* hero card grid */}
        <div className="hero-grid" style={{
          marginTop: 80,
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: 24,
          alignItems: "stretch",
        }}>
          <div style={{
            background: "var(--bg-2)",
            border: "1px solid var(--line)",
            borderRadius: 24,
            padding: 28,
            position: "relative",
            overflow: "hidden"
          }}>
            <div className="flex items-center justify-between" style={{ marginBottom: 16 }}>
              <span className="eyebrow">Live · last 30 days</span>
              <span className="chip" style={{ background: "var(--accent)", color: "#0E0D0B", borderColor: "var(--accent)", fontWeight: 700 }}>
                ▲ +218%
              </span>
            </div>
            <HeroChart />
          </div>

          <div style={{ display: "grid", gap: 24, gridTemplateRows: "1fr 1fr" }}>
            <StatCard num="6.4×" label="Avg blended ROAS" sub="across 28 active accounts" tint="var(--accent)" />
            <StatCard num="$48M" label="Profitable revenue driven" sub="for our partners in 2025" tint="var(--c-mint)" />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

const StatCard = ({ num, label, sub, tint }) => (
  <div style={{
    background: "var(--bg-2)",
    border: "1px solid var(--line)",
    borderRadius: 24,
    padding: 28,
    position: "relative",
    overflow: "hidden"
  }}>
    <div style={{
      position: "absolute", top: -40, right: -40, width: 140, height: 140, borderRadius: "50%",
      background: tint, opacity: 0.18, filter: "blur(2px)"
    }} />
    <div className="display" style={{ fontSize: "clamp(48px, 6vw, 76px)", lineHeight: 1, fontWeight: 800, letterSpacing: "-0.04em" }}>
      {num}
    </div>
    <div style={{ marginTop: 12, fontWeight: 600, fontSize: 16 }}>{label}</div>
    <div className="muted" style={{ fontSize: 14, marginTop: 4 }}>{sub}</div>
  </div>
);

// ===== CLIENT LOGOS =====
const ClientBar = () => {
  const clients = [
    "Unlock Patients",
    "Jessie Lane Interiors",
    "Not Enough Attire",
    "Chi O",
    "Northbound Co.",
    "Folkpine",
    "Halfmoon Goods",
    "Merit & Co",
  ];
  return (
    <section style={{ padding: "48px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="container" style={{ marginBottom: 28 }}>
        <div className="text-center muted" style={{ fontSize: 13, fontFamily: "var(--mono)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
          Trusted by ambitious teams shipping real products
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {[...clients, ...clients].map((c, i) => (
            <span key={i} style={{
              fontFamily: "var(--display)",
              fontWeight: 700,
              fontSize: "clamp(22px, 2.6vw, 36px)",
              letterSpacing: "-0.03em",
              color: "var(--cream)",
              opacity: 0.7,
              display: "inline-flex",
              alignItems: "center",
              gap: 64
            }}>
              {c}
              <span style={{ width: 8, height: 8, borderRadius: 99, background: "var(--accent)", display: "inline-block" }} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Nav, Hero, ClientBar, StatCard });
