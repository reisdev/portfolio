import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./Menu.module.css";
import ThemeSwitch from "components/ThemeSwitch";

export default function Menu() {
  const currentRoute = useLocation();
  const { t } = useTranslation("common");

  const routes = useMemo(
    () => [
      { path: "/", text: t("home") },
      { path: "/career", text: t("career") },
    ],
    [t]
  );

  return (
    <nav className={styles.menu}>
      <div className={styles.content}>
        {routes.map((route, index) => (
          <Link
            className={
              route.path === currentRoute.pathname ? styles.active : undefined
            }
            to={route.path}
            key={index}
          >
            {route.text}
          </Link>
        ))}
        <a href={"https://blog.reisdev.com.br"} target="_blank" rel="noreferrer">
          {t("blog")}
        </a>
        <ThemeSwitch />
      </div>
    </nav>
  );
}
