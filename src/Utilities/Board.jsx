import {defaultCell} from "./Cell"
import {movePlayer} from "../Utilities/PlayerController"
import {transferToBoard} from "./Tetrominoes"
//We take the rows and columns, we create an Array for the rows and for each row we make an array for the columns
// and then for each column on the board we set up a defaultCell that represent the default cell on the board
export const  buildBoard = ({rows, columns}) => {
    const builtRows = Array.from({length:rows}, () => 
        Array.from({length: columns}, () => ({ ...defaultCell}))
    );

    //Finally we return a board including rows that we build on the line above and a size that include rows and columns
    return {
        rows: builtRows,
        size: {rows, columns}
    };
}

//Finding the drop position of the tetromino 
const findDropPosition = ({board, position,shape}) => {
    //finding the max 
    let max = board.size.rows - position.row +1;
    let row = 0;

    //For loop that keep trying to place the piece and see if he get a collision or not
    for ( let i = 0; i<max; i++){

        const delta = { row: i, column: 0};
        const result = movePlayer({delta,position,shape,board});
        const { collided } = result;

        if(collided){
            break
        }

        row = position.row + i
    }

    return { ...position, row};
}


// This function take all the props and acces the tetromino and the position of the player
export const nextBoard = ({board, player, resetPlayer, addLinesCleared}) => {
    const { tetromino, position} = player;

    //Going trough each row and cell and for each of them we check if is occupied or not and if is occupied we keep the value of the cell if not we clear the cell behind it 
    let rows = board.rows.map ((row) => 
    row.map((cell) => (cell.occupied? cell: {...defaultCell}))
    );


    //Drop Position
    const dropPosition = findDropPosition({board, position, shape: tetromino.shape});

    //Adding player ghost on board
    const className = `${tetromino.className} ${player.isFastDropping ? "" : "ghost"}`;
    //Transferring the ghost to the board all time 
    rows = transferToBoard({className, isOccupied: player.isFastDropping, position:dropPosition, rows, shape: tetromino.shape})

    
    //Placing the piece if it collided, mark the board cell as collided

    if( !player.isFastDropping){
        rows = transferToBoard({className:tetromino.className, isOccupied:player.collided, position, rows, shape:tetromino.shape})
    }

    //Check for cleared Lines
    //For any given row, generate a new row using the default cell ( blank cell )
    const blankRow = rows[0].map((_) => ( { ...defaultCell}));
    //Keeping track of how many lines are cleared
    let linesCleared = 0;
    //Cleaning the line if all the cell are occupied 
    rows = rows.reduce((acc, row) => {
        if (row.every((column) => column.occupied)) {
            linesCleared++;
            acc.unshift([...blankRow]);
        } else{
            acc.push(row)
        }
        //Returning the accumulator
        return acc;
    }, []);

    if( linesCleared > 0) {
        addLinesCleared(linesCleared)
    }


    //If we collided, reset the player!
    if (player.collided || player.isFastDropping) {
        resetPlayer();
    }

    //Return next board
    return {
        rows,
        size: { ...board.size}
    };
}


//Checking if there is collision
export const hasCollision = ({board, position, shape}) => {
    //for a given row in the shape 
    for(let y = 0; y < shape.length; y++){
        const row = y + position.row;
        //And for a given column 
        for(let x = 0; x< shape[y].length; x++){
            //if is occupied we care about the column
            if(shape[y][x]){
                const column = x + position.column;
                //and if we have a row and column occupied we return true
                if(board.rows[row] && board.rows[row][column] && board.rows[row][column].occupied){
                    return true;
                }
            }
        }
    }
    return false;
};


//We take board, position and shape..
export const isWithinBoard = ({ board,position,shape}) => {
    //for that shape we go trough each row and trough each of the column 
    for( let y = 0; y < shape.length; y++){
        const row = y + position.row;

        for(let x = 0; x < shape[y].length; x++){
            //We check if for that given row and column there is a piece of the tetromino
            if(shape[y][x]){
                //Any place we have a tetromino we need to look is there is anything in there or not.
                const column = x + position.column;
                //isvalidposition check if we are not outside the board.
                const isValidPosition = board.rows[row] && board.rows[row][column];

                if(!isValidPosition) return false;
            }
        }
    }
    return true;
}

