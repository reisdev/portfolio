import React, { Component } from 'react';

import './css/style.css';

import Personal from "./components/personal"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Personal/>
      </div>
    );
  }
}

export default App;
