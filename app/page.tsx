"use client";
import { Typography } from "@mui/material";
import styles from "./page.module.css";
import { useStore } from "@/store";

export default function Home() {
  const userdata = useStore((store) => store?.UserData);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Typography variant="h5" component="h5">
          E-Learning
        </Typography>
        <>
          <p>Logged in user : {userdata.userName}</p>
          <p>Is user logged in : {userdata.isLoggedIn ? "Yes" : "No"}</p>
        </>
      </div>
    </main>
  );
}
