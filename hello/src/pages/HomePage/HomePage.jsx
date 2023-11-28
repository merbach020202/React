import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const HomePage = () => {

    const objetoTheme = useContext(ThemeContext)


    return (
        <div>
            <h1>Página Home</h1>
            <p>{objetoTheme.nome}</p>

            <p></p>
        </div>
    );
};

export default HomePage;