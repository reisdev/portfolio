import { useCallback, useMemo, useState } from "react";
import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";

import ThemeSwitch from "@components/theme-switch";
import LanguageSwitch from "@components/language-switch";
import styles from "./menu.module.css";

export default function Menu() {
  const currentRoute = useLocation();
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const routes = useMemo(
    () => [
      { path: "/", text: t("home") },
      { path: "/career", text: t("career.title") },
    ],
    [t]
  );

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);


  return (
    <nav className={styles.menu}>
      <div className={styles.content}>
        <div className={styles.section} aria-expanded={isOpen}>
          <button
            className={styles.icon}
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="main-navigation"
            aria-label={t("menu")}
          >
            <i className="fa-solid fa-bars" aria-hidden="true"></i>
            <span className={styles.iconLabel}>{t("menu")}</span>
          </button>

          <div
            id="main-navigation"
            className={styles.collapsible}
            data-open={isOpen}
            role="menu"
          >
            {routes.map((route, index) => (
              <Link
                role="menuitem"
                aria-current={route.path === currentRoute.pathname}
                to={route.path}
                key={index}
                onClick={() => setIsOpen(false)}
              >
                {route.text}
              </Link>
            ))}
            <a
              role="menuitem"
              href={"https://blog.reisdev.com.br"}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
            >
              {t("blog")}
            </a>
          </div>
        </div>
        <div className={styles.controls}>
          <LanguageSwitch />
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
