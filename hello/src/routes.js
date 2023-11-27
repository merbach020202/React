import React, { useContext, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

// Imports dos componentes - PÁGINAS
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProdutoPage from "./pages/ProdutoPage/ProdutoPage";
import ImportantePage from "./pages/ImportantePage/ImportantePage";
import MeusPedidos from "./pages/MeusPedidosPage/MeusPedidosPage";

import Nav from "./components/Nav/Nav"

import { ThemeContext } from "./context/ThemeContext";


const Rotas = () => {
  
  const [ theme, setTheme ] = useState('light')

  //Verifica se o sistema está no LocalStorage ou assume o tema light
  function getThemeLocalStorage() {
    setTheme( localStorage.getItem("theme") != null ? localStorage.getItem("theme") : "light" )
  }



  useState()

  return (
    <BrowserRouter>
    <ThemeContext.Provider value={{theme, setTheme}}>
    <Nav />
      <Routes>
        <Route element={ <HomePage /> }  path={"/"} exact />
        <Route element={ <ProdutoPage /> }  path={"/produtos"} />
        <Route element={ <ImportantePage /> }  path={"/importante"} />
        <Route element={ <MeusPedidos /> }  path={"/pedidos"} />
        <Route element={ <LoginPage /> }  path={"/login"}  />
        <Route element={ <HomePage /> }  path={"*"} exact /> //O asterisco é para caso o usuário digite 
        qualquer outra coisa vai retornar para a página da HOME
      </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

export default Rotas;
