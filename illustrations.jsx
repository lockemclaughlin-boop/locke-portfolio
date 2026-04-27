// Chunky geometric SVG illustrations for Vidconvert Studios
// Pure shapes — sticker-feel.

const Logo = ({ size = 28 }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect x="0" y="0" width="32" height="32" rx="8" fill="var(--accent)" />
      <path d="M8 9 L16 23 L24 9" stroke="#0E0D0B" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="9" r="2" fill="#0E0D0B" />
    </svg>
    <span style={{
      fontFamily: "var(--display)",
      fontWeight: 800,
      fontSize: 19,
      letterSpacing: "-0.03em",
      color: "var(--cream)"
    }}>
      vidconvert<span style={{ color: "var(--accent)" }}>.</span>
    </span>
  </div>
);

const LogoLight = ({ size = 28 }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect x="0" y="0" width="32" height="32" rx="8" fill="var(--ink)" />
      <path d="M8 9 L16 23 L24 9" stroke="var(--accent)" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="9" r="2" fill="var(--accent)" />
    </svg>
    <span style={{
      fontFamily: "var(--display)",
      fontWeight: 800,
      fontSize: 19,
      letterSpacing: "-0.03em",
      color: "var(--ink)"
    }}>
      vidconvert<span style={{ color: "var(--ink)" }}>.</span>
    </span>
  </div>
);

// Hero chart: stacked compounding bar + trend line
const HeroChart = () => {
  const bars = [22, 30, 28, 44, 52, 48, 70, 88, 78, 110];
  return (
    <svg viewBox="0 0 420 320" style={{ width: "100%", height: "auto", display: "block" }}>
      <defs>
        <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill="rgba(244,239,230,0.18)" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="420" height="320" rx="22" fill="rgba(244,239,230,0.04)" />
      <rect x="0" y="0" width="420" height="320" rx="22" fill="url(#dots)" />

      <line x1="30" y1="270" x2="400" y2="270" stroke="rgba(244,239,230,0.25)" strokeDasharray="2 6" />

      {bars.map((h, i) => {
        const x = 38 + i * 36;
        const y = 270 - h * 1.6;
        const isPeak = i === bars.length - 1;
        return (
          <g key={i}>
            <rect x={x} y={y} width="22" height={h * 1.6} rx="4"
              fill={isPeak ? "var(--accent)" : "var(--cream)"}
              opacity={isPeak ? 1 : 0.18 + i * 0.07} />
          </g>
        );
      })}

      <path d="M49 230 L85 218 L121 222 L157 196 L193 184 L229 192 L265 154 L301 122 L337 138 L373 94"
        stroke="var(--accent)" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {[[49,230],[85,218],[121,222],[157,196],[193,184],[229,192],[265,154],[301,122],[337,138],[373,94]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="4.5" fill="var(--accent)" stroke="var(--bg)" strokeWidth="2" />
      ))}

      <g transform="translate(290, 40) rotate(-3)">
        <rect x="0" y="0" width="100" height="34" rx="17" fill="var(--accent)" />
        <text x="50" y="22" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="700" fontSize="13" fill="#0E0D0B">ROAS 6.4x</text>
      </g>
    </svg>
  );
};

// Star burst
const Star = ({ size = 60, color = "var(--accent)", spikes = 12 }) => {
  const pts = [];
  const cx = 50, cy = 50;
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? 48 : 24;
    const a = (i * Math.PI) / spikes - Math.PI / 2;
    pts.push(`${cx + Math.cos(a) * r},${cy + Math.sin(a) * r}`);
  }
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <polygon points={pts.join(" ")} fill={color} />
    </svg>
  );
};

// Funnel illustration
const Funnel = () => (
  <svg viewBox="0 0 280 320" style={{ width: "100%", height: "auto", display: "block" }}>
    <defs>
      <pattern id="dots2" width="9" height="9" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="0.9" fill="rgba(14,13,11,0.18)" />
      </pattern>
    </defs>

    <path d="M30 40 L250 40 L170 180 L170 280 L110 280 L110 180 Z"
      fill="var(--c-blue)" stroke="#0E0D0B" strokeWidth="3" strokeLinejoin="round" />

    <rect x="40" y="56" width="200" height="22" fill="var(--accent)" stroke="#0E0D0B" strokeWidth="3" />
    <rect x="58" y="92" width="164" height="22" fill="var(--c-coral)" stroke="#0E0D0B" strokeWidth="3" />
    <rect x="78" y="128" width="124" height="22" fill="var(--c-mint)" stroke="#0E0D0B" strokeWidth="3" />

    <circle cx="140" cy="300" r="10" fill="var(--accent)" stroke="#0E0D0B" strokeWidth="3" />

    <g transform="translate(80,12) rotate(-12)">
      <circle r="9" fill="var(--accent)" stroke="#0E0D0B" strokeWidth="2.5" />
      <text textAnchor="middle" y="3" fontFamily="JetBrains Mono" fontWeight="700" fontSize="9" fill="#0E0D0B">$</text>
    </g>
    <g transform="translate(160,4) rotate(8)">
      <circle r="9" fill="var(--accent)" stroke="#0E0D0B" strokeWidth="2.5" />
      <text textAnchor="middle" y="3" fontFamily="JetBrains Mono" fontWeight="700" fontSize="9" fill="#0E0D0B">$</text>
    </g>
    <g transform="translate(220,18) rotate(-4)">
      <circle r="9" fill="var(--accent)" stroke="#0E0D0B" strokeWidth="2.5" />
      <text textAnchor="middle" y="3" fontFamily="JetBrains Mono" fontWeight="700" fontSize="9" fill="#0E0D0B">$</text>
    </g>
  </svg>
);

// Puzzle pieces
const Puzzle = () => (
  <svg viewBox="0 0 320 240" style={{ width: "100%", height: "auto", display: "block" }}>
    <path d="M20 40 L130 40 L130 80 Q150 80 150 100 Q150 120 130 120 L130 200 L20 200 Z"
      fill="var(--c-coral)" stroke="#0E0D0B" strokeWidth="3" strokeLinejoin="round" />
    <path d="M170 40 L300 40 L300 200 L170 200 L170 140 Q150 140 150 120 Q150 100 170 100 Z"
      fill="var(--accent)" stroke="#0E0D0B" strokeWidth="3" strokeLinejoin="round" />
    <circle cx="60" cy="80" r="5" fill="#0E0D0B" />
    <circle cx="60" cy="100" r="5" fill="#0E0D0B" />
    <circle cx="240" cy="60" r="5" fill="#0E0D0B" />
    <circle cx="240" cy="80" r="5" fill="#0E0D0B" />
  </svg>
);

// Bar chart sticker
const BarChart = () => (
  <svg viewBox="0 0 280 220" style={{ width: "100%", height: "auto", display: "block" }}>
    <rect x="20" y="120" width="40" height="80" fill="var(--c-mint)" stroke="#0E0D0B" strokeWidth="3" />
    <rect x="80" y="80" width="40" height="120" fill="var(--accent)" stroke="#0E0D0B" strokeWidth="3" />
    <rect x="140" y="40" width="40" height="160" fill="var(--c-coral)" stroke="#0E0D0B" strokeWidth="3" />
    <rect x="200" y="20" width="40" height="180" fill="var(--c-blue)" stroke="#0E0D0B" strokeWidth="3" />
    <path d="M30 30 L240 30" stroke="#0E0D0B" strokeWidth="3" strokeDasharray="6 6" />
    <path d="M232 22 L248 30 L232 38 Z" fill="#0E0D0B" />
  </svg>
);

// Compass / target
const Target = () => (
  <svg viewBox="0 0 280 280" style={{ width: "100%", height: "auto", display: "block" }}>
    <circle cx="140" cy="140" r="120" fill="var(--c-blue)" stroke="#0E0D0B" strokeWidth="3" />
    <circle cx="140" cy="140" r="80" fill="var(--cream)" stroke="#0E0D0B" strokeWidth="3" />
    <circle cx="140" cy="140" r="44" fill="var(--accent)" stroke="#0E0D0B" strokeWidth="3" />
    <circle cx="140" cy="140" r="14" fill="#0E0D0B" />
    <g transform="translate(140 140) rotate(-30)">
      <path d="M-90 0 L60 0" stroke="#0E0D0B" strokeWidth="5" strokeLinecap="round" />
      <path d="M50 -10 L70 0 L50 10 Z" fill="#0E0D0B" />
    </g>
  </svg>
);

// Lightning bolt
const Bolt = ({ size = 60 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60">
    <path d="M32 4 L10 34 L26 34 L20 56 L48 22 L32 22 Z"
      fill="var(--accent)" stroke="#0E0D0B" strokeWidth="2.5" strokeLinejoin="round" />
  </svg>
);

// Smiley sticker
const Smiley = ({ size = 60, color = "var(--accent)" }) => (
  <svg width={size} height={size} viewBox="0 0 60 60">
    <circle cx="30" cy="30" r="26" fill={color} stroke="#0E0D0B" strokeWidth="2.5" />
    <circle cx="22" cy="24" r="3" fill="#0E0D0B" />
    <circle cx="38" cy="24" r="3" fill="#0E0D0B" />
    <path d="M19 36 Q30 46 41 36" stroke="#0E0D0B" strokeWidth="3" fill="none" strokeLinecap="round" />
  </svg>
);

// Squiggle
const Squiggle = () => (
  <svg viewBox="0 0 200 40" style={{ width: "100%", height: 40 }}>
    <path d="M5 20 Q25 5 45 20 T85 20 T125 20 T165 20 T195 20"
      stroke="var(--accent)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
  </svg>
);

// Avatar
const Avatar = ({ initials, color }) => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="22" fill={color} stroke="#0E0D0B" strokeWidth="2" />
    <text x="24" y="29" textAnchor="middle" fontFamily="Bricolage Grotesque" fontWeight="800"
      fontSize="16" fill="#0E0D0B" letterSpacing="-0.04em">{initials}</text>
  </svg>
);

Object.assign(window, { Logo, LogoLight, HeroChart, Star, Funnel, Puzzle, BarChart, Target, Bolt, Smiley, Squiggle, Avatar });
