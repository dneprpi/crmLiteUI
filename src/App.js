import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Index";
import AuthentificationForm from "./components/Forms/AuthentificationForm";
import RegistrationForm from "./components/Forms/RegistrationForm";
import Deposit from "./components/deposit";
import CurrencyTransactionHistory from "./components/currency-transaction-history";
import StockTransactionHistory from "./components/stock-transaction-history";
import Currency from "./components/currency";
//import Leads from "./components/Leads";

function App() {
  return (
    <>
      <Router>
        <Home />
        <Route path="/sign-in">
          <AuthentificationForm />
        </Route>
        <Route path="/register">
          <RegistrationForm />
        </Route>
        {/* <Route path = "/leads">
          <Leads/>          
        </Route> */}
        <Route path="/curency-deposit">
          <Deposit />
        </Route>
        <Route path="/currency">
          <Currency />
        </Route>
      </Router>

      {/* <CurrencyTransactionHistory />
      <StockTransactionHistory /> */}
    </>
  );
}

export default App;
