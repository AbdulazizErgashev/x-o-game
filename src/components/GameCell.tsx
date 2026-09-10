import { PlayerMark } from "./PlayerMark";
import type { CellValue } from "../types";

interface GameCellProps {
  index: number;
  value: CellValue;
  isWinning: boolean;
  onSelect: (index: number) => void;
  disabled: boolean;
}

export function GameCell({ index, value, isWinning, onSelect, disabled }: GameCellProps) {
  const label = value ? `Cell ${index + 1}, player ${value}` : `Cell ${index + 1}, empty`;

  return (
    <button className={`game-cell ${value ? "is-occupied" : ""} ${isWinning ? "is-winning" : ""}`} type="button" role="gridcell" aria-label={label} aria-pressed={Boolean(value)} disabled={disabled || Boolean(value)} onClick={() => onSelect(index)}>
      {value && <PlayerMark player={value} />}
      {isWinning && <span className="win-spark" aria-hidden="true" />}
    </button>
  );
}