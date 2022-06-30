import React, { useState, useReducer } from 'react';
import Square from './Square';


export default function MiniGrid(props) {

    const [game, setGame] = useState({
        squares: Array(9).fill(null),
        playerX: true,
        winner: null
    });

    function checkWinner(squares) {
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
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    }

    function clickHandler(i) {
        const newSquares = game.squares.slice();
        if (newSquares[i]) {
            return;
        }
        newSquares[i] = game.playerX ? 'X' : 'O';
        const winner = checkWinner(newSquares);
        setGame({
            squares: newSquares,
            playerX: !game.playerX,
            winner: winner
        });
    }

    function createSquare(i) {
        return <Square value={game.squares[i]} onClick={() => clickHandler(i)} />
    }

    function renderBoard() {
        const winner = checkWinner(game.squares);
    }

    return (
        <div className='mini-grid'>
            {createSquare(0)}
            {createSquare(1)}
            {createSquare(2)}
            {createSquare(3)}
            {createSquare(4)}
            {createSquare(5)}
            {createSquare(6)}
            {createSquare(7)}
            {createSquare(8)}
        </div>
    )
}
