import React, { useState, useEffect } from "react";
import {
  AmountDiv,
  ContainerDiv,
  ContentDiv,
  DataSpan,
  FichaDiv,
  HeaderDiv,
  NomeUsuarioSpan,
  NumeroFichaSpan,
  ParteDois,
  ParteUmDiv,
  PedidoDiv,
  PedidosDiv,
  StatusSelect,
  StatusSpan,
  TituloFichaSpan,
  TitutloValorSpan,
  ValorTotalSpan,
} from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import api from "../utils/api/api";

const AtualizarStatusComponent = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    document.title = "Acompanhar Pedidos";

    const intervalId = setInterval(() => {
      api
        .get("/pedidos/acompanhar?showImage=true")
        .then((response) => {
          setPedidos(response.data.data);
        })
        .catch(toast.error("Erro ao recuperar pedidos"));
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ContainerDiv>
      <PedidosDiv>
        <HeaderDiv>
          <h1>Pedidos</h1>
          <StatusSelect>
            <option value="PREPARANDO">PREPARANDO</option>
            <option value="PRONTO">PRONTO</option>
          </StatusSelect>
        </HeaderDiv>
        <ContentDiv>
          {pedidos.length > 0 ? (
            pedidos.map((pedido) => {
              return (
                <PedidoDiv>
                  <ParteUmDiv>
                    <NomeUsuarioSpan>{pedido.nome}</NomeUsuarioSpan>
                    <DataSpan>{moment(pedido.dataHoraPedido).format("HH:mm DD/MM")}</DataSpan>
                    <StatusSpan>{pedido.statusPedido}</StatusSpan>
                  </ParteUmDiv>
                  <ParteDois>
                    <FichaDiv>
                      <TituloFichaSpan>Nº</TituloFichaSpan>
                      <NumeroFichaSpan>{pedido.numeroFicha}</NumeroFichaSpan>
                    </FichaDiv>
                    <AmountDiv>
                      <TitutloValorSpan>Total: </TitutloValorSpan>
                      <ValorTotalSpan>
                        R$ {pedido.valorTotal.toFixed(2)}
                      </ValorTotalSpan>
                    </AmountDiv>
                  </ParteDois>
                </PedidoDiv>
              );
            })
          ) : (
            <div>Não há pedidos</div>
          )}
        </ContentDiv>
      </PedidosDiv>
    </ContainerDiv>
  );
};


export default AtualizarStatusComponent;