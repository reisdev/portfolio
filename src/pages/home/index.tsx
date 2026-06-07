import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

import useAnalyticsEventTracker from "../../core/hooks/useAnalyticsEventTracker.js";

import styles from "./home.module.css";

export default function Home() {
  const trackSocial = useAnalyticsEventTracker("Social");
  const [shortcuts, setShortcuts] = useState<any[]>();
  const { t } = useTranslation();

  useEffect(() => {
    loadShortcuts()

    async function loadShortcuts() {
      const response = await fetch("/assets/social.json");
      let data = await response.json();
      setShortcuts(data);
    }
  }, []);

  return (
    <main className={styles.main}>
      <title>Matheus Reis - ReisDev</title>
      <section className={styles.container}>
        <section className={styles.personal}>
          <section className={styles.data}>
            <section className={styles.info}>
              <h1 className={styles.name}>Matheus Reis</h1>
              <span className={styles.job}>
                <b>{t("career:jobDescription")}</b> at {t("career:company")}
              </span>
              <p className={styles.description}>
                <Trans i18nKey="career:shortDescription" components={{ i: <i /> }} />
              </p>
            </section>
            <ul className={styles.social}>
              {shortcuts?.map((shortcut) => (
                <li className={styles.item} key={shortcut.title}>
                  <a href={shortcut.url} rel="noreferrer noopener" target="_blank" onClick={() => trackSocial(shortcut.title)}>
                    <i className={`${shortcut.logo} ${styles.logo}`}></i><span className={styles.title}></span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <img className={styles.picture} alt={t("picture") || ""} src="/assets/profile.webp" />
        </section>
      </section>
    </main>
  );
}
