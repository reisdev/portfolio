import { useTranslation } from "react-i18next";

import styles from "./about.module.css";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <main className={styles.container}>
      <section className={styles.about}>
        <header>
          <h2>{t("about")}</h2>
        </header>
        <main>
          <p>{t("description")}</p>
        </main>
      </section>
    </main>
  );
}
