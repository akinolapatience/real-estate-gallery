import React from 'react';
import './ScheduleDetails.css';

function ScheduleDetails() {
  return (
    <section className="schedule-details">
      <div className="detail-item">
        <h3>Schedule</h3>
        <p>Check-in: 10am to 11am everyday</p>
        <p>Check-out: Before 12pm</p>
        <p>Status: Available</p>
      </div>

      <div className="detail-item">
        <h3>Caution Fee</h3>
        <p>NGN50,000 This is to be paid back to you 24hrs after check-out</p>
      </div>

      <div className="detail-item">
        <h3>Payment Method</h3>
        <p>Both card and bank transfer are available</p>
      </div>
    </section>
  );
}

export default ScheduleDetails;
