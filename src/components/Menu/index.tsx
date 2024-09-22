import { useMemo } from "react"
import styles from "./Menu.module.css"
import { Link, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function Menu() {
    const currentRoute = useLocation();
    const { t } = useTranslation("common");

    const routes = useMemo(() => [
        { path: "/", text: t("home") },
        { path: "/career", text: t("career") }
    ], [t]);

    return <nav>
        <ul className={styles.menu}>
            {routes.map((route, index) =>
                <li className={route.path === currentRoute.pathname ? styles.active : undefined}
                    key={index}>
                    <Link
                        to={route.path}>
                        {route.text}
                    </Link>
                </li>)}
            <li>
                <a href={"https://blog.reisdev.com.br"}
                    target="_blank" rel="noreferrer">
                    {t("blog")}
                </a>
            </li>
        </ul>
    </nav>
}