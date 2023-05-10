import React from "react";
import {
  Info,
  DataPedido,
  NomeUsuario,
  NumeroFicha,
  StatusPedido,
  TitutloFicha,
} from ".";
import moment from "moment";


const InfoPedido = ({nome, data, status, numeroFicha}) => {

    const dataFormatada = moment(data).format('HH:mm DD/MM/YYYY');

    return (
        <Info>
            <NomeUsuario>{nome}</NomeUsuario>
            <DataPedido>{dataFormatada}</DataPedido>
            <StatusPedido>{status}</StatusPedido>
            <TitutloFicha>FICHA:</TitutloFicha>
            <NumeroFicha>{numeroFicha}</NumeroFicha>
        </Info>
    )
}

export default InfoPedido;