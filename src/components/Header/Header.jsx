import React from "react";
import styles from "./Header.module.css";
import { MdSearch, MdNotifications, MdAdd } from "react-icons/md";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.searchBar}>
        <MdSearch className={styles.searchIcon} />
        <input type="text" placeholder="Search..." />
      </div>
      <MdNotifications className={styles.notificationIcon} />
    </header>
  );
}

export default Header;
