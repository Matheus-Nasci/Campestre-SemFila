import React from "react";
import {
  InfoProduto,
  DivImage,
  NomeProduto,
  ProdutoPedido,
  TamanhoProduto,
} from ".";

const CardAcompanharPedido = ({ nome, tamanho, image }) => {
  return (
    <ProdutoPedido>
      <InfoProduto>
        <NomeProduto>{nome}</NomeProduto>
        <TamanhoProduto>{tamanho}</TamanhoProduto>
      </InfoProduto>
      <DivImage>
        <img src={image} />
      </DivImage>
    </ProdutoPedido>
  );
};

export default CardAcompanharPedido;
