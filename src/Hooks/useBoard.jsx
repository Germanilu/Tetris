import { useState, useEffect } from "react";
import {buildBoard, nextBoard} from "../Utilities/Board";



const useBoard = ({rows,columns, player, resetPlayer, addLinesCleared}) => {
    //We call the function buildBoard on the hook
    const [board, setBoard] = useState(buildBoard({rows,columns}));

    //Any time player, resetPlayer or addLinesCleared change we update the board
    useEffect(() => {
        //With setBoard we update the board and be able to look at previousBoard as starting point and call function nextBoard that create a new board with the previousBoard and the player position
        setBoard((previousBoard) =>
            nextBoard({
                board: previousBoard,
                player,
                resetPlayer,
                addLinesCleared
                })
            );
        }, [player, resetPlayer, addLinesCleared])




    
    return [board]
}

export default useBoard;