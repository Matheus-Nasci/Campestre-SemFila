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
import DetalhesPedidoComponent from "../detalhes-pedido-component/detalhesPedidoComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import api from "../utils/api/api";
import { useHistory } from "react-router-dom";

const AtualizarStatusComponent = () => {
  const history = useHistory();
  const [pedidos, setPedidos] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(
    localStorage.getItem("STATUS_PEDIDO") || "PREPARANDO"
  );
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null); // Estado para controlar o pedido selecionado

  useEffect(() => {
    document.title = "Acompanhar Pedidos";
  
    const intervalId = setInterval(() => {
      fetchPedidos(selectedStatus);
    }, 3000);
  
    const unlisten = history.listen((location) => {
      // Forçar a atualização do componente ao retornar à rota "/atualizar-produto"
      console.log(location.pathname);
      if (location.pathname.includes("/atualizar-produto") && location.action === 'POP') {
        window.location.reload();
      }
    });
  
    return () => {
      clearInterval(intervalId);
      unlisten();
    };
  }, [selectedStatus, history]);

  const fetchPedidos = (status) => {
    let endpoint = "/pedidos/preparando?showImage=true";

    if (status === "PRONTO") {
      endpoint = "/pedidos/prontos?showImage=true";
    }

    api
      .get(endpoint)
      .then((response) => {
        setPedidos(response.data.data);
      })
      .catch(() => {
        toast.error("Erro ao recuperar pedidos");
      });
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
    setPedidos([]);
    localStorage.setItem("STATUS_PEDIDO", event.target.value);
  };

  const handlePedidoClick = (pedido) => {
    localStorage.setItem("pedidoSelecionado", JSON.stringify(pedido));
    setPedidoSelecionado(pedido);
    setPedidos([]);
    history.push("/detalhes-pedido");
    window.location.reload();
  };

  return (
    <ContainerDiv>
      <PedidosDiv>
        <HeaderDiv>
          <h1>Pedidos</h1>
          <StatusSelect value={selectedStatus} onChange={handleStatusChange}>
            <option value="PREPARANDO">PREPARANDO</option>
            <option value="PRONTO">PRONTO</option>
          </StatusSelect>
        </HeaderDiv>
        <ContentDiv>
          {pedidos?.length > 0 ? (
            pedidos.map((pedido) => {
              return (
                <PedidoDiv onClick={() => handlePedidoClick(pedido)}>
                  <ParteUmDiv>
                    <NomeUsuarioSpan>{pedido.nome}</NomeUsuarioSpan>
                    <DataSpan>
                      {moment(pedido.dataHoraPedido).format("HH:mm DD/MM")}
                    </DataSpan>
                    <StatusSpan status={selectedStatus}>
                      {pedido.statusPedido}
                    </StatusSpan>
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
            <div>Carregando...</div>
          )}
        </ContentDiv>
        <ToastContainer />
      </PedidosDiv>
      {pedidoSelecionado && (
        <DetalhesPedidoComponent pedido={pedidoSelecionado} />
      )}
    </ContainerDiv>
  );
};

export default AtualizarStatusComponent;
