import styled from "styled-components";

const HeaderDiv = styled.div`
  width: 100%;
  height: 12%;
  background-color: ${props => props.statusPedido};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const PedidosDiv = styled.div`
  width: 100%;
  height: 75%;
  background-color: #f8f8ff;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const PedidoDiv = styled.div`
  display: flex;
  margin-top: 5%;
  margin-left: 6%;
  width: 90%;
  height: 20%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 8px;
  margin-bottom: 2%;
`;

const ImageDiv = styled.div`
  height: 100%;
  width: 20%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center 10%;
  background-repeat: no-repeat;
  border-radius: 8px 0px 0px 8px;
`;

const ConteudoPedidoDiv = styled.div`
  height: 100%;
  width: 70%;
  border-radius: 0 8px 8px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InfoProdutoDiv = styled.div`
  margin-left: 6%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const NomeProdutoSpan = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

const TamanhoProdutoSpan = styled.span`
  font-size: 14px;
`;

const ValorProdutoSpan = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

const QuantidadeDiv = styled.div`
  margin-top: 4%;
  span {
    font-size: 14px;
    font-weight: bold;
  }
`;

const FooterDiv = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 12%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ValoTotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 2%;
  margin-right: 2%;
`;

const TotalTituloSpan = styled.span`
  font-size: 21px;
`;

const ButtonDiv = styled.div`
  height: 78%;
  background-color: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

export {
  ButtonDiv,
  ConteudoPedidoDiv,
  FooterDiv,
  HeaderDiv,
  ImageDiv,
  InfoProdutoDiv,
  NomeProdutoSpan,
  PedidoDiv,
  PedidosDiv,
  QuantidadeDiv,
  TamanhoProdutoSpan,
  TotalTituloSpan,
  ValoTotalDiv,
  ValorProdutoSpan,
};
