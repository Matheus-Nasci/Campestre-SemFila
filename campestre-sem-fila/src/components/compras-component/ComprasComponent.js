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
  Itens,
} from ".";
import CardProdutoVenda from "../cards-produtos-vendas/CardProdutoVenda";
import HeaderResumoCompra from "../header-resumo-compra/HeaderResumoCompra";
import ItemResumoCompra from "../item-resumo-compra/ItemResumoCompra";
import api from "../api/api";

const ComprasComponent = () => {
  const [listaProdutos, setListaProdutos] = useState({});
  const [resumoProdutos, setResumoProdutos] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (status === "idle") {
      setStatus("loading");
      api
        .get("/produtos")
        .then((response) => {
          setStatus("loaded");
          setListaProdutos(response.data);
        })
        .catch((error) => console.error(error));
    }
    setStatus("idle");
  }, [listaProdutos, status]);

  const itens = resumoProdutos.reduce((acc, itemNovo) => {
    if (!acc.hasOwnProperty(itemNovo.nome)) {
      acc[itemNovo.nome] = {
        preco: itemNovo.preco,
        quantidade: itemNovo.quantidade,
        nome: itemNovo.nome,
      };
    } else {
      acc[itemNovo.nome] = {
        preco: itemNovo.preco,
        quantidade: acc[itemNovo.nome].quantidade + 1,
        nome: itemNovo.nome,
      };
    }

    return acc;
  }, {});

  const valorTotal = Object.values(itens).reduce((acc, itemNovo) => {
    acc = itemNovo.quantidade * itemNovo.preco + acc
    return acc
  }, 0)

  const valorFormatado = `${valorTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`;

  return status === "loading" ? (
    <div>loading....</div>
  ) : (
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
              {listaProdutos.data &&
                listaProdutos.data.map((produto) => {
                  return (
                    <CardProdutoVenda
                      image={produto.imagem}
                      preco={produto.valor}
                      titulo={produto.nome}
                      handleClick={setResumoProdutos}
                    />
                  );
                })}
            </CardProdutos>
          </ContainerProdutos>
        </Produtos>
        <ResumoCompras>
          <ContainerResumoCompras>
            <ContentResumos>
              <ContainerContent>
                <HeaderResumoCompra
                  key="Resumo"
                  contagemItens={Object.keys(itens).length  }
                />
                <Itens>
                {Object.values(itens).map((item) => (
                  // console.log(item)
                  <ItemResumoCompra
                    nomeProduto={item.nome}
                    precoProduto={item.preco}
                    quantidade={item.quantidade}
                    handleClick={setResumoProdutos}
                  />
                ))}
              </Itens>
              </ContainerContent>
            </ContentResumos>
            <BtnPagamento>
              <span>Pagamento</span>
              <span>{valorFormatado}</span>
            </BtnPagamento>
          </ContainerResumoCompras>
        </ResumoCompras>
      </Container>
    </Body>
  );
};

export default ComprasComponent;
