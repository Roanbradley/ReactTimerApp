import defaultTime from "../Logic/TimerLogic";


export default function Timer(){
    return(
        <div>
            <h1>Timer page</h1>
            <p>{defaultTime}</p>
            <button  onclick="OnTimerStarted">Start Timer</button>
        </div>
    );
}