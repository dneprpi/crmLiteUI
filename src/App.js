import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Index';
import Deposit from './components/deposit';

function App() {
  return (
    <>
    
     <Router>
       <Switch></Switch>
       <Home />
     </Router>
     <Deposit/>
    </>
  );
}

export default App;
