import { Arrow } from "@/assets/icons/arrow";
import React, { FC } from "react";
import { ContainerBlocksTypes } from "./types";
import styles from "./styles.module.css";
import clsx from "clsx";

export const ContainerBlocks: FC<ContainerBlocksTypes> = ({
  title,
  isActive,
  children,
  handleChangeState,
}) => {
  return (
    <div className={styles.groupFilter}>
      <button
        className={styles.groupFilterTitleButton}
        onClick={handleChangeState}
      >
        <h2 className={styles.groupFilterTitle}>{title}</h2>
        <Arrow
          className={clsx(
            styles.groupFilterArrow,
            !isActive && styles.groupFilterArrow__Active
          )}
        />
      </button>
      <div
        className={clsx(
          styles.groupFilterContainer,
          !isActive && styles.groupFilterContainer__unActive
        )}
      >
        {children}
      </div>
    </div>
  );
};
