import React, { useState, useEffect, Component } from 'react';
import {
  TitlePedidoPreparando, ListaNumerosPreparo, ListaNumerosPronto,
  TitlePedidoPronto,
  Content,
  PedidosPreparando,
  PedidosProntos, NumerosPedidos, FotoAperetiva, Header, PedidosComponent
} from './pedidos';
import Acai from '../../assets/images/acai.png';
import NumeroFicha from '../../components/NumeroFicha/NumeroFicha';
import axios from 'axios';

function ListaPedidos() {
  const [pedidosProntos, setPedidosProntos] = useState({})
  const [pedidosPreparando, setPedidosPreparando] = useState({})

  const [listaPedidosProntos, setListaPedidosProntos] = useState();
  const [listaPedidosPreparando, setListaPedidosPreparando] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios.get('http://localhost:8080/campestre-sem-fila/api/v1/pedidos/prontos')
        .then(response => setPedidosProntos(response.data))
        .catch(error => console.error(error));

      axios.get('http://localhost:8080/campestre-sem-fila/api/v1/pedidos/preparando')
        .then(response => setPedidosPreparando(response.data))
        .catch(error => console.log(error))

    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  useEffect(() => {
    if (pedidosPreparando.data && pedidosPreparando.data.length > 0) {
      console.log(pedidosPreparando)
      const listItemsPreparing = pedidosPreparando.data.map((pedido) =>
        <li>
          <NumeroFicha numeroFicha={pedido.numeroFicha} status={pedido.statusPedido} />
        </li>
      );
      setListaPedidosPreparando(listItemsPreparing);
    } else {
      setListaPedidosPreparando([])
    }

    if (pedidosProntos.data && pedidosProntos.data.length > 0) {
      const listItems = pedidosProntos.data.map((pedido, index) => {
        if (index === pedidosProntos.data.length - 1) {
          return (
            <li><NumeroFicha tamanho="GRANDE" status={pedido.statusPedido} numeroFicha={pedido.numeroFicha} /></li>
          );
        } else {
          return (
            <li><NumeroFicha status="PRONTO" numeroFicha={pedido.numeroFicha} /></li>
          );
        }
      });
      setListaPedidosProntos(listItems);
    } else {
      setListaPedidosProntos([])
    }
  }, [pedidosPreparando.data, pedidosProntos.data])

return (
  <Content className='content'>
    <PedidosComponent className='pedidos'>
      <Header className='header'><h1>ACOMPANHE O NÚMERO DO SEU PEDIDO</h1></Header>
      <NumerosPedidos className='numero-pedidos'>
        <PedidosPreparando className='preparando'>
          <TitlePedidoPreparando>PREPARANDO</TitlePedidoPreparando>
          <ListaNumerosPreparo>
            {listaPedidosPreparando}
          </ListaNumerosPreparo>
        </PedidosPreparando>
        <PedidosProntos className='pronto'>
          <TitlePedidoPronto>PRONTOS</TitlePedidoPronto>
          <ListaNumerosPronto>
            {listaPedidosProntos}
          </ListaNumerosPronto>
        </PedidosProntos>
      </NumerosPedidos>
    </PedidosComponent>
    <FotoAperetiva className='foto-aperetiva'>
      <img src={Acai} alt="açai"></img>
    </FotoAperetiva>
  </Content>
);
}

export default ListaPedidos;