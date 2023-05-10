import React, { useEffect, useState } from "react";
import { Pedido, Pedidos } from ".";
import api from "../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardAcompanharPedido from "../card-acompanhar-pedido/CardAcompanharPedido";
import InfoPedido from "../info-pedido/InfoPedido";

const PedidoUsuario = () => {
  const [listaPedidos, setListaPedidos] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (status === "idle") {
      setStatus("loading");
      api
        .get("/pedidos/preparando")
        .then((response) => {
          setStatus("loaded");
          setListaPedidos(response.data.data);
        })
        .catch((error) => toast.error("Erro ao recuperar pedidos em preparo"));
    }
    setStatus("idle");
    console.log(listaPedidos);
  }, [listaPedidos]);

  return (
    <Pedidos>
      {listaPedidos.map((pedido) => {
        return (
          <Pedido>
            <InfoPedido
              nome={pedido.nome}
              data={pedido.dataHoraPedido}
              numeroFicha={pedido.numeroFicha}
              status={pedido.statusPedido}
            />
            {pedido.produtos.map((produto) => {
              console.log(produto)
              return (
                <CardAcompanharPedido
                  nome={produto.nome}
                  image={produto.imagem}
                  tamanho={produto.tamanho}
                />
              );
            })}
          </Pedido>
        );
      })}
    </Pedidos>
  );
};

export default PedidoUsuario;
