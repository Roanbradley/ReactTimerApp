
import {pauseTimer, startTimer, useCountDown} from "../Logic/TimerLogic";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";

export default function Timer(){

   const {secondsLeft, setSecondsLeft, setIsRunning, running} = useCountDown();

    return(
        <div>
            <p> Work {secondsLeft} seconds</p>

            <Stack>
            <button onClick={() => startTimer(setSecondsLeft, setIsRunning, 60)}>Start Timer</button>
            <button onClick={() => pauseTimer(setIsRunning, running)}> pause Timer </button>
            <button> Rounds </button>
            </Stack>

        </div>
    );
}