import React from "react";
import "./Nav.css";

import logoMobile from "../../Assets/images/logo-white.svg";
import logoDesktop from "../../Assets/images/logo-pink.svg";
import { Link } from "react-router-dom";

const Nav = ({exibeNavbar, setExibeNavbar}) => {

    console.log(`Exibe o menu? ${exibeNavbar}`);
    
    return (
        <nav className={`navbar ${exibeNavbar ? "exibeNavbar" : ""}`}>
            <span className="navbar__close" onClick={() => {setExibeNavbar(false)}}>x</span>

            <Link to="/" className="eventlogo">
                <img
                    className="eventlogo__logo-image"
                    src={window.innerWidth >= 992 ? logoDesktop : logoMobile}
                    alt="Event Plus logo"
                />
            </Link>

            <div className="navbar__items-box">
                <Link to="/" className="navbar__item">Home</Link>
                <Link className="navbar__item" to="/TipoEventos">Tipos de eventos</Link>
                <Link className="navbar__item" to="/Eventos">Eventos</Link>
                <Link className="navbar__item" to="/Teste">Testes</Link>
            </div>

        </nav>
    );
};

export default Nav;
