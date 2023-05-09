import React from "react";
import {
  DescricaoItem,
  NomeProduto,
  PrecoProduto,
  PrecoTotalDiv,
  PrecoTotalSpan,
  DivItem,
} from ".";
import { Trash } from "react-bootstrap-icons";

const ItemResumoCompra = ({ nomeProduto, precoProduto, quantidade, handleClick }) => {

  const valorFormatado = `${precoProduto.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })} UN`;

  const valorTotal = `${(precoProduto * quantidade).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`;

  const handleRemoveItemByName = () => {
    handleClick(oldArray => {
      const index = oldArray.findIndex(item => item.nome === nomeProduto);
      if (index !== -1) {
        oldArray.splice(index, 1);
      }
      return [...oldArray];
    });
  };
  

  const quantidadeTotal = `${quantidade}X`

  return (
    <DivItem>
      <DescricaoItem>
        <NomeProduto>{nomeProduto} <Trash size={20} color="red" style={{cursor: "pointer"}} onClick={handleRemoveItemByName}/></NomeProduto>
        <PrecoProduto>{quantidadeTotal} {valorFormatado}</PrecoProduto>
      </DescricaoItem>
      <PrecoTotalDiv>
        <PrecoTotalSpan> {valorTotal}</PrecoTotalSpan>
      </PrecoTotalDiv>
    </DivItem>
  );
};

export default ItemResumoCompra;
