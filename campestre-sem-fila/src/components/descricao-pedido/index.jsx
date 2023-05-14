import styled from "styled-components";

const Descricao = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5%;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left:2%;
  }
`;

const InfoUser = styled.div`
  margin-left: 1%;
  width: 50%;
  display: flex;
  align-items: center;
  gap: 3%;

  @media (max-width: 768px) {
    margin-left:0;
    width: 76%;
    margin-bottom: 1%;
  }
`;

const NameUser = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const DataPedido = styled.span`
  margin-left: 1%;
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  color: #7a8098;

  @media (max-width: 768px) {
    
    font-size: 18px;
  }
`;

const Ficha = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  gap: 2%;

  @media (max-width: 768px) {
    
    width: 76%;
    margin-bottom: 1%;
  }
`;

const TituloFicha = styled.span`
  font-weight: 300;
  font-size: 28px;
  color: #000000;

  @media (max-width: 768px) {
    
    font-size: 24px;
  }
`;

const NumeroFicha = styled.span`
  font-weight: 700;
  font-size: 50px;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const InfoPedido = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 70%;
    margin-bottom: 1%;

  }
`;

const StatusPedido = styled.span`
  border-radius: 4px;
  background-color: #ff9800;
  padding: 1% 3%;

  font-weight: 700;
  font-size: 22px;

  color: #ffffff;
  margin-right: 4%;
  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 18px;
  }
`;

const TitleAmount = styled.span`
  font-weight: 300;
  font-size: 28px;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const IconCash = styled.span`
  margin-left: 3%;
  margin-bottom: 2%;

  @media (max-width: 768px) {
    margin-bottom: 1%;
  }
`;

const ValueAmount = styled.span`
  font-weight: 700;
  font-size: 40px;
  color: #000000;

  @media (max-width: 768px) {
    
    font-size: 26px;
  }
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
