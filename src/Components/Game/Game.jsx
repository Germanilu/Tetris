import Menu from "../Menu/Menu"
import useGameOver from "../../Hooks/useGameOver"

//Create Component with props
const Game = ({rows,columns}) => {

    //Custom Hook, initial value, setter and function 
    const [gameOver, setGameOver, resetGameOver] = useGameOver();
    
    //Function that start when click on button
    const start = () => {
        resetGameOver();
         console.log(`Start gameOver is ${gameOver}`)
        }
 
    return (
        //Return Component Menu to trigger funcion start onclick
        <div className="Game">
            <Menu onClick={start} />
        </div>
    )
}

export default Game;