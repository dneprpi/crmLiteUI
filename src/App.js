import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Index';
import Google from './components/google/Google';
import Wallets from './components/Wallets/Wallets';

function App() {
  return (
    <>
    
     <Router>
       <Switch></Switch>
       <Home />
     </Router>
     <Google />
     <Wallets/>
    </>
  );
}

export default App;
