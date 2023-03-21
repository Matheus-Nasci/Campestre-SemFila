import React, { useState, useEffect, Component } from 'react';
import { TitlePedidoPreparando, ListaNumerosPreparo, ListaNumerosPronto,
TitlePedidoPronto, 
Content, 
PedidosPreparando,
PedidosProntos, NumerosPedidos, FotoAperetiva, Header, PedidosComponent } from './pedidos';
import Acai from '../../assets/images/acai.png';
import NumeroFicha from '../../components/NumeroFicha/NumeroFicha';

function ListaPedidos() {
    const numbersPreparing = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    const listItemsPreparing = numbersPreparing.map((number) =>
      <li>
        <NumeroFicha numeroFicha={number} status="PREPARANDO"/>
      </li>
    );

    const numbersReady = [1, 2, 3, 4]
    const listItems = numbersReady.map((number, index) => {
      if (index === numbersReady.length - 1) {
        return (
          <li><NumeroFicha tamanho="GRANDE" status="PREPARANDO" numeroFicha={number}/></li>
        );
      } else {
        return (
          <li><NumeroFicha status="PREPARANDO" numeroFicha={number}/></li>
        );
      }
    });
    
    return (
      <Content className='content'>
        <PedidosComponent className='pedidos'>
          <Header className='header'><h1>ACOMPANHE O NÚMERO DO SEU PEDIDO</h1></Header>
          <NumerosPedidos className='numero-pedidos'>
            <PedidosPreparando className='preparando'>
              <TitlePedidoPreparando>PREPARANDO</TitlePedidoPreparando>
              <ListaNumerosPreparo>
                {listItemsPreparing}
              </ListaNumerosPreparo>
            </PedidosPreparando>
            <PedidosProntos className='pronto'>
              <TitlePedidoPronto>PRONTOS</TitlePedidoPronto>
              <ListaNumerosPronto>
                {listItems}
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