import React from 'react';
import './BookingForm.css';

function BookingForm() {
  return (
    <div className="booking-form">
      <div className="price-section">
        <h2>NGN20,000 <span>per night</span></h2>
      </div>

      <form>
        <label>Check-in</label>
        <input type="date" name="checkin" />

        <label>Check-out</label>
        <input type="date" name="checkout" />

        <label>Guests</label>
        <select name="guests">
          <option value="1">1 guest</option>
          <option value="2">2 guests</option>
          <option value="3">3 guests</option>
          <option value="4">4 guests</option>
        </select>

        <button type="submit">Reserve</button>
      </form>
    </div>
  );
}

export default BookingForm;
