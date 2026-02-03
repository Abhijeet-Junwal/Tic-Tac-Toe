export function OIcon({ dimmed }: { dimmed?: boolean }) {
  return (
    <svg
      width="40"
      height="40"
      className={dimmed ? "opacity-30" : "opacity-100"}
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="black"
        strokeWidth="10"
        fill="none"
      />
    </svg>
  );
}
