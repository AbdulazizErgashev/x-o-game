import type { Board, WinningCombination } from "../types";
import { WINNING_COMBINATIONS } from "./constants";

export function getWinningCombination(board: Board): WinningCombination | null {
  return (
    WINNING_COMBINATIONS.find(([first, second, third]) => {
      return Boolean(
        board[first] &&
          board[first] === board[second] &&
          board[first] === board[third],
      );
    }) ?? null
  );
}

export function isBoardFull(board: Board): boolean {
  return board.every(Boolean);
}