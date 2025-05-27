import React from "react";
import styles from "./activitychart.module.css";

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const activityData = [
  [90, 55, 25, 85, 35],
  [25, 70, 50, 65, 40],
  [30, 45, 35, 70, 30],
  [45, 65, 25, 60, 55],
  [55, 85, 45, 75, 60],
  [35, 55, 50, 50, 45],
  [50, 60, 40, 65, 50],
];

function ActivityChart() {
  return (
    <div className={styles.activityCard}>
      <div className={styles.header}>
        <span className={styles.title}>Activity</span>
        <span className={styles.meta}>3 appointments on this week</span>
      </div>
      <div className={styles.chart}>
        {activityData.map((dayBars, dayIndex) => (
          <div key={dayIndex} className={styles.dayGroup}>
            <div className={styles.bars}>
              {dayBars.map((height, i) => (
                <div
                  key={i}
                  className={`${styles.bar} ${styles[`barColor${i % 3}`]}`}
                  style={{ height: `${height}px` }}
                ></div>
              ))}
            </div>
            <span className={styles.dayLabel}>{days[dayIndex]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityChart;
