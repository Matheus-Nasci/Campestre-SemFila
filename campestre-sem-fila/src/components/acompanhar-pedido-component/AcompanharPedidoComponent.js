import React, { useEffect, useState } from "react";
import { Content, CardPedidos, Pedido } from ".";
import DescricaoPedido from "../descricao-pedido/DescricaoPedido";
import CardPedido from "../card-pedido/CardPedido";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../utils/api/api";

const AcompanharPedidosComponent = () => {
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

    }, 3000)

    return () => clearInterval(intervalId);
  }, []);

  function calcularValorTotalPedido(pedido) {
    return pedido.detalhesPedido.reduce((valorTotal, detalhePedido) => {
      return valorTotal + (detalhePedido.quantidade * detalhePedido.produtoResponse.valor);
    }, 0);
  }

  return (
    <Content>
      <Pedido>
        {pedidos.map((pedido) => {
          return (
            <>
              <DescricaoPedido
                nomeusuario={pedido.nome}
                dataPedido={pedido.dataHoraPedido}
                numeroFicha={pedido.numeroFicha}
                statusPedido={pedido.statusPedido}
                valorTotal={calcularValorTotalPedido(pedido)}
              />
              <CardPedidos>
                {pedido.detalhesPedido.map((detalhes) => {
                  return (
                    <CardPedido
                      imagem={detalhes.produtoResponse.imagem}
                      nomeProduto={detalhes.produtoResponse.nome}
                      precoProduto={detalhes.produtoResponse.valor}
                      quantidade={detalhes.quantidade}
                      tamanhoProduto={detalhes.produtoResponse.tamanho}
                    />
                  );
                })}
              </CardPedidos>
            </>
          );
        })}
      </Pedido>
    </Content>
  );
};

export default AcompanharPedidosComponent;
