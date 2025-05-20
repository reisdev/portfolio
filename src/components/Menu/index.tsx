import { useCallback, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./Menu.module.css";
import ThemeSwitch from "components/ThemeSwitch";

export default function Menu() {
  const currentRoute = useLocation();
  const { t } = useTranslation("common");

  const [isOpen, setIsOpen] = useState(false);

  const routes = useMemo(
    () => [
      { path: "/", text: t("home") },
      { path: "/career", text: t("career") },
    ],
    [t]
  );

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <nav className={styles.menu}>
      <div className={styles.content}>
        <div className={styles.section}>
          <button className={styles.icon} onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className={`${styles.collapsible} ${isOpen ? styles.opened : ""}`}>
            {routes.map((route, index) => (
              <Link
                className={
                  route.path === currentRoute.pathname
                    ? styles.active
                    : undefined
                }
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
