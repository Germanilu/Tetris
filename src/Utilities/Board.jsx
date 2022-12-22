import {defaultCell} from "./Cell"
import { transferToBoard} from "./Tetrominoes"
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

// This function take all the props and acces the tetromino and the position of the player
export const nextBoard = ({board, player, resetPlayer, addLinesCleared}) => {
    const { tetromino, position} = player;

    //Going trough each row and cell and for each of them we check if is occupied or not and if is occupied we keep the value of the cell if not we clear the cell behind it 
    let rows = board.rows.map ((row) => 
    row.map((cell) => (cell.occupied? cell: {...defaultCell}))
    );

    //Update the rows and assign the classname, is is occupied the starting position, the rows and the shape.
    rows = transferToBoard({
        className: tetromino.className,
        isOccupied: player.collided,
        position,
        rows,
        shape: tetromino.shape
    });

    //Return next board
    return {
        rows,
        size: { ...board.size}
    };
}
