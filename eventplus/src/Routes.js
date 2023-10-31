import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage/Home"
import LoginPage from "./Pages/LoginPage/Login";
import EventosPage from "./Pages/EventosPage/EventosPage";
import TipoEventosPage from "./Pages/TipoEventos/TipoEventos";
import TestePage from "./Pages/TestePage/TestePage";

const Rotas = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomePage />} path={"/"} exact/>
                    <Route element={<EventosPage />} path={"/Eventos"}/>
                    <Route element={<TipoEventosPage />} path={"/TipoEventos"}/>
                    <Route element={<LoginPage />} path={"/Login"}/>
                    <Route element={<TestePage />} path={"/Teste"}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Rotas
