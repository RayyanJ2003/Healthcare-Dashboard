import React from "react";
import { calendarAppointments } from "../../data/appointments";
import style from "./Calendar.module.css";
import { MdAdd } from "react-icons/md";
import Avatar from "../../assets/images/avatar.png";

const weekDays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const dates = [25, 26, 27, 28, 29, 30, 31];
const timeSlots = ["10:00", "11:00", "12:00"];

const Calendar = () => {
  const selectedDate = 26;

  return (
    <div className={style.calendarContainer}>
      <div className={style.calendarProfile}>
        <div />
        <img src={Avatar} className={style.avatar} />
        <MdAdd className={style.addButton} />
      </div>
      <header className={style.calendarHeader}>
        <h3>October 2021</h3>
      </header>

      <div className={style.calendarGrid}>
        {dates.map((date, index) => (
          <div
            key={date}
            className={`${style.calendarDay} ${
              date === selectedDate ? style.selected : ""
            }`}
          >
            <span className={style.weekday}>{weekDays[index]}</span>
            <span className={style.dayNumber}>{date}</span>
            {timeSlots.map((time) => {
              const hasAppointment = calendarAppointments.find(
                (appt) => appt.day === date && appt.time === time
              );
              return (
                <div
                  key={time}
                  className={`
                    ${style.timeSlot}
                    ${hasAppointment ? style.hasAppointment : ""}
                    ${
                      date === selectedDate && time === "09:00"
                        ? style.active
                        : ""
                    }
                  `}
                >
                  {time}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className={style.appointmentFooter}>
        <div className={`${style.appointmentBox} ${style.blue}`}>
          <h4>Dentist 🦷</h4>
          <p>09:00–11:00</p>
          <small>Dr. Cameron Williamson</small>
        </div>
        <div className={`${style.appointmentBox} ${style.purple}`}>
          <h4>Physiotherapy Appointment💪🏻</h4>
          <p>11:00–12:00</p>
          <small>Dr. Kevin Djones</small>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
