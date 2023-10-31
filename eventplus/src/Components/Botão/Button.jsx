import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

const button = (props) => {
    return (
        <button 
            type={type} >
            {textButton}
        </button>
    );
};

export default button;