import MiniGrid from './MiniGrid';
import './style.css';


function App() {
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
