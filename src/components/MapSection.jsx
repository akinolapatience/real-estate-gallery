import React from 'react';
import './MapSection.css';

function MapSection() {
  return (
    <section className="map-section">
      <h2>Location</h2>
      <div className="map-container">
        <iframe
          title="Property Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.812812981097!2d7.412501914793323!3d9.088643093486566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e755c4cc8dd95%3A0xb8c0b15f2384f474!2sKado%20Estate%2C%20Abuja!5e0!3m2!1sen!2sng!4v1717590000000!5m2!1sen!2sng"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default MapSection;
