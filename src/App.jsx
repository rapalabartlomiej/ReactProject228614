import React, { useState } from "react";
import ExerciseComponent from "./Exercise";
import './App.css';


function App() {
  const [exercise, setExercise] = useState([]);
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
      setExercise((e) => [...e, newExercise]);
      setNewExercise("");
    }
  }

  function deleteExercise(index) {
    setExercise((exercise) => exercise.filter((_, i) => i !== index));
  }

  function moveExerciseUp(index) {
    if (index > 0) {
      const updatedExercise = [...exercise];
      [updatedExercise[index], updatedExercise[index - 1]] = [
        updatedExercise[index - 1],
        updatedExercise[index],
      ];
      setExercise(updatedExercise);
    }
  }

  function moveExerciseDown(index) {
    if (index < exercise.length - 1) {
      const updatedExercise = [...exercise];
      [updatedExercise[index], updatedExercise[index + 1]] = [updatedExercise[index + 1],updatedExercise[index],];
      setExercise(updatedExercise);
    }
  }

  return (
    <div>
      <h1>GYM APP</h1>
        
      <div>
        <input className="exercise-entry" type="text" onKeyDown={handleKeyDown}   placeholder="Enter exercise name"          value={newExercise}          onChange={handleInputChange}        />
        <button className="add-button " onClick={addExercise}>          Add        </button>
      </div>

    
      {exercise.length === 0 ? (
        <p>Enter exercise name</p>
      ) : (
        <ul>
          {exercise.map((exercise, index) => (
            <ExerciseComponent
              key={`${exercise}-${index}`}
              Exercise={exercise}
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
