"use client";
import { use } from "react";
import Link from "next/link";

export default function ModePage({ params }: {params : Promise<{mode: any}>}) {
  const { mode } = use(params);

  const title =
    mode === "giiker" ? "Giiker's Mode" : "Normal Mode";

  return (
    <div className="flex flex-col items-center gap-8 animate-slide-up">
      <h2 className="text-3xl font-semibold">{title}</h2>

      <div className="flex gap-6">
        <ChoiceButton href={`/game/${mode}/single`} label="Single Player" />
        <ChoiceButton href={`/game/${mode}/double`} label="Two Players" />
      </div>
    </div>
  );
}

function ChoiceButton({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href}>
      <div className="px-6 py-4 rounded-xl bg-slate-700 hover:bg-slate-600
                      hover:scale-105 cursor-pointer shadow-md">
        {label}
      </div>
    </Link>
  );
}
