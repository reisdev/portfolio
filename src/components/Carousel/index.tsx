import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import styles from "./Carousel.module.css";

interface CarouselProps {
    title: string;
    icon: string | undefined;
    redirect: string;
    children: any;
}

export default function Carousel({ title, icon, redirect, children }: CarouselProps) {
    const { t } = useTranslation("components");
    return <section className={styles.container}>
        <header className={styles.header}>
            <span className={styles.title}>
                <img src={icon} alt={title}></img>
                <h2 >{title}</h2>
            </span>
            <a className={styles.shortcut} href={redirect} target="_blank" rel="noreferrer">
                <span>{t("seeMore")}</span>
                <i className="fas fa-chevron-right"></i>
            </a>
        </header>
        <section className={styles.carousel}>
            {children}
        </section>
    </section>
}
