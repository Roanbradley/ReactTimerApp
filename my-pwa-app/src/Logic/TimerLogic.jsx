import { useState, useRef, useEffect } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";

export function useCountDown(){

//work timer placeholders
const [secondsLeft, setSecondsLeft] = useState(70);
const [running, setIsRunning] = useState(false);
const [mode, setMode] = useState("nuetral");
const [round, setRounds] = useState(3);
const [durations, setDurations] = useState({
    Work : 5,
    Break : 5
})



useEffect(() => {

         //check to see if timer is puased
        if(!running) 
        {
            return console.log("timer is puased");
        }

        //check to see if timer is finished
        if(secondsLeft <= 0)
        {
        
        //when work is done do this
        if(mode === "work")
        {
         setRounds(prevRound => {
        const newRound = prevRound - 1;

        console.log(newRound);
        
        if(newRound <= 0 )
        {   
            setIsRunning(false)
            return 0;
        }
         return newRound;
        })

        setMode("break");
        setSecondsLeft(durations.Break);
        }

        //do this when break is finished
        else
        {
        setMode("work");
        setSecondsLeft(durations.Work);
        }
        return
    }

    //do this when timer is not finished 
    const timeout = setTimeout(() =>{
    setSecondsLeft(secondsLeft - 1)
    },1000)
    
    return ()=> clearTimeout(timeout);
    },[secondsLeft, running]);

    return {secondsLeft, setIsRunning, running, setSecondsLeft, round, mode};
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

export function formatTime(secondsLeft)
{
        
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = Math.floor(secondsLeft % 60);
    return <p>{minutes.toString().padStart(2, 0)} : {seconds.toString().padStart(2,0)} </p>
  
}











