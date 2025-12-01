//@ts-nocheck
import { useState } from 'react';
import '../styles/promo-bar.css';

export default function PromoBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="promo-bar" data-aos="fade-down">
<marquee scrollamount="12">
  For COD orders exceeding 100,000 Naira, we will contact you for PREPAYMENT.
  Please be available to answer our call. Thanks!
</marquee>      
<button className="promo-close" onClick={() => setIsVisible(false)}>
        ✕
      </button>
    </div>
  );
}
