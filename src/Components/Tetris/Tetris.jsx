import "./Tetris.css";
import Board from "../Board/Board";
import  useBoard  from "../../Hooks/useBoard"
import GameStats from "../GameStats/GameStats"
import useGameStats from "../../Hooks/useGameStats"

const Tetris = ({rows, columns, setGameOver}) => {
    //Custom Hook gameStats
    const [gameStats, addLinesCleared] = useGameStats();
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