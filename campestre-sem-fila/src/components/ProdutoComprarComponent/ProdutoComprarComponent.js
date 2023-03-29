import React from "react";
import { Produto } from "./index";

function ProdutoComprarComponent({ imagem, nome, preco }) {

    function formatPrice(price) {
        return `R$ ${price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} UN`;
    }

    return (
        <>
            <Produto>
                <img src={imagem}/>
                <h1>{nome}</h1>
                <h2>{formatPrice(preco)}</h2>
            </Produto>
        </>
    )
}

export default ProdutoComprarComponent;