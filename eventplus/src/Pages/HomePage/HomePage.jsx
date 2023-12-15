import React, { useEffect, useState } from "react"; //Import do React porque trabalha com jsx
import "./HomePage.css";

import Banner from "../../Components/Banner/Banner";
import MainContent from "../../Components/MainContent/MainContent";
import VisionSection from "../../Components/VisionSection/VisionSection";
import ContactSection from "../../Components/ContactSection/ContactSection";
import Title from "../../Components/Titulo/Title";
import NextEvent from "../../Components/NextEvent/NextEvent";
import Container from "../../Components/Container/Container";
// import api from "../../Services/Service";
import Notification from "../../Components/Notification/Notification";
import { Link } from "react-router-dom";

import api, { nextEventResource, pastEventResource } from "../../Services/Service";
import PastEvents from "../../Components/PastEvent/PastEvent";


const HomePage = () => {

    const [nextEvents, setNextEvents] = useState([]) 
    const [pastEvents, setPastEvents] = useState([]) 
    const [notifyUser, setNotifyUser,] = useState()
    
    //Roda somente na inicialização do componente
    useEffect(() => {
        async function getNextEvents() {
            try {
                const promisse = await api.get(`${nextEventResource}`)
                const dados = await promisse.data

                setNextEvents(dados)//atualiza o status
                
                
            } catch (error) {
                alert(`Deu ruim no nextEvents`)
            }
        }
        
        async function getPastEvents() {
            try {
                const promisse = await api.get(`${pastEventResource}`)
                const dados = await promisse.data

                setPastEvents(dados)

            } catch (error) {
                alert(`Deu ruim no pastEvents`)
            }
            
        }

        getNextEvents()//Roda a função

        getPastEvents()
        // console.log(getPastEvents());

    }, [])
    return (
            <MainContent>
                {<Notification {...notifyUser} setNotifyUser={setNotifyUser}/>}

                {/* <Link to={`/teste/${e.idEvento}`}>Visualizar</Link> */}

                <Banner />
                <section className="proximos-eventos">
                    <Container>

                        <Title titleText={"Proximos Eventos"} />

                        <div className="events-box">

                            {
                                nextEvents.map((e) => {
                                    return (
                                    <NextEvent
                                    key={e.idEvento}
                                    eventDate={e.dataEvento}
                                    title={e.nomeEvento}
                                    description={e.descricao}
                                    idEvent={e.idEvento}
                                />
                                )
                                })
                            }

                           
                        </div>
                    </Container>
                </section>
                
                <section className="proximos-eventos">
                    <Container>

                        <Title titleText={"Eventos Anteriores"} />

                        <div className="events-box">

                            {
                                pastEvents.map((e) => {
                                    return (
                                    <PastEvents
                                    key={e.idEvento}
                                    eventDate={e.dataEvento}
                                    title={e.nomeEvento}
                                    description={e.descricao}
                                    idEvent={e.idEvento}
                                    buttonLink={`/detalhes-evento/${e.idEvento}`}
                                    buttonText={"Visualizar"}
                                />
                                )
                                })
                            }

                           
                        </div>
                    </Container>
                </section>
                
                

                <VisionSection />

                <ContactSection />

            </MainContent>
    );
};

export default HomePage;
