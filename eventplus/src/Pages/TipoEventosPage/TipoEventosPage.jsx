import React, { useState } from "react";
import "./TipoEventosPage.css";

import Title from "../../Components/Titulo/Title";
import MainContent from "../../Components/MainContent/MainContent";
import Container from "../../Components/Container/Container";
import ImageIllustrator from "../../Components/ImageIllustrator/ImageIllustrator";

import tipoEventoImage from "../../Assets/images/tipo-evento.svg"
const TipoEventosPage = () => {
    const [frmEdit, setFrmEdit] = useState(false)//Está em modo de edição?

    function handleSubmit() {
        alert(`Bora cadastrar`)
    }

    function handleUpdate() {
        alert(`Bora editar`)
    }

    return (
        <>
            <MainContent>
                <section className="cadastro-evento-section">
                    <Container>
                        <div className="cadastro-evento__box">
                            <Title titleText={"Cadastro Tipo de Eventos"} />

                            <ImageIllustrator 
                                imageRender={tipoEventoImage}                                
                                />

                                <form 
                                    className="ftipo-evento"
                                    onSubmit={frmEdit ? handleUpdate : handleSubmit}
                                >
                                    {/* {Cadastrar iu editar?} */}
                                    {
                                        !frmEdit ? (<p>Tela de Cadastro</p>) : (<p>Tela de Edição</p>)
                                    }
                                </form>

                            <form className="ftipo-evento">
                                <p>Formulário será criado aqui</p>
                            </form>
                        </div>
                    </Container>
                </section>
            </MainContent>
        </>
    );
};

export default TipoEventosPage;
