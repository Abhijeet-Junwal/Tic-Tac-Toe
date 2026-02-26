import { Symbol } from "@/types/game";

export function getAiMove(board: (Symbol | null)[]) {
  const empty = board
    .map((v, i) => (v === null ? i : null))
    .filter((v) => v !== null) as number[];

  return empty[Math.floor(Math.random() * empty.length)];
}
