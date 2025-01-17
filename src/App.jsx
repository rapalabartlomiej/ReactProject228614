import React, { useState } from "react";
import ExerciseComponent from "./Exercise";
import './App.css';


function App() {
  const [Exercise, setExercise] = useState([]);
  const [newExercise, setNewExercise] = useState("");

  function handleInputChange(event) {
    setNewExercise(event.target.value);
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      
      addExercise();
    }
  }

  function addExercise() {
    if (newExercise.trim() !== "") {
      setExercise((t) => [...t, newExercise]);
      setNewExercise("");
    }
  }

  function deleteExercise(index) {
    setExercise((Exercise) => Exercise.filter((_, i) => i !== index));
  }

  function moveExerciseUp(index) {
    if (index > 0) {
      const updatedExercise = [...Exercise];
      [updatedExercise[index], updatedExercise[index - 1]] = [
        updatedExercise[index - 1],
        updatedExercise[index],
      ];
      setExercise(updatedExercise);
    }
  }

  function moveExerciseDown(index) {
    if (index < Exercise.length - 1) {
      const updatedExercise = [...Exercise];
      [updatedExercise[index], updatedExercise[index + 1]] = [updatedExercise[index + 1],updatedExercise[index],];
      setExercise(updatedExercise);
    }
  }

  return (
    <div className="to-do-list">
      <h1>GYM APP</h1>
        
      <div>
        <input className="exerciseEntry" type="text" onKeyDown={handleKeyDown}   placeholder="Enter exercise name"          value={newExercise}          onChange={handleInputChange}        />
        <button className="add-button " onClick={addExercise}>          Add        </button>
      </div>

    
      {Exercise.length === 0 ? (
        <p>Enter exercise name</p>
      ) : (
        <ul>
          {Exercise.map((Exercise, index) => (
            <ExerciseComponent
              key={`${Exercise}-${index}`}
              Exercise={Exercise}
              index={index}
              onDelete={deleteExercise}
              onMoveUp={moveExerciseUp}
              onMoveDown={moveExerciseDown}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
