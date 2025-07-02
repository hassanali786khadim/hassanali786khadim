import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
    <div className="auth-container">
      
      <div className="signup-panel">
        <div className="signup-card">
          <div className="logo-box">LOGO</div>
          <h2>Sign up</h2>
          <form>
            <input type="text" placeholder="Enter your full name" />
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Password" />
            <small>Must be at least 5 characters</small>
            <input type="password" placeholder="Confirm Password" />

            <label className="terms">
              <input type="checkbox" /> By creating an account you agree to our
              <a href="#"> Terms of Service </a> and
              <a href="#"> Privacy Policy</a>
            </label>

            <button type="submit" className="signup-btn">Sign Up</button>

            <p className="or-signup">Or sign up with</p>
            <div className="social-icons">
              <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" />
              <img src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook" />
              <img src="https://img.icons8.com/ios-filled/48/mac-os.png" alt="Apple" />
            </div>

            <p className="login-redirect">
  Already have an account? <Link to="/login">Login</Link>
</p>
          </form>
        </div>
      </div>

      
      <div className="login-panel">
        <div className="floating-code">📧 Your login code is <strong>XJH4</strong></div>

        <div className="login-card">
          <input type="email" placeholder="john.doe@gmail.com" />
          
          <div className="otp-box">
             
              <input  type="text" placeholder='0 _ _ _ _' />
            
          </div>
          <button className="login-btn">Log In</button>
        </div>

        <div className="profile-card">
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

export default Signup;
