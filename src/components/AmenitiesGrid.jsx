import React from 'react';
import './AmenitiesGrid.css';

function AmenitiesGrid() {
  const amenities = [
    'Wi-Fi',
    'Air Conditioning',
    'Smart TV',
    '24/7 Electricity',
    'Refrigerator',
    'Washing Machine',
    'Parking Space',
    'Security',
    'Water Heater',
    'Microwave',
    'Gym and Pool',
    'Workspace',
  ];

  return (
    <section className="amenities-section">
      <h2>Amenities</h2>
      <div className="amenities-grid">
        {amenities.map((item, index) => (
          <div key={index} className="amenity-box">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default AmenitiesGrid;
