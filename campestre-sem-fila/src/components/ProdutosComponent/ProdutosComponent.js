import React, { useState, useEffect } from "react";
import CardProduto from "../CardProduto/CardProduto";
import { HeaderContent, ContentPrincipal, Content, CardContainer } from "./index";
import axios from "axios";
import ModalAdicionarProduto from '../ModalAdicionarProduto/ModalAdicionarProduto'

function ProdutosComponent() {

    const [produtos, setProdutos] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        axios.get("http://192.168.0.108:8080/campestre-sem-fila/api/v1/produtos")
            .then(response => setProdutos(response.data.data))
            .catch(error => console.log(error));
    }, [modalOpen]); // atualiza quando modalOpen mudar

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <Content>
            <HeaderContent>
                <h1>Produtos</h1>
            </HeaderContent>
            <ContentPrincipal>
                {produtos.map((produto) => (
                    <CardContainer key={produto.id}>
                        <CardProduto
                            nome={produto.nome}
                            tamanho={produto.tamanho}
                            valor={produto.valor}
                            imagem={produto.imagem}
                        />
                    </CardContainer>
                ))}
            </ContentPrincipal>
            <button
                    className="openModalBtn"
                    onClick={() => {
                        setModalOpen(true);
                    }}
                >
                    Adicionar Produto
                </button>
            {modalOpen && <ModalAdicionarProduto setOpenModal={closeModal} />}
        </Content>
    );
}

export default ProdutosComponent;
