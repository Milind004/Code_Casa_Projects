import React, { useState } from 'react'
import { Square } from '../components/Square'


export const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const handleClick = (index) => {
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "O";
        setState(copyState);
        setIsXTurn(!isXTurn);
    }

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [0, 3, 6],
            [3, 4, 5],
            [6, 7, 8],
            [1, 4, 7],
            [3, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c] ) {
                return state[a];
            }
        }
        return false;
    }

    const isWinner = checkWinner();

    const handleReset=()=>{
        setState(Array(9).fill(null));
    }

    return (
        <div class="board-container">
            <h2>Tic-Tac-Toe Game</h2>
            {isWinner ?
                (<><h4>{isWinner} won the game.
                </h4><button onClick={handleReset}>Play Again</button></>) : (
                    <>
                        <div class="board-row">
                            <Square onClick={() => handleClick(0)} value={state[0]} />
                            <Square onClick={() => handleClick(1)} value={state[1]} />
                            <Square onClick={() => handleClick(2)} value={state[2]} />
                        </div>
                        <div class="board-row">
                            <Square onClick={() => handleClick(3)} value={state[3]} />
                            <Square onClick={() => handleClick(4)} value={state[4]} />
                            <Square onClick={() => handleClick(5)} value={state[5]} />
                        </div>
                        <div class="board-row">
                            <Square onClick={() => handleClick(6)} value={state[6]} />
                            <Square onClick={() => handleClick(7)} value={state[7]} />
                            <Square onClick={() => handleClick(8)} value={state[8]} />
                        </div>
                    </>)}
        </div>
    )
}