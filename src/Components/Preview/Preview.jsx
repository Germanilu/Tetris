import "./Preview.css";
import React from "react";

import buildBoard from "../../Utilities/Board";
import {transferToBoard} from "../../Utilities/Tetrominoes";

import BoardCell from "../BoardCell/BoardCell";

//For each tetromino and index that render from Previews each of them should hace a shape and classname
const Preview = ({ tetromino, index}) => {
    const { shape, className} = tetromino;
    //Here i build the board with 4rows and 4 columns
    const board = buildBoard({ rows: 4, columns: 4});
    //Position the preview inside the box depending on the tetromino i have
    const style = { top: `${index * 15}vw`};

    //For the previouse board i transfer the tetromino that i'm using to the board
    board.rows = transferToBoard({
        className,
        isOccupied: false,
        position: {row: 0, column: 0},
        rows: board.rows,
        shape
    });

    //Render the preview 
    return(
        //Container for the tetromino
        <div className="Preview" style={style}>
            {/* Container for the board */}
            <div className="Preview-board">
                {/* Board getting render */}
                {board.rows.map((row, y) =>
                row.map((cell, x) => (
                    <BoardCell key={x * board.size.columns + x} cell={cell} />
                ))
                )}
            </div>
        </div>
    )
}

export default React.memo(Preview)