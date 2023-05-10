import styled from "styled-components";

const Info = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column !important;
  text-indent: 17px;
`;

const NomeUsuario = styled.span`
  margin-top: 4%;
  font-weight: bold;
  font-size: 30px;
  line-height: 27px;
`;

const DataPedido = styled.span`
  margin-top: 5%;
  font-size: 20px;
  line-height: 16px;
  color: #7a8098;
`;

const StatusPedido = styled.span`
  font-size: 16px;
  font-weight: bold;
  line-height: 14px;
  text-indent: 0px;
  padding: 1% 0;
  color: #000000;
  margin-top: 4%;
  margin-left: 4%;
  text-align: center;
  background: #02ff0c;
  border-radius: 4px;
  width: 166px;
`;

const TitutloFicha = styled.span`
  margin-top: 4%;
  font-weight: normal;
  font-size: 20px;
  line-height: 14px;
`;

const NumeroFicha = styled.span`
  margin-top: 7%;
  font-weight: bold;
  font-size: 90px;
  line-height: 44px;
`;

export {
  DataPedido,
  Info,
  NomeUsuario,
  NumeroFicha,
  StatusPedido,
  TitutloFicha,
};
