import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PomodoroClockIndex = () => {
    const [minutes, setMinutes] = useState(25);
    const [percentage1, setPercentage1] = useState(5);
    const [percentage2, setPercentage2] = useState(25);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        switch (event.target.name) {
            case 'minutes':
                if (event.target.value <= 60 && event.target.value >= 1) {
                    setMinutes(event.target.value);
                }
                break;
            case 'percentage1':
                if (event.target.value <= 10 && event.target.value >= 5) {
                    setPercentage1(event.target.value);
                }
                break;
            case 'percentage2':
                if (event.target.value <= 50 && event.target.value >= 25) {
                    setPercentage2(event.target.value);
                }
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/pomodoro-timer', { state: { minutes: minutes, percentage1: percentage1, percentage2: percentage2 } });
    };

    return (
        <div>
            <h3>¿Qué es el Pomodoro Clock?</h3>
            <p>Pomodoro Clock se trata de un temporizador modificable utilizado para hacer Pomodoro. El Pomodoro es una técnica de trabajo que se basa en hacer trabajo durante un cierto tiempo. Tras esa sesión, se realiza un descanso menor. Tras 4 sesiones de trabajo, se realiza un descanso largo</p>
            <h3>¿Como puedes usar este reloj?</h3>
            <p>Elige una cantidad de min por sesión de trabajo. Tras esa elección, se calculara un porcentaje de esos minutos pequeño para el descanso pequeño y el descanso grande</p>
            <form onSubmit={handleSubmit}>
                <input type="number" name="minutes" value={minutes} onChange={handleInputChange} placeholder="Minutos" />
                <input type="number" name="percentage1" value={percentage1} onChange={handleInputChange} placeholder="Porcentaje 1" />
                <input type="number" name="percentage2" value={percentage2} onChange={handleInputChange} placeholder="Porcentaje 2" />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default PomodoroClockIndex;