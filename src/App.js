import React from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import About from './pages/About';
import Navigation from './components/Navigation'

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default function App() {
  return (
    <Router>
        <Navigation/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/shop"><Shop/></Route>
          <Route path="/contact"><Contact/></Route>
        </Switch>

    </Router>
  );
}
