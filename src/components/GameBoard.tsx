import Cell from "./Cell";
import { Symbol } from "@/types/game";

type Props = {
    board: (Symbol | null)[],
    dimIndex: number | null,
    onMove: (i: number) => void,
}

export default function GameBoard( {board, dimIndex, onMove}: Props ) {
    return (
        <div className="grid grid-cols-3 gap-3 p-4">
            {board.map((value, i) => (
                <Cell
                    key={i}
                    value={value}
                    dimmed={i === dimIndex}
                    onClick={() => onMove(i)}
                />
            ))}
        </div>
    )
} 