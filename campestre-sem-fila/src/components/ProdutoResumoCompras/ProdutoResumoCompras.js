import React from "react";
import { 
    Content,
    NomePreco,
    Preco
} from './index'

function ProdutoResumoCompra({ nome, preco }) {
    return (
        <>
            <Content>
                <NomePreco>{nome}</NomePreco>
                <Preco></Preco>
            </Content>
        </>
    )
}