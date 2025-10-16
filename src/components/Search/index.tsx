import React from "react";
import styles from "./styles.module.css";
import { SearchIcon } from "@/assets/icons/Search";

export default function Search() {
  return (
    <div className={styles.container}>
      <SearchIcon />
      <input placeholder="Search..." className={styles.input} />
    </div>
  );
}
