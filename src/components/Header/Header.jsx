import logo from "../../assets/mando-retro-blanco.png";
import "./Header.css"
import { Link } from "react-router-dom";

import { Nav } from "../Nav/Nav"

export const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={logo} alt="Logo Joystick Retro" /><Link to={'/'}>RDR GAMES</Link>
            </div>
            <Nav />
        </header>
    );
};