import React from "react";
import "./Nav.css";

import logoMobile from "../../Assets/Images/images/logo-white.svg";
import logoDesktop from "../../Assets/Images/images/logo-pink.svg";

const Nav = () => {
    return (
        <nav className="navbar">
            <span className="navbar__close">x</span>

            <a href="" className="eventlogo">
                <img className="eventlogo__logo-image" 
                src={window.innerWidth >= 992 ? logoDesktop : logoMobile} 
                alt="Event Plus logo" />
            </a>

            <div className="navbar__items-box">
                <a href="">Home</a>
                <a href="">Tipos de eventos</a>
                <a href="">Usuários</a>
            </div>
        </nav>
    );
};

export default Nav;
