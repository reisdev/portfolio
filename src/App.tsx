import { Suspense, useState, useEffect, useMemo } from "react";
import { I18nextProvider } from "react-i18next";
import ReactGA from "react-ga4";

import Router from "@core/router";
import i18n from "@core/i18next";
import ThemeContext, { Theme } from "@core/theme/ThemeContext";

export default function App() {
  let [theme, setTheme] = useState<Theme>(Theme.dark);
  let themeProviderValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: `${globalThis.location.pathname}${globalThis.location.search}`,
    });
  }, []);

  useEffect(() => {
    document.documentElement.style.colorScheme = theme === Theme.dark ? "dark" : "light"
  }, [theme]);

  return (
    <Suspense fallback={<></>}>
        <ThemeContext.Provider value={themeProviderValue}>
          <I18nextProvider i18n={i18n}>
            <Router />
          </I18nextProvider>
        </ThemeContext.Provider>
    </Suspense>
  );
}
