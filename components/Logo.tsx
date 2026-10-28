export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 36" className={className} aria-hidden="true" focusable="false">
      <path
        d="M2,35 L2,18.6 A21,21 0 0,1 14,2 A21,21 0 0,1 26,18.6 L26,35"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="22" r="3.5" fill="#24a8a6" />
    </svg>
  );
}
