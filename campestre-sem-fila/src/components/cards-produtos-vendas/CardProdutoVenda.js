import React from "react";
import { Card, PrecoProduto, TituloProduto, ImageProduto } from ".";

const CardProdutoVenda = ({image, titulo, preco}) => {
    
    const valorFormatado = `${preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} UN`;

    return (
        <Card>
            <ImageProduto src={image} />
            <TituloProduto>{titulo}</TituloProduto>
            <PrecoProduto>{valorFormatado}</PrecoProduto>
        </Card>
    )
}

export default CardProdutoVenda;