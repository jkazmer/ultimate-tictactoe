import React from 'react';

export default function Square(props) {
    function renderButton() {
        if (props.disabled) {
            return <button className='square' onClick={props.onClick} disabled>{props.value}</button>;
        } else {
            return <button className='square' onClick={props.onClick}>{props.value}</button>
        }
    }

    return renderButton();
}
