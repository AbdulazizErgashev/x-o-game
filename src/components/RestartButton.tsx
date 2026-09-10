import { RotateCcw } from "lucide-react";

interface RestartButtonProps {
  onRestart: () => void;
  compact?: boolean;
}

export function RestartButton({ onRestart, compact = false }: RestartButtonProps) {
  return <button className={`restart-button ${compact ? "restart-compact" : ""}`} type="button" onClick={onRestart}><RotateCcw size={16} strokeWidth={1.8} aria-hidden="true" /><span>{compact ? "Restart" : "New round"}</span></button>;
}