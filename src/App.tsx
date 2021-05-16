import React, { useMemo } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from "./pages/home";

import './styles/App.css';
import { Helmet } from 'react-helmet';

function App() {

  const routes = useMemo(() => [{
    path: "/",
    component: Home,
    exact: true
  }], []);

  return (
    <div className="App">
      <Helmet title={"Matheus Reis - ReisDev"} />
      <HashRouter basename="/">
        <Switch>
          {routes.map(((route) => <Route
            key={route.path}
            {...route}
          />))}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
