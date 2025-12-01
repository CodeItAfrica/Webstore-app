import React from 'react';

const ChangePasswordPage: React.FC = () => {
  return (
    <div>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>Change Password</h2>
      
      <form className="password-form" style={{ margin: '0 auto' }}>
        <div className="form-group">
          <label className="form-label">Email Address<span style={{color: 'red'}}>*</span></label>
          <input type="email" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Verify Code<span style={{color: 'red'}}>*</span></label>
          <div className="verify-group">
            <input type="text" className="form-input" />
            <button type="button" className="obtain-btn">Obtain</button>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">New Password<span style={{color: 'red'}}>*</span></label>
          <input type="password" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Confirm New Password<span style={{color: 'red'}}>*</span></label>
          <input type="password" className="form-input" />
        </div>

        <button type="submit" className="confirm-btn">Confirm to Change</button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
