import React from "react";
import "./HomePage.css";
import Banner from "../../Components/Banner/Banner";
import MainContent from "../../Components/MainContent/MainContent";
import VisionSection from "../../Components/VisionSection/VisionSection";
import ContactSection from "../../Components/ContactSection/ContactSection";
import Title from "../../Components/Titulo/Title";
import NextEvent from "../../Components/NextEvent/NextEvent";
import Container from "../../Components/Container/Container";

const HomePage = () => {
    return (
        <div>
            <MainContent>

                <Banner />

                <section className="proximos-eventos">

                    <Container>

                        <Title titleText={"Proximos Eventos"} />

                        <div className="events-box">
                            <NextEvent
                                title={"Evento X"}
                                description={"Evento Legal"}
                                eventDate={"18/11/2023"}
                            />
                            
                            <NextEvent
                                title={"Evento X"}
                                description={"Evento Legal"}
                                eventDate={"18/11/2023"}
                            />
                            
                            <NextEvent
                                title={"Evento X"}
                                description={"Evento Legal"}
                                eventDate={"18/11/2023"}
                            />
                            
                            <NextEvent
                                title={"Evento X"}
                                description={"Evento Legal"}
                                eventDate={"18/11/2023"}
                            />
                           
                        </div>
                    </Container>
                </section>

                <VisionSection />

                <ContactSection />

            </MainContent>
        </div>
    );
};

export default HomePage;
