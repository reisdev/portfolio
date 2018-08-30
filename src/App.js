import React, { Component } from 'react';

import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import Habilities from './components/Habilities'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Matheus dos Reis - GitHub.io</h1>
        </header>
        <div className="container-fluid" style={{paddingTop: 20, width: '100%'}}>
          <Habilities/>
        </div>
      </div>
    );
  }
}

export default App;
