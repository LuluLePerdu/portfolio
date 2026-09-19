export function Arrow({ className, dir = "right" }: { className?: string; dir?: "right" | "left" | "up" | "out" }) {
  const rotate = { right: 0, left: 180, up: -90, out: -45 }[dir];
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      <path d="M3 12h17M14 6l6 6-6 6" />
    </svg>
  );
}
