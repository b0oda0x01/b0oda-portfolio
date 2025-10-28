export function LogoSvg() {
  return (
    <svg
      viewBox="0 0 800 500"
      className="w-full max-w-3xl md:max-w-4xl h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer frame */}
      <rect
        x="30"
        y="30"
        width="740"
        height="440"
        stroke="#00ff00"
        strokeWidth="2.5"
        fill="none"
        opacity="0.3"
      />
      
      {/* Corner decorations - top left */}
      <path
        d="M30,30 L90,30 M30,30 L30,90"
        stroke="#00ff00"
        strokeWidth="1.5"
        opacity="0.8"
      />
      
      {/* Corner decorations - top right */}
      <path
        d="M710,30 L770,30 M770,30 L770,90"
        stroke="#00ff00"
        strokeWidth="1.5"
        opacity="0.8"
      />
      
      {/* Corner decorations - bottom left */}
      <path
        d="M30,410 L90,410 M30,410 L30,470"
        stroke="#00ff00"
        strokeWidth="1.5"
        opacity="0.8"
      />
      
      {/* Corner decorations - bottom right */}
      <path
        d="M710,470 L770,470 M770,410 L770,470"
        stroke="#00ff00"
        strokeWidth="1.5"
        opacity="0.8"
      />
      
      {/* Main text with glow */}
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <text
        x="400"
        y="180"
        fontSize="140"
        fontFamily="'JetBrains Mono', 'Fira Code', monospace"
        fontWeight="bold"
        fill="#00ff00"
        textAnchor="middle"
        filter="url(#glow)"
        opacity="0.9"
      >
        b0oda
      </text>
      
      {/* Tagline */}
      <text
        x="400"
        y="300"
        fontSize="28"
        fontFamily="'JetBrains Mono', monospace"
        fill="#00ff00"
        textAnchor="middle"
        opacity="0.6"
        letterSpacing="1"
      >
        Where patterns break,
      </text>
      <text
        x="400"
        y="340"
        fontSize="28"
        fontFamily="'JetBrains Mono', monospace"
        fill="#00ff00"
        textAnchor="middle"
        opacity="0.6"
        letterSpacing="1"
      >
        paths emerge
      </text>
      
      {/* Binary decorations at bottom */}
      <text
        x="400"
        y="430"
        fontSize="14"
        fontFamily="'JetBrains Mono', monospace"
        fill="#00ff00"
        textAnchor="middle"
        opacity="0.3"
        letterSpacing="2"
      >
        01100010 00110000 01101111 01100100 01100001
      </text>
    </svg>
  );
}
