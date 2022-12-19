import { useState } from "react";
import buildBoard from "../Utilities/Board";

const useBoard = ({rows,columns}) => {
    //We call the function buildBoard on the hook
    const [board] = useState(buildBoard({rows,columns}));
    
    return [board]
}

export default useBoard;