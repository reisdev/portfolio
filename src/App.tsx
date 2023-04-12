import { useMemo, useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactGA from "react-ga";

import Home from "./pages/home";
import './styles/App.css';

function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
