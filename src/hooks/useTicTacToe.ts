import { useCallback, useState } from "react";
import { EMPTY_BOARD } from "../utils/constants";
import { getWinningCombination, isBoardFull } from "../utils/gameLogic";
import type { Board, GameStatus, Player, WinningCombination } from "../types";

export interface TicTacToeState {
  board: Board;
  currentPlayer: Player;
  winner: Player | null;
  winningCells: WinningCombination | null;
  gameStatus: GameStatus;
  makeMove: (index: number) => void;
  restart: () => void;
}

export function useTicTacToe(): TicTacToeState {
  const [board, setBoard] = useState<Board>(() => [...EMPTY_BOARD]);
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | null>(null);
  const [winningCells, setWinningCells] = useState<WinningCombination | null>(null);
  const [gameStatus, setGameStatus] = useState<GameStatus>("playing");

  const makeMove = useCallback(
    (index: number) => {
      if (board[index] || gameStatus !== "playing") return;

      const nextBoard = [...board];
      nextBoard[index] = currentPlayer;
      const combination = getWinningCombination(nextBoard);
      setBoard(nextBoard);

      if (combination) {
        setWinner(currentPlayer);
        setWinningCells(combination);
        setGameStatus("won");
        return;
      }

      if (isBoardFull(nextBoard)) {
        setGameStatus("draw");
        return;
      }

      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    },
    [board, currentPlayer, gameStatus],
  );

  const restart = useCallback(() => {
    setBoard([...EMPTY_BOARD]);
    setCurrentPlayer("X");
    setWinner(null);
    setWinningCells(null);
    setGameStatus("playing");
  }, []);

  return { board, currentPlayer, winner, winningCells, gameStatus, makeMove, restart };
}