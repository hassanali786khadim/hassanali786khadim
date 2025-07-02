import React from 'react';
import './Email.css';


const Email = () => {
  return (
    <div className="auth-container">
      {/* Left Side - Check Email */}
      <div className="Email-panel">
        <div className="check-card">
          <div className="email-icon">📧</div>
          <h2>Check your email</h2>
          <p className="desc">
            We sent a password reset link to<br />
            <strong>exampleuser@gmail.com</strong>
          </p>

          <button className="back-login-btn">Back to login</button>
          <p className="resend">
            Don’t receive the email? <a href="#">Click to resend</a>
          </p>
        </div>
      </div>

      {/* Right Side - Preview Panel */}
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

export default Email;
