import React, { useState, useEffect } from 'react';
import './App.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div className="timer-container">
      <div className="timer-box">
        <h1>Timer: {seconds} seconds</h1>
        <div className="button-container">
          <button onClick={handleStart} disabled={isActive}>Start</button>
          <button onClick={handlePause} disabled={!isActive}>Pause</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;