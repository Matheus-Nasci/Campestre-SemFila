import styled from "styled-components";

const Descricao = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5%;
`;

const InfoUser = styled.div`
  margin-left: 1%;
  width: 50%;
  display: flex;
  align-items: center;
  gap: 3%;
`;

const NameUser = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  color: #000000;
`;

const DataPedido = styled.span`
  margin-left: 1%;
  font-style: normal;
  font-weight: 300;
  font-size: 30px;

  color: #7a8098;
`;

const Ficha = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  gap: 2%;
`;

const TituloFicha = styled.span`
  font-weight: 300;
  font-size: 28px;
  color: #000000;
`;

const NumeroFicha = styled.span`
  font-weight: 700;
  font-size: 50px;
  color: #000000;
`;

const InfoPedido = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatusPedido = styled.span`
  border-radius: 4px;
  background-color: #ff9800;
  padding: 1% 3%;

  font-weight: 700;
  font-size: 22px;

  color: #ffffff;
  margin-right: 4%;
`;

const TitleAmount = styled.span`
  font-weight: 300;
  font-size: 28px;
  color: #000000;
`;

const IconCash = styled.span`
  margin-left: 3%;
  margin-bottom: 2%;
`;

const ValueAmount = styled.span`
  font-weight: 700;
  font-size: 40px;

  color: #000000;
`;

export {
  Descricao,
  DataPedido,
  Ficha,
  IconCash,
  InfoPedido,
  InfoUser,
  NameUser,
  NumeroFicha,
  StatusPedido,
  TitleAmount,
  TituloFicha,
  ValueAmount,
};
