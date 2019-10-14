import React from 'react';
import { useHistory } from 'react-router-dom';

export default function HomeButton() {
    let history = useHistory()

    return (
        <button type='button' onClick={() => handleClick(history)}>
            Button
        </button>
    )
}

function handleClick(history) {
    let randomNum = Math.random()

    history.push(`/home${randomNum}`)
}