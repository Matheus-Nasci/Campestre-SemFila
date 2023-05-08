import React from "react";
import {
  DescricaoItem,
  NomeProduto,
  PrecoProduto,
  PrecoTotalDiv,
  PrecoTotalSpan,
  DivItem,
} from ".";

const ItemResumoCompra = ({ nomeProduto, precoProduto, precoTotal }) => {
  return (
    <DivItem>
      <DescricaoItem>
        <NomeProduto>{nomeProduto}</NomeProduto>
        <PrecoProduto>{precoProduto}</PrecoProduto>
      </DescricaoItem>
      <PrecoTotalDiv>
        <PrecoTotalSpan>{precoTotal}</PrecoTotalSpan>
      </PrecoTotalDiv>
    </DivItem>
  );
};

export default ItemResumoCompra;
