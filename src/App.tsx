import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Helmet } from 'react-helmet';
import ReactGA from "react-ga4";

import Router from "core/router";
import i18n from 'core/i18next';
import './styles/App.css';

export default function App() {
  useEffect(() => {
    ReactGA.send({hitType: "pageview", page: `${window.location.pathname}${window.location.search}`});
  }, []);

  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
        <Helmet title={"Matheus Reis - ReisDev"} />
        <Router />
      </I18nextProvider>
    </div>
  );
}
