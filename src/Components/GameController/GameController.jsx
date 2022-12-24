import "./GameController.css"
import {Action, actionForKey} from "../../Utilities/Input"
import { playerController } from "../../Utilities/PlayerController";

//Hook to use timeout on react 
import { useInterval} from "../../Hooks/useInterval";
import { useDropTime} from "../../Hooks/useDropTime";

const GameController = ({board, gameStats, player, setGameOver, setPlayer}) => {

    //This will allow to control the dropTime of the tetromino, passing gameStats to improve velocity each lvl.
    const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({gameStats});

    //Calling the hook and using the action slowDrop every second
    useInterval(() => {
        handleInput({ action: Action.SlowDrop});
    }, dropTime);

    //Here everyTime we press a key we check in Input.jsx what was pressed and manage the game
    const onKeyUp = ({ code }) => {
        const action = actionForKey(code)
    }

    const onKeyDown = ({ code }) => {
        const action = actionForKey(code)
        //This will pause and unPause depending on the situation 
        if( action === Action.Pause){
            if(dropTime){
                pauseDropTime();
            }else {
                resumeDropTime();
            }
            //This will Quit the game
        }else if(action === Action.Quit){
            setGameOver(true)
        } else{
            handleInput({ action });
        }
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