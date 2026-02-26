export function XIcon({ dimmed }: { dimmed?: boolean }) {
  return (
    <svg
      width="40"
      height="40"
      className={dimmed ? "opacity-30" : "opacity-100"}
      viewBox="0 0 100 100"
    >
      <line x1="10" y1="10" x2="90" y2="90" stroke="black" strokeWidth="20" />
      <line x1="90" y1="10" x2="10" y2="90" stroke="black" strokeWidth="20" />
    </svg>
  );
}
