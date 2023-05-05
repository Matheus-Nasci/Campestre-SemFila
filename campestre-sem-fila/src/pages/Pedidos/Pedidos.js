import React, { Component } from "react";
import Menu from "../../components/Menu/Menu";

class Pedidos extends Component {
    componentDidMount() {
        document.title = "Fila Pedidos";
    }
    render() {
        return (
            <>
            <Menu paginaSelecionada={"Pedidos"}/>
            </>
        )
    }
}

export default Pedidos;