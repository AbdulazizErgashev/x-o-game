import { GameCell } from "./GameCell";
import type { Board, GameStatus, WinningCombination } from "../types";

interface GameBoardProps {
  board: Board;
  winningCells: WinningCombination | null;
  gameStatus: GameStatus;
  onSelect: (index: number) => void;
}

export function GameBoard({ board, winningCells, gameStatus, onSelect }: GameBoardProps) {
  return (
    <div className="board-stage">
      <div className="board-shadow" aria-hidden="true" />
      <div className="game-board" role="grid" aria-label="Tic-Tac-Toe board">
        {board.map((value, index) => <GameCell key={index} index={index} value={value} isWinning={winningCells?.includes(index) ?? false} disabled={gameStatus !== "playing"} onSelect={onSelect} />)}
      </div>
    </div>
  );
}