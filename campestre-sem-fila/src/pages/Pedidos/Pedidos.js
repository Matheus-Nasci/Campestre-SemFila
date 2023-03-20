import React, { Component } from 'react';
import { TitlePedidoPreparando, TitlePedidoPronto, Content, PedidosPreparando, PedidosProntos, NumerosPedidos, FotoAperetiva, Header, PedidosComponent } from './pedidos';
import Acai from '../../assets/images/acai.png';
import NumeroFicha from '../../components/NumeroFicha/NumeroFicha';

class Pedidos extends Component {
  render() {
    return (
      <Content className='content'>
        <PedidosComponent className='pedidos'>
          <Header className='header'><h1>ACOMPANHE O NÚMERO DO SEU PEDIDO</h1></Header>
          <NumerosPedidos className='numero-pedidos'>
            <PedidosPreparando className='preparando'>
              <TitlePedidoPreparando>PREPARANDO</TitlePedidoPreparando>
              <div>
                <NumeroFicha >01</NumeroFicha>
              </div>
            </PedidosPreparando>
            <PedidosProntos className='pronto'>
              <TitlePedidoPronto>PRONTOS</TitlePedidoPronto>
            </PedidosProntos>
          </NumerosPedidos>
        </PedidosComponent>
        <FotoAperetiva className='foto-aperetiva'>
          <img src={Acai} alt="açai"></img>
        </FotoAperetiva>
      </Content>
    );
  }
}

export default Pedidos;