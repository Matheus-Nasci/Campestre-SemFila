import styled from "styled-components";

const Body = styled.body`
  width: 100%;
  height: 100%;
  background-color: #f0f1f5;
`;

const Container = styled.div`
  display: flex;
`;

const Produtos = styled.div`
  height: 100vh;
  width: 100vh;
`;

const ContainerProdutos = styled.div`
  width: 87%;
  margin: 0 auto;
  h1 {
    margin-top: 2%;
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 44px;
  }
`;

const Form = styled.div`
  margin-top: 2%;
  input {
    font-size: 20px;
    width: 70%;
    font-weight: 400;
    margin-top: 2%;
    text-indent: 5%;
    height: 59px;
    border: 1px none;
    border-radius: 30px;
    box-shadow: 0px 10px 100px 53px rgba(0, 0, 0, 0.1);
    :focus {
      outline: none;
    }
  }
`;

const CardProdutos = styled.div`
  width: 95%;
  height: auto;
  margin: 0 auto;
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  margin-left: 3%;
  flex-wrap: wrap;
`;

const ResumoCompras = styled.div`
  height: 100vh;
  width: 100vh;
`;

const ContainerResumoCompras = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentResumos = styled.div`
  margin: 0 auto;
  background-color: white;
  box-shadow: 0px 10px 100px 53px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 86%;
  margin-top: 4%;
  border-radius: 20px;
`;

const ContainerContent = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  margin-top: 2%;
  flex-direction: column;
  overflow: auto;
`;

const BtnPagamento = styled.div`
  margin-top: 2%;
  background: #2585b2;
  border: none;
  border-radius: 30px;
  display: flex;
  height: 59px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    color: white;
  }
  span:first-child {
    margin-left: 5%;
  }
  span:last-child {
    font-style: normal;
    font-weight: 600;
    margin-right: 5%;
  }
`;

const Itens = styled.div`
  margin: 0 auto;
  margin-top: 4%;
  width: 96%;
  height: 88%;
  overflow: auto;
  padding-right: 3%;
`;

export {
  Body,
  Container,
  Produtos,
  ContainerProdutos,
  Form,
  CardProdutos,
  ResumoCompras,
  ContainerResumoCompras,
  ContentResumos,
  ContainerContent,
  BtnPagamento,
  Itens
};
