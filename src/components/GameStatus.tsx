import { PlayerMark } from "./PlayerMark";
import type { GameStatus as GameStatusType, Player } from "../types";

interface GameStatusProps {
  currentPlayer: Player;
  gameStatus: GameStatusType;
  winner: Player | null;
}

export function GameStatus({ currentPlayer, gameStatus, winner }: GameStatusProps) {
  const isPlaying = gameStatus === "playing";
  const statusPlayer = isPlaying ? currentPlayer : winner ?? "X";
  const title = isPlaying ? "Your move" : gameStatus === "draw" ? "Stalemate" : "Round complete";
  const detail = isPlaying ? `Player ${currentPlayer} is up` : gameStatus === "draw" ? "No winning line this time" : `Player ${winner} takes the round`;

  return (
    <section className={`status-panel status-${gameStatus}`} aria-live="polite">
      <div className="status-mark"><PlayerMark player={statusPlayer} small /></div>
      <div><p className="status-label">{title}</p><p className="status-detail">{detail}</p></div>
      {isPlaying && <span className="turn-pulse" aria-hidden="true" />}
    </section>
  );
}