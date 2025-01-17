import React,{useState,useEffect } from "react";
import Sets from "./Sets";

import { v4 as uuidv4 } from 'uuid';


function ExerciseComponent({ Exercise, index, onDelete, onMoveUp, onMoveDown }) {
    const[serie,setSerie] = useState([])
    const[CountdownTimer,setCountdownTimer] = useState("")

    function addSet(){
        setSerie((s) => [...s, uuidv4()]);
    }
    
    
    function removeSet(idkey) {
        console.log("usun" + idkey);
        setSerie((serie) => serie.filter((set) => set !== idkey));
    }
    function setNewCountdownTimer(index){
      setCountdownTimer(index)
      console.log("nowy")
      console.log(index)
    }

    useEffect(() => {addSet();}, []);
  return (
    <li className="Exercise">
       
    <div className="inline">
        <button className="delete-button" onClick={() => onDelete(index)}>        Delete exercise      </button>
        <button className="move-button" onClick={() => onMoveUp(index)}>        Move up      </button>
        <button className="move-button" onClick={() => onMoveDown(index)}>         Move down   </button>
      <br /></div>
            <h2>{Exercise}</h2>
      
        <ol>{
           serie.map((id) => (
            <Sets key={id}
            removeSet={removeSet}
            index={id} 
            activeCDT = {CountdownTimer}
            setCDT = {setNewCountdownTimer}
            />))}</ol>
      <br />
      
      <button className="addSet" onClick={() => addSet()}>ADD SET</button>
      
      

    </li>
  );
}

export default ExerciseComponent;
