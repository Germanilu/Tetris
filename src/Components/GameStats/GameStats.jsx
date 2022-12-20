import React from "react";

import "./GameStats.css"

//GameStats component that take gameStats prop
const GameStats = ({ gameStats }) => {
    //Destructuro gameStats with other attributes
    const { level, points, linesCompleted, linesPerLevel} = gameStats;
    //Lines until next level
    const linesToLevel = linesPerLevel - linesCompleted;

    return (
        <ul className="GameStats GameStats__right">
            <li>Level</li>
            <li className="value">{level}</li>
            <li>Lines to level</li>
            <li className="value">{linesToLevel}</li>
            <li>Points</li>
            <li className="value">{points}</li>
        </ul>
    )
}

//React.memo render the component only when the stats change and not every time
export default React.memo(GameStats)

