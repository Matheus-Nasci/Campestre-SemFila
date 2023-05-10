import styled from "styled-components";

const Pedidos = styled.div`
  margin-left: 2%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Pedido = styled.div`
  margin-bottom: 3%;
  background-color: white;
  width: 90%;
  height: 235px;
  display: flex;
  border-radius: 8px;
  flex-direction: row;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;

export { Pedido, Pedidos };
