import React, { useEffect, useState } from "react"; //Import do React porque trabalha com jsx
import "./HomePage.css";

import Banner from "../../Components/Banner/Banner";
import MainContent from "../../Components/MainContent/MainContent";
import VisionSection from "../../Components/VisionSection/VisionSection";
import ContactSection from "../../Components/ContactSection/ContactSection";
import Title from "../../Components/Titulo/Title";
import NextEvent from "../../Components/NextEvent/NextEvent";
import Container from "../../Components/Container/Container";
import axios from "axios";

const HomePage = () => {
    const [nextEvents, setNextEvents] = useState([]) 
    const urlLocal = 'https://localhost:7118/api'
    
    //Roda somente na inicialização do componente
    useEffect(() => {
        async function getNextEvents() {
            try {
                const promisse = await axios.get(`${urlLocal}/Evento`)
                const dados = await promisse.data

                setNextEvents(dados)//atualiza o status
                
            } catch (error) {
                alert(`Deu ruim na API`)
            }
        }

        getNextEvents()//Roda a função

    }, [])
    return (
            <MainContent>

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
