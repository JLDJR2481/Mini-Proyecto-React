import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import WorldClock from './components/WorldClock';
import Timer from './components/Timer';
import PomodoroClockIndex from './components/PomodoroClockIndex';
import PomodoroTimer from './components/PomodoroTimer';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reloj-pomodoro" element={<PomodoroClockIndex />} />
          <Route path="/reloj-mundial" element={<WorldClock />} />
          <Route path="/temporizador" element={<Timer />} />
          <Route path="/pomodoro-timer" element={<PomodoroTimer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
