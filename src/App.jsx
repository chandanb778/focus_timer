import './styles/App.css';
import TimerDisplay from './components/TimerDisplay';
import ControlPanel from './components/ControlPanel';
import { useTimer } from './hooks/useTimer';


function App() {
  // ✅ This function runs when session completes
  const handleSessionComplete = () => {
    alert("🎉 Session Complete! Time for a water break 💧");
  };

  const { timeLeft, isRunning, start, pause, reset } = useTimer(45 * 60, handleSessionComplete);

  return (
    <div className="app">
      <TimerDisplay time={timeLeft} />
      <ControlPanel
        isRunning={isRunning}
        onStart={start}
        onPause={pause}
        onReset={reset}
      />
    </div>
  );
}

export default App;
