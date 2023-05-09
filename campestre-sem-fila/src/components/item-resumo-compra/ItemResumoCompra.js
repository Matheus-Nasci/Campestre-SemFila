import React from "react";
import {
  DescricaoItem,
  NomeProduto,
  PrecoProduto,
  PrecoTotalDiv,
  PrecoTotalSpan,
  DivItem,
} from ".";

const ItemResumoCompra = ({ nomeProduto, precoProduto, quantidade }) => {

  const valorFormatado = `${precoProduto.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })} UN`;

  const valorTotal = `${(precoProduto * quantidade).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`;

  const quantidadeTotal = `${quantidade}X`

  return (
    <DivItem>
      <DescricaoItem>
        <NomeProduto>{nomeProduto}</NomeProduto>
        <PrecoProduto>{quantidadeTotal} {valorFormatado}</PrecoProduto>
      </DescricaoItem>
      <PrecoTotalDiv>
        <PrecoTotalSpan>{valorTotal}</PrecoTotalSpan>
      </PrecoTotalDiv>
    </DivItem>
  );
};

export default ItemResumoCompra;
