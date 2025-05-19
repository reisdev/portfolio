import { useTranslation } from "react-i18next";

import styles from "./Section.module.css";

interface SectionProps {
    title: string;
    icon: string | undefined;
    redirect: string;
    children: any;
}

export default function Section({ title, icon, redirect, children }: SectionProps) {
    const { t } = useTranslation("components");
    return <section className={styles.container}>
        <header className={styles.header}>
            <span className={styles.title}>
                { icon && <i className={`${styles.icon} ${icon}`} />}
                <h2 >{title}</h2>
            </span>
            <a className={styles.shortcut} href={redirect} target="_blank" rel="noreferrer">
                <span>{t("more")}</span>
                <i className="fas fa-chevron-right"></i>
            </a>
        </header>
        <section className={styles.section}>
            {children}
        </section>
    </section>
}
