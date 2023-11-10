import React from "react";
import "./ImageIllustrator.css";
import tipoEventoImage from '../../Assets/images/tipo-evento.svg'
import eventoImage from '../../Assets/images/default-image.jpeg'
import defaultImage from '../../Assets/images/default-image.jpeg'

const ImageIllustrator = ({ alteText, imageName, additionalClass }) => {
    let imageResource
    switch (imageName) {
        case 'tipo-evento':
            imageResource = tipoEventoImage
            break;
        case 'evento':
            imageResource = eventoImage
            break;
    
        default:
            imageResource = defaultImage
            break;
    }
    
    
    
    
    
    return (
        <figure className="illustrator-box">
            <img
                src={imageResource}
                alt={alteText}
                className={`illustrator-box__image ${additionalClass}`}
            />
        </figure>
    );
};

export default ImageIllustrator;
