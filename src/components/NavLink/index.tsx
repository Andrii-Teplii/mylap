import Link from "next/link";
import React from "react";
import { NavLinkProps } from "./types";
import styles from "./styles.module.css";

export default function NavLink({ text, href }: NavLinkProps) {
  return (
    <Link href={href}>
      <span className={styles.textLink}>{text}</span>
    </Link>
  );
}
