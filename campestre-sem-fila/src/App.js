import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import FilaPedidos from './pages/FilaPedidos/FilaPedidos';
import Vendas from "./pages/Vendas/Vendas";
import Produtos from "./pages/Produtos/Produtos";
import Comprar from "./pages/Comprar/Comprar";
import Pedidos from "./pages/Pedidos/Pedidos";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/fila-pedidos" component={FilaPedidos}></Route>
        <Route path="/vendas" component={Vendas}></Route>
        <Route path="/produtos" component={Produtos}></Route>
        <Route path="/comprar" component={Comprar}></Route>
        <Route path="/pedidos" component={Pedidos}></Route>
      </Switch>
    </Router>
  );
}

export default App;
