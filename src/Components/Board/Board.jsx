import "./Board.css"
import BoardCell from "../BoardCell/BoardCell"

const Board = ({board}) => {
    
    //Styles for the board, based on the board we get we setup the cssGrid dinamically
    const boardStyles = {
        gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`
    };

    //Loop trough every cell 
    return(
        //return a div with className Board and the style "boardStyles we declared above"
        <div className="Board" style={boardStyles}>
            {/* For each row on the board and for each cell i want a BoardCell  */}
            {board.rows.map((row,y) =>
            row.map((cell, x) => (
                // For each BoardCell i generate a key that is the number of the cell i'm in.
                <BoardCell key={x * board.size.columns + x} cell={cell} />
            ))
            )}
        </div>
    )


}

export default Board;