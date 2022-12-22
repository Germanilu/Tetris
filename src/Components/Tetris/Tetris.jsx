import "./Tetris.css";
import Board from "../Board/Board";
import GameStats from "../GameStats/GameStats"
import Previews from "../Previews/Previews"


import  useBoard  from "../../Hooks/useBoard"
import useGameStats from "../../Hooks/useGameStats"
import {usePlayer} from "../../Hooks/usePlayer";
import GameController from "../GameController/GameController";

const Tetris = ({rows, columns, setGameOver}) => {

    //Custom Hook gameStats that show all the stats on the right side of the game
    const [gameStats, addLinesCleared] = useGameStats();
    //Custom hook that create the player 
    const [player, setPlayer, resetPlayer] = usePlayer();
    
    //Custom hook useBoard that takes rows and columns and build the actual board
    const [board, setBoard] = useBoard({rows, columns, player, resetPlayer, addLinesCleared,});
    

    return (
        <div className="Tetris">
            <Board board={board} />
            <GameStats gameStats={gameStats}/>
            <Previews tetrominoes={player.tetrominoes} />
            <GameController 
            board= {board}
            gameStats= {gameStats}
            player = {player}
            setGameOver = {setGameOver}
            setPlayer= {setPlayer}
            />
        </div>
    )
    
}

export default Tetris;