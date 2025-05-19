import { Suspense, useState, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";

import Router from "core/router";
import i18n from "core/i18next";
import ThemeContext, { Theme } from "core/theme/ThemeContext";
import styles from "./styles/app.module.css";

export default function App() {
  let [theme, setTheme] = useState<Theme>(Theme.dark);
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: `${window.location.pathname}${window.location.search}`,
    });
  }, []);

  return (
    <Suspense fallback={<></>}>
      <div className={styles.container} style={{ colorScheme: theme === Theme.dark ? "dark" : "light" }}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <I18nextProvider i18n={i18n}>
            <Helmet title={"Matheus Reis - ReisDev"} />
            <Router />
          </I18nextProvider>
        </ThemeContext.Provider>
      </div>
    </Suspense>
  );
}
