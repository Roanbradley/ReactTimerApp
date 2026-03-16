import {pauseTimer, startTimer, useCountDown} from "../Logic/TimerLogic";
import { useState, useEffect } from "react";


export default function Timer(){

   const {secondsLeft, setSecondsLeft, setIsRunning } = useCountDown();

    return(
        <div>
            <h1>Timer page</h1>
            <p> work {secondsLeft} seconds</p>
            <button onClick={() => startTimer(setSecondsLeft, setIsRunning, 60)}>Start Timer</button>
            <button onClick={() => pauseTimer(setIsRunning)}> pause Timer </button>
        </div>
    );
}