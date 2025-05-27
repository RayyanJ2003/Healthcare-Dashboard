import React from "react";
import styles from "./UpcomingSchedule.module.css";
import { upcomingAppointments } from "../../data/appointments";

function UpcomingSchedule() {
  return (
    <div className={styles.upcomingCard}>
      <h4 className={styles.title}>The Upcoming Schedule</h4>
      <p className={styles.dayLabel}>On Thursday</p>
      <div className={styles.dayGroup}>
        {upcomingAppointments
          .filter((a) => a.day.includes("Thursday"))
          .map((app) => (
            <div key={app.id} className={styles.appointmentCard}>
              <span>
                {app.title} {app.emoji}{" "}
              </span>
              <span className={styles.time}>{app.time}</span>
            </div>
          ))}
      </div>
      <p className={styles.dayLabel}>On Saturday</p>
      <div className={styles.dayGroup}>
        {upcomingAppointments
          .filter((a) => a.day.includes("Saturday"))
          .map((app) => (
            <div key={app.id} className={styles.appointmentCard}>
              <span>
                {app.title} {app.emoji}
              </span>
              <span className={styles.time}>{app.time}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default UpcomingSchedule;
