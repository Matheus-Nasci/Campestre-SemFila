import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import FilaPedidos from "./pages/FilaPedidos/FilaPedidos";
import Compras from "./pages/compras/Compras";
import AcompanharPedidos from "./pages/AcompanharPedidos/AcompanharPedidos";
import AdicionarProdutoPage from "./pages/AdicionarProduto/AdicionarProdutoPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/fila-pedidos" component={FilaPedidos} />
        <Route path="/compras" component={Compras} />
        <Route path="/acompanhar-pedidos" component={AcompanharPedidos} />
        <Route path="/adicionar-produto" component={AdicionarProdutoPage} />
      </Switch>
    </Router>
  );
}

export default App;
