import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

import Home from '../home';
import Faq from '../faq';

import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Starter</h1>
          <Link to="/">Home</Link>
          <Link to="/faq">Faq</Link>
        </header>
        <main>
          <Route exact path="/" component={Home}/>
          <Route exact path="/faq" component={Faq}/>
        </main>
      </div>
    );
  }
}

export default App;