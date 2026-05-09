
import {pauseTimer, startTimer, useCountDown, formatTime, resetTimer} from "../Logic/TimerLogic";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import playbutton from '../assets/play_button1.jpg'

export default function Timer(){

   const {secondsLeft, setSecondsLeft, setIsRunning, setMode, running, mode, setRounds, round} = useCountDown();

    return(
        <div>
            <p>{mode}</p>
            <p className = "seconds">{formatTime(secondsLeft)}</p>

            <Stack>
            { /* <button onClick={() => startTimer(setSecondsLeft, setIsRunning, secondsLeft)}>Start Timer</button>*/ }
            <button> <img className="playbutton"  src={'src/assets/play.png'} onClick={() => pauseTimer(setIsRunning, running)}/></button>
            <button onClick={() => resetTimer(setSecondsLeft, 10, setRounds, 3, setMode, "nuetral")}> reset Timer </button>
            <button> Rounds </button>
            </Stack>

    
           {/* <img className="playbutton" src={'src/assets/play.png'} />*/}

        </div>
    );
}