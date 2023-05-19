import styled from "styled-components";

const ContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0f1f5;
`;

const PedidosDiv = styled.div`
  height: 100%;
  width: 100%;
`;

const HeaderDiv = styled.div`
  display: flex;
  width: 100%;
  height: 12%;
  background-color: #000080;
  align-items: center;
  justify-content: center;
  gap: 2%;
  h1 {
    font-weight: 700;
    font-size: 30px;
    text-align: center;
    color: #ffffff;
  }
`;

const StatusSelect = styled.select`
  min-width: 15ch;
  max-width: 30ch;
  border: 1px solid var(--select-border);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  font-size: 16px;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
`;

const ContentDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-bottom: 1000%;
  flex-direction: column;
  align-items: center;
  background-color: #f0f1f5;
  overflow: auto;
`;

const PedidoDiv = styled.div`
  margin-top: 2%;
  height: 20%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  padding: 4% 0;
  margin-bottom: 2%;
`;

const ParteUmDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 2%;
  align-items: center;
  margin-left: 4%;
  margin-right: 4%;
`;

const NomeUsuarioSpan = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const DataSpan = styled.span`
  margin-left: -10%;
  font-style: normal;
  font-weight: 300;

  color: #7a8098;
`;

const StatusSpan = styled.span`
  margin-right: 1%;
  border-radius: 4px;
  background-color: #ff9800;
  padding: 1% 1%;

  font-weight: 700;
  font-size: 14px;

  color: #ffffff;
`;

const ParteDois = styled.div`
  margin-top: 4%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 4%;
  margin-right: 4%;
`;

const FichaDiv = styled.div`
  display: flex;
  align-items: center;
`;

const TituloFichaSpan = styled.span`
  margin-bottom: 2%;
`;

const NumeroFichaSpan = styled.span`
  font-weight: 700;
  font-size: 20px;

  color: #000000;
`;

const AmountDiv = styled.div`
  font-size: 20px;
`;

const TitutloValorSpan = styled.span`
  margin-bottom: 2%;
`;

const ValorTotalSpan = styled.span`
  font-weight: bold;
`;

export {
  AmountDiv,
  ContainerDiv,
  ContentDiv,
  DataSpan,
  FichaDiv,
  HeaderDiv,
  NomeUsuarioSpan,
  NumeroFichaSpan,
  ParteDois,
  ParteUmDiv,
  PedidoDiv,
  PedidosDiv,
  StatusSelect,
  StatusSpan,
  TituloFichaSpan,
  TitutloValorSpan,
  ValorTotalSpan,
};
