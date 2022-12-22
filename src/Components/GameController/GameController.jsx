import "./GameController.css"
import {Action, actionForKey} from "../../Utilities/Input"

const GameController = ({board, gameStats, player, setGameOver, setPlayer}) => {


    //Here everyTime we press a key we check in Input.jsx what was pressed and manage the game
    const onKeyUp = ({ code }) => {
        const action = actionForKey(code)
        if(action === Action.Quit){
            setGameOver(true)
        }
    }

    const onKeyDown = ({ code }) => {
        console.log(`onkeyDown ${code}`)
    }




    return(
        //Input that is Hide on the bottom of the game with autofocus, to control the game with Keys
        <input className="GameController" type="text" onKeyDown={onKeyDown} onKeyUp={onKeyUp} autoFocus  />
    );
}

export default GameController;