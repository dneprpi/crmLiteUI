import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Index";
import AuthentificationForm from "./components/Forms/AuthentificationForm";
import RegistrationForm from "./components/Forms/RegistrationForm";
import Deposit from './components/Deposit';

function App() {
  return (
    <>
      <Router>
        <Home />
        <Route path = "/sign-in">
          <AuthentificationForm/>          
        </Route>
        <Route path = "/register">
          <RegistrationForm/>          
        </Route>
        <Route path="/curency-deposit">
          <Deposit />
        </Route>
      </Router>
      <Deposit/>
    </>
  );
}

export default App;
