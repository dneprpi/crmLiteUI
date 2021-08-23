import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages/Index";
import Google from "./components/google/Google";
import Wallets from "./components/Wallets/Wallets";
import AuthentificationForm from "./components/Forms/AuthentificationForm";
import RegistrationForm from "./components/Forms/RegistrationForm";
import Account from "./components/account/account";
import Leads from "./components/Leads";

function App() {
  sessionStorage.setItem("isLogged", "false");
  return (
    <>
      <Router>
        <Switch></Switch>
        <Home />
        <Route path="/" exact>
          <Account />
        </Route>
        <Route path="/sign-in">
          {sessionStorage.getItem("isLogged") == true ? (
            <Redirect to="/" />
          ) : (
            <AuthentificationForm />
          )}
        </Route>
        <Route path = "/leads">
          <Leads/>          
        </Route>
        <Route path="/register">
          <RegistrationForm />
        </Route>
      </Router>
    </>
  );
}

export default App;
