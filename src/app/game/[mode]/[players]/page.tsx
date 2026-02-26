"use client";

import { useState, use } from "react";
import { createInitialState, applyMove } from "@/lib/gameLogic";
import GameBoard from "@/components/GameBoard";

export default function GamePage({ params }: {params: Promise<{mode: any, players: any}>}) {
  const {mode, players} = use(params)

  const [state, setState] = useState(
    createInitialState(mode)
  );

  const currentPlayer = state.players[state.currentTurn];

  const dimIndex =
    state.mode === "giiker" && currentPlayer.moves.length === 3
      ? currentPlayer.moves[0].index
      : null;

  function handleMove(index: number) {
    setState((prev) => applyMove(prev, index));
  }

  return (
    <div className="flex flex-col items-center gap-6 animate-fade-in">
        <h1 className="text-2xl font-semibold">
            Turn: {state.currentTurn}
        </h1>

        {state.winner && (
            <div className="text-green-400 text-xl animate-pop">
            Winner: {state.winner}
            </div>
        )}

        <GameBoard
            board={state.board}
            dimIndex={dimIndex}
            onMove={handleMove}
    
        />
    <button 
        onClick={() => setState(createInitialState(state.mode))}
        className="px-4 py-2 text-black font-bold rounded-lg bg-[#66707a] hover:bg-[#9fa7af]"
        >
          Reset</button>


    </div>

  );
}
