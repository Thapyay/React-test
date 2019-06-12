import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import {Header, Sidebar} from './containers';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>      
      <Route path = '/' exact component = {Header} />
      <Route path = '/' exact component = {Sidebar} />
    </Router>
  );
}

export default App;
