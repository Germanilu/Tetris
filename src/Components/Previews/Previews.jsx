import React from "react";
import Preview from "../Preview/Preview"

const Previews = ({tetrominoes}) => {

    //Here we show the tetrominoes that the player isn't currently using
    const previewTetrominoes = tetrominoes
    .slice(1 - tetrominoes.length)
    .reverse();

    //We take the object build above and we map on the return to preview the tetromino with index value and key
    return (
        <>
            {previewTetrominoes.map((tetromino, index) => (
                <Preview tetromino={tetromino} index={index} key={index} />
            ))}
        </>
    );
};

export default React.memo(Previews);