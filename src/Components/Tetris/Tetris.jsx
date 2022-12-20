import "./Tetris.css";
import Board from "../Board/Board";
import  useBoard  from "../../Hooks/useBoard"
import GameStats from "../GameStats/GameStats"

const Tetris = ({rows, columns, setGameOver}) => {
    //Custom hook useBoard that takes rows and columns
    const [board, setBoard] = useBoard({rows, columns});

    return (
        <div className="Tetris">
            <Board board={board} />
            <GameStats gameStats={gameStats}/>
        </div>
    )
    
}

export default Tetris;