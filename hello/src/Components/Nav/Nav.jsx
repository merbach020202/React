import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../../context/ThemeContext'

const Nav = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme( theme === 'light' ? 'dark' : 'light')
    }

    return (
        <nav>
            <br />
                <Link to="/">Home</Link> | &nbsp;
                <Link to="/produtos">Produtos</Link> | &nbsp;
                <Link to="/importante">Dados importantes</Link> | &nbsp;
                <Link to="/meus-pedidos">Dados importantes</Link> | &nbsp;
                <Link to="/login">Login</Link> | &nbsp;
                <button onClick={toggleTheme}> {theme}</button>
        </nav>
    );
};

export default Nav;