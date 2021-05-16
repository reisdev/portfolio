import dayjs from "dayjs";

import styles from "./Card.module.css";

interface CardProps {
    id: number | string;
    url: string;
    title: string;
    cover: string;
    publishedAt: string;
    tags?: string[];
}

const Card: React.FC<CardProps> = ({ id, title, url, cover, publishedAt, tags }) =>
(<a key={`card-${id}`} href={url} rel="noreferrer noopener" target="_blank" className={styles.card}>
    <article>
        <img className={`${styles.cover} cover`} src={cover} alt="Article cover" />
        <span className={styles.date}>
            {dayjs(publishedAt).format("MMM DD, YYYY")}
        </span>
        <h3 className={styles.title}>{title}</h3>
        {
            tags?.length && <section className={styles.tags}>
                {tags.map((tag) =>
                    <span className={styles.item}>{tag}</span>
                )}
            </section>
        }
    </article>
</a >)

export default Card;