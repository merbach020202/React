import Title from "./components/Title/Title";
import CardEvento from "./components/CardEvento/CardEvento";

import Container from "./components/Container/Container";

import "./App.css";
import Contador from "./components/Contador/Contador";
import Rotas from "./routes"
import { ThemeContext } from "./context/ThemeContext";
import { useState,useEffect } from "react";

function App() {

  const [theme, setTheme] = useState("light")
  const nome = "Eduardo"
  const produtos = [{idProduto: Math.random(), descricao: "Camiseta regata", preco: 49.99, promo: false},
  {idProduto: Math.random(), descricao: "Blusa moletom", preco: 119.89, promo: true},
  {idProduto: Math.random(), descricao: "Camiseta regata", preco: 49.99, promo: false}      
  ]

  useEffect(() => {
    const tm = localStorage.getItem("theme");
    if (tm !== null) {
      setTheme(tm)
    } else {
      setTheme("light")
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, nome, produtos}}>
    <div className={`App ${theme === "dark" ? "App-dark" : ""}`}>
      <Rotas />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
