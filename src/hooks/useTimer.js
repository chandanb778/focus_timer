import { useState, useEffect, useRef } from 'react';

export function useTimer(initialTime = 45 * 60, onComplete = () => {}) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (isRunning) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 60) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          onComplete(); // ✅ CALL REMINDER FUNCTION
          return 0 ;
        }
        return prev - 60;
      });
    }, 60000);
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setTimeLeft(initialTime);
    setIsRunning(false);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return { timeLeft, isRunning, start, pause, reset };
}