
import Menu from "../Menu/Menu"

//Create Component with props
const Game = ({rows,columns}) => {
    
    //Function that start when click on button
    const start = () => { console.log("Start")}
 
    return (
        //Return Component Menu to trigger funcion start onclick
        <div className="Game">
            <Menu onClick={start} />
        </div>
    )
}

export default Game;