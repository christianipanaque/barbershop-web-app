import React, { useState } from 'react';
import mockTimeSlots from '../testing/mockTimeSlots.json'; // Adjust the path as necessary
import styles from './AppointmentSchedulerComponent.module.css'; // Import the CSS module

const AppointmentSchedulerComponent = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  // Function to handle time slot selection
  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot.id);
  };

  return (
    <div className={styles.appointmentSchedulerComponent}>
      <h2>Select a Time Slot</h2>
      <ul className={styles.timeSlotList}>
        {mockTimeSlots.map((timeSlot) => (
          <li
            key={timeSlot.id}
            className={`${styles.timeSlot} ${selectedTimeSlot === timeSlot.id ? styles.selected : ''}`}
            onClick={() => handleTimeSlotSelect(timeSlot)}
          >
            {timeSlot.slot}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentSchedulerComponent;
