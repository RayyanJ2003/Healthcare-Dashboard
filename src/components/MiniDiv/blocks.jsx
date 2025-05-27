import React from "react";
import styles from "./blocks.module.css";

const healthData = [
  {
    id: 1,
    title: "Lungs",
    icon: "🫁",
    date: "26 Oct 2021",
    progress: 80,
    color: "#E65C5C",
  },
  {
    id: 2,
    title: "Teeth",
    icon: "🦷",
    date: "26 Oct 2021",
    progress: 80,
    color: "#52D1C9",
  },
  {
    id: 3,
    title: "Bone",
    icon: "🦴",
    date: "26 Oct 2021",
    progress: 80,
    color: "#F08F63",
  },
];

const Blocks = () => {
  return (
    <div className={styles.cardContainer}>
      {healthData.map(({ id, title, icon, date, progress, color }) => (
        <div key={id} className={styles.healthCard}>
          <div className={styles.iconTitle}>
            <span className={styles.icon}>{icon}</span>
            <span className={styles.title}>{title}</span>
          </div>
          <div className={styles.date}>Date: {date}</div>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%`, backgroundColor: color }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blocks;
