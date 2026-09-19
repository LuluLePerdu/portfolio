/**
 * Personal monogram, drawn in the same language as the Fjelkore F:
 * a stem with a cut top and slanted bars. Where the F has its bars up top,
 * this one sits them low — an L and an E sharing one stem.
 */
export function Mark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill="currentColor"
    >
      <path d="M5 8.5 12 4v25H5z" />
      <path d="M14 13.5h13l-3.6 5.5H14z" />
      <path d="M14 23h16l-3.6 6H14z" />
    </svg>
  );
}
