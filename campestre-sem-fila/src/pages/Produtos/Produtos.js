import React, { Component } from "react";
import Menu from "../../components/Menu/Menu";
import { Container } from "./index";
import ProdutosComponent from "../../components/ProdutosComponent/ProdutosComponent";

class Produtos extends Component {
    componentDidMount() {
        document.title = "Produtos";
    }
    render() {
        return (
            <>
                <Container>
                    <Menu paginaSelecionada={"Produtos"} />
                    <ProdutosComponent />
                </Container>
            </>
        );
    }
}

export default Produtos;
