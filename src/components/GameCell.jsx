import { PlayerMark } from "./PlayerMark";

export function GameCell({ index, value, isWinning, onSelect, disabled }) {
  const label = value ? `Cell ${index + 1}, player ${value}` : `Cell ${index + 1}, empty`;

  return (
    <button className={`game-cell ${value ? "is-occupied" : ""} ${isWinning ? "is-winning" : ""}`} type="button" role="gridcell" aria-label={label} aria-pressed={Boolean(value)} disabled={disabled || Boolean(value)} onClick={() => onSelect(index)}>
      {value && <PlayerMark player={value} />}
      {isWinning && <span className="win-spark" aria-hidden="true" />}
    </button>
  );
}