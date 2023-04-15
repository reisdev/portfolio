import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from "react-ga4";

import Router from "core/router";
import './styles/App.css';

export default function App() {
  useEffect(() => {
    ReactGA.send({hitType: "pageview", page: `${window.location.pathname}${window.location.search}`});
  }, []);

  return (
    <div className="App">
      <Helmet title={"Matheus Reis - ReisDev"} />
      <Router />
    </div>
  );
}
