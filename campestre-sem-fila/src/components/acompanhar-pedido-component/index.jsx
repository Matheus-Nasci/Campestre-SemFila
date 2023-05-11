import styled from "styled-components";

const Content = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
`;

const Pedido = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const CardPedidos = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 10%;
`;

export { CardPedidos, Content, Pedido };
