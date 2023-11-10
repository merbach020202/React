import React from "react";
import "./TipoEventosPage.css"
import Title from '../../Components/Titulo/Title';
import MainContent from "../../Components/MainContent/MainContent";
import Container from "../../Components/Container/Container";


const TipoEventosPage = () => {
    return (
        <>
            <MainContent>
                <section className="cadastro-evento-section">
                    <div className="cadastro-evento-box">
                        <Title titleText={"Cadastro Tipo de Eventos"}/>
                        
                        <ImageIlustrator />
                        
                        <form className="ftipo-evento">
                            <p>Formulário será criado aqui</p>
                        </form>
                    </div>
                </section>
            </MainContent>
        </>
    );
};

export default TipoEventosPage;