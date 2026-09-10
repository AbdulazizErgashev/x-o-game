import type { Player } from "../types";

interface PlayerMarkProps {
  player: Player;
  small?: boolean;
}

export function PlayerMark({ player, small = false }: PlayerMarkProps) {
  if (player === "X") {
    return (
      <span className={`mark mark-x ${small ? "mark-small" : ""}`} aria-label="Player X">
        <span className="mark-x-bar mark-x-bar-one" />
        <span className="mark-x-bar mark-x-bar-two" />
      </span>
    );
  }

  return <span className={`mark mark-o ${small ? "mark-small" : ""}`} aria-label="Player O" />;
}