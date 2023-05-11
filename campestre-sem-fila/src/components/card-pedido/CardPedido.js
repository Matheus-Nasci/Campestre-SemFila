import React from "react";
import {
  Card,
  Image,
  InfoProduct,
  LengthProduct,
  NomeProduct,
  PartOne,
  PartTwo,
  PriceProduct,
  QuantityProduct,
} from ".";

const CardPedido = ({nomeProduto, precoProduto, tamanhoProduto, quantidade, imagem}) => {

    const valorFormatado = `${precoProduto.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}`;

    return (
        <Card>
            <Image imagem={imagem} />
            <InfoProduct>
                <PartOne>
                    <NomeProduct>{nomeProduto}</NomeProduct>
                    <PriceProduct>{valorFormatado}</PriceProduct>
                </PartOne>
                <PartTwo>
                    <LengthProduct>{tamanhoProduto}</LengthProduct>
                    <QuantityProduct>Qtd: {quantidade}</QuantityProduct>
                </PartTwo>
            </InfoProduct>
        </Card>
    )
}

export default CardPedido;

