import React, {useState} from 'react';
export const Timer = () =>{
    const[minute, setMinutes] = useState(0)
    console.log(minute)
    const[seconds, setSeconds] = useState(0)
    console.log(seconds)
    const[mseconds, setMSeconds] = useState(0)
    console.log(mseconds)
    setTimeout(() =>{
        if(mseconds==59){
            setMSeconds(0)
            setSeconds(seconds+1)
        if(seconds==59){
            setSeconds(0)
            setMinutes(minute+1)
        }}
        else setMSeconds(mseconds + 1)
    }, 1000/60)

    return(<div style={{margin:'10%'}}>
    <h1>Timer</h1>
    <h2>{minute}:{seconds}:{mseconds}</h2>
    </div>)
}