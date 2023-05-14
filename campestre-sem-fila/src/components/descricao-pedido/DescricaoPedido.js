import React from "react";
import {
  InfoUser,
  DataPedido,
  Ficha,
  IconCash,
  InfoPedido,
  NameUser,
  NumeroFicha,
  StatusPedido,
  TitleAmount,
  TituloFicha,
  ValueAmount,
  Descricao,
} from ".";
import moment from "moment";

const DescricaoPedido = ({
  nomeusuario,
  dataPedido,
  numeroFicha,
  statusPedido,
  valorTotal,
}) => {

  const dataFormatada = moment(dataPedido).format("HH:mm DD/MM");


  return (
    <Descricao>
      <InfoUser>
        <NameUser>{nomeusuario}</NameUser>
        <DataPedido>{dataFormatada}</DataPedido>
      </InfoUser>
      <Ficha>
        <TituloFicha>FICHA:</TituloFicha>
        <NumeroFicha>{numeroFicha}</NumeroFicha>
      </Ficha>
      <InfoPedido>
        <StatusPedido>{statusPedido}</StatusPedido>
        <TitleAmount>Total:</TitleAmount>
        <IconCash>R$</IconCash>
        <ValueAmount>{Number(valorTotal).toFixed(2)}</ValueAmount>
      </InfoPedido>
    </Descricao>
  );
};

export default DescricaoPedido;
