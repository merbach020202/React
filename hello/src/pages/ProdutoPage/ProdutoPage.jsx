import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ProdutoPage = () => {
    const { nome, produtos, theme } = useContext(ThemeContext);

    return (
        <div>
            <h1>Página de Produtos</h1>
            <p>{nome}</p>
            <p>Tema atual: {theme}</p>
            <ul style={{ listStyle: "none" }}>
                {produtos.map((p) => {
                    return (
                        <li key={p.idProduto}>
                            <strong>Produto:</strong> {p.descricao} | &nbsp;
                            <strong>Preço:</strong> {p.preco} | &nbsp;
                            <strong>Promoção:</strong> {p.promo ? "Sim" : "Não"}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ProdutoPage;
