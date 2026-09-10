import { PlayerMark } from "./PlayerMark";

export function GameStatus({ currentPlayer, gameStatus, winner }) {
  const isPlaying = gameStatus === "playing";
  const title = isPlaying ? "Your move" : gameStatus === "draw" ? "Stalemate" : "Round complete";
  const detail = isPlaying ? `Player ${currentPlayer} is up` : gameStatus === "draw" ? "No winning line this time" : `Player ${winner} takes the round`;

  return (
    <section className={`status-panel status-${gameStatus}`} aria-live="polite">
      <div className="status-mark"><PlayerMark player={isPlaying ? currentPlayer : winner || "X"} small /></div>
      <div><p className="status-label">{title}</p><p className="status-detail">{detail}</p></div>
      {isPlaying && <span className="turn-pulse" aria-hidden="true" />}
    </section>
  );
}