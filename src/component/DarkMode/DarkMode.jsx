"use client";
import { ThemeContext } from "@/context/Theme";
import styles from "./DarkMode.module.css";
import { useContext, useState } from "react";

export default function DarkMode() {
  const { mode, toggle } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>☀️</div>
      <div className={styles.icon}>🌙</div>
      <div
        id="sw"
        className={styles.switch}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
}
