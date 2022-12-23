import "./GameController.css"
import {Action, actionForKey} from "../../Utilities/Input"
import { playerController } from "../../Utilities/PlayerController";

//Hook to use timeout on react 
import { useInterval} from "../../Hooks/useInterval";

const GameController = ({board, gameStats, player, setGameOver, setPlayer}) => {


    //Here everyTime we press a key we check in Input.jsx what was pressed and manage the game
    const onKeyUp = ({ code }) => {
        const action = actionForKey(code)
        if(action === Action.Quit){
            setGameOver(true)
        }
    }

    const onKeyDown = ({ code }) => {
        const action = actionForKey(code)
        handleInput({ action });
    };

    //This function take an action and we pass the action to playerController that he needs to know the board / player/ setPlayer and setgameover
    const handleInput = ({ action}) => {
        playerController({
            action,
            board,
            player,
            setPlayer,
            setGameOver
        })
    }




    return(
        //Input that is Hide on the bottom of the game with autofocus, to control the game with Keys
        <input className="GameController" type="text" onKeyDown={onKeyDown} onKeyUp={onKeyUp} autoFocus  />
    );
}

export default GameController;