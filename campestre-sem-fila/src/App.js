import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Pedidos from './pages/Pedidos/Pedidos';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pedidos" component={Pedidos}></Route>
      </Switch>
    </Router>
  );
}

export default App;
