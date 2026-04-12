
import {pauseTimer, startTimer, useCountDown} from "../Logic/TimerLogic";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";

export default function Timer(){

   const {secondsLeft, setSecondsLeft, setIsRunning, running, mode, setMode} = useCountDown();

    return(
        <div>
            <p>hello {mode}</p>
            <p className = "seconds">{secondsLeft}</p>

            <Stack>
            <button onClick={() => startTimer(setSecondsLeft, setIsRunning, 10)}>Start Timer</button>
            <button onClick={() => pauseTimer(setIsRunning, running)}> pause Timer </button>
            <button> Rounds </button>
            </Stack>

        </div>
    );
}