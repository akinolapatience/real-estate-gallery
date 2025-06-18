import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
    <section className="about-section">
      <h2>About This Space</h2>
      <p>
        Welcome to our cozy and stylish shortlet apartment, designed to make you feel at home.
        Enjoy a fully furnished space with modern  amenities, including a well equiped kitchen, comfortable living area, high-speed Wi-Fi.
        Conveniently located near key attractions and essential services, it's perfect for business or leisure travelers.
        Relax in the serene room....
        <span className="read-more" onClick={() => alert('You clicked Read More!')}>
          {'Read more'}
        </span>
      </p>
    </section>
  );
}

export default AboutSection;
