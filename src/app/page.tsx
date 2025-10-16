import Image from "next/image";
import Filter from "@/components/Filter";
import styles from "./styles.module.css";
import { getDataFilter } from "@/mocData/utills";
import { arrayProducts } from "@/mocData/data";

export default function Home() {
  getDataFilter(arrayProducts);

  return (
    <div className={styles.page}>
      <div className={styles.filterBlock}>
        <Filter />
      </div>
      <div className={styles.contentBlock}></div>
    </div>
  );
}
