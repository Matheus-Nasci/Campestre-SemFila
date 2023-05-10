import React from "react";
import { Body, Container, Header } from ".";
import PedidoUsuario from "../pedido-usuario/PedidoUsuario";

const AcompanharPedidosComponent = () => {
    return (
        <Body>
            <Container>
                <Header>
                    <h1>Pedidos</h1>
                </Header>
                <PedidoUsuario />
            </Container>
        </Body>
    )
}

export default AcompanharPedidosComponent;