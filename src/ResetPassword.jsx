import React from "react";
import "./ResetPassword.css";
import { useNavigate } from "react-router-dom";
const ResetPassword = () => {
    const navigate = useNavigate();
  return (
    <div className="container">
      
      {/* LEFT SIDE */}
      <div className="left">
        <h3 className="logo">GrowMarkt</h3>

        <h1 className="title">
          Elevate your data to <br />
          <span>editorial precision.</span>
        </h1>

        <p className="desc">
          Join the platform where growth is curated, not just tracked.
          Experience the financial-journal approach to social intelligence.
        </p>

        <div className="features">

  <div className="feature">
    <div className="icon dark">
      <img src="/assets/strategic.png" alt="Strategic Recovery" className="feature-img" />
    </div>
    <div>
      <h4>Strategic Recovery</h4>
      <p>Point-in-time restoration for your entire data ecosystem.</p>
    </div>
  </div>

  <div className="feature">
    <div className="icon dark">
      <img src="/assets/secure.png" alt="Secure Infrastructure" className="feature-img" />
    </div>
    <div>
      <h4>Secure Infrastructure</h4>
      <p>Bank-level encryption protecting your historical data.</p>
    </div>
  </div>

</div>

        <div className="testimonial">
          <p>
            "Redefining our brand’s soul through digital excellence was only
            possible with GrowMarkt's precision."
          </p>

          <div className="user">
            <div className="avatar green-avatar">SK</div>
            <div>
              <h5>Sarah Kensington</h5>
              <span>CHIEF VISIONARY OFFICER</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <div className="card">
          <h2>Reset Password</h2>
          <p className="trial">
            Enter your email address and we'll send you instructions to reset your password.
          </p>

          <label className="label">Email Address</label>
          <input placeholder="sarah@example.com" />

          <button
  className="sign-in-btn"
  onClick={() => navigate("/reset-link")}
>
  Send Reset Link →
</button>

          <p 
  className="back"
  onClick={() => navigate("/")}
  style={{ cursor: "pointer" }}
>
  ← Back to Sign In
</p>
        </div>
      </div>
       {/* Global Footer */}
      <footer className="page-footer">
        <div className="footer-left">
          <strong>GrowMarkt</strong> <span className="footer-text">
  © 2024 GROWMARKT INC. EDITORIAL PRECISION IN DATA.
</span>
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

export default ResetPassword;