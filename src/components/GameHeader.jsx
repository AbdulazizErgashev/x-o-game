export function GameHeader() {
  return (
    <header className="game-header">
      <div className="brand-lockup">
        <span className="brand-kicker">Arcade / 001</span>
        <h1>NEON<br /><em>XO</em></h1>
      </div>
      <div className="header-meta" aria-label="Game mode"><span className="live-dot" /><span>Local duel</span></div>
    </header>
  );
}