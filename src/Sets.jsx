import React,{useState} from "react";
import CountdownTimer from "./CountdownTimer";

function Sets({removeSet,index,activeCountdownTimer,setCountdownTimer}){
    const [weight, setWeight] = useState("");
    const [reps, setReps] = useState("");
    const [listyle,Setlistyle] = useState("set-li");
    const [timer,setTimer] = useState(false);

    const [isReadOnly, setIsReadOnly] = useState(false);

    function handleweightChange(event){
        setWeight(event.target.value);
               
    }
    function handlerepsChange(event){
        setReps(event.target.value)
        
    }
    function finishedSet(){
        Setlistyle("finished-set-li")
        setIsReadOnly(true);
        setTimer(true)
        setCountdownTimer(index)
    }
    function removeTimer(){
        setTimer(false)
    }

    return(<li className={listyle}>
       
    <div className="inline">
        <button className="remove-set" onClick={() => removeSet(index)}>✖</button>

        <input type="number" onChange={handleweightChange}  placeholder="Weight" readOnly={isReadOnly}></input>✖
        <input type="number" onChange={handlerepsChange} placeholder="Reps" readOnly={isReadOnly}></input>
            
        
    
        <button className="finished-set" onClick={() => finishedSet()} disabled={isReadOnly}>✔</button>
    </div>
   
    {timer &&index==activeCountdownTimer &&<CountdownTimer removeTimer={removeTimer}/>} 
    
    
    
    </li>)
}


export default Sets;