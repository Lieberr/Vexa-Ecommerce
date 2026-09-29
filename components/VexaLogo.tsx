interface Props {
  className?: string;
  height?: number;
}

export default function VexaLogo({ className = '', height = 28 }: Props) {
  // Mark: two filled triangles forming a V with thick/thin arm contrast
  // (echoes high-contrast display serif strokes — left arm bold, right arm hairline)
  return (
    <svg
      viewBox="0 0 122 30"
      height={height}
      width={(height / 30) * 122}
      className={className}
      role="img"
      aria-label="Vexa"
      overflow="visible"
    >
      {/* ── V mark ──────────────────────────────── */}

      {/* Left arm — thick downstroke */}
      <polygon
        points="1,2 9,2 15,28 10,28"
        fill="#C9A87C"
      />

      {/* Right arm — hairline upstroke */}
      <polygon
        points="29,2 24,2 13,28 15,28"
        fill="#C9A87C"
        opacity="0.88"
      />

      {/* ── Wordmark ─────────────────────────────── */}
      <text
        x="37"
        y="23"
        fontFamily="'Fraunces', Georgia, serif"
        fontWeight="600"
        fontSize="19"
        fill="currentColor"
        letterSpacing="-0.5"
      >
        Vexa
      </text>
    </svg>
  );
}
