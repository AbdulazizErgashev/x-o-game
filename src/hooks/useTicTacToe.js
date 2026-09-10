import { useCallback, useState } from "react";
import { EMPTY_BOARD } from "../utils/constants";
import { getWinningCombination, isBoardFull } from "../utils/gameLogic";

export function useTicTacToe() {
  const [board, setBoard] = useState([...EMPTY_BOARD]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);
  const [gameStatus, setGameStatus] = useState("playing");

  const makeMove = useCallback(
    (index) => {
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
    setWinningCells([]);
    setGameStatus("playing");
  }, []);

  return { board, currentPlayer, winner, winningCells, gameStatus, makeMove, restart };
}