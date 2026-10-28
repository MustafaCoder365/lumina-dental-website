// A pointed arch filled with an eight-point star tile, after the glazed
// kashi panels on Baghdad's old buildings. The inner arch is the "window"
// the hours card sits in.

const OUTER = "M0,600 L0,311 A330,330 0 0,1 220,0 A330,330 0 0,1 440,311 L440,600 Z";
const INNER = "M56,600 L56,302 A246,246 0 0,1 220,70 A246,246 0 0,1 384,302 L384,600 Z";

export function TileArch({ children }: { children: React.ReactNode }) {
  return (
    <div className="arch-rise relative mx-auto aspect-[440/600] w-full max-w-[340px] sm:max-w-[440px]">
      <svg
        viewBox="0 0 440 600"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <pattern id="kashi" width="60" height="60" patternUnits="userSpaceOnUse">
            <rect width="60" height="60" fill="#1a3a8c" />
            {/* Eight-point star: two overlapping squares. */}
            <g fill="none" stroke="#f6f8fb" strokeOpacity="0.55" strokeWidth="1.4">
              <rect x="15" y="15" width="30" height="30" />
              <rect x="15" y="15" width="30" height="30" transform="rotate(45 30 30)" />
            </g>
            {/* Interlace lines from the star points to the tile edges. */}
            <g stroke="#f6f8fb" strokeOpacity="0.22" strokeWidth="1">
              <line x1="30" y1="0" x2="30" y2="8.8" />
              <line x1="30" y1="51.2" x2="30" y2="60" />
              <line x1="0" y1="30" x2="8.8" y2="30" />
              <line x1="51.2" y1="30" x2="60" y2="30" />
            </g>
            <circle cx="30" cy="30" r="4.5" fill="#24a8a6" />
            <circle cx="0" cy="0" r="2.5" fill="#24a8a6" fillOpacity="0.7" />
            <circle cx="60" cy="0" r="2.5" fill="#24a8a6" fillOpacity="0.7" />
            <circle cx="0" cy="60" r="2.5" fill="#24a8a6" fillOpacity="0.7" />
            <circle cx="60" cy="60" r="2.5" fill="#24a8a6" fillOpacity="0.7" />
          </pattern>
        </defs>
        <path d={OUTER} fill="url(#kashi)" />
        {/* Glaze border around the window. */}
        <path d={INNER} fill="none" stroke="#24a8a6" strokeWidth="6" />
        <path d={INNER} fill="#f6f8fb" />
      </svg>
      {/* Content sits in the lower, straight part of the window. */}
      <div className="absolute inset-x-[17%] top-[40%] bottom-[5%] flex items-end">{children}</div>
    </div>
  );
}
