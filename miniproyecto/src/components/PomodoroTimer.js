import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PomodoroTimer = () => {
    const location = useLocation();
    const minutes = location.state?.minutes || 60;

    const percentage1 = location.state?.percentage1;

    const percentage2 = location.state?.percentage2;


    const shortBreak = minutes * percentage1 / 100;
    const longBreak = minutes * percentage2 / 100;

    const [timeLeft, setTimeLeft] = useState(minutes * 60);
    const [status, setStatus] = useState('Working');
    const [workCount, setWorkCount] = useState(0);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        } else {
            if (status === 'Working') {
                setWorkCount(workCount + 1);
                if (workCount < 4) {
                    setTimeLeft(shortBreak * 60);
                    setStatus('Short Break');
                } else {
                    setTimeLeft(longBreak * 60);
                    setStatus('Long Break');
                    setWorkCount(0);
                }
            } else if (status === 'Short Break') {
                setTimeLeft(minutes * 60);
                setStatus('Working');
            } else if (status === 'Long Break') {
                setTimeLeft(minutes * 60);
                setStatus('Working');
            }
        }
    }, [timeLeft, minutes, shortBreak, longBreak, status, workCount]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div>
            <h1>Pomodoro Timer</h1>
            <p>Status: {status}</p>
            <p>Time left: {formatTime(timeLeft)}</p>
        </div>
    );
};

export default PomodoroTimer;