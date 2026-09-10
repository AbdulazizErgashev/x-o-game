export type Player = "X" | "O";
export type CellValue = Player | null;
export type Board = CellValue[];
export type GameStatus = "playing" | "won" | "draw";
export type WinningCombination = readonly [number, number, number];