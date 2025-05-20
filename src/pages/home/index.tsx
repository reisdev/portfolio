import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import useAnalyticsEventTracker from "core/hooks/useAnalyticsEventTracker";
import Videos from "components/Videos";
import Posts from "components/Posts";

import styles from "./Home.module.css";

import ProfilePicture from "assets/img/profile.webp";
import socialShortcuts from "./social.json"

export default function Home() {
  const trackSocial = useAnalyticsEventTracker("Social");
  const { t } = useTranslation();

  const shortcuts = useMemo(() => (socialShortcuts), []);

  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <section className={styles.personal}>
          <img
            className={styles.picture}
            alt={t("picture") || ""}
            src={ProfilePicture}
          />
          <section className={styles.data}>
            <section className={styles.info}>
                <h1 className={styles.name}>
                  Matheus Reis <i>ReisDev</i>
                </h1>
                <span className={styles.job}>
                  <b>{t("career:jobDescription")}</b> at <a href="https://kwan.com" rel="noreferrer noopener" target="_blank">{t("career:company")}</a>
                </span>
                <p className={styles.description}>
                   {t("career:shortDescription")}
                </p>
            </section>
            <ul className={styles.social}>
              {shortcuts.map((shortcut) => (
                <li className={styles.item} key={shortcut.title} onClick={() => trackSocial(shortcut.title)}>
                  <a href={shortcut.url} rel="noreferrer noopener" target="_blank">
                    <i className={`${shortcut.logo} ${styles.logo}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
      <section className={styles.content}>
        <Posts />
        <Videos />
      </section>
    </main>
  );
}
