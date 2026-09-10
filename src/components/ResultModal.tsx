import { Sparkles } from "lucide-react";
import { PlayerMark } from "./PlayerMark";
import { RestartButton } from "./RestartButton";
import type { GameStatus, Player } from "../types";

interface ResultModalProps {
  gameStatus: GameStatus;
  winner: Player | null;
  onRestart: () => void;
}

export function ResultModal({ gameStatus, winner, onRestart }: ResultModalProps) {
  if (gameStatus === "playing") return null;
  const isDraw = gameStatus === "draw";

  return (
    <div className="modal-backdrop" role="presentation">
      <section className="result-modal" role="dialog" aria-modal="true" aria-labelledby="result-title">
        <div className="modal-orbit" aria-hidden="true" />
        <span className="result-kicker"><Sparkles size={13} /> Round result</span>
        <h2 id="result-title">{isDraw ? "DRAW" : `PLAYER ${winner} WINS`}</h2>
        <div className="result-mark">{isDraw ? <span className="draw-symbol">=</span> : <PlayerMark player={winner ?? "X"} />}</div>
        <p>{isDraw ? "A perfectly balanced round." : "A clean line. Beautifully played."}</p>
        <RestartButton onRestart={onRestart} />
      </section>
    </div>
  );
}