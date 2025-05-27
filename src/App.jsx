import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import AnatomySection from "./components/AnatomySection/AnatomySection";
import Calendar from "./components/CalendarPart/Calendar";
import UpcomingSchedule from "./components/UpcomingSchedule/UpcomingSchedule";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        <div className={styles.topRow}>
          <Header />
          <AnatomySection />
        </div>
        <div className={styles.bottomRow}>
          <Calendar />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
}

export default App;
