import styled from "styled-components";

const Content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    margin: 0;
    padding: 0;
    overflow: hidden;
`

const PedidosComponent = styled.div`
    width: 50%;
    height: 100%;
    margin-top:
`

const FotoAperetiva = styled.div`
    width: 50%;
    height: 100%;
    img {
        height: 100%;
    }
`

const Header = styled.div`
    h1 {
        text-align: center;
        font-weight: 900;
    }
`

const NumerosPedidos = styled.div`
    width: 100%;
    display: flex;
    margin-top: -2%;
`

const PedidosPreparando = styled.div`
    width: 50%;
    height: 100%;
`

const PedidosProntos = styled.div`
    width: 50%;
    height: 100%;
`

const TitlePedidoPreparando = styled.h1`
    text-align: center;
    background-color: #E4B226;
    color: white;
    padding: 2% 0;
`

const TitlePedidoPronto = styled.h1`
    text-align: center; 
    background-color: #DA291C;
    color: white;
    padding: 2% 0;  
`

const ListaNumerosPreparo = styled.ul`
    column-count: 2;
    list-style: none;
`
const ListaNumerosPronto = styled.ul`
    column-count: 2;
    column-width: 300px;
    list-style: none;
    li {
        margin-top: -1rem;
    }
`



export { Content, 
PedidosComponent, 
FotoAperetiva, 
Header, 
NumerosPedidos, 
PedidosPreparando, 
PedidosProntos, 
TitlePedidoPreparando, 
TitlePedidoPronto, 
ListaNumerosPreparo, 
ListaNumerosPronto }
