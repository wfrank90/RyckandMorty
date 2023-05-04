import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import PathRoutes from "../helpers/Routes.helper";

const NavBar = (props) => {
const {onSearch} = props
  return (
    <div className={styles.navbar}>
      <Link className={styles.stylesnav} to={PathRoutes.HOME}>Home</Link>
      <Link className={styles.stylesnav} to={PathRoutes.ABOUT}>About</Link>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default NavBar;
