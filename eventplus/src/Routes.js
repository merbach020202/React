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
                    <Route element={<TipoEventosPage />} path={"/tipoEventos"}/>
                    <Route element={<EventosPage />} path={"/eventos"}/>
                    <Route element={<LoginPage />} path={"/login"}/>
                    <Route element={<TestePage />} path={"/teste"}/>
                </Routes>
                <Footer />
            </BrowserRouter>
    )
}

export default Rotas
