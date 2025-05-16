import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import InstagramLogo from "../../assets/img/instagram.svg";
import ProfilePicture from "../../assets/img/profile.webp";
import TelegramLogo from "../../assets/img/telegram.svg";
import LinkedInLogo from "../../assets/img/linkedin.svg";
import XLogo from "../../assets/img/x.svg";
import TwitchLogo from "../../assets/img/twitch.svg";
import GitHubLogo from "../../assets/img/github.svg";
import Posts from "components/Posts";

import styles from "./Home.module.css";
import Youtube from "components/Youtube";
import useAnalyticsEventTracker from "core/hooks/useAnalyticsEventTracker";

export default function Home() {
  const trackSocial = useAnalyticsEventTracker("Social");
  const { t } = useTranslation();

  const shortcuts = useMemo(() => ([
    {
      logo: InstagramLogo,
      url: "https://instagram.com/reisdev",
      title: "Instagram"
    },
    {
      logo: XLogo,
      url: "https://x.com/reisdev",
      title: "X.com"
    },
    {
      logo: TelegramLogo,
      url: "https://t.me/reisdev",
      title: "Telegram"
    },
    {
      logo: LinkedInLogo,
      url: "https://linkedin.com/in/matheus-dos-reis-de-jesus",
      title: "LinkedIn",
    },
    {
      logo: GitHubLogo,
      url: "https://github.com/reisdev",
      title: "GitHub",
    },
    {
      logo: TwitchLogo,
      url: "https://twitch.tv/reisdev",
      title: "Twitch",
    }
  ]), []);

  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <section className={styles.personal}>
          <img
            className={styles.picture}
            alt={t("common.pictureAlt")}
            src={ProfilePicture}
          />
          <section className={styles.data}>
            <section className={styles.info}>
              <section className={styles.name}>
                <h1>
                  Matheus Reis <i>ReisDev</i>
                </h1>
              </section>
              <section className={styles.job}>
                <span>
                  <b>{t("currentJob")}</b> at <a href="https://kwan.com" rel="noreferrer noopener" target="_blank">{t("currentCompany")}</a>
                </span>
              </section>
            </section>
            <ul className={styles.social}>
              {shortcuts.map((shortcut) => (
                <li className={styles.item} key={shortcut.title} onClick={() => trackSocial(shortcut.title)}>
                  <a href={shortcut.url} rel="noreferrer noopener" target="_blank">
                    <img
                      className={styles.logo}
                      src={shortcut.logo}
                      alt={shortcut.title + " logo"}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
      <section className={styles.content}>
        <Posts />
        <Youtube />
      </section>
    </main>
  );
}
