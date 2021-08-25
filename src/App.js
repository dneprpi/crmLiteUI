import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Index";
import Google from "./components/google/Google";
import Wallets from "./components/Wallets/Wallets";
import AuthentificationForm from "./components/Forms/AuthentificationForm";
import RegistrationForm from "./components/Forms/RegistrationForm";
import GoogleTFAModalWindowLogic from "./components/Modals/GoogleTFAModalWindow/GoogleTFAModalWindowLogic"
function App() {
  return (
    <>
      <Router>
        <Switch></Switch>
        <Home />
        <Route path = "/sign-in">
          <AuthentificationForm/>          
        </Route>
        <Route path = "/register">
          <RegistrationForm/>          
        </Route>
          <GoogleTFAModalWindowLogic/>
          
      </Router>
    </>
  );
}

export default App;
