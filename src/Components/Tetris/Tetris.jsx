import "./Tetris.css";
import Board from "../Board/Board";
import GameStats from "../GameStats/GameStats"
import Previews from "../Previews/Previews"


import  useBoard  from "../../Hooks/useBoard"
import useGameStats from "../../Hooks/useGameStats"


const Tetris = ({rows, columns, setGameOver}) => {

    //Custom Hook gameStats
    const [gameStats, addLinesCleared] = useGameStats();
    //Custom hook useBoard that takes rows and columns
    const [board, setBoard] = useBoard({rows, columns});

    const player = { terominoes: []}

    return (
        <div className="Tetris">
            <Board board={board} />
            <GameStats gameStats={gameStats}/>
            <Previews tetrominoes={player.tetrominoes} />
        </div>
    )
    
}

export default Tetris;