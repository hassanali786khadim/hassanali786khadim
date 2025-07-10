import React from 'react';
import './ResetAndLogin.css';

const ResetAndLogin = () => {
  return (
    <div className="container">
      <div className="left-panel">
        <div className="card">
          <div className="icon-success">✔</div>
          <h2>Password reset</h2>
          <p>Your password has been successfully reset. Click below to login.</p>
          <button className="login-btn">Back to login</button>
        </div>
      </div>
      <div className="right-panel">
        <div className="login-card">
          <div className="login-code">
            <span>📧 Your login code is XJH4</span>
          </div>
          <input type="email" value="john.doe@gmail.com" disabled />
          <div className="otp-inputs">
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
          </div>
          <button className="login-btn">Log in</button>
          <div className="profile-card">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="profile-img"
            />
            <div className="profile-info">
              <h4>Vanessa L.</h4>
              <p>vanes@acme.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetAndLogin;
