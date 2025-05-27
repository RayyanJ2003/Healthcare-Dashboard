import React from "react";
import styles from "./Sidebar.module.css";
import { navLinks, navLinksEnd } from "../../data/navigation";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.appLogo}>
        {" "}
        <span className={styles.part1}>Health</span>
        <span className={styles.part2}>care.</span>
      </div>
      <nav className={styles.navbarNav}>
        <h3 className={styles.navHeading}>General</h3>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id} className={styles.navItem}>
              <a href={link.path} className={styles.navLink}>
                <link.icon className={styles.navIcon} />
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.space}>Tools</div>
        <ul>
          {navLinksEnd.map((link) => (
            <li
              key={link.id}
              className={`${styles.navItem} ${link.id === 3 ? styles.pt : ""}`}
            >
              <a href={link.path} className={styles.navLink}>
                <link.icon className={styles.navIcon} />
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
