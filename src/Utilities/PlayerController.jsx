
import { hasCollision, isWithinBoard} from "../Utilities/Board";
import { rotate } from "./Tetrominoes";
import { Action } from "./Input";

//Attempt Rotation Function
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


// Moving the player on the board
export const movePlayer = ({ delta, position, shape, board}) =>{
    //Here below i represent where the player want to go
    const desiredNextPosition = {
        row: position.row + delta.row,
        column: position.column + delta.column
    };

    //checking if has collision
    const collided = hasCollision({
        board,
        position: desiredNextPosition,
        shape
    });

    //Checking if we still on the board
    const isOnBoard = isWithinBoard({
        board,
        position: desiredNextPosition,
        shape
    });

    // Doesn't allow player to move if not on board or collided
    const preventMove = !isOnBoard || (isOnBoard && collided);

    //If player didn't collided or outside board, i allow to move onto the desiredNextPosition
    const nextPosition = preventMove ? position : desiredNextPosition;

    //If delta.row is more than 0 ur tryng to move down
    const isMovingDown = delta.row >0;
    //If moving down and you collided or not on board, it count as a Hit so the tetromino will stamp on the board
    const isHit = isMovingDown && (collided || !isOnBoard)

    //Returning position and if you run into something or not
    return { collided: isHit, nextPosition};

};



//Attempt Movement Function
const attemptMovement = ({board, action, player, setPlayer, setGameOver}) => {
    //Check how much you'r trying to move
    const delta = { row: 0, column: 0};

    let isFastDropping = false;

    //Based of each action, we do different things
    if( action === Action.FastDrop){
        isFastDropping = true;
    }else if ( action === Action.SlowDrop){
        delta.row +=1;
    }else if (action === Action.Left){
        delta.column -=1;
    }else if( action === Action.Right){
        delta.column +=1;
    }

    //Trying to move the player and based on that check if collided or what's the nextPosition
    const {collided, nextPosition} = movePlayer({
        delta,
        position: player.position,
        shape: player.tetromino.shape,
        board
    });

    //Checking collision on first row, mean it's Game Over
    const isGameOver = collided && player.position.row === 0;
    if(isGameOver){
        setGameOver(isGameOver);
    }
    //otherwise we set the player with the new values.
    setPlayer({
        ...player,
        collided,
        isFastDropping,
        position: nextPosition
    });
}


//Player controller
export const playerController = ({action, board, player, setPlayer, setGameOver}) => {
    //If no action correspond, return
    if(!action) return;
    // If action rotate, try an attempt of rotation
    if(action === Action.Rotate) {
        attemptRotation({ board, player, setPlayer});
    }else {
        attemptMovement({ board, player, setPlayer, action, setGameOver});
    }
}