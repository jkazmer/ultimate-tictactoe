import React, { useState, useRef } from 'react';
import MiniGrid from './MiniGrid';
import './style.css';


function App() {

  const [game, setGame] = useState({
    boards: Array(9).fill({
      squares: Array(9).fill(null)
    }),
    playerX: true
  });

  return (
    <>
      <div id='heading'>
        <span id='ultimate'>ultimate </span>
        <span id='tictactoe'>tic-tac-toe</span>
      </div>
      <div className='game-grid'>
        <MiniGrid />
        <MiniGrid />
        <MiniGrid />
        <MiniGrid />
        <MiniGrid />
        <MiniGrid />
        <MiniGrid />
        <MiniGrid />
        <MiniGrid />
      </div>
    </>
  );
}

export default App;
