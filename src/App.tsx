import { GameBoard } from "./components/GameBoard";
import { GameHeader } from "./components/GameHeader";
import { GameStatus } from "./components/GameStatus";
import { RestartButton } from "./components/RestartButton";
import { ResultModal } from "./components/ResultModal";
import { useTicTacToe } from "./hooks/useTicTacToe";

function App() {
  const game = useTicTacToe();

  return (
    <main className="app-shell">
      <div className="ambient ambient-one" aria-hidden="true" /><div className="ambient ambient-two" aria-hidden="true" /><div className="grid-texture" aria-hidden="true" />
      <div className="app-content">
        <GameHeader />
        <section className="play-layout" aria-label="Tic-Tac-Toe game">
          <div className="intro-rail"><span className="section-index">01 / 03</span><p className="intro-copy">Think three moves ahead.<br />Leave a mark.</p><div className="player-legend"><span><i className="legend-x" /> Player X</span><span><i className="legend-o" /> Player O</span></div></div>
          <div className="game-column"><GameStatus {...game} /><GameBoard {...game} onSelect={game.makeMove} /><div className="board-footer"><span className="board-caption">3 x 3 / First to align</span><RestartButton onRestart={game.restart} compact /></div></div>
          <aside className="side-rail"><span className="section-index">02 / 03</span><div className="side-note"><span className="line" /><p>Every empty cell<br />is a decision.</p></div><span className="section-index section-index-bottom">03 / 03</span></aside>
        </section>
        <footer className="site-footer"><span>NEON XO</span><span>Designed for the next move</span><span>v1.0 / 2026</span></footer>
      </div>
      <ResultModal gameStatus={game.gameStatus} winner={game.winner} onRestart={game.restart} />
    </main>
  );
}

export default App;