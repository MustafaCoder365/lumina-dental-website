// A pointed arch filled with an eight-point star tile, after the glazed
// kashi panels on Baghdad's old buildings. A real clinic photo fills the
// arch's window, and the hours card overlaps its base.

const OUTER = "M0,600 L0,311 A330,330 0 0,1 220,0 A330,330 0 0,1 440,311 L440,600 Z";
const INNER = "M48,600 L48,303.8 A256,256 0 0,1 220,62 A256,256 0 0,1 392,303.8 L392,600 Z";

export function TileArch({
  photo,
  children,
}: {
  photo: { src: string; srcSet: string; alt: string };
  children: React.ReactNode;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[360px] pb-24 sm:max-w-[440px] sm:pb-20">
      <div className="arch-rise relative aspect-[440/600] w-full">
        <svg viewBox="0 0 440 600" className="absolute inset-0 h-full w-full" aria-hidden="true" focusable="false">
          <defs>
            <pattern id="kashi" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect width="60" height="60" fill="#1a3a8c" />
              {/* Eight-point star: two overlapping squares. */}
              <g fill="none" stroke="#f6f8fb" strokeOpacity="0.55" strokeWidth="1.4">
                <rect x="15" y="15" width="30" height="30" />
                <rect x="15" y="15" width="30" height="30" transform="rotate(45 30 30)" />
              </g>
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
            <clipPath id="arch-window" clipPathUnits="objectBoundingBox">
              {/* INNER, normalized to the photo box (48..392 × 62..600). */}
              <path d="M0,1 L0,0.4494 A0.7442,0.4758 0 0,1 0.5,0 A0.7442,0.4758 0 0,1 1,0.4494 L1,1 Z" />
            </clipPath>
          </defs>
          <path d={OUTER} fill="url(#kashi)" />
          <path d={INNER} fill="none" stroke="#24a8a6" strokeWidth="8" />
        </svg>

        {/* The photo is HTML so it can use srcset; the clip path shapes it. */}
        <img
          src={photo.src}
          srcSet={photo.srcSet}
          sizes="(min-width: 640px) 344px, 280px"
          alt={photo.alt}
          fetchPriority="high"
          decoding="async"
          className="absolute object-cover"
          style={{
            left: `${(48 / 440) * 100}%`,
            top: `${(62 / 600) * 100}%`,
            width: `${(344 / 440) * 100}%`,
            height: `${(538 / 600) * 100}%`,
            clipPath: "url(#arch-window)",
            objectPosition: "60% 30%",
          }}
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 px-2 sm:-start-12 sm:end-auto sm:w-[22rem] sm:px-0">{children}</div>
    </div>
  );
}
