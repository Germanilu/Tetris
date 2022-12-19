import "./Menu.css";

//Component Menu with Props onClick
const Menu = ({onClick}) => {
    return(
        <div className="Menu">
            {/* Onclick trigger prop onClick that goes into Game component and trigger funcion start*/}
            <button className="Button" onClick={onClick}>
                Play Tetris
            </button>
        </div>
    )
}

export default Menu;