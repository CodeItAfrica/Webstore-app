import { useState } from 'react';
import '../styles/header.css';
import '../styles/HeaderDropdowns.css';
import { Link } from 'react-router-dom';
import CartSidebar from './CartSidebar';
import { useAppSelector } from '../store/hooks';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const user = useAppSelector((state) => state.auth.user);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text"><img src="/logo (1).png" alt="" /></span>
        </div>

        <nav className="nav-menu">
          <a href="#" className="nav-item">Green Friday <img src="/dis.webp" alt="" className="tagimg" /></a>
          <a href="#" className="nav-item">Daily Deals🔥</a>
          
          {/* Products Mega Menu */}
          <div className="nav-item dropdown">
            <span>Products</span>
            <span className="arrow"><img src="/dwn-arrow.png" alt="" /></span>
            <div className="dropdown-menu mega-menu">
              <div className="mega-column">
                <h3>Power</h3>
                <ul>
                  <li><a href="#">Power Banks</a></li>
                  <li><a href="#">Power Station</a></li>
                  <li><a href="#">Wall Chargers</a></li>
                  <li><a href="#">Car Chargers</a></li>
                  <li><a href="#">Cables</a></li>
                </ul>
              </div>
              <div className="mega-column">
                <h3>Audio</h3>
                <ul>
                  <li><a href="#">Wireless Stereo Earbuds</a></li>
                  <li><a href="#">Wireless Over-Ear Headphones</a></li>
                  <li><a href="#">Wireless Neckband Headphones</a></li>
                  <li><a href="#">Open-Ear Headphones</a></li>
                  <li><a href="#">Wireless Speakers</a></li>
                  <li><a href="#">Wired Earphones</a></li>
                </ul>
              </div>
              <div className="mega-column">
                <h3>Smart & Office</h3>
                <ul>
                  <li><a href="#">Smart Watches</a></li>
                  <li><a href="#">Smart Control</a></li>
                  <li><a href="#">Mouse & Keyboards</a></li>
                  <li><a href="#">Camera Accessories</a></li>
                  <li><a href="#">Backpacks</a></li>
                </ul>
              </div>
              <div className="mega-column">
                <h3>Personal Care</h3>
                <ul>
                  <li><a href="#">Grooming Series</a></li>
                  <li><a href="#">Oral Care</a></li>
                  <li><a href="#">Mirrors</a></li>
                  <li><a href="#">Hair Dryers</a></li>
                  <li><a href="#">Hair Styling Tools</a></li>
                </ul>
              </div>
              <div className="mega-column">
                <h3>Home Appliances</h3>
                <ul>
                  <li><a href="#">Vacuums</a></li>
                  <li><a href="#">Kitchen Appliances</a></li>
                  <li><a href="#">Blenders & Grinders</a></li>
                  <li><a href="#">Fans</a></li>
                  <li><a href="#">Humidifiers</a></li>
                  <li><a href="#">Electric Kettles</a></li>
                  <li><a href="#">Lightings</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hot & New Dropdown */}
          <div className="nav-item dropdown">
            <span>Hot & New</span>
            <span className="arrow"><img src="/dwn-arrow.png" alt="" /></span>
            <div className="dropdown-menu hot-new-menu">
              <a href="#">Best Seller</a>
              <a href="#">New Arrival</a>
            </div>
          </div>

          {/* Support Dropdown */}
          <div className="nav-item dropdown">
            <span>Support</span>
            <span className="arrow"><img src="/dwn-arrow.png" alt="" /></span>
            <div className="dropdown-menu support-menu">
              <a href="#" className="support-item">
                <img src="/track-icon.png" alt="Track" className="support-icon" /> {/* Placeholder icon */}
                <span className="support-text">Track Order</span>
              </a>
              <a href="#" className="support-item">
                <img src="/carlcare-icon.png" alt="Carlcare" className="support-icon" /> {/* Placeholder icon */}
                <span className="support-text">Visit Carlcare</span>
              </a>
              <a href="#" className="support-item">
                <img src="/auth-icon.png" alt="Auth" className="support-icon" /> {/* Placeholder icon */}
                <span className="support-text">Product Authentication</span>
              </a>
            </div>
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
          
          {/* Account Dropdown - Only show when authenticated */}
          {user ? (
            <div className="dropdown account-dropdown">
              <button className="icon-btn profile-btn" title="profile">
                <img src="/user-icon.png" alt="" />
              </button>
              <div className="dropdown-menu account-menu">
                <div className="account-header">
                  <span className="account-name">{user.name}</span>
                </div>
                <Link to="/dashboard/orders">My Order</Link>
                <Link to="/dashboard/account">Personal Information</Link>
                <Link to="/dashboard/wishlist">My Wish</Link>
                <Link to="/dashboard/points">My Explorer Points</Link>
                <Link to="/dashboard/coupons">Coupons Center</Link>
                <Link to="/dashboard/address">Address Management</Link>
                <Link to="/dashboard/reviews">Product Reviews</Link>
                <div className="logout">
                  <Link to="/logout">Sign out</Link>
                </div>
              </div>
            </div>
          ) : (
            <Link to="/login" className="icon-btn profile-btn" title="Login">
              <img src="/user-icon.png" alt="" />
            </Link>
          )}
        </div>
      </div>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
