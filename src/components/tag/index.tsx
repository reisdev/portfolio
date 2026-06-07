
import { PropsWithChildren } from "react";
import styles from "./tag.module.css";

export default function Tag({ children } : Readonly<PropsWithChildren>) {
  return <div className={styles.tag}>{children}</div>;
}
