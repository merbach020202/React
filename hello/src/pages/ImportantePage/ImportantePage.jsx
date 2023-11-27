import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ImportantePage = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <>
            <h1>
                Página Importante
            </h1>

            <span>{theme}</span>
        </>
    );
};

export default ImportantePage;