import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarComponent = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
    onDateChange(date); // เรียกฟังก์ชันจาก props เมื่อเลือกวันที่
  };

  return (
    <div>
      <h2 className="text-white">เลือกวัน:</h2>
      <DatePicker selected={startDate} onChange={handleChange} />
    </div>
  );
};

export default CalendarComponent;
