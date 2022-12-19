import "./Tetris.css";
import Board from "../Board/Board";

import  useBoard  from "../../Hooks/useBoard"

const Tetris = ({rows, columns, setGameOver}) => {
    const [board, setBoard] = useBoard({rows, columns});

    return(
        <Board board={board} />
    )
}

export default Tetris;