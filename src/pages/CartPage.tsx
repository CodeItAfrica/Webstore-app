import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const CartPage: React.FC = () => {
  return (
    <div className="cart-page-container">
      <div className="cart-page-header">
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Shopping Cart</h1>
        <div className="cart-breadcrumb">Shopping Cart &gt; Secure Checkout &gt; Order Complete</div>
      </div>

      <div className="cart-layout">
        <div className="cart-list">
          {/* Mock Item 1 */}
          <div className="cart-page-item">
            <span className="check-icon">✔</span>
            <img src="/powerbank.png" alt="PowerBank" className="cart-item-img" style={{width: '100px', height: '100px'}} />
            <div className="cart-item-details">
              <span className="cart-item-name" style={{fontSize: '1rem'}}>PowerBox 400 Vision 40000mAh 22.5W Power Bank</span>
              <div className="cart-item-variant">Black</div>
              <div style={{marginTop: '1rem', fontWeight: 700}}>₦ 37,900</div>
            </div>
            <div className="cart-item-actions" style={{flexDirection: 'column', gap: '1rem'}}>
              <div style={{display: 'flex', gap: '0.5rem'}}>
                <button className="remove-btn">♡</button>
                <button className="remove-btn">🗑️</button>
              </div>
              <div className="quantity-control">
                <button className="qty-btn">-</button>
                <span className="qty-val">1</span>
                <button className="qty-btn">+</button>
              </div>
            </div>
          </div>

          {/* Mock Item 2 */}
          <div className="cart-page-item">
            <span className="check-icon">✔</span>
            <img src="/powerbank2.png" alt="PowerBank" className="cart-item-img" style={{width: '100px', height: '100px'}} />
            <div className="cart-item-details">
              <span className="cart-item-name" style={{fontSize: '1rem'}}>PowerJet 501 50000mAh 85W Fast Charging Power Banks</span>
              <div className="cart-item-variant">Black</div>
              <div style={{marginTop: '1rem', fontWeight: 700}}>₦ 59,900</div>
            </div>
            <div className="cart-item-actions" style={{flexDirection: 'column', gap: '1rem'}}>
              <div style={{display: 'flex', gap: '0.5rem'}}>
                <button className="remove-btn">♡</button>
                <button className="remove-btn">🗑️</button>
              </div>
              <div className="quantity-control">
                <button className="qty-btn">-</button>
                <span className="qty-val">1</span>
                <button className="qty-btn">+</button>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-summary">
          <h3 className="summary-title">Order summary</h3>
          <div className="summary-row">
            <span>Cart Subtotal</span>
            <span>₦ 97,800</span>
          </div>
          <div className="summary-row summary-total">
            <span>Estimated total</span>
            <span>₦ 97,800</span>
          </div>
          <button className="checkout-btn" style={{marginTop: '1.5rem'}}>Checkout</button>
          <Link to="/" className="continue-shopping">Continue shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
