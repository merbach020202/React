import React, { useContext, useEffect, useState } from "react";
import MainContent from "../../Components/MainContent/MainContent";
import Title from "../../Components/Titulo/Title";
import Table from "./TableEvA/TableEvA"
import Container from "../../Components/Container/Container";
import { Select } from "../../Components/FormComponents/FormComponents";
import Spinner from "../../Components/Spinner/Spinner";
import Modal from "../../Components/Modal/Modal";
import api from "../../Services/Service";

import "./EventosAlunoPage.css";
import { UserContext } from "../../context/AuthContext";

const EventosAlunoPage = () => {
  // state do menu mobile
  const [exibeNavbar, setExibeNavbar] = useState(false);
  const [eventos, setEventos] = useState([
    {IdEvento:"1232", nomeEvento:"eventoLegal", dataEvento:"2023-01-02"},
    {IdEvento:"1432", nomeEvento:"eventoLegal 2", dataEvento:"2023-02-04"},
    {IdEvento:"1443", nomeEvento:"eventoLegal 3", dataEvento:"2023-03-05"}
  ]);
  // select mocado
  const [quaisEventos, setQuaisEventos] = useState([
    { value: 1, text: "Todos os eventos" },
    { value: 2, text: "Meus eventos" },
  ]);

  const [tipoEvento, setTipoEvento] = useState(1); //código do tipo do Evento escolhido
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {

    async function loadEventsType() {
      if (tipoEvento == 1) {//chamar a api de todos os eventos
    
    try {
      
    } catch (error) {
      
    }

   } else {
    const eventosExibidos = [{ //Chamar a api de todos os eventos

      IdEvento:"1232", nomeEvento:"eventoLegal", dataEvento:"2023-01-02",
      IdEvento:"1432", nomeEvento:"eventoLegal 2", dataEvento:"2023-02-04",
      IdEvento:"1443", nomeEvento:"eventoLegal 3", dataEvento:"2023-03-05"
      
    }]
    }
    setShowSpinner(true)
    setEventos([])
    
   

    return eventosExibidos
   }
    loadEventsType();
  }, [tipoEvento]);

  

  // toggle meus eventos ou todos os eventos
  function myEvents(tpEvent) {
    setTipoEvento(tpEvent);
  }

  async function loadMyComentary(idComentary) {
    return "????";
  }

  const showHideModal = () => {
    setShowModal(showModal ? false : true);
  };

  const commentaryRemove = () => {
    alert("Remover o comentário");
  };

  function handleConnect() {
    alert("Desenvolver a função conectar evento");
  }
  return (
    <>
      <MainContent>
        <Container>
          <Title titleText={"Eventos"} className="custom-title" />

          <Select
            id="id-tipo-evento"
            name="tipo-evento"
            required={true}
            options={quaisEventos} // aqui o array dos tipos
            manipulationFunction={(e) => myEvents(e.target.value)}
            defaultValue={tipoEvento}
            addtionalClass="select-tp-evento"
          />
          <Table
            dados={eventos}
            fnConnect={handleConnect}
            fnShowModal={() => {
              showHideModal();
            }}
          />
        </Container>
      </MainContent>

      {/* SPINNER -Feito com position */}
      {showSpinner ? <Spinner /> : null}

      {showModal ? (
        <Modal
          userId={userData.userId}
          showHideModal={showHideModal}
          fnDelete={commentaryRemove}
        />
      ) : null}
    </>
  );
};

export default EventosAlunoPage;
