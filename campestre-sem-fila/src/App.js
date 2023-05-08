import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import FilaPedidos from "./pages/FilaPedidos/FilaPedidos";
import Compras from "./pages/compras/Compras";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/fila-pedidos" component={FilaPedidos}></Route>
        <Route path="/compras" component={Compras}></Route>
      </Switch>
    </Router>
  );
}

export default App;
