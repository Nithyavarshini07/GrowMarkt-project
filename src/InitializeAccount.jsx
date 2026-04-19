import React from "react";
import "./InitializeAccount.css";

const InitializeAccount = () => {
  return (
    <div className="container">
      
      {/* LEFT SECTION */}
      <div className="left">
        <h3 className="logo">GrowMarkt</h3>

 <div className="hero-content">
        <h1 className="title">
          Elevate your data to <br />
          <span>editorial precision.</span>
        </h1>

        <p className="desc">
          Unlock high-fidelity social intelligence designed for executive decision-making.
          Move beyond basic tracking into the realm of curated, actionable data precision.
        </p>

        <div className="features">
          <div className="feature">
            <div className="icon dark">hub</div>
            <div>
              <h3>Spectral Clustering</h3>
              <p>Refining digital footprints through advanced algorithmic precision.</p>
            </div>
          </div>

          <div className="feature">
            <div className="icon green">layers</div>
            <div>
              <h4>Dimensional Analysis</h4>
              <p>Deep-tier performance tracking across multi-faceted digital ecosystems.</p>
            </div>
          </div>
        </div>

<div className="testimonial">
  <p>
    "The interface has fundamentally transformed our reporting culture,
    providing the clarity needed for global strategy."
  </p>

  <div className="user">
    <div className="avatar">
      <img
        src="/assets/chief.jpg"
        alt="Marcus Thorne"
        className="avatar-img"
      />
    </div>

    <div>
      <strong>Marcus Thorne</strong><br />
      <span> CHIEF STRATEGY OFFICER, NEXUS GLOBAL</span>
    </div>
  </div>
</div>
      </div>
</div>
      {/* RIGHT SECTION */}
      <div className="right">
        <div className="card">
          <h2>Initialize Account</h2>
          <p className="trial">Start your 14-day editorial trial.</p>

          <input placeholder="Jane Cooper" />
          <input placeholder="Acme Global" />
          <input placeholder="jane@company.com" />
          <input type="password" placeholder="••••••••" />

<label className="checkbox">
  <input type="checkbox" />
  <span className="checkmark"></span>
  <span>I agree to the Terms of Service and Privacy Policy.</span>
</label>

          <button className="btn">CREATE ACCOUNT</button>

          <p className="or">OR SIGN UP WITH</p>

 <div className="social-login">
  <button type="button" className="social-btn">
    <img src="/assets/google.png" alt="Google" className="social-icon" />
    GOOGLE
  </button>

  <button type="button" className="social-btn">
    <img src="/assets/linkedin.png" alt="LinkedIn" className="social-icon" />
    LINKEDIN
  </button>
</div>

  <p className="login">
  Already part of the network?{" "}
  <span onClick={() => window.location.href = "/"}>
    Log in
  </span>
</p>
        </div>
      </div>
{/* Global Footer */}
      <footer className="page-footer">
        <div className="footer-left">
          <strong>GrowMarkt</strong><span className="footer-text">
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

export default InitializeAccount;