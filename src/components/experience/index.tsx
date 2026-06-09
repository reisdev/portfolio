import Experience from "@core/models/experience";

import styles from "./experience.module.css";
import Tag from "@components/tag";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { useState } from "react";

interface ExperienceItemProps {
  readonly experience: Experience;
}

export default function ExperienceItem({ experience }: Readonly<ExperienceItemProps>) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  const start = dayjs(experience.start_date).format("MMM YYYY");
  const end = experience.end_date ? dayjs(experience.end_date).format("MMM YYYY") : t("common:today");

  return (
    <li className={styles.item}>
      <div className={styles.marker} aria-hidden>
        <span className={styles.dot} />
        <span className={styles.line} />
      </div>

      <article className={styles.card}>
        <header className={styles.cardHeader}>
          <div className={styles.leftHead}>
            <div className={styles.avatar} aria-hidden>
              {/* initials fallback when no logo available */}
              {experience.company ? experience.company.split(" ").slice(0,2).map(s=>s[0]).join("") : ""}
            </div>

            <div className={styles.titleWrap}>
              <h3 className={styles.position}>{experience.role}</h3>
              {experience.company_url ? (
                <a className={styles.company} href={experience.company_url} target="_blank" rel="noreferrer">{experience.company}</a>
              ) : (
                <span className={styles.company}>{experience.company}</span>
              )}
              {experience.location && <span className={styles.location}>{experience.location}</span>}
            </div>
          </div>

          <div className={styles.meta}>
            <time className={styles.date}>{start} — {end}</time>
            <button
              aria-expanded={isExpanded}
              aria-label={isExpanded ? t("Hide details") : t("Show details")}
              className={`${styles.toggle} ${isExpanded ? styles.toggleActive : ""}`}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <i className={`fa ${isExpanded ? "fa-minus" : "fa-plus"}`} />
            </button>
          </div>
        </header>

        {experience.responsibilities && (
          <div className={`${styles.responsibilities} ${isExpanded ? styles.open : ""}`}>
            <ul className={styles.highlights}>
              {experience.responsibilities.map((r: string, i: number) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        )}

        {experience.tech_stack && (
          <div className={styles.tags}>
            {experience.tech_stack.map((tag: string) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
      </article>
    </li>
  );
}
