import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Index";
import Google from "./components/google/Google";
import Wallets from "./components/Wallets/Wallets";
import Currency from "./components/currency";

function App() {
  return (
    <>
      <Router>
       <Switch></Switch>
       <Home />
     </Router> 
    <Currency />
    </>
  );
}

export default App;
