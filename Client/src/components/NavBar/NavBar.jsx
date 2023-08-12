import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import PathRoutes from "../helpers/Routes.helper";

const NavBar = ({ onSearch }) => {
  return (
    <div className={styles.navbar}>
      <Link className={styles.stylesnav} to={PathRoutes.HOME}>
        Home
      </Link>
      <Link className={styles.stylesnav} to={PathRoutes.ABOUT}>
        About
      </Link>
      <Link className={styles.stylesnav} to={PathRoutes.LOG_OUT}>
        Log out
      </Link>
      <Link className={styles.stylesnav} to={PathRoutes.FAVORITES}>
        Favorites
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default NavBar;
