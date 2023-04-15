import dayjs from "dayjs";

import styles from "./Card.module.css";
import useAnalyticsEventTracker from "core/hooks/useAnalyticsEventTracker";

interface CardProps {
    id: number | string;
    url: string;
    title: string;
    cover: string;
    publishedAt: string;
    type: string;
    tags?: string[];
}

const Card: React.FC<CardProps> = ({ id, type, title, url, cover, publishedAt, tags }) => {
    const trackEvent = useAnalyticsEventTracker("Content");
    
    return <a key={`card-${id}`} href={url} rel="noreferrer noopener" target="_blank" className={styles.card}>
        <article onClick={() => trackEvent(type, title)}>
            <img className={`${styles.cover} cover`} src={cover} alt="Article cover" />
            <span className={styles.date}>
                {dayjs(publishedAt).format("MMM DD, YYYY")}
            </span>
            <h3 className={styles.title}>{title}</h3>
            {
                tags?.length && <section className={styles.tags}>
                    {tags.map((tag, index) =>
                        <span
                            className={styles.item}
                            key={`${id}-tag-${index}`}
                        >
                            {tag}
                        </span>
                    )}
                </section>
            }
        </article>
    </a >
}

export default Card;