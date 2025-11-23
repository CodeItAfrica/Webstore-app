import { useState } from 'react';
import '../styles/header.css';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text"><img src="/logo (1).png" alt="" /></span>
        </div>

        <nav className="nav-menu">
          <a href="#" className="nav-item">Green Friday <img src="/dis.webp" alt="" className="tagimg" /></a>
          <a href="#" className="nav-item">Daily Deals🔥</a>
          <div className="nav-item dropdown">
            <span>Products</span>
            <span className="arrow"><img src="/dwn-arrow.png" alt=""  /></span>
          </div>
          <div className="nav-item dropdown">
            <span>Hot & New</span>
            <span className="arrow"><img src="/dwn-arrow.png" alt=""  /></span>
          </div>
          <div className="nav-item dropdown">
            <span>Support</span>
            <span className="arrow"><img src="/dwn-arrow.png" alt=""  /></span>
          </div>

        </nav>

        <div className="header-actions">
          <button className="icon-btn" title="Orders">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 11l3 3L22 4"></path>
              <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </button>
          <button className="icon-btn" title="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
          <button 
            className="icon-btn cart-btn" 
            title="Cart"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
          <button 
            className="icon-btn profile-btn" 
            title="profile"
          >
            <img src="/user-icon.png" alt="" />
          </button>

        </div>
      </div>
    </header>
  );
}
