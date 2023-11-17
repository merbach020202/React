import React, { useEffect, useState } from "react";
import "./TipoEventosPage.css";

import Title from "../../Components/Titulo/Title";
import MainContent from "../../Components/MainContent/MainContent";
import ImageIllustrator from "../../Components/ImageIllustrator/ImageIllustrator";
import { Input, Button } from "../../Components/FormComponents/FormComponents";
import Container from "../../Components/Container/Container";
import tipoEventoImage from "../../Assets/images/tipo-evento.svg";
import api, { eventsTypeResource } from "../../Services/Service";
import TableTp from "./TableTP/TableTp";
import Notification from "../../Components/Notification/Notification";

const TipoEventosPage = () => {
    //States
    const [frmEdit, setFrmEdit] = useState(false); //Está em modo de edição?
    const [titulo, setTitulo] = useState("");
    const [tipoEventos, setTipoEventos] = useState([]);
    const [notifyUser, setNotifyUser,] = useState()

    //O useEffect só é usado quando a página já está
    useEffect(() => {
        async function loadEventsType() {
            try {
                const retorno = await api.get(eventsTypeResource);
                setTipoEventos(retorno.data);
                console.log(retorno.data);
            } catch (error) {
                console.log("Erro na Api");
                console.log(error);
            }
        }
        loadEventsType();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        if (titulo.trim().length < 3) {
            alert("o titulo deve ter pelo menos 3 caracteres");
        }

        try {
            const retorno = await api.post(eventsTypeResource, {titulo: titulo,});

            setTitulo("");

            alert("Cadastrado com sucesso");
            console.log(retorno);
        } catch (error) {
            alert("Deu ruim no submit");
        }
    }

    //////////// mostra o formulário de edição
    async function showUpdateForm(idElement) {
        setFrmEdit(true)

        try {
            const retorno = await api.get(`${eventsTypeResource}/${idElement}` )
            setTitulo(retorno.data.titulo)
            console.log(retorno.data);
        } catch (error) {
            
        }
    }

    ////////////cancela a tela/ação de edição (volta parao form de cadastro)
    function editActionAbort() {
        setFrmEdit(false)
        setTitulo("")
    }

    //////////Atualizar 
    async function handleUpdate(e) {
        e.preventDefault()
    }

    //////////////////////// APAGAR DADOS ////////////////////////
    //apaga o tipo de evento da api
    async function handleDelete(idElement) {
        //confirm é um alert que retorna true ou false
        if (window.confirm("Confirma a exclusão?")) {
            try {
                const promise = await api.delete(`${eventsTypeResource}/${idElement}`);

                if (promise.status == 204) {
                    setNotifyUser({
                        titleNote: "Sucesso",
                        textNote: "cadastro apagado com sucesso",
                        imgIcon: "success",
                        imgAlt: "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
                        showMessage: true
                    })
                    //Atualiza a variável e roda o useState novamente (que dá um get na api)

                    const buscaEventos = await api.get(eventsTypeResource)

                    setTipoEventos(buscaEventos.data);
                }
            } catch (error) {
                alert(`Não deu certo`);
            }
        }
    }

    return (
        <>
        {<Notification {...notifyUser} setNotifyUser={setNotifyUser}/>}
            <MainContent>
                <section className="cadastro-evento-section">
                    <Container>
                        <div className="cadastro-evento__box">
                            <Title titleText={"Cadastro Tipo de Eventos"} />

                            <ImageIllustrator imageRender={tipoEventoImage} />

                            <form
                                className="ftipo-evento"
                                onSubmit={frmEdit ? handleUpdate : handleSubmit}
                            >
                                {/* {Cadastrar iu editar?} */}
                                {!frmEdit ? (
                                    //Cadastrar
                                    <>
                                        <Input
                                            id="Titulo"
                                            placeholder="Titulo"
                                            name={"Titulo"}
                                            type={"text"}
                                            required={"required"}
                                            value={titulo}
                                            manipulationFunction={(e) => {
                                                setTitulo(e.target.value);
                                            }}
                                        />

                                        <Button
                                            textButton="Cadastrar"
                                            id="cadstrar"
                                            name="cadastrar"
                                            type="submit"
                                        />
                                    </>
                                ) : (
                                    /////////////Editar
                                    <>
                                        <Input
                                            id="Titulo"
                                            placeholder="Titulo"
                                            name={"Titulo"}
                                            type={"text"}
                                            required={"required"}
                                            value={titulo}
                                            manipulationFunction={(e) => {
                                                setTitulo(e.target.value);
                                            }}
                                        />
                                        <div className="buttons-editbox">
                                        <Button
                                            textButton="Atualizar"
                                            id="cadstrar"
                                            name="cadastrar"
                                            type="submit"
                                            additionalClass="button-component--middle"
                                        />

                                        <Button
                                            textButton="Cancelar"
                                            id="cadstrar"
                                            name="cadastrar"
                                            type="button"
                                            manipulationFunction={editActionAbort}
                                            additionalClass="button-component--middle"
                                        />
                                        </div>
                                    </>
                                )}
                            </form>
                        </div>
                    </Container>
                </section>

                <section className="lista-eventos-section">
                    <Container>
                        <Title
                            titleText={"Lista Tipos de Eventos"}
                            color="white"
                        />

                        <TableTp
                            dados={tipoEventos}
                            fnUpdate={showUpdateForm}
                            fnDelete={handleDelete}
                        />
                    </Container>
                </section>
            </MainContent>
        </>
    );
};

export default TipoEventosPage;
