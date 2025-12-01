import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import '../../styles/Dashboard.css';

const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path ? 'sidebar-link active' : 'sidebar-link';

  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <div className="sidebar-section">
          <h3 className="sidebar-title">Transaction Management</h3>
          <Link to="/dashboard/orders" className={isActive('/dashboard/orders')}>My Order</Link>
        </div>
        
        <div className="sidebar-section">
          <h3 className="sidebar-title">Account</h3>
          <Link to="/dashboard/account" className={isActive('/dashboard/account')}>Personal Information</Link>
          <Link to="/dashboard/wishlist" className={isActive('/dashboard/wishlist')}>My Wish</Link>
          <Link to="/dashboard/points" className={isActive('/dashboard/points')}>My Explorer Point</Link>
          <Link to="/dashboard/coupons" className={isActive('/dashboard/coupons')}>Coupons Center</Link>
          <Link to="/dashboard/address" className={isActive('/dashboard/address')}>Address Management</Link>
          <Link to="/dashboard/reviews" className={isActive('/dashboard/reviews')}>Product Reviews</Link>
        </div>
      </aside>
      
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
