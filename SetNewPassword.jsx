import React from 'react';
import './SetNewPassword.css';
import { Link } from 'react-router-dom';

const SetNewPassword = () => {
  return (
    <div className="auth-container">
      <div className="set-password-panel">
        <div className="password-card">
          <div className="icon">🔑</div>
          <h2>Set new password</h2>
          <p className="desc">
            Your new password must be different from previously used passwords.
          </p>

          <form>
            <input type="password" placeholder="Password" required />
            <small>Must be at least 5 characters</small>
            <input type="password" placeholder="Confirm Password" required />

            <button className="reset-btn" type="submit">Reset password</button>
            <p className="back-login">
              <Link to="/">Back to login</Link>
            </p>
          </form>
        </div>
      </div>

      <div className="preview-panel">
        <div className="floating-code">
          📧 Your login code is <strong>XJH4</strong>
        </div>

        <div className="login-card">
          <input type="email" value="john.doe@gmail.com" disabled />
          <div className="otp-box">
            <input type="text" placeholder="0 _ _ _ _" />
          </div>
          <button className="login-btn">Log In</button>
        </div>

        <div className="profile-card">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Vanessa"
          />
          <div>
            <strong>Vanessa L.</strong>
            <p>vanessa@acme.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;
