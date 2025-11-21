import React from 'react';
import '../styles/why-buy.css';

export default function WhyBuySection() {
  const reasons = [
    {
      title: 'ACCESSIBLE CUSTOMER SERVICE',
      icon: '📞'
    },
    {
      title: '1 YEAR WARRANTY, ONLY REPLACE NO REPAIR',
      icon: '✓'
    },
    {
      title: 'FREE SHIPPING OVER ₦30000 IN LAGOS',
      icon: '🚚',
      subtitle: 'DOOR TO DOOR DELIVERY'
    },
    {
      title: 'ORAIMO AUTHENTICITY & BEST PRICE GUARANTEED',
      icon: '🏆'
    },
    {
      title: 'ESHOP EXCLUSIVE COMMUNITY EVENTS',
      icon: '🎯',
      subtitle: 'SCAN TO JOIN O-CLUB NG NOW!'
    },
    {
      title: 'BUY TO GET ORAIMO EXPLORER POINTS',
      icon: '⭐',
      subtitle: 'EXTRA POINTS FOR MEMBERS'
    },
    {
      title: 'NATIONWIDE OFFLINE AFTER-SALES OUTLETS',
      icon: '🏪'
    }
  ];

  return (
    <section className="why-buy">
      <div className="why-buy-container">
        <h2>Why Buy From oraimo</h2>
        
        <div className="reasons-grid">
          {reasons.map((reason, idx) => (
            <div key={idx} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              {reason.subtitle && <p>{reason.subtitle}</p>}
            </div>
          ))}
        </div>

        <div className="instagram-section">
          <h3>@oraimoclub</h3>
          <p>Share your incredible moments with oraimo by posting your photos on Instagram using #oraimoclub and tagging @oraimoclub. Stand a chance to receive a special gift from us!</p>
          <button className="follow-btn">Follow us on Instagram</button>
        </div>
      </div>
    </section>
  );
}
