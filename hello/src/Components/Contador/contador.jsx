import React, { useState } from 'react';

const Contador = () => {
    const {contador, setContador} = useState(0) //Aqui eu estou indicando que a const é um contador

    function handleIncrementar() { 
        setContador (contador + 1)
    }

    

    function handleDecrementar() { 

        setContador(contador === 0 ? 0 : contador - 1)
    }

    return (
        <div>
            <h1>Contador</h1>

            <p>{ contador }</p>

            <button onClick={handleIncrementar}>Decrementar</button>
            <button onClick={handleDecrementar}>Decrementar</button>
        </div>
    );
};

export default Contador;
