import { useTranslation } from "react-i18next";

import styles from "./section.module.css";

interface SectionProps {
  title: string;
  redirectTitle?: string | undefined | null;
  icon?: string;
  redirect?: string;
  children: any;
}

export default function Section({
  title,
  icon,
  redirectTitle,
  redirect,
  children,
}: SectionProps) {
  const { t } = useTranslation("components");
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <span className={styles.title}>
          {icon && <i className={`${styles.icon} ${icon}`} />}
          <h2>{title}</h2>
        </span>
        {redirect && (
          <a
            className={styles.shortcut}
            href={redirect}
            target="_blank"
            rel="noreferrer"
          >
            {redirectTitle && <span>{redirectTitle}</span>}
            <i className="fas fa-chevron-right"></i>
          </a>
        )}
      </header>
      <section className={styles.section}>{children}</section>
    </section>
  );
}
