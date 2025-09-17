import React from 'react';
import '../styles/App.css';

function TimerDisplay({ time }) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);

  const paddedHours = String(hours).padStart(2, '0');
  const paddedMinutes = String(minutes).padStart(2, '0');

  const setTime = (hours, minutes) => {
  const totalSeconds = hours * 3600 + minutes * 60;
  setTimeLeft(totalSeconds);
};

  return (
    <div className="time">
      {paddedHours}:{paddedMinutes}
    </div>
  );
}

export default TimerDisplay;
