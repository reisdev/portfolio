import React, { Component } from "react";

import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./controllers/store";

import "./css/style.css";

import Personal from "./components/personal";
import Menu from "./components/menu";

const store = createStore(reducers);

class App extends Component {
  state = { dark: false };
  render() {
    store.subscribe(() => {
      this.setState({ dark: store.getState().darkMode });
    });
    return (
      <Provider store={store}>
        <div className={`App ${this.state.dark ? "dark" : ""}`}>
          <Menu />
          <Personal />
        </div>
      </Provider>
    );
  }
}

export default App;
