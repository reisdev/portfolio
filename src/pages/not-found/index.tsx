import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import styles from "./not-found.module.css";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <main className={styles.main}>
      <title>404 — Not Found</title>
      <section className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>{t("notFound.title") || "Page not found"}</h2>
        <p className={styles.description}>{t("notFound.description") || "The page you requested doesn't exist or has been moved."}</p>
        <Link to="/" className={styles.homeLink}>{t("notFound.home") || "Go back home"}</Link>
      </section>
    </main>
  );
}
