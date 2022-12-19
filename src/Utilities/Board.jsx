import defaultCell from "./Cell"

//We take the rows and columns, we create an Array for the rows and for each row we make an array for the columns
// and then for each column on the board we set up a defaultCell that represent the default cell on the board
const buildBoard = ({rows, columns}) => {
    const builtRows = Array.from({length:rows}, () => 
        Array.from({length: columns}, () => ({ ...defaultCell}))
    );

    //Finally we return a board including rows that we build on the line above and a size that include rows and columns
    return {
        rows: builtRows,
        size: {rows, columns}
    };
}

export default buildBoard;