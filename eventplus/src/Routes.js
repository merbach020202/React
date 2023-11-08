import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import EventosPage from "./Pages/EventosPage/EventosPage";
import HomePage from "./Pages/HomePage/HomePage"
import LoginPage from "./Pages/LoginPage/LoginPage";
import TestePage from "./Pages/TestePage/TestePage";
import TipoEventosPage from "./Pages/TipoEventosPage/TipoEventosPage";
import Footer from "./Components/Footer/Footer";


const Rotas = () => {
    return (
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route element={<HomePage />} path={"/"} exact/>
                    <Route element={<TipoEventosPage />} path={"/TipoEventos"}/>
                    <Route element={<EventosPage />} path={"/Eventos"}/>
                    <Route element={<LoginPage />} path={"/Login"}/>
                    <Route element={<TestePage />} path={"/Teste"}/>
                </Routes>
                <Footer />
            </BrowserRouter>
    )
}

export default Rotas
