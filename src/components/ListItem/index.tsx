import dayjs from "dayjs";

import styles from "./ListItem.module.css";
import Tag from "@components/Tag";

interface ListItemProps {
    id: string | number | undefined
    title: string
    tags: Array<string> | undefined
    date: string
    url: string
}

export default function ListItem({ id, title, tags, date, url }: ListItemProps) {
    return <a href={url} rel="noreferrer noopener" target="_blank">
    <article className={styles.item}>
        <section className={styles.content}>
            <h3 className={styles.title}>
                {title}
            </h3>
            <div className={styles.tags}>
                {
                tags?.length && <section className={styles.tags}>
                    {tags.map((tag, index) =>
                        <Tag key={index}>
                            {tag}
                        </Tag>
                    )}
                </section>
                }
            </div>
        </section>
        <span className={styles.date}>{dayjs(date).format("MMM DD, YYYY")}</span>
    </article>
    </a>
}