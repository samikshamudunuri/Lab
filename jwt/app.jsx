import React, { useState, useRef } from 'react';
import './styles.css'; // Import the CSS file for minimal styling

const Timer = () => {
  const [time, setTime] = useState(0); // State to track time
  const [isRunning, setIsRunning] = useState(false); // State to track if the timer is running
  const intervalRef = useRef(null); // useRef to store the interval ID

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Increment time every second
      }, 1000);
    }
  };

  const handlePause = () => {
    if (isRunning) {
      clearInterval(intervalRef.current); // Clear the interval
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    clearInterval(intervalRef.current); // Clear the interval
    setIsRunning(false);
    setTime(0); // Reset the time to 0
  };

  return (
    <div className="timer-container">
      <h1 className="timer-header">React Timer</h1>
      <div className="timer-display">{time} seconds</div>
      <div className="timer-buttons">
        <button onClick={handleStart} disabled={isRunning} className="timer-button">
          Start
        </button>
        <button onClick={handlePause} disabled={!isRunning} className="timer-button">
          Pause
        </button>
        <button onClick={handleReset} className="timer-button">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
APP.JSX
