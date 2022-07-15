import React, { useState } from 'react';
import MiniGrid from './MiniGrid';
import './style.css';


function App() {

  const [game, setGame] = useState({
    boards: Array(9).fill(Array(9).fill(null)),
    winners: Array(9).fill(null),
    playerX: true,
    mainWinner: null
  });

  function checkWinner(arr) {
    const winConfigs = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winConfigs.length; i++) {
      const [a, b, c] = winConfigs[i];
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        return arr[a];
      }
    }

    return null;
  }


  function clickHandler(board, square) {
    const newSquares = game.boards[board].slice();
    const newWinners = game.winners.slice();
    if (newSquares[square]) {
      return;
    }
    newSquares[square] = game.playerX ? 'X' : 'O';
    newWinners[board] = checkWinner(newSquares);
    if (newWinners[board]) {
      setGame({
        ...game,
        mainWinner: checkWinner(newWinners)
      });
      // return;
    }
    const newBoards = game.boards.slice();
    newBoards[board] = newSquares;
    // newBoards[board].miniWinner = winner;
    setGame({
      boards: newBoards,
      winners: newWinners,
      playerX: !game.playerX,
    });
  }

  function renderMiniBoard(i) {
    return <MiniGrid index={i} squares={game.boards[i]} winner={game.winners[i]} onClick={clickHandler} />
  }

  function renderSite() {
    const bgColor = game.playerX ? '#00b' : '#b00';
    // document.body.style.backgroundColor = bgColor;
    return (
      <>
        <div id='heading'>
          <span id='ultimate'>ultimate </span>
          <span id='tictactoe'>tic-tac-toe</span>
        </div>
        <div className='game-grid'>
          {renderMiniBoard(0)}
          {renderMiniBoard(1)}
          {renderMiniBoard(2)}
          {renderMiniBoard(3)}
          {renderMiniBoard(4)}
          {renderMiniBoard(5)}
          {renderMiniBoard(6)}
          {renderMiniBoard(7)}
          {renderMiniBoard(8)}
        </div>
        <div className='game-info'>
          <p>It's {game.playerX ? 'X' : 'O'}'s turn!!!</p>
        </div>
      </>
    );
  }

  return renderSite();
}

export default App;
