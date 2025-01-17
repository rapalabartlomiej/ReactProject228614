import React,{useState} from "react";
import CountdownTimer from "./clock";

function Sets({removeSet,index,activeCDT,setCDT}){
    const [Weight, setWeight] = useState("");
    const [Reps, setReps] = useState("");
    const [listyle,Setlistyle] = useState("setli");
    const [timer,setTimer] = useState(false);

    const [isReadOnly, setIsReadOnly] = useState(false);

    function handleweightChange(event){
        setWeight(event.target.value);
               
    }
    function handlerepsChange(event){
        setReps(event.target.value)
        
    }
    function finishedSet(){
        Setlistyle("finishedSetLi")
        setIsReadOnly(true);
        setTimer(true)
        setCDT(index)
    }
    function removeTimer(){
        setTimer(false)
    }

    return(<li className={listyle}>
       
    <div className="inline">
        <button className="removeSet" onClick={() => removeSet(index)}>✖</button>

        <input type="number" onChange={handleweightChange} size={1} placeholder="Weight" readOnly={isReadOnly}></input>X
        <input type="number" onChange={handlerepsChange}size={3} placeholder="Reps" readOnly={isReadOnly}></input>
            
        
    
        <button className="finishedSet" onClick={() => finishedSet()}>✔</button>
    </div>
   
    {timer &&index==activeCDT &&<CountdownTimer removeTimer={removeTimer}/>} 
    
    
    
    </li>)
}


export default Sets;