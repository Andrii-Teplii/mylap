import Filter from "@/components/Filter";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.filterBlock}>
        <Filter />
      </div>
      <div className={styles.contentBlock}></div>
    </div>
  );
}
