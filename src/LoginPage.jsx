import React from 'react';
import './LoginPage.css';
import { useNavigate } from "react-router-dom";
import ResetPassword from "./ResetPassword";

const LoginPage = () => {

  const navigate = useNavigate();


  return (
    <div className="login-container">
      {/* Left Side: Branding & Info */}
      <section className="info-section">
        <header className="logo">GrowMarkt</header>
        
        <div className="hero-content">
          <h1>Elevate your data to <br /><span>editorial precision.</span></h1>
          <p className="description">
            Unlock high-fidelity social intelligence designed for executive decision-making. 
            Move beyond basic tracking into the realm of curated, actionable data precision.
          </p>

          <div className="feature-item">
            <div className="icon-box dark">
              <i className="feature-icon">S</i> 
            </div>
            <div>
              <h3>Spectral Clustering</h3>
              <p>Refining digital footprints through advanced algorithmic precision.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="icon-box green">
              <i className="feature-icon">D</i>
            </div>
            <div>
              <h3>Dimensional Analysis</h3>
              <p>Deep-tier performance tracking across multi-faceted digital ecosystems.</p>
            </div>
          </div>

          <div className="testimonial-card">
            <p>"The interface has fundamentally transformed our reporting culture, providing the clarity needed for global strategy."</p>
            <div className="author">
              <div className="avatar"></div>
              <div>
                <strong>Marcus Thorne</strong>
                <span>CHIEF STRATEGY OFFICER, NEXUS GLOBAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Side: Login Form */}
      <section className="form-section">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p className="subtitle">Log in to your editorial dashboard.</p>

          <form>
            <div className="input-group">
              <label>EMAIL ADDRESS</label>
              <input type="email" placeholder="curator@growmarkt.com" />
            </div>

            <div className="input-group">
              <div className="label-row">
                <label>PASSWORD</label>
                <span 
  className="forgot-password"
  onClick={() => navigate("/reset-password")}
  style={{ cursor: "pointer" }}
>
  Forgot password?
</span>
              </div>
              <input type="password" placeholder="••••••••" />
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="keep-logged" />
              <label htmlFor="keep-logged">Keep me logged in</label>
            </div>

            <button type="submit" className="sign-in-btn">SIGN IN</button>
          </form>

          <div className="divider">
            <span>OR CONTINUE WITH</span>
          </div>

          <div className="social-login">
            <button className="social-btn">GOOGLE</button>
            <button className="social-btn">LINKEDIN</button>
          </div>

          <p className="signup-link">
  New to GrowMarkt?{" "}
  <span 
    onClick={() => navigate("/create-account")}
    style={{ cursor: "pointer", fontWeight: "600" }}
  >
    Create an account
  </span>
</p>
        </div>
      </section>

      {/* Global Footer */}
      <footer className="page-footer">
        <div className="footer-left">
          <strong>GrowMarkt</strong> © 2024 GROWMARKT INC. EDITORIAL PRECISION IN DATA.
        </div>
        <div className="footer-links">
          <a href="#">PRIVACY POLICY</a>
          <a href="#">TERMS OF SERVICE</a>
          <a href="#">SECURITY</a>
          <a href="#">HELP CENTER</a>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;