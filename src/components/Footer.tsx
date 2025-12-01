import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreed) {
      console.log('Subscribing:', email);
      // Handle subscription logic
    }
  };

  return (
    <footer className="footer">
      {/* Subscription Section */}
      <div className="footer-subscribe" data-aos="fade-up">
        <div className="subscribe-container">
          <h2 className="subscribe-title">Subscribe now and earn 500 points!</h2>
          <p className="subscribe-subtitle">Get the Latest oraimo News and Giveaways</p>
          
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <div className="subscribe-input-wrapper">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="subscribe-input"
              />
              <button type="submit" className="subscribe-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
            
            <div className="subscribe-checkbox">
              <input
                type="checkbox"
                id="terms-agree"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <label htmlFor="terms-agree">
                I have read and agree to the oraimo Store{' '}
                <Link to="/terms">Terms of use</Link> and{' '}
                <Link to="/privacy">Privacy Policy</Link>
              </label>
            </div>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-columns">
            {/* Customer Service */}
            <div className="footer-column" data-aos="fade-up" data-aos-delay="0">
              <h3>Customer Service</h3>
              <div className="footer-info">
                <p className="info-label">Service Hours:</p>
                <p>Monday-Saturday (Excluding public holidays)</p>
                <p>9AM to 1PM</p>
                <p>2PM to 5:30PM</p>
                
                <p className="info-label">Phone:</p>
                <p>07000014062099</p>
                
                <p className="info-label">Email:</p>
                <p>care.ng@oraimo.com</p>
                <p>delivery.issue.ng@oraimo.com (First Choice for Logistics Issue)</p>
                
                <p className="info-label">WhatsApp:</p>
                <p>+234 916 459 8060/ +234 818 642 3337</p>
              </div>
            </div>

            {/* About oraimo */}
            <div className="footer-column" data-aos="fade-up" data-aos-delay="100">
              <h3>About oraimo</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Where to Buy</a></li>
                <li><a href="#">O-CLUB</a></li>
                <li><a href="#">Explorer Point Program</a></li>
                <li><a href="#">Blogs</a></li>
              </ul>
            </div>

            {/* Terms */}
            <div className="footer-column" data-aos="fade-up" data-aos-delay="200">
              <h3>Terms</h3>
              <ul>
                <li><a href="#">Warranty</a></li>
                <li><a href="#">Shipping & Delivery</a></li>
                <li><Link to="/terms">Return & Refund Policy</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Get Help */}
            <div className="footer-column" data-aos="fade-up" data-aos-delay="300">
              <h3>Get Help</h3>
              <ul>
                <li><a href="#">Track Order</a></li>
                <li><a href="#">Visit Carlcare</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Online Shopping Guide</a></li>
                <li><a href="#">Product Authentication</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-logo">
            <img src="/logo (1).png" alt="oraimo" />
          </div>
          <p className="footer-copyright">© 2013-2025 oraimo Copyright</p>
          <div className="footer-social">
            <a href="#" className="social-icon whatsapp">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
