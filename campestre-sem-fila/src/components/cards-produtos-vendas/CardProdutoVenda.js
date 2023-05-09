import React from "react";
import { Card, PrecoProduto, TituloProduto, ImageProduto } from ".";

const CardProdutoVenda = ({ image, titulo, preco, handleClick }) => {
  const valorFormatado = `${preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })} UN`;


  const item = {
    nome: titulo,
    preco: preco,
    image: image,
    quantidade: 1
  }

  const handleAddItem = () => {
    handleClick(oldArray => [...oldArray, item]);
  };
  return (
    <Card onClick={handleAddItem}>
      <ImageProduto src={image} />
      <TituloProduto>{titulo}</TituloProduto>
      <PrecoProduto>{valorFormatado}</PrecoProduto>
    </Card>
  );
};

export default CardProdutoVenda;
