export type Symbol = "X" | "O";
export type Players = "single" | "double";
export type Mode = "normal" | "giiker";

export type Move = {
    index : number;
};

export type PlayerState = {
    symbol: Symbol;
    moves: Move[];
};

export type GameState = {
    board: (Symbol | null)[];
    currentTurn: Symbol;
    players: Record<Symbol, PlayerState>;
    mode: Mode;
    winner: Symbol | null;
};