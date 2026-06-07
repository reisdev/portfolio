import { useCallback, useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";

import ThemeContext, { Theme } from "@core/theme/ThemeContext";
import styles from "./theme-switch.module.css";

export default function ThemeSwitch() {
  const { t } = useTranslation();
  const { theme, setTheme } = useContext(ThemeContext);

  const switchTheme = useCallback(() => {
    switch (theme) {
      case Theme.light:
        setTheme(Theme.dark);
        break;
      case Theme.dark:
        setTheme(Theme.light);
        break;
    }
  }, [theme, setTheme]);

  const icon = useMemo(() => theme === Theme.light ?  "fa-regular fa-moon" : "fa-regular fa-sun", [theme]);

  return (
    <button className={styles.switch} onClick={switchTheme}>
      <i className={icon} />
      <span>{t("switchColorScheme")}</span>
    </button>
  );
}
