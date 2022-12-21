//Providing the className that referes to BoardCell.css
const className = "tetromino";

//Here below i build all the tetrominoes that i have
export const TETROMINOES = {
    I:{
        shape: [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ],
        className: `${className} ${className}__i`
    },
    J:{
        shape: [
            [0, 1, 0,],
            [0, 1, 0,],
            [1, 1, 0,]
        ],
        className: `${className} ${className}__j`
    },
    L:{
        shape: [
            [0, 1, 0,],
            [0, 1, 0,],
            [0, 1, 1,]
        ],
        className: `${className} ${className}__l`
    },
    O:{
        shape: [
            [1, 1,],
            [1, 1,],
        ],
        className: `${className} ${className}__o`
    },
    S:{
        shape: [
            [0, 1, 1],
            [1, 1, 0],
            [0, 0, 0],
        ],
        className: `${className} ${className}__s`
    },
    T:{
        shape: [
            [1, 1, 1],
            [0, 1, 0],
            [0, 0, 0],
        ],
        className: `${className} ${className}__t`
    },
    Z:{
        shape: [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0],
        ],
        className: `${className} ${className}__z`
    },
    
}

//Take the keys from all the TETROMINOES and generate a random number up to last index to be able to get a random tetrominoes from the aboves
export const randomTetromino = () => {
    const keys = Object.keys(TETROMINOES);
    const index = Math.floor(Math.random() * keys.length);
    const key = keys[index];
    return TETROMINOES[key]
}


//Pass an object to transferToBoard
export const  transferToBoard = ({className,isOccupied,position,rows,shape}) => {
    //Foreach tetromino shape row and cell if it's occupied we set the row position and the column position to place the tetromino 
    shape.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell) {
                const occupied = isOccupied;
                const _y = y + position.row;
                const _x = x + position.column;
                //Here i can set the position of the tetromino on the board. 
                rows[_y][_x] = {occupied, className};
            }
        });
    });
    return rows;
}

