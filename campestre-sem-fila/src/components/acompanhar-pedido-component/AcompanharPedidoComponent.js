import React, { useEffect, useState } from "react";
import { Content, CardPedidos, Pedido } from ".";
import DescricaoPedido from "../descricao-pedido/DescricaoPedido";
import CardPedido from "../card-pedido/CardPedido";
import { toast } from "react-toastify";
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
        .catch((err) => {
          toast.error("Erro ao recuperar pedido");
          console.error(err)
        });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Content>
      {pedidos?.length > 0 ? (
        <Pedido>
          {pedidos.map((pedido) => (
            <React.Fragment key={pedido.numeroFicha}>
              <DescricaoPedido
                key={`descricao_${pedido.numeroFicha}`}
                nomeusuario={pedido.nome}
                dataPedido={pedido.dataHoraPedido}
                numeroFicha={pedido.numeroFicha}
                statusPedido={pedido.statusPedido}
                valorTotal={pedido.valorTotal}
              />
              <CardPedidos>
                {pedido.detalhesPedido.map((detalhes, index) => (
                  <CardPedido
                    key={`detalhes_${detalhes.produtoResponse.id}_${index}`}
                    imagem={detalhes.produtoResponse.imagem}
                    nomeProduto={detalhes.produtoResponse.nome}
                    precoProduto={detalhes.produtoResponse.valor}
                    quantidade={detalhes.quantidade}
                    tamanhoProduto={detalhes.produtoResponse.tamanho}
                  />
                ))}
              </CardPedidos>
            </React.Fragment>
          ))}
        </Pedido>
      ) : (
        <div>Carregando...</div>
      )}
    </Content>
  );
};

export default AcompanharPedidosComponent;
