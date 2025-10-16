import React from "react";
import styles from "./styles.module.css";
import { Logo } from "@/assets/icons/Logo";
import NavLink from "../NavLink";
import Search from "../Search";
import { Like } from "@/assets/icons/Like";
import { Basket } from "@/assets/icons/Basket";
import { DefaultAvatar } from "@/assets/icons/DefaultAvatar";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.navigationBlock}>
        <div className={styles.logoBlock}>
          <Logo size="small" />
          <h2 className={styles.textLogo}>MyLap</h2>
        </div>
        <div className={styles.linkBlock}>
          <NavLink text="Головна" href="/" />
          <NavLink text="Аксесуари" href="accessories" />
          <NavLink text="Компоненти" href="components" />
          <NavLink text="Нове" href="new" />
          <NavLink text="Акції" href="shares" />
        </div>
      </div>
      <div className={styles.rightBlock}>
        <Search />
        <div className={styles.button}>
          <Like />
        </div>
        <div className={styles.button}>
          <Basket />
        </div>
        <div className={styles.button}>
          <DefaultAvatar />
        </div>
      </div>
    </div>
  );
}
