import { FaceBookIcon } from "@/assets/icons/FacebookIcon";
import { InatsgramIcon } from "@/assets/icons/InstagramIcon";
import { TweeterIcon } from "@/assets/icons/TweeterIcon";
import React from "react";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_info}>
        <a href="">Про нас</a>
        <a href="">Контакти</a>
        <a href="">Політика конфіденційності</a>
        <a href="">Умови використання</a>
      </div>
      <div className={styles.footer_contacts}>
        <a href="">{FaceBookIcon}</a>
        <a href="">{TweeterIcon}</a>
        <a href="">{InatsgramIcon}</a>
      </div>
      <div className={styles.footer_message}>
        <h6>@2024 TechGear. Всі права захищені.</h6>
      </div>
    </div>
  );
}
