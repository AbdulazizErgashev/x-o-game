import { GameCell } from "./GameCell";

export function GameBoard({ board, winningCells, gameStatus, onSelect }) {
  return (
    <div className="board-stage">
      <div className="board-shadow" aria-hidden="true" />
      <div className="game-board" role="grid" aria-label="Tic-Tac-Toe board">
        {board.map((value, index) => <GameCell key={index} index={index} value={value} isWinning={winningCells.includes(index)} disabled={gameStatus !== "playing"} onSelect={onSelect} />)}
      </div>
    </div>
  );
}