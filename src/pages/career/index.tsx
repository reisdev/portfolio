import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Experience from "@core/models/experience";
import ExperienceItem from "@components/experience";
import fetchExperiences from "./career.service";

import styles from "./Career.module.css";

export default function Career() {
  const { t, i18n: { language }} = useTranslation();
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    fetchExperiences(language)
      .then(setExperiences);
  }, [language]);

  return (
    <div className={styles.container}>
      <header className={styles.about}>
        <h2>
          <title>{t("career.title")}</title>
        </h2>
      </header>
      <main>
        <div className={styles.timeline}>
        {experiences.length &&
          experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} />
          ))}
        </div>
      </main>
    </div>
  );
}
