import { WINNING_COMBINATIONS } from "./constants";

export function getWinningCombination(board) {
  return (
    WINNING_COMBINATIONS.find(([first, second, third]) => {
      return (
        board[first] &&
        board[first] === board[second] &&
        board[first] === board[third]
      );
    }) ?? null
  );
}

export function isBoardFull(board) {
  return board.every(Boolean);
}