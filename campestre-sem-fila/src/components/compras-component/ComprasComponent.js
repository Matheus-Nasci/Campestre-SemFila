import React, { useEffect, useState } from "react";
import {
  Body,
  Container,
  ContainerProdutos,
  Form,
  Produtos,
  CardProdutos,
  ContainerContent,
  ContainerResumoCompras,
  ContentResumos,
  ResumoCompras,
  BtnPagamento,
} from ".";
import CardProdutoVenda from "../cards-produtos-vendas/CardProdutoVenda";
import HeaderResumoCompra from "../header-resumo-compra/HeaderResumoCompra";
import api from "../api/api";

const ComprasComponent = () => {
  const [contagemItens, setContagemItens] = useState(0);
  const [listaProdutos, setListaProdutos] = useState({});

  useEffect(() => {
    api
      .get("/produtos")
      .then((response) => setListaProdutos(response.data))
      .catch((error) => console.error(error));

    setContagemItens(listaProdutos?.length);
  }, [listaProdutos]);

  console.log(listaProdutos);

  return (
    <Body>
      <Container>
        <Produtos>
          <ContainerProdutos>
            <h1>Vendas</h1>
            <Form>
              <input type="text" placeholder="Nome do cliente"></input>
              <input type="text" placeholder="Busque um Produto"></input>
            </Form>
            <CardProdutos>
              {listaProdutos.data.map((produto) => {
                return <CardProdutoVenda image={produto.imagem} preco={produto.valor} titulo={produto.nome} />
              })}
              <CardProdutoVenda
                image="https://i0.wp.com/anamariabraga.globo.com/wp-content/uploads/2019/12/pastel-de-feira.jpg?fit=1200%2C675&ssl=1"
                preco={10}
                titulo="Pastel"
              />
            </CardProdutos>
          </ContainerProdutos>
        </Produtos>
        <ResumoCompras>
          <ContainerResumoCompras>
            <ContentResumos>
              <ContainerContent>
                <HeaderResumoCompra
                  key="Resumo"
                  contagemItens={contagemItens}
                />
              </ContainerContent>
            </ContentResumos>
            <BtnPagamento>
              <span>Pagamento</span>
              <span>R$ 0,00</span>
            </BtnPagamento>
          </ContainerResumoCompras>
        </ResumoCompras>
      </Container>
    </Body>
  );
};

export default ComprasComponent;
