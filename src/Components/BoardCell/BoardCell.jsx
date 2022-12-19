import "./BoardCell.css";

//BoardCell take 1 cell and create a div with the class "BoardCell + the classname of that cell"
const BoardCell = ({ cell }) => (
    <div className={`BoardCell ${cell.className}`}>
        <div className="Sparkle"></div>
    </div>
)

export default BoardCell;