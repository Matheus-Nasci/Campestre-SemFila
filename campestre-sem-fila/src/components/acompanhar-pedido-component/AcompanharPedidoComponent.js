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
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Content>
      {pedidos?.length > 0 ? (
        <Pedido>
          {pedidos.map((pedido) => {
            return (
              <>
                <DescricaoPedido
                  nomeusuario={pedido.nome}
                  dataPedido={pedido.dataHoraPedido}
                  numeroFicha={pedido.numeroFicha}
                  statusPedido={pedido.statusPedido}
                  valorTotal={pedido.valorTotal}
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
      ) : (
        <div>Nenhum pedido encontrado.</div>
      )}
    </Content>
  );
};

export default AcompanharPedidosComponent;
