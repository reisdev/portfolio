import React, { Component } from 'react';

import './css/style.css';

import Personal from "./components/personal"

class App extends Component {
  componentWillMount(){
    document.title="Matheus Reis - CV"
  }
  render() {
    return (
      <div className="App">
      <head><title>Matheus Reis - CV</title></head>
          <Personal/>
      </div>
    );
  }
}

export default App;
