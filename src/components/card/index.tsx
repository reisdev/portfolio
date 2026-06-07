import dayjs from "dayjs";

import useAnalyticsEventTracker from "@core/hooks/useAnalyticsEventTracker";
import Tag from "@components/tag";
import styles from "./card.module.css";

interface CardProps {
  id: number | string;
  url: string;
  title: string;
  cover: string;
  publishedAt: string;
  type: string;
  tags?: string[];
  viewCount?: number;
}

export default function Card({
  id,
  type,
  title,
  url,
  cover,
  publishedAt,
  tags,
  viewCount,
}: CardProps) {
  const trackEvent = useAnalyticsEventTracker("Content");

  return (
    <a
      key={`card-${id}`}
      href={url}
      rel="noreferrer noopener"
      target="_blank"
      className={styles.card}
    >
      <article onClick={() => trackEvent(type, title)}>
        <img
          className={`${styles.cover} cover`}
          src={cover}
          alt="Article cover"
        />
        <div className={styles.info}>
          {viewCount ? (
            <span className={styles.view_count}>
              <i className="fas fa-heart"></i>
              <span>{viewCount}</span>
            </span>
          ) : (
            <>
              <br></br>
            </>
          )}
          <span className={styles.date}>
            {dayjs(publishedAt).format("MMM DD, YYYY")}
          </span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        {tags?.length && (
          <section className={styles.tags}>
            {tags.map((tag, index) => (
              <Tag key={`${id}-tag-${index}`}>{tag}</Tag>
            ))}
          </section>
        )}
      </article>
    </a>
  );
}
