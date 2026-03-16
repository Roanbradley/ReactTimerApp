import { useState, useRef, useEffect } from "react";

export function useCountDown(){
    
const [secondsLeft, setSecondsLeft] = useState(60);
const [running, setIsRunning] = useState(false);

useEffect(() => {

    if(!running == true || secondsLeft <= 0) return;

    const timeout = setTimeout(() =>{
    setSecondsLeft(secondsLeft - 1)
    },1000)
    
    return ()=> clearTimeout(timeout);
    },[secondsLeft, running]);

    return {secondsLeft, setIsRunning, running, setSecondsLeft};

}


export function startTimer(setSecondsLeft, setIsRunning, seconds ){
setSecondsLeft(seconds);
setIsRunning(true);
}

export function pauseTimer(setIsRunning){
setIsRunning(false);
}









