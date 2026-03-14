import { useState, useRef, useEffect } from "react";



export default function useCountDown(){
    
const [SecondsLeft, setSecondsLeft] = useState(0);


useEffect(() => {

    if(SecondsLeft <= 0) return;

    const timeout = setTimeout(() =>{
    setSecondsLeft(SecondsLeft - 1)
    },1000)
    
    return ()=> clearTimeout(timeout);
    },[SecondsLeft]);


    function start(seconds)
    {
        setSecondsLeft(seconds);
    }

    return {SecondsLeft, start};
}





