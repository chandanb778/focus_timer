import React from 'react';
import '../styles/App.css';

function ControlPanel({ isRunning, onStart, onPause, onReset }) {
  return (
    <div className="controls">
      {!isRunning ? (
        <button onClick={onStart}>Start</button>
      ) : (
        <button onClick={onPause}>Pause</button>
      )}
      <button onClick={onReset} style={{ marginLeft: "10px" }}>Reset</button>
    </div>
  );
}

export default ControlPanel;
