import { useState, useCallback } from "react";

//Create the object stats
const buildGameStats = () => ({
    level: 1,
    linesCompleted: 0,
    linesPerLevel:10,
    points: 0
});


const useGameStats = () => {
    //Hook gameStats that use the object above as initial state
    const [gameStats, setGameStats] = useState(buildGameStats());

    const addLinesCleared = useCallback (() => {},[])

    return [gameStats, addLinesCleared];
}

export default useGameStats;
