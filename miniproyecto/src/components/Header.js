import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    let locationName;
    switch (location.pathname) {
        case '/':
            locationName = 'Home';
            break;
        case '/reloj-pomodoro':
            locationName = 'Pomodoro Clock';
            break;
        case '/reloj-mundial':
            locationName = 'World Clock';
            break;
        case '/temporizador':
            locationName = 'Timer';
            break;
        case '/pomodoro-timer':
            locationName = 'Pomodoro Timer';
            break;
        default:
            locationName = '';
    }
    return (
        <header>
            <h1>{locationName}</h1>
            <nav>
                <ul>
                    <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/reloj-pomodoro" activeClassName="active">Reloj Pomodoro</NavLink></li>
                    <li><NavLink to="/reloj-mundial" activeClassName="active">Reloj Mundial</NavLink></li>
                    <li><NavLink to="/temporizador" activeClassName="active">Temporizador</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;