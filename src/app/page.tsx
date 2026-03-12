import Filter from "@/components/Filter";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.filterBlock}>
        <Filter />
      </div>
      <div className={styles.contentBlock}>
        <div className={styles.titlePageBlock}>
          <h2 className={styles.titlePage}>Ноутбуки</h2>
          <div className={styles.sortBlock}>
            <div className={styles.sortOption}>ціна</div>
            <div className={styles.sortOption}>дата надходження</div>
            <div className={styles.sortOption}>дата виробництва</div>
          </div>
        </div>
        <div className={styles.listItemsBlock}></div>
      </div>
    </div>
  );
}
