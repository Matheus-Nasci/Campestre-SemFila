import React, {Component} from "react";
import HeaderAcompanharPedidos from "../../components/header-acompanhar-pedidos/HeaderAcompanharPedidos";
import AcompanharPedidosComponent from "../../components/acompanhar-pedido-component/AcompanharPedidoComponent";

class AcompanharPedidos extends Component {
    render() {
        return (
            <>
                <HeaderAcompanharPedidos />
                <AcompanharPedidosComponent />
            </>
        )
    }
}

export default AcompanharPedidos;