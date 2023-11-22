import React, { useEffect, useState } from "react";

import Title from "../../Components/Titulo/Title";
import MainContent from "../../Components/MainContent/MainContent";
import ImageIllustrator from "../../Components/ImageIllustrator/ImageIllustrator";
import { Input, Button } from "../../Components/FormComponents/FormComponents";
import Container from "../../Components/Container/Container";
import EventoImage from "../../Assets/images/evento.svg";
import api, { eventsTypeResource } from "../../Services/Service";
import Notification from "../../Components/Notification/Notification";
import Spinner from "../../Components/Spinner/Spinner";
import TableEv from "./TableEv/TableEv";
import { Select } from "../../Components/FormComponents/FormComponents";

const EventosPage = () => {
    //States
    const [frmEdit, setFrmEdit] = useState(false); //Está em modo de edição?
    const [nome, setNome] = useState("");
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("");
    const [tipoEvento, setTipoEvento] = useState([]);
    const [data, setData] = useState("");
    const [idEvento, setIdEvento] = useState(null); //para editar, por causa do evento!
    const [Eventos, setEventos] = useState([]); //array
    const [notifyUser, setNotifyUser] = useState(); //Componente Notification
    const [showSpinner, setShowSpinner] = useState(false); //Spinner Loading

    //O useEffect só é usado quando a página já está
    useEffect(() => {
        async function loadEventsType() {
            setShowSpinner(true);
            try {
                const retorno = await api.get(eventsTypeResource);
                setEventos(retorno.data);
                console.log(retorno.data);
            } catch (error) {
                console.log("Erro na Api");
                console.log(error);
            }

            setShowSpinner(false);
        }
        loadEventsType();
    }, []);

    //////////////////////// CADASTRA DADOS ////////////////////////
    async function handleSubmit(e) {
        e.preventDefault();

        setShowSpinner(true);
        if (nome.trim().length < 3) {
            setNotifyUser({
                titleNote: "Aviso",
                textNote: "O título deve ter pelo menos 3 caracteres",
                imgIcon: "warning",
                imgAlt: "Imagem de ilustração de aviso. Moça em frente a um símbolo de exclamação.",
                showMessage: true,
            });
        }

        try {
            const retorno = await api.post(eventsTypeResource, {
                titulo: titulo,
            });

            setNotifyUser({
                titleNote: "Sucesso",
                textNote: "cadastro apagado com sucesso",
                imgIcon: "success",
                imgAlt: "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
                showMessage: true,
            });

            setNome("");

            const buscaEventos = await api.get(eventsTypeResource);
            setEventos(buscaEventos.data);

            // console.log(retorno);
        } catch (error) {
            setNotifyUser({
                titleNote: "Erro",
                textNote: "Algo não funcionou",
                imgIcon: "danger",
                imgAlt: "Imagem de ilustração de erro.",
                showMessage: true,
            });
        }

        setShowSpinner(false);
    }

    //////////////////////// EDITAR CADASTRO ////////////////////////
    async function showUpdateForm(idElement) {
        setFrmEdit(true);
        setIdEvento(idElement);

        setShowSpinner(true);
        try {
            const retorno = await api.get(`${eventsTypeResource}/${idElement}`);
            setNome(retorno.data.nome);
            console.log(retorno.data);
        } catch (error) {
            alert("ShowUpdateForm");
        }
        setShowSpinner(false);
    }

    ////////////cancela a tela/ação de edição (volta parao form de cadastro)
    function editActionAbort() {
        setFrmEdit(false);
        setNome("");
        setIdEvento(null);
    }

    //////////////////////// Atualizar ////////////////////////
    async function handleUpdate(e) {
        e.preventDefault();

        setShowSpinner(true);
        try {
            const retorno = await api.put(eventsTypeResource + "/" + idEvento, {
                nome: nome,
            });
            //notificar o usuário
            if (retorno.status == 204) {
                setNome("");
                setIdEvento("");

                setNotifyUser({
                    titleNote: "Sucesso",
                    textNote: "Deu Certo!!!",
                    imgIcon: "success",
                    imgAlt: "Imagem de ilustração de aviso. Moça segurando um balão.",
                    showMessage: true,
                });

                //atualizar os dados na tela
                const retorno = await api.get(eventsTypeResource);
                setEventos(retorno.data);
            }
        } catch (error) {
            //notificar o erro ao usuário
            setNotifyUser({
                titleNote: "Erro",
                textNote: "Por favor tente novamente mais tarde",
                imgIcon: "danger",
                imgAlt: "Imagem de ilustração de erro.",
                showMessage: true,
            });
        }
        setShowSpinner(false);
    }

    //////////////////////// APAGAR DADOS ////////////////////////
    //apaga o tipo de evento da api
    async function handleDelete(idElement) {
        //confirm é um alert que retorna true ou false
        if (window.confirm("Confirma a exclusão?")) {
            setShowSpinner(true);
            try {
                const promise = await api.delete(
                    `${eventsTypeResource}/${idElement}`
                );

                if (promise.status == 204) {
                    setNotifyUser({
                        titleNote: "Deletado",
                        textNote: "cadastro apagado com sucesso",
                        imgIcon: "success",
                        imgAlt: "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
                        showMessage: true,
                    });
                    //Atualiza a variável e roda o useState novamente (que dá um get na api)

                    const buscaEventos = await api.get(eventsTypeResource);

                    setEventos(buscaEventos.data);
                }
            } catch (error) {
                alert(`Não deu certo`);
            }
            setShowSpinner(false);
        }
    }

    return (
        <>
            {<Notification {...notifyUser} setNotifyUser={setNotifyUser} />}
            {showSpinner ? <Spinner /> : null}

            <MainContent>
                <section className="cadastro-evento-section">
                    <Container>
                        <div className="cadastro-evento__box">
                            <Title titleText={"Eventos"} />

                            <ImageIllustrator imageRender={EventoImage} />

                            <form
                                className="ftipo-evento"
                                onSubmit={frmEdit ? handleUpdate : handleSubmit}
                            >
                                {/* {Cadastrar iu editar?} */}
                                {!frmEdit ? (
                                    //Cadastrar
                                    ///////////////// AQUI FICAM OS INPUTS /////////////////
                                    <>
                                        <Input
                                            id="Nome"
                                            placeholder="Nome"
                                            name={"NomeEvento"}
                                            type={"text"}
                                            required={"required"}
                                            value={nome}
                                            manipulationFunction={(e) => {
                                                setNome(e.target.value);
                                            }}
                                        />

                                        <Input
                                            id="Descrição"
                                            placeholder="Descrição"
                                            name={"Descricao"}
                                            type={"text"}
                                            required={"required"}
                                            value={descricao}
                                            manipulationFunction={(e) => {
                                                setDescricao(e.target.value);
                                            }}
                                        />

                                        {/* <Input
                                            id="Tipo Evento"
                                            placeholder="Tipo Evento"
                                            name={"IdTipoEvento"}
                                            type={"text"}
                                            required={"required"}
                                            value={tipoEvento}
                                            manipulationFunction={(e) => {
                                                setTipoEvento(e.target.value);
                                            }}
                                        /> */}

                                    <Select
                                        id="Tipo Evento"
                                        name="Tipo Evento"
                                        required
                                        options={[
                                            {
                                                value: "",
                                                text: "Tipo de Evento",
                                            },
                                            ...tipoEvento.map((evento) => ({
                                                value: evento.id,
                                                text: evento.titulo,
                                            })),
                                        ]}
                                        manipulationFunction={(e) =>
                                            setTipoEvento(e.target.value)
                                        }
                                    />

                                        <Input
                                            id="Data"
                                            placeholder="dd / mm / aaaa"
                                            name={"DataEvento"}
                                            type={"date"}
                                            required={"required"}
                                            value={data}
                                            manipulationFunction={(e) => {
                                                setData(e.target.value);
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
                                    /////////////AQUI EU ESTOU ALTERANDO A TABELA COM OS EVENTOS LISTADOS
                                    <>
                                        <Input
                                            id="Evento"
                                            placeholder="Evento"
                                            name={"NomeEvento"}
                                            type={"text"}
                                            required={"required"}
                                            value={nome}
                                            manipulationFunction={(e) => {
                                                setEventos(e.target.value);
                                            }}
                                        />

                                        <Input
                                            id="Descricao"
                                            placeholder="Descrição"
                                            name={"Descricao"}
                                            type={"text"}
                                            required={"required"}
                                            value={descricao}
                                            manipulationFunction={(e) => {
                                                setDescricao(e.target.value);
                                            }}
                                        />


                                        <Input
                                            id="TipoEvento"
                                            placeholder="Tipo Evento"
                                            name={"TipoEvento"}
                                            type={"text"}
                                            required={"required"}
                                            value={tipoEvento}
                                            manipulationFunction={(e) => {
                                                setTipoEvento(e.target.value);
                                            }}
                                        />

                                        <Input
                                            id="Data"
                                            placeholder="dd / mm / aaaa"
                                            name={"Titulo"}
                                            type={"DateTime"}
                                            required={"required"}
                                            value={data}
                                            manipulationFunction={(e) => {
                                                setData(e.target.value);
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
                                                manipulationFunction={
                                                    editActionAbort
                                                }
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
                        <Title titleText={"Lista de Eventos"} color="white" />

                        <TableEv
                            dados={Eventos}
                            fnUpdate={showUpdateForm}
                            fnDelete={handleDelete}
                        />
                    </Container>
                </section>
            </MainContent>
        </>
    );
};

export default EventosPage;
