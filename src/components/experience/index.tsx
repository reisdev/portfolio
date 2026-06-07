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

  return (
    <li className={styles.container}>
      <div className={styles.timelineMarker} />
      <div className={styles.timelineContent}>
        <div className={styles.header}>
          <button className={`fa fa-chevron-right ${styles.control} ${isExpanded ? styles.controlActive : ""}`} onClick={() => setIsExpanded(!isExpanded)}/>
          <h2 className={styles.position}>{experience.role} at <span className={styles.company}>{experience.company}</span></h2>
          <span className={styles.date}>{dayjs(experience.start_date).format("YYYY MMM")} - {experience.end_date ? dayjs(experience.end_date).format("YYYY MMM") : t("common:today")}</span>
        </div>
        <div className={`${styles.responsibilities} ${isExpanded ? styles.responsibilitiesExpanded : ""}`}>
          {experience.responsibilities && (
              <ul className={styles.highlights}>
                {experience.responsibilities.map((responsibility: string, index: number) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
          )}
        </div>
        {experience.tech_stack && (
          <div className={styles.tags}>
            {experience.tech_stack.map((tag: string) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
