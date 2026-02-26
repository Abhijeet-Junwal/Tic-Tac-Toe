import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-8 animate-fade-in">
      <h1 className="text-4xl font-bold tracking-wide">
        Tic Tac Toe
      </h1>

      <div className="flex gap-6">
        <ModeButton href="/mode/normal" label="Normal Mode" />
        <ModeButton href="/mode/giiker" label="Giiker's Mode" />
      </div>
    </div>
  );
}

function ModeButton({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href}>
      <div className="px-6 py-4 rounded-xl bg-slate-700 hover:bg-slate-600
                      hover:scale-105 cursor-pointer shadow-lg">
        {label}
      </div>
    </Link>
  );
}
