import { useState, useRef, useEffect } from "react";

export function useCountDown(){

//work timer placeholders
const [secondsLeft, setSecondsLeft] = useState(60);
const [running, setIsRunning] = useState(false);
const [mode, setMode] = useState("work");

const [durations, setDurations] = useState({
    Work : 60,
    Break : 30
})

useEffect(() => {

    //check to see if timer is puased
    if(!running == true) return console.log("timer is puased");

    //check to see if timer is finished
    if(secondsLeft <= 0) return console.log("timer us finished");
 
  
    //do this when timer is not finished
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

export function resumeTimer(setIsRunning)
{
    setIsRunning(true);
}









