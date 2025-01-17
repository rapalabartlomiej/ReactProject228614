import React, { useState, useEffect, useRef } from "react";

function CountdownTimer({removeTimer}) {
  const [time, setTime] = useState(120); 
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  
  const start = () => {
    if (!isRunning && time > 0) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            removeTimer()
            return 0; 
          }
          return prevTime - 1; 
        });
      }, 1000);
    }
  };

  const add15Seconds = () => {
    setIsRunning(true)
    setTime((prevTime) => prevTime + 15);
  };


  const subtract15Seconds = () => {
    setIsRunning(true)
    setTime((prevTime) => (prevTime > 15 ? prevTime - 15 : 0));
  };


  useEffect(() => {
    start();
    return () => clearInterval(intervalRef.current);   }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;  };

  return (
    <><br />
    <div className="clocksection">
      <button className="adjustClock" onClick={add15Seconds}>+15s</button>
      <div className="clock">
      {formatTime(time)}
      </div>       
        
        <button className="adjustClock" onClick={subtract15Seconds}>-15s</button>
        </div>
    </>
  );
}

export default CountdownTimer;
