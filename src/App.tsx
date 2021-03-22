import React, { useMemo } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from "./pages/home";

import './App.css';
import { Helmet } from 'react-helmet';

function App() {

  const routes = useMemo(() => [{
    path: "/",
    component: Home
  }], []);


  return (
    <div className="App">
      <Helmet title={"Matheus Reis - ReisDev"} />
      <HashRouter>
        <Switch>
          {routes.map(((route) => <Route
            key={route.path}
            component={route.component} path={route.path}
          />))}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
