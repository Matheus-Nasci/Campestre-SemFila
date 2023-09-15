import React, { useState, useEffect } from "react";
import {
  ButtonDiv,
  ConteudoPedidoDiv,
  FooterDiv,
  HeaderDiv,
  ImageDiv,
  InfoProdutoDiv,
  NomeProdutoSpan,
  PedidoDiv,
  PedidosDiv,
  QuantidadeDiv,
  TamanhoProdutoSpan,
  TotalTituloSpan,
  ValoTotalDiv,
  ValorProdutoSpan,
} from "./style";
import api from "../utils/api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import { Content } from "../acompanhar-pedido-component";

const DetalhesPedidoComponent = () => {
  const history = useHistory();
  const getHeaderColor = (status) => {
    switch (status) {
      case "PREPARANDO":
        return "#ff9800";
      case "PRONTO":
        return "#228B22";
      case "ENTREGUE":
        return "#808080";
      default:
        return "#808080";
    }
  };

  const getTextoBotao = (status) => {
    switch (status) {
      case "PREPARANDO":
        return "Pedido Pronto";
      case "PRONTO":
        return "Pedido Entregue";
      case "ENTREGUE":
        return "Pedido Entregue";
      default:
        return "Pedido Entregue";
    }
  };

  const pedido = JSON.parse(localStorage.getItem("pedidoSelecionado"));
  const [statusPedido, setStatusPedido] = useState(pedido?.statusPedido);
  const [headerColor, setHeaderColor] = useState(getHeaderColor(statusPedido));
  const [textoBotao, setTextoBotao] = useState(getTextoBotao(statusPedido));

  useEffect(() => {
    const handleRouteChange = () => {
      if (history.location.pathname === "/atualizar-produto") {
        window.location.reload()
      }
    };

    history.listen(handleRouteChange);

    return () => {
      history.listen(handleRouteChange);
    };
  }, [history, pedido]);

  const handleStatusChange = () => {
    const novoStatus =
      statusPedido === "PREPARANDO"
        ? "PRONTO"
        : statusPedido === "PRONTO"
          ? "ENTREGUE"
          : "ENTREGUE";

    const requestData = {
      numeroFicha: pedido.numeroFicha,
      status: novoStatus,
    };

    api
      .put("/pedidos", requestData)
      .then((response) => {
        toast.success("Pedido atualizado com sucesso!");
        setStatusPedido(novoStatus);
        setHeaderColor(getHeaderColor(novoStatus));
        setTextoBotao(getTextoBotao(novoStatus));
        pedido.statusPedido = novoStatus;
        localStorage.setItem("pedidoSelecionado", JSON.stringify(pedido));
        setTimeout(() => {
          history.push("/atualizar-produto")
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        toast.error("Erro ao atualizar o pedido:", error);
      });
  };

  return (
    <>
      <HeaderDiv statusPedido={headerColor}>
        <h1>
          {pedido?.nome} | {pedido?.numeroFicha}
        </h1>
      </HeaderDiv>
      <Content>
        {pedido && pedido["detalhesPedido"] && pedido["detalhesPedido"].length > 0 ? (
          <PedidosDiv>
            {pedido["detalhesPedido"].map((detalhe) => {
              return (
                <>
                  <PedidoDiv>
                    <ImageDiv image={detalhe.produtoResponse.imagem}></ImageDiv>
                    <ConteudoPedidoDiv>
                      <InfoProdutoDiv>
                        <NomeProdutoSpan>
                          {detalhe.produtoResponse.nome}
                        </NomeProdutoSpan>
                        <TamanhoProdutoSpan>
                          {detalhe.produtoResponse.tamanho}
                        </TamanhoProdutoSpan>
                        <ValorProdutoSpan>
                          R$ {detalhe.produtoResponse.valor.toFixed(2)}
                        </ValorProdutoSpan>
                      </InfoProdutoDiv>
                      <QuantidadeDiv>
                        <span>Qtd: {detalhe.quantidade}</span>
                      </QuantidadeDiv>
                    </ConteudoPedidoDiv>
                  </PedidoDiv>
                </>
              );
            })
            }
          </PedidosDiv>
        ) : (
          <div>Carrengando...</div>
        )}
      </Content>
      <ToastContainer />
      <FooterDiv>
        <ValoTotalDiv>
          <TotalTituloSpan>Total:</TotalTituloSpan>
          <ValorProdutoSpan>R$ {pedido ? pedido.valorTotal.toFixed(2) : undefined}</ValorProdutoSpan>
        </ValoTotalDiv>
        <ButtonDiv onClick={handleStatusChange} bgColor={headerColor}>{textoBotao}</ButtonDiv>
      </FooterDiv>
    </>
  );
};

export default DetalhesPedidoComponent;
