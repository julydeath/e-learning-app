"use client";
import { Typography } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Typography variant="h5" component="h5">
          E-Learning
        </Typography>
      </div>
    </main>
  );
}
