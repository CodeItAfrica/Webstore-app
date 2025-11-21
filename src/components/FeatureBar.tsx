import React from 'react';
import '../styles/feature-bar.css';

export default function FeatureBar() {
  const features = [
    {
      icon: '/shipping.webp',
      title: 'Free Shipping over ₦30,000 in Lagos',
      description: 'Door to door delivery'
    },
    {
      icon: '/cash.webp',
      title: 'Cash on Delivery',
      description: 'Pay when you receive'
    },
    {
      icon: '/warranty.webp',
      title: 'Hassle-Free Warranty',
      description: '1 year warranty'
    }
  ];

  return (
    <div className="feature-bar">
      <div className="feature-container">
        {features.map((feature, idx) => (
          <div key={idx} className="feature-item">
            <div className="feature-icon"><img src={feature.icon} alt="" /></div>
            <div className="feature-content">
              <h4>{feature.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
