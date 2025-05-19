import { useCallback, useContext, useMemo } from "react";

import ThemeContext, { Theme } from "core/theme/ThemeContext";
import styles from "./ThemeSwitch.module.css";

export default function ThemeSwitch() {
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

  const className = useMemo(() => {
        return theme === Theme.light ? "fa-regular fa-sun" : "fa-regular fa-moon"
  }, [theme])

  return (
    <button className={styles.switch} onClick={switchTheme}>
      <i className={className} />
    </button>
  );
}
