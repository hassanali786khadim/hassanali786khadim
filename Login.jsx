import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-split-wrapper">
      
      
      <div className="login-left">
        <div className="login-card">
          <div className="logo">LOGO</div>
          <h2>Welcome back</h2>
          <p>Welcome back! Please enter your details.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Password" />
            
            <div className="options">
              <label>
                <input type="checkbox" /> Save info
              </label>
              <Link to='/forget'>Forgot password</Link>
              
            </div>

            <button className="login-btn">Login</button>

            <p className="or">Or login with</p>
            <div className="socials">
              <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" />
              <img src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook" />
              <img src="https://img.icons8.com/ios-filled/48/mac-os.png" alt="Apple" />
            </div>

            <p className="signup-text">
  Don’t have an account? <Link to="/">Sign up</Link>
</p>
          </form>
        </div>
      </div>

      
      <div className="login-right">
        <div className="code-box">📧 Your login code is <strong>XJH4</strong></div>

        <div className="auth-box">
          <input type="email" placeholder="john.doe@gmail.com" />
          <div className="otp-row">
            
              <input type="text" placeholder="0 _ _ _ _" />
            
          </div>
          <button className="login-btn dark">Log in</button>
        </div>

        <div className="profile-floating">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Vanessa" />
          <div>
            <strong>Vanessa L.</strong>
            <p>vanessa@acme.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
