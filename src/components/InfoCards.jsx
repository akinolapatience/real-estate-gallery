import React from 'react';
import './InfoCards.css';

function InfoCards() {
  const cards = [
    {
      title: 'House Rules',
      content: 'Lorem ipsum dolor sit amet consectetur. Sed leo scecerisque eleifend auctor nisi  in netus tempus.....',
    },
    {
      title: 'Terms and Conditions',
      content: 'Lorem ipsum dolor sit amet consectetur. Sed leo scecerisque eleifend auctor nisi  in netus tempus.....',
    },
    {
        title: 'Cancellation Policy',
        content: 'Lorem ipsum dolor sit amet consectetur. Sed leo scecerisque eleifend auctor nisi  in netus tempus.....',
    }
  ];

  return (
    <section className="info-cards">
      <h2>Things to Know</h2>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div className="info-card" key={index}>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InfoCards;
