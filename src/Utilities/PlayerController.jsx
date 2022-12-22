
import { hasCollision, isWithinBoard} from "../Utilities/Board";
import { rotate } from "./Tetrominoes";
import { Action } from "./Input";

//Function attemptRotation
const attemptRotation = ({ board, player, setPlayer}) => {
    //Here if we can rotate we create a shape of the actual tetromino shape and we rotate it
    const shape = rotate({
        piece: player.tetromino.shape,
        direction:1
    });

    const position = player.position;

    //Here we check if rotation is valid, avoiding collision or going outside the board
    const isValidRotation = 
    isWithinBoard({ board, position, shape}) &&
    !hasCollision({ board, position, shape});

    //If is valid rotation, we set the player to all the values that was prev. on the player and we update the tetromino with the new shape (rotated shape define above)
    if( isValidRotation){
        setPlayer({
            ...player,
            tetromino: {
                ...player.tetromino,
                shape
            }
        });
    } else{
        return false;
    }
};


//Player controller
export const playerController = ({action, board, player, setPlayer, setGameOver}) => {
    //If no action correspond, return
    if(!action) return;
    // If action rotate, try an attempt of rotation
    if(action === Action.Rotate) {
        attemptRotation({ board, player, setPlayer});
    }
}