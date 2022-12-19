import Menu from "../Menu/Menu"

const Game = ({rows,columns}) => {

    const start = () => { console.log("Start")}
 
    return (
        <div className="Game">
            <Menu onClick={start} />
        </div>
    )
}

export default Game;