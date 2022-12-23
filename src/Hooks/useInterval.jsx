// This hooks made by Dan Abramov allow to use setInterval in a way that doesn't interfire with React

import { useEffect, useRef} from "react";

export const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    //Remember the latest callback
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    //Setting up the interval
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if(delay !== null){
            const id = setInterval(tick, delay);
            return () => {
                clearInterval(id);
            };
        }
    }, [delay]);
};