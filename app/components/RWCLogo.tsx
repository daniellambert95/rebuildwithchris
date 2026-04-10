export default function RWCLogo({ size = 80 }: { size?: number }) {
  const r = size / 2;
  const cx = r;
  const cy = r;
  const textRadius = r - 10;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path
          id="topArc"
          d={`M ${cx - textRadius},${cy} A ${textRadius},${textRadius} 0 0 1 ${cx + textRadius},${cy}`}
        />
        <path
          id="bottomArc"
          d={`M ${cx - textRadius},${cy} A ${textRadius},${textRadius} 0 0 0 ${cx + textRadius},${cy}`}
        />
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8c97a" />
          <stop offset="50%" stopColor="#c9a84c" />
          <stop offset="100%" stopColor="#a07830" />
        </linearGradient>
      </defs>

      {/* Outer ring */}
      <circle cx={cx} cy={cy} r={r - 2} stroke="url(#goldGrad)" strokeWidth="2" fill="#0d0d0b" />
      {/* Inner ring */}
      <circle cx={cx} cy={cy} r={r - 7} stroke="#8b1a1a" strokeWidth="1" fill="transparent" />

      {/* RWC centre text */}
      <text
        x={cx}
        y={cy + 10}
        textAnchor="middle"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize={size * 0.28}
        fill="url(#goldGrad)"
        letterSpacing="2"
      >
        RWC
      </text>

      {/* Top arc text: REBUILD WITH CHRIS */}
      <text fontFamily="'Bebas Neue', sans-serif" fontSize={size * 0.085} fill="#c9a84c" letterSpacing="1.5">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          REBUILD · WITH · CHRIS
        </textPath>
      </text>

      {/* Bottom arc text: ESTABLISHED 2025 */}
      <text fontFamily="'Bebas Neue', sans-serif" fontSize={size * 0.085} fill="#c9a84c" letterSpacing="1.5">
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          ESTABLISHED 2025
        </textPath>
      </text>

      {/* Top dot ornaments */}
      <circle cx={cx - r + 14} cy={cy} r="2" fill="#8b1a1a" />
      <circle cx={cx + r - 14} cy={cy} r="2" fill="#8b1a1a" />
    </svg>
  );
}
