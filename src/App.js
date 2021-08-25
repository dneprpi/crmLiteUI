import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Index";
import AuthentificationForm from "./components/Forms/AuthentificationForm";
import RegistrationForm from "./components/Forms/RegistrationForm";
import Leads from "./components/Leads";
import Deposit from './components/deposit';
import Withdraw from "./components/withdraw";
import CurrencyTransactionHistory from "./components/currency-transaction-history/currency-transaction-history";
import Currency from "./components/currency";

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
        <Route path = "/leads">
          <Leads/>          
        </Route>
        <Route path="/curency-deposit">
          <Deposit />
        </Route>
        <Route path="/curency-withdraw">
          <Withdraw />
        </Route>
        <Route path="/history">
          <CurrencyTransactionHistory/>
        </Route>
        <Route path="/currency">
          <Currency />
        </Route>
      </Router>
    </>
  );
}

export default App;
