import { useState, useCallback} from "react";

import {randomTetromino} from "../Utilities/Tetrominoes";

// BuildPlayer build the initial version of the player and update the player 
const buildPlayer = (previous) => {
    let tetrominoes;

    //Building the tetrominoes
    if(previous) {
        tetrominoes = [...previous.tetromino];
        tetrominoes.unshift(randomTetromino());
    }else {
        //If no tetrominoes will generate one 
        tetrominoes = Array(5).fill(0).map((_) => randomTetromino());
    }

    return {
        collied: false,
        isFastDropping: false,
        position: { row: 0, column: 4},
        tetrominoes,
        tetromino: tetrominoes.pop()
    }
}


export const usePlayer = () => {
    //Get the player state and the setter using useState and the values providing by buildPlayer
    const [player, setPlayer] = useState(buildPlayer());
    // SetUp resetPlayer and take the previouse value and pass to build player and update.
    const resetPlayer = useCallback(() => {
        setPlayer((prev) => buildPlayer(prev));
    }, []);
    
    return [player, setPlayer, resetPlayer];
}