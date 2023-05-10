import styled from "styled-components";

const ProdutoPedido = styled.div`
  margin-right: 2%;
  width: 20%;
  margin-top: 11px;
  display: flex;
  flex-direction: row;
  height: 90%;
  border-radius: 0px 8px 8px 0px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
`;

const InfoProduto = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  text-align: left;
  flex-direction: column;
  width: 40%;
  height: 100%;
  span {
    margin-left: 10%;
  }
`;

const NomeProduto = styled.span`
  font-weight: bold;
  font-size: 30px;
`;

const TamanhoProduto = styled.span`
  font-weight: 400;
  font-size: 24px;
  line-height: 19px;
`;

const DivImage = styled.span`
  width: 60%;
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    border-radius: 0px 8px 8px 0px;
  }
`;

export { InfoProduto, NomeProduto, DivImage, ProdutoPedido, TamanhoProduto };
