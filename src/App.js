import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Index';

function App() {
  return (
    <>
     <Router>
       <Home />
     </Router>

    </>
  );
}

export default App;
