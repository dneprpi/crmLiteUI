import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "./pages/Index";
import AuthentificationForm from "./components/Forms/AuthentificationForm";
import RegistrationForm from "./components/Forms/RegistrationForm";
import Account from "./components/account/account";

function App() {
  return (
    <>
      <Router>
        <Switch></Switch>
        <Home />
        <Route path="/" exact>
          <Account />
        </Route>
        <Route path="/sign-in">
          {sessionStorage.getItem("isLogged") === true ? (
            <Redirect to="/" exact />
          ) : (
            <AuthentificationForm />
          )}
        </Route>
        <Route path="/register">
          <RegistrationForm />
        </Route>
      </Router>
    </>
  );
}

export default App;
