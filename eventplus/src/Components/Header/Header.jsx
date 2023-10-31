import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Header>
            <nav>
                <Link to="/">Home</Link>
                <br />
                <Link to="/TipoEventos">Tipo Eventos</Link>
                <br />
                <Link to="/Eventos">Eventos</Link>
                <br />
                <Link to="/Login">Login</Link>
                <br />
                <Link to="/Teste">Teste</Link>
            </nav>
        </Header>
    );
};

export default Header;