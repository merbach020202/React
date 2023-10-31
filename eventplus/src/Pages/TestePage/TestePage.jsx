import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
    //Variáveis do componente
const TestePage = () => {
    const {n1, setN1} = useState(0)
    const {n2, setN2} = useState(0)

    return (
        <div>
            <Header />

            <h1>Pagina de Poc`s</h1>
            <h2>Calculator</h2>

            <form action="">
                <input 
                    type='number'
                    placeholder="Primeiro número"
                    name='n1'
                    id='n1'
                    value={n1}
                    onChange={(e) =>(setN1(e.target.value))}
                />
            </form>

            <form action="">
                <input 
                    type='number'
                    placeholder="Segundo número"
                    name='n2'
                    id='n2'
                    value={n2}
                    onChange={(e) =>(setN2(e.target.value))}
                />

                <button textButton="Calcular" type='submit'></button>
            </form>
        </div>
    );
};

export default TestePage;
