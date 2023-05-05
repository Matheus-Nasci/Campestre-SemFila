import React, { useState } from "react";
import LogoCampestre from '../../assets/images/logo-campestre.png';
import { MenuDiv, HeaderMenu, ContentMenu, SectionMenu } from "./index";
import ItemMenu from "../ItemMenu/ItemMenu";
import Produtos from '../../assets/images/produtos.png';
import PedidosLogo from '../../assets/images/pedidos.png';
import CarrinhoLogo from '../../assets/images/carrinho.png';
import ComprarLogo from '../../assets/images/comprar.png';

function Menu({paginaSelecionada}) {
    return (
        <MenuDiv>
            <HeaderMenu>
                <img src={LogoCampestre}></img>
                <h1>CAMPESTRE</h1>
            </HeaderMenu>
            <ContentMenu>
                <SectionMenu>
                    <h5>MENU PRODUTOS</h5>
                    <ItemMenu icone={Produtos} texto={"Produtos"} src="produtos" selecionado={paginaSelecionada === "Produtos"} />
                </SectionMenu>
                <SectionMenu>
                    <h5>MENU PEDIDOS</h5>
                    <ItemMenu icone={PedidosLogo} texto={"Pedidos"} src="pedidos" selecionado={paginaSelecionada === "Pedidos"} />
                </SectionMenu>
                <SectionMenu>
                    <h5>MENU VENDAS</h5>
                    <ItemMenu icone={CarrinhoLogo} texto={"Vendas"} src="vendas" selecionado={paginaSelecionada === "Vendas"} />
                    <ItemMenu icone={ComprarLogo} texto={"Comprar"} src="comprar" selecionado={paginaSelecionada === "Comprar"} />
                </SectionMenu>
            </ContentMenu>
        </MenuDiv>
    )
}
export default Menu;
