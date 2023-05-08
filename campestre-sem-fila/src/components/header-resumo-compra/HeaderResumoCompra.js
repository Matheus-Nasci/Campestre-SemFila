import React from "react";
import { Header, ContagemItens, Titulo } from ".";

const HeaderResumoCompra = ({contagemItens}) => {
    return (
        <Header>
            <Titulo>Resumo</Titulo>
            <ContagemItens>{contagemItens} Itens</ContagemItens>
        </Header>
    )
}

export default HeaderResumoCompra;