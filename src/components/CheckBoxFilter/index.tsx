"use client";

import React, { useState } from "react";
import { CheckBoxFilterProp } from "./types";
import styles from "./styles.module.css";

export function CheckBoxFilter({
  title,
  arrOptions,
  arrActiveOptions,
  onSelect,
  onConfirm,
  quantityAvailable,
}: CheckBoxFilterProp) {
  const [activeFilter, setActiveFilter] = useState<boolean>(false);
  if (!!arrOptions) {
    return (
      <div className={styles.checkBoxFilter}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.optionsBlock}>
          {arrOptions.map((item, index) => {
            return (
              <label key={index} className={styles.optionItem}>
                {typeof item == "boolean" ? (!item ? "Ні" : "Так") : item}
                <input type="checkbox" className={styles.optionInput} />
              </label>
            );
          })}
        </div>
      </div>
    );
  } else {
    return;
  }
}
