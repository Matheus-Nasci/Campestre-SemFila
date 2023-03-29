import React, { Component } from "react";
import Menu from "../../components/Menu/Menu";
import { Container } from "./index";
import ComprarComponent from "../../components/ComprarComponent/ComprarComponent";

class Comprar extends Component {
    render() {
        return (
            <>
                <Container>
                    <Menu paginaSelecionada={"Comprar"} />
                    <ComprarComponent />
                </Container>
            </>
        )
    }
}

export default Comprar;