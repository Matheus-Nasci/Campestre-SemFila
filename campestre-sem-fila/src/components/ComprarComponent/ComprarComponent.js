import React from "react";
import { Container, ContentLeft, ContentRight, FormInput, Input, Itens, Title, ContainerContent } from "./index";
import ProdutoComprarComponent from "../ProdutoComprarComponent/ProdutoComprarComponent";
import ResumoCompras from "../ResumoCompras/ResumoCompras";

function ComprarComponent() {
    return (
        <>
            <Container>
                <Title>Compras</Title>
                <ContainerContent>
                    <ContentLeft>
                        <FormInput>
                            <Input placeholder="Nome do cliente"></Input>
                            <Input placeholder="Busque um produto"></Input>
                        </FormInput>
                        <Itens>
                            <ProdutoComprarComponent
                                imagem={"https://www.imagensempng.com.br/wp-content/uploads/2021/02/5c2ce626e0321_acai66.png"}
                                nome={"Açaí"}
                                preco={12.00}
                            />
                            <ProdutoComprarComponent
                                imagem={"https://www.imagensempng.com.br/wp-content/uploads/2021/02/5c2ce626e0321_acai66.png"}
                                nome={"Açaí"}
                                preco={12.00}
                            />
                        </Itens>
                    </ContentLeft>
                    <ContentRight>
                        <ResumoCompras></ResumoCompras>
                    </ContentRight>
                </ContainerContent>
            </Container>
        </>
    )
}

export default ComprarComponent;