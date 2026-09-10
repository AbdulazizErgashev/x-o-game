import { RotateCcw } from "lucide-react";

export function RestartButton({ onRestart, compact = false }) {
  return <button className={`restart-button ${compact ? "restart-compact" : ""}`} type="button" onClick={onRestart}><RotateCcw size={16} strokeWidth={1.8} aria-hidden="true" /><span>{compact ? "Restart" : "New round"}</span></button>;
}