import React from "react";
import "./LoginPage.css"; // reuse same CSS
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      
      {/* LEFT SIDE */}
      <section className="info-section">
        <header className="logo">GrowMarkt</header>

        <div className="hero-content">
          <h1>
            Secure your digital <br />
            <span>heritage.</span>
          </h1>

          <p className="description">
            Manage your growth narratives with precision. Join the inner circle
            of brands that treat social intelligence as a financial-grade asset.
          </p>

          <div className="feature-item">
            <div className="icon-box dark"></div>
            <div>
              <h3>Spectral Analysis</h3>
              <p>
                Real-time sentiment vectoring for high-velocity teams.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="icon-box green"></div>
            <div>
              <h3>Contextual Intelligence</h3>
              <p>
                Automated storytelling that decodes complex market signals.
              </p>
            </div>
          </div>

          <div className="testimonial-card">
            <p>
              "GrowMarkt transformed our presence from disjointed noise into a
              masterful editorial engine. We've seen a 40% lift in engagement
              within 60 days of refinement."
            </p>

            <div className="author">
              <div className="avatar"></div>
              <div>
                <strong>Sarah Kensington</strong>
                <span>MARKETING DIRECTOR, STRATOS GLOBAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className="form-section">
        <div className="login-card">
          <h2>Reset your password</h2>
          <p className="subtitle">
            Choose a strong password to protect your account and social assets.
          </p>

          <form>
            <div className="input-group">
              <label>NEW PASSWORD</label>
              <input type="password" placeholder="••••••••" />
            </div>

            <div className="input-group">
              <label>CONFIRM PASSWORD</label>
              <input type="password" placeholder="••••••••" />
            </div>

            <div className="password-hint">
              <span>• 8+ CHARACTERS</span>
              <span>• SYMBOL</span>
              <span>• NUMBER</span>
            </div>

            <button className="sign-in-btn">
              UPDATE PASSWORD →
            </button>
          </form>

          <p
            className="back-link"
            onClick={() => navigate("/")}
          >
            ← Return to Sign In
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="page-footer">
        <div className="footer-left">
          <strong>GrowMarkt</strong> © 2024 GROWMARKT. EDITORIAL PRECISION.
        </div>
      </footer>
    </div>
  );
};

export default ResetPassword;