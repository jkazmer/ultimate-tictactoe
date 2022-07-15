import React from 'react';
import Square from './Square';


export default function MiniGrid(props) {


    function createSquare(j) {
        const disabled = props.winner ? true : false;
        const square = <Square value={props.squares[j]} disabled={disabled} onClick={() => props.onClick(props.index, j)} />;
        return square;
    }

    return (
        <div className={`mini-grid ${props.active ? 'active' : ''}`}>
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
