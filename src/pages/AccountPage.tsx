import React from 'react';
import { Link } from 'react-router-dom';

const AccountPage: React.FC = () => {
  return (
    <div>
      <div className="account-header">
        <h1 className="account-title">Welcome, David Agochukwu</h1>
        <Link to="#" className="delete-account">Delete Account</Link>
      </div>

      <div className="info-card">
        <div className="info-header">
          <span className="info-title">Personal Information</span>
          <div className="info-actions">
            <Link to="/dashboard/change-password" style={{ color: '#111', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>Change Password</Link>
            <button>Edit</button>
          </div>
        </div>

        <div className="info-row">
          <span className="info-label">Name:</span>
          <span>David Agochukwu</span>
        </div>
        <div className="info-row">
          <span className="info-label">Contact:</span>
          <span>agochukwudavid@gmail.com</span>
        </div>
        <div className="info-row">
          <span className="info-label">Phone Number:</span>
          <span></span>
        </div>
        <div className="info-row">
          <span className="info-label">Birthday Date:</span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
