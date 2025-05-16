import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer className={styles.footer}>
      <span>{t("footer")}</span>
    </footer>
  );
}
