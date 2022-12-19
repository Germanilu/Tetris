import Menu from "../Menu/Menu"
import useGameOver from "../../Hooks/useGameOver"
import Tetris from "../Tetris/Tetris"

//Create Component with props
const Game = ({rows,columns}) => {

    //Custom Hook, initial value, setter and function 
    const [gameOver, setGameOver, resetGameOver] = useGameOver();
    
    //Function that start when click on button
    const start = () =>  resetGameOver();

    return (
        //Return Component Menu to trigger funcion start onclick if not gameOver start game
        <div className="Game">
            {
                gameOver? (
                    <Menu onClick={start} />
                ): (
                    <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
                    
                )}
        </div>
    )
}

export default Game;