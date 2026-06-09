import { useCallback, useMemo, useState } from "react";
import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";

import ThemeSwitch from "@components/theme-switch";
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
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <nav className={styles.menu}>
      <div className={styles.content}>
        <div className={styles.section} aria-expanded={isOpen}>
          <button className={styles.icon} onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
            <span>{t("menu")}</span>
          </button>
          <div className={styles.collapsible}>
            {routes.map((route, index) => (
              <Link
                aria-current={route.path === currentRoute.pathname}
                to={route.path}
                key={index}
                onClick={toggleMenu}
              >
                {route.text}
              </Link>
            ))}
            <a
              href={"https://blog.reisdev.com.br"}
              target="_blank"
              rel="noreferrer"
            >
              {t("blog")}
            </a>
          </div>
        </div>
        <ThemeSwitch />
      </div>
    </nav>
  );
}
