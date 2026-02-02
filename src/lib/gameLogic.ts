import { GameState, Mode, Symbol } from "@/types/game";

export function createInitialState(mode: Mode): GameState {
    return {
        board: Array(9).fill(null),
        currentTurn: "X",
        players: {
            "X": { symbol: "X", moves: [] },
            "O": { symbol: "O", moves: [] },
        },
        mode,
        winner: null,
    };
}


export function applyMove(state: GameState, index: number): GameState {
    if(state.winner){
        return state;
    }

    if(state.board[index]){
        return state;
    }

    const player = state.players[state.currentTurn];
    const opponent = state.currentTurn === "X" ? "O" : "X";

    const newBoard = [...state.board];
    const newMoves = [...player.moves];

    // Giiker's mode
    if(state.mode === "giiker" && player.moves.length === 3){
        const oldestMove = player.moves.shift();
        if(oldestMove){
            newBoard[oldestMove.index] = null;
        }
    }

    // Place new move
    newBoard[index] = state.currentTurn;
    newMoves.push({ index });

    const newState: GameState = {
        ...state,
        board: newBoard,
        currentTurn: opponent,
        players: {
            ...state.players,
            [player.symbol]: {
                ...player,
                moves: newMoves,
            },
        },
    };

    const winner = checkWinner(newBoard);
    return winner ? {...newState, winner} : newState;
};


function checkWinner(board: (Symbol | null)[]): Symbol | null {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ];

    for (const [a, b, c] of winPatterns) {
        if(board[a] && board[a] === board[b] && board[a] === board[c]){
            return board[a];
        }
    }

    return null;
}