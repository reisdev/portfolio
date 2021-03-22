import styles from "../styles/Home.module.css";
import { useMemo } from "react";


import ProfilePicture from "../assets/img/profile.jpg";

import InstagramLogo from "../assets/img/instagram.png";
import TelegramLogo from "../assets/img/telegram.svg";
import LinkedInLogo from "../assets/img/linkedin.svg";
import TwitterLogo from "../assets/img/twitter.svg";
import YoutubeLogo from "../assets/img/youtube.svg";
import TwitchLogo from "../assets/img/twitch.svg";
import GitHubLogo from "../assets/img/github.svg";
import DevToLogo from "../assets/img/devto.svg";

export default function Home() {
  const social = useMemo(
    () => [
      {
        logo: InstagramLogo,
        url: "https://instagram.com/reisdev",
        height: 60,
        width: 60,
      },
      {
        logo: TwitterLogo,
        url: "https://twitter.com/reisdev",
      },
      {
        logo: YoutubeLogo,
        url: "https://youtube.com/reisdev",
        title: "No YouTube",
      },
      {
        logo: TwitchLogo,
        url: "https://twitch.tv/reisdev",
        title: "Na Twitch",
      },
      {
        logo: GitHubLogo,
        url: "https://github.com/reisdev",
        title: "No GitHub",
      },
      {
        logo: DevToLogo,
        url: "https://dev.to/reisdev",
      },
      {
        logo: TelegramLogo,
        url: "https://t.me/@reisdev",
      },
      {
        logo: LinkedInLogo,
        url: "https://linkedin.com/in/matheus-dos-reis-de-jesus",
        title: "No LinkedIn",
      },
    ],
    []
  );
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.personal}>
          <img
            className={styles.picture}
            alt="Foto de perfil"
            src={ProfilePicture}
          />
          <section className={styles.data}>
            <section className={styles.info}>
              <section className={styles.name}>
                <h1>
                  Matheus Reis - <i>ReisDev</i>
                </h1>
              </section>
              <section className={styles.job}>
                <span>
                  <b>Accenture</b> - Analista de Ciência de Dados
                </span>
              </section>
            </section>
            <section className={styles.social}>
              {social.map((network) => (
                <div key={network.url}>
                  <a href={network.url} rel="noreferrer" target="blank">
                    <img
                      src={network.logo}
                      width={network.width || "50"}
                      height={network.height || "50"}
                      alt={""}
                    />
                  </a>
                </div>
              ))}
            </section>
          </section>
        </section>
      </main>
    </div>
  );
}
