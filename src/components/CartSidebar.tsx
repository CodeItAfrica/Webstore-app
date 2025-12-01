import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const { items, subtotal } = useAppSelector((state) => state.cart);

  if (!isOpen) return null;

  const handleQuantityChange = (id: string, newQuantity: number) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart-sidebar-overlay" onClick={onClose}>
      <div className="cart-sidebar" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <span className="cart-title">Shopping Cart</span>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>
              Your cart is empty
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <span className="cart-item-name">{item.name}</span>
                  {item.variant && <div className="cart-item-variant">{item.variant}</div>}
                  <div className="cart-item-price">
                    ₦ {item.price.toLocaleString()}
                    {item.originalPrice && (
                      <span className="cart-item-original-price">
                        ₦ {item.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <div className="cart-item-actions">
                    <div className="quantity-control">
                      <button 
                        className="qty-btn"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="qty-val">{item.quantity}</span>
                      <button 
                        className="qty-btn"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button 
                      className="remove-btn"
                      onClick={() => handleRemove(item.id)}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="subtotal-row">
            <span>Subtotal</span>
            <span>₦ {subtotal.toLocaleString()}</span>
          </div>
          <Link to="/cart" className="view-cart-btn" onClick={onClose}>View Cart</Link>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
