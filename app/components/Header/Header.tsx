"use client";
import React from "react";
import Button from "@mui/material/Button";
import scss from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/store";

const Header = () => {
  const userdata = useStore((store) => store?.UserData);
  const logout = useStore((store) => store?.removeUserData);

  return (
    <header className={scss.header}>
      <ul className={scss.menu}>
        <li>
          <Link href="/" className={scss.logo}>
            <Image src="/logo.webp" width={30} height={30} alt="logo" />
          </Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
      <div className={scss.buttonGroup}>
        {userdata.isLoggedIn ? (
          <Button variant="outlined" color="error" onClick={() => logout()}>
            Logout
          </Button>
        ) : (
          <>
            {" "}
            <Button variant="contained" href="/login" color="success">
              Login
            </Button>
            <Button variant="contained" href="/register" color="info">
              Register
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
