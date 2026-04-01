import { useState, useRef, useEffect } from "react";

export function useCountDown(){

//work timer placeholders
const [secondsLeft, setSecondsLeft] = useState(10);
const [running, setIsRunning] = useState(false);
const [mode, setMode] = useState("work");
const [round, setRounds] = useState(3);
const [durations, setDurations] = useState({
    Work : 60,
    Break : 30
})

useEffect(() => {

    //check to see if timer is puased
        if(!running == true) 
        {
            return console.log("timer is puased");
        }

    //check to see if timer is finished
        if(secondsLeft <= 0)
        {
        setRounds(round -2 )
        return console.log("timer us finished round", {round});
        }
 
  
    //do this when timer is not finished
    const timeout = setTimeout(() =>{
    setSecondsLeft(secondsLeft - 1)
    },1000)
    
    return ()=> clearTimeout(timeout);
    },[secondsLeft, running]);

    return {secondsLeft, setIsRunning, running, setSecondsLeft, round};

}


export function startTimer(setSecondsLeft, setIsRunning, seconds ){
setSecondsLeft(seconds);
setIsRunning(true);
}

export function pauseTimer(setIsRunning, running)
{

//works puase and reume logic 
if(running)
{
 setIsRunning(false)
}
else
{
    setIsRunning(true)
}

}











