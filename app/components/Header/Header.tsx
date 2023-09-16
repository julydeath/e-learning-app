import React from "react";
import Button from "@mui/material/Button";
import scss from "./Header.module.scss";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
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
          <Link href="/">Profile</Link>
        </li>
      </ul>
      <div className={scss.buttonGroup}>
        <Button variant="contained" color="success">
          SignIn
        </Button>
        <Button variant="contained" color="error">
          SignOut
        </Button>
        <Button variant="contained" color="info">
          Register
        </Button>
      </div>
    </header>
  );
};

export default Header;
