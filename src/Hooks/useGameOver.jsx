
import { useCallback, useState } from "react";

const useGameOver = () => {

    //Hook "gameOver" is the actual value, setGameOver is the setter, and when call useState the value will change.
    const [gameOver, setGameOver] = useState(true)

    //When call resetGameOver it's gonna call setGameOver and set to false updating the state with a function inside the customHook
    //On useCallback you need to pass any dependency to use, in this case will be none "[]"
    const resetGameOver = useCallback(() => {
        setGameOver(false);
    }, []);

    return [gameOver, setGameOver, resetGameOver];
}

export default useGameOver;