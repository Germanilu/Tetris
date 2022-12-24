import { useState, useCallback, useEffect} from "react"


const defaultDropTime = 1000;
const minimumDropTime = 100;
const speedIncrement = 50;


//Taking gameStats
export const useDropTime = ({ gameStats}) => {

    const [dropTime, setDropTime] = useState(defaultDropTime);
    const [previousDropTime, setPreviousDropTime] = useState();

    //Resume the dropTime 
    const resumeDropTime = useCallback(() => {
        if ( !previousDropTime){
            return;
        }
        setDropTime(previousDropTime);
        setPreviousDropTime(null);
    }, [previousDropTime]);



    //Hability to pause dropTime
    const pauseDropTime = useCallback(() => {
        if(dropTime){
            setPreviousDropTime(dropTime)
        }
        setDropTime(null);
    }, [dropTime, setPreviousDropTime]);


    //call this function and update the speed from every lvl after the first
    useEffect(() => {
        const speed = speedIncrement * (gameStats.level -1);
        const newDropTime = Math.max(defaultDropTime - speed, minimumDropTime)

        setDropTime(newDropTime);
    }, [gameStats.level, setDropTime])

    return [ dropTime, pauseDropTime, resumeDropTime];
}