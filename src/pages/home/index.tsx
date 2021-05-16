import { useMemo } from "react";

import InstagramLogo from "../../assets/img/instagram.png";
import ProfilePicture from "../../assets/img/profile.png";
import HashnodeLogo from "../../assets/img/hashnode.png";
import TelegramLogo from "../../assets/img/telegram.svg";
import LinkedInLogo from "../../assets/img/linkedin.svg";
import TwitterLogo from "../../assets/img/twitter.svg";
import YoutubeLogo from "../../assets/img/youtube.svg";
import TwitchLogo from "../../assets/img/twitch.svg";
import GitHubLogo from "../../assets/img/github.svg";
import DevToLogo from "../../assets/img/devto.svg";
import Posts from "components/Posts";

import styles from "./Home.module.css";
import Youtube from "components/Youtube";

export default function Home() {
  const { contentMedia, socialMedia } = useMemo(() => ({
    socialMedia: [
      {
        logo: InstagramLogo,
        url: "https://instagram.com/reisdev",
        height: 60,
        width: 60,
        title: "Instagram"
      },
      {
        logo: TwitterLogo,
        url: "https://twitter.com/reisdev",
        title: "Twitter"
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
    ],
    contentMedia: [
      {
        logo: YoutubeLogo,
        url: "https://youtube.com/reisdev",
        title: "YouTube",
      },
      {
        logo: TwitchLogo,
        url: "https://twitch.tv/reisdev",
        title: "Twitch",
      },
      {
        logo: HashnodeLogo,
        url: "https://blog.reisdev.com.br",
        title: "Blog"
      },
      {
        logo: DevToLogo,
        url: "https://dev.to/reisdev",
        title: "Dev.to"
      }
    ]
  }), []);

  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <section className={styles.personal}>
          <img
            className={styles.picture}
            alt={"Fotografia do autor desta página. Matheus é negro, tem barba e está usando um óculos de grau. Ao fundo, um microfone e dois monitores."}
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
            <ul className={styles.social}>
              {socialMedia.map((network) => (
                <li key={network.url}>
                  <a href={network.url} rel="noreferrer noopener" target="_blank">
                    <img
                      src={network.logo}
                      width={network.width || "50"}
                      height={network.height || "50"}
                      alt={network.title + " logo"}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <ul className={styles.shortcut}>
            {contentMedia.map((network) => (
              <li key={network.title}>
                <a
                  className={styles.item}
                  href={network.url}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <img src={network.logo} alt={`${network.title} logo`}
                    width={"50"} height={"50"} />
                  <span>{network.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </section>
      <Posts />
      <Youtube />
    </main>
  );
}
