# Neon Tic-Tac-Toe

A polished 3D neon Tic-Tac-Toe experience migrated from the original Vanilla implementation.

## Stack

- Vite
- React
- Tailwind CSS v4 via PostCSS
- Vanilla CSS for focused 3D transforms and motion
- Lucide React for interface icons

## Features

- Local two-player Tic-Tac-Toe
- React state-driven game engine
- Reusable board, cell, mark, status, restart, and result modal components
- 3D perspective board with tactile hover and press states
- Dimensional X and O marks with placement animation
- Winning-cell highlight and draw state
- Responsive mobile, tablet, and desktop layout
- Keyboard-accessible buttons and visible focus states
- `prefers-reduced-motion` support
- No page reload on restart

## Architecture

```text
src/
├── components/
│   ├── GameBoard.jsx
│   ├── GameCell.jsx
│   ├── GameHeader.jsx
│   ├── GameStatus.jsx
│   ├── PlayerMark.jsx
│   ├── RestartButton.jsx
│   └── ResultModal.jsx
├── hooks/
│   └── useTicTacToe.js
├── utils/
│   ├── constants.js
│   └── gameLogic.js
├── App.jsx
├── index.css
└── main.jsx
```

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm run preview
```

## Original Vanilla implementation

The exact pre-migration `index.html`, `style.css`, and `script.js` files are preserved in [archive/original-vanilla](archive/original-vanilla). They are historical reference files only and are not used by the active Vite application.
