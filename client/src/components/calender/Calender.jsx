import React, { useState } from "react";
import "./Calender.css";

const Calendar = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDateClick = (date) => {
    if (!checkInDate) {
      setCheckInDate(date);
    } else if (checkInDate && !checkOutDate) {
      if (date > checkInDate) {
        setCheckOutDate(date);
      } else {
        setCheckOutDate(checkInDate);
        setCheckInDate(date);
      }
    } else {
      setCheckOutDate(null);
      setCheckInDate(date);
    }
  };

  const handleCheckOutClick = () => {
    if (checkInDate && checkOutDate) {
      setShowModal(true);
    }
  };

  const isSelected = (date) => {
    if (checkInDate && checkOutDate) {
      return date > checkInDate && date < checkOutDate;
    } else if (checkInDate) {
      return date === checkInDate;
    } else {
      return false;
    }
  };

  const isInRange = (date) => {
    if (checkInDate && checkOutDate) {
      return date >= checkInDate && date <= checkOutDate;
    } else {
      return false;
    }
  };

  const renderCalendar = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const dates = [];
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(new Date(currentYear, currentMonth, i));
    }

    const blanks = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      blanks.push(<div className="calendar-day empty"></div>);
    }

    const rows = [];
    let cells = [];
    blanks.forEach((blank) => cells.push(blank));
    dates.forEach((date) => {
      const classes = ["calendar-day"];
      if (isSelected(date)) classes.push("selected");
      if (isInRange(date)) classes.push("in-range");
      cells.push(
        <div
          className={classes.join(" ")}
          key={date}
          onClick={() => handleDateClick(date)}
        >
          {date.getDate()}
        </div>
      );
      if (cells.length === 7) {
        rows.push(<div className="calendar-row">{cells}</div>);
        cells = [];
      }
    });
    if (cells.length > 0) {
      while (cells.length < 7) {
        cells.push(<div className="calendar-day empty"></div>);
      }
      rows.push(<div className="calendar-row">{cells}</div>);
    }
    return rows;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="calendar-month">
          <span>February 2023</span>
        </div>
      </div>
      <div className="calendar-body">{renderCalendar()}</div>
      <div className="calendar-footer">
        <button
          className="calendar-button"
          onClick={() => {
            setCheckInDate(null);
            setCheckOutDate(null);
          }}
        >
          Clear Dates
        </button>
        <button className="calendar-button" onClick={handleCheckOutClick}>
          Check Out
        </button>
          </div>
          <p>Selects the dates </p>
          <p>get intresting things about the place</p>
          <p>throughout Your journey</p>
      {showModal && (
        <div className="modal-container">
          <div className="modal">
            <div className="modal-header">
              <h2>Booking Confirmation</h2>
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>You have selected the following dates for your stay:</p>
              <p>Check In: {checkInDate.toLocaleDateString("en-US")}</p>
              <p>Check Out: {checkOutDate.toLocaleDateString("en-US")}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
