import React, { Component } from "react";
import { ContainerHome, Botoes } from "."
import LogoCampestre from "../../assets/images/logo-campestre.png";

class HomePage extends Component {

    render() {

        function redirect(url) {
            window.location.href = url;
        }

        return (
            <ContainerHome>
                <img className="logo" src={LogoCampestre} alt="Logo Campestre" />
                <h1>Campestre Sem Fila</h1>
                <div className="container_botoes">
                    <div>
                        <Botoes>
                            <button onClick={() => redirect("/fila-pedidos")}>Fila</button>
                            <button onClick={() => redirect("/compras")}>Compras</button>
                            <button onClick={() => redirect("/acompanhar-pedidos")}>Acompanhar Pedido</button>
                            <button onClick={() => redirect("/adicionar-produto")}>Adicionar Produto</button>
                            <button onClick={() => redirect("/atualizar-produto")}>Atualizar Produto</button>
                            <button onClick={() => redirect("/detalhes-pedido")}>Detalhes Pedidos</button>
                        </Botoes>
                    </div>
                </div>
            </ContainerHome>
        )
    }
}

export default HomePage;