import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import styles from "./language-switch.module.css";

const LANGS = [
  { code: "en-US", label: "EN" },
  { code: "pt-BR", label: "PT" },
];

export default function LanguageSwitch() {
  const { i18n } = useTranslation();

  const current = LANGS.find((l) => i18n.language === l.code) || LANGS[0];

  const toggle = useCallback(() => {
    const next = LANGS.find((l) => l.code !== current.code) || LANGS[0];
    i18n.changeLanguage(next.code);
  }, [current, i18n]);

  return (
    <button
      className={styles.switch}
      onClick={toggle}
      aria-label={`Switch language (current: ${current.label})`}
      title={current.label}
    >
      <i className="fa-solid fa-globe" aria-hidden="true" />
      <span className={styles.label}>{current.label}</span>
    </button>
  );
}
