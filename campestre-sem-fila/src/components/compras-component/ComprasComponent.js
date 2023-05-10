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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "../api/api";

const ComprasComponent = () => {
  const [nomeUsuario, setNomeUsuario] = useState("");
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
  }, [listaProdutos]);

  const handleSubmit = (event) => {

    let arrayProdutos = []

    Object.values(itens).forEach((item) => {
      for (let i = 0; i <= item.quantidade; i++) {
        arrayProdutos.push({
          idProduto: item.id
        })
      }
    })

    const payload = {
      pedido: {
        nomeCliente: nomeUsuario,
        produtos: arrayProdutos
      }
    }

    console.log(payload)


    api.post("/pedidos", payload)
      .then(response => {
        toast.success("Pedido efetuado com sucesso!")        
      }).catch(error => {
        console.log(error)
        toast.error("Pedido não efetuado.")
      })
  };

  const itens = resumoProdutos.reduce((acc, itemNovo) => {
    if (!acc.hasOwnProperty(itemNovo.nome)) {
      acc[itemNovo.nome] = {
        preco: itemNovo.preco,
        quantidade: itemNovo.quantidade,
        nome: itemNovo.nome,
        id: itemNovo.idProduto,
      };
    } else {
      acc[itemNovo.nome] = {
        preco: itemNovo.preco,
        quantidade: acc[itemNovo.nome].quantidade + 1,
        nome: itemNovo.nome,
        id: itemNovo.idProduto,
      };
    }

    return acc;
  }, {});

  const valorTotal = Object.values(itens).reduce((acc, itemNovo) => {
    acc = itemNovo.quantidade * itemNovo.preco + acc;
    return acc;
  }, 0);

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
              <input
                type="text"
                placeholder="Nome do cliente"
                onChange={(event) => setNomeUsuario(event.target.value)}
              />
              <input type="text" placeholder="Busque um Produto" />
            </Form>
            <CardProdutos>
              {listaProdutos.data &&
                listaProdutos.data.map((produto) => {
                  return (
                    <CardProdutoVenda
                      image={produto.imagem}
                      preco={produto.valor}
                      titulo={produto.nome}
                      idProduto={produto.id}
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
                  contagemItens={Object.keys(itens).length}
                />
                <Itens>
                  {Object.values(itens).map((item) => (
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
            <BtnPagamento onClick={handleSubmit}>
              <span>Pagamento</span>
              <span>{valorFormatado}</span>
            </BtnPagamento>
            <ToastContainer />
          </ContainerResumoCompras>
        </ResumoCompras>
      </Container>
    </Body>
  );
};

export default ComprasComponent;
