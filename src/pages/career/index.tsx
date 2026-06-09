import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import Experience from "@core/models/experience";
import ExperienceItem from "@components/experience";
import fetchExperiences from "./career.service";

import styles from "./Career.module.css";

export default function Career() {
  const { t, i18n: { language }} = useTranslation();
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    fetchExperiences(language)
      .then(setExperiences);
  }, [language]);

  const allTags = useMemo(() => {
    const counts: Record<string, number> = {};
    experiences.forEach(e => e.tech_stack?.forEach(t => {
      counts[t] = (counts[t] || 0) + 1;
    }));
    return Object.keys(counts).sort((a,b) => {
      const diff = (counts[b] || 0) - (counts[a] || 0);
      return diff !== 0 ? diff : a.localeCompare(b);
    });
  }, [experiences]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t=>t!==tag) : [...prev, tag]);
  };

  const filtered = useMemo(() => {
    if (selectedTags.length === 0) return experiences;
    return experiences.filter(e => e.tech_stack?.some(t => selectedTags.includes(t)));
  }, [experiences, selectedTags]);

  const [showFullIntro, setShowFullIntro] = useState(false);
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const VISIBLE_TAGS = 8;
  const visibleTags = allTags.slice(0, VISIBLE_TAGS);
  const extraTags = allTags.slice(VISIBLE_TAGS);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <header className={styles.about}>
          <h2 className={styles.title}>{t("career:title")}</h2>
          <p className={styles.intro}>
            {showFullIntro ? t("career:description") : t("career:shortDescription")}
          </p>
          <button className={styles.readMore} onClick={() => setShowFullIntro(s => !s)} aria-expanded={showFullIntro}>
            {showFullIntro ? t("career:readLess") || "Show less" : t("career:readMore") || "Read more"}
          </button>

          <div className={styles.ctas}>
            <a className={styles.cta} href="/assets/CV-Matheus-Reis.pdf" target="_blank" rel="noreferrer">{t("career:downloadCV") || "Download CV"}</a>
            <a className={styles.ctaSecondary} href="mailto:matheusdrdj@gmail.com">{t("career:contact") || "Contact"}</a>
          </div>

          <div className={styles.filterBar} aria-label={t("career:filterAria") || "Filter experiences by technology"}>
            <div className={styles.filterList}>
              {visibleTags.map(tag => (
                <button
                  key={tag}
                  className={`${styles.filterChip} ${selectedTags.includes(tag) ? styles.filterChipActive : ""}`}
                  onClick={() => toggleTag(tag)}
                  aria-pressed={selectedTags.includes(tag)}
                >
                  {tag}
                </button>
              ))}

              {extraTags.length > 0 && (
                <div className={styles.moreWrapper}>
                  <button
                    className={styles.moreButton}
                    onClick={() => setShowMoreFilters(s => !s)}
                    aria-expanded={showMoreFilters}
                    aria-haspopup="menu"
                  >
                    {t("career:more") || `More (${extraTags.length})`}
                  </button>

                  {showMoreFilters && (
                    <div className={styles.moreMenu} role="menu">
                      {extraTags.map(tag => (
                        <button
                          role="menuitem"
                          key={tag}
                          className={`${styles.filterChip} ${selectedTags.includes(tag) ? styles.filterChipActive : ""}`}
                          onClick={() => { toggleTag(tag); setShowMoreFilters(false); }}
                          aria-pressed={selectedTags.includes(tag)}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            {selectedTags.length > 0 && (
              <button className={styles.clearFilters} onClick={() => setSelectedTags([])}>{t("career:clearFilters") || "Clear filters"}</button>
            )}
          </div>
        </header>

        <main>
          <div className={styles.timeline}>
            <ul className={styles.list}>
              {filtered.length > 0 ? (
                filtered.map((exp, index) => (
                  <ExperienceItem key={index} experience={exp} />
                ))
              ) : (
                <li className={styles.empty}>{t("career:noMatches") || "No experiences match the selected filters."}</li>
              )}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
