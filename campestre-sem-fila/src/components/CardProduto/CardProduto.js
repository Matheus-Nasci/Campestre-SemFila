import React from "react";
import { Container, Content, Foto } from "./index";

function CardProduto({ imagem, nome, tamanho, valor }) {

    const numeroFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <Container>
            <Foto imagem={imagem}></Foto>
            <Content>
                <h2>{nome}</h2>
                <h3>{tamanho}</h3>
                <h1>{numeroFormatado}</h1>
            </Content>
        </Container>
    )
}


export default CardProduto;