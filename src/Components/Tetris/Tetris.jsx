import "./Tetris.css";
import Board from "../Board/Board";
import  useBoard  from "../../Hooks/useBoard"


const Tetris = ({rows, columns, setGameOver}) => {
    //Custom hook useBoard that takes rows and columns
    const [board, setBoard] = useBoard({rows, columns});

    return(
        <Board board={board} />
    )
}

export default Tetris;