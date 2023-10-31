import React, { useState } from "react";

const input = ({ type, placeholder, name, id }) => {
    // const {numero1, SetNumero1} = useState();//Dado do componente
    
    return (
        <>
            <input 
            type={type} 
            placeholder={placeholder} 
            name={name} 
            id={id} 
            value={value}
            onChange={onchange}
            />
            <span>{numero1}</span>
        </>
    );
};

export default input;
