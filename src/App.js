import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Index';
import Google from './components/google/Google';
import Wallets from './components/Wallets/Wallets';
import Currencies from './components/Currencies/Currencies';

function App() {
  return (
    <>
    
     <Router>
       <Switch></Switch>
       <Home />
     </Router>
     <Wallets/>
     <Currencies/>
    </>
  );
}

export default App;
