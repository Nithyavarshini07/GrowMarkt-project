import React from "react";
import { useNavigate } from "react-router-dom";
import "./addNewCompetitor.css";

export default function AddNewCompetitor() {
  const navigate = useNavigate();

  return (
    <div className="addcomp-page">
      <aside className="sidebar">
        <div className="brand-header">
          <span className="brand-main">GrowMarkt</span>
          <span className="brand-subtitle">THE DATA CURATOR</span>
        </div>

        <nav>
          <ul>
            <li className="active">
              <img src="/assets/dashboard.png" alt="dashboard" className="nav-icon" />
              DASHBOARD
            </li>

            <li>
              <img src="/assets/campaign.png" alt="campaign" className="nav-icon" />
              CAMPAIGN MANAGER
            </li>

            <li onClick={() => navigate("/analytics")}>
              <img src="/assets/analytics.png" alt="analytics" className="nav-icon" />
              ANALYTICS
            </li>

            <li>
              <img src="/assets/competition.png" alt="competitors" className="nav-icon" />
              COMPETITORS
            </li>

            <li>
              <img src="/assets/settings.png" alt="settings" className="nav-icon" />
              SETTINGS
            </li>
          </ul>
        </nav>

        <button className="campaign-btn">+ NEW CAMPAIGN</button>
      </aside>

      <main className="addcomp-main" aria-label="Add competitor page">
        <div className="addcomp-topbar">
          <div className="addcomp-search">
            <span className="addcomp-search-ic">
              <img src="/assets/search.png" alt="search" />
            </span>
            <input placeholder="Search competitors or metrics..." />
          </div>

          <div className="addcomp-user">
            <div className="addcomp-bell">
              <img src="/assets/bell.png" alt="notification" />
            </div>

            <div className="addcomp-usertext">
              <div className="addcomp-username">Alex Rivera</div>
              <div className="addcomp-userrole">LEAD STRATEGIST</div>
            </div>

            <img className="addcomp-avatar" src="/assets/alex.jpg" alt="avatar" />
          </div>
        </div>

        <div className="addcomp-backdrop" aria-hidden="true" />

        <section className="addcomp-modal" role="dialog" aria-modal="true" aria-label="Add New Competitor">
          <header className="addcomp-modal-head">
            <div className="addcomp-modal-titlewrap">
              <div className="addcomp-modal-title">Add New Competitor</div>
              <div className="addcomp-modal-sub">
                Expand your market intelligence by tracking new voices in your industry.
              </div>
            </div>

            <button className="addcomp-close" aria-label="Close" onClick={() => navigate("/competitors")}>
              ×
            </button>
          </header>

          <div className="addcomp-modal-body">
            <div className="addcomp-left">
              <div className="addcomp-group">
                <div className="addcomp-label">BRAND NAME</div>
                <input className="addcomp-input addcomp-input--single" placeholder="e.g. Acme Corp" />
              </div>

              <div className="addcomp-group">
                <div className="addcomp-label">SOCIAL PROFILE URLS</div>

                <div className="addcomp-row">
                  <div className="addcomp-icbox" aria-hidden="true">
                    <img src="/assets/linkedin2.png" alt="" className="addcomp-icimg" />
                  </div>
                  <input className="addcomp-input" placeholder="linkedin.com/company/..." />
                </div>

                <div className="addcomp-row">
                  <div className="addcomp-icbox" aria-hidden="true">
                    <img src="/assets/instagram.png" alt="" className="addcomp-icimg" />
                  </div>
                  <input className="addcomp-input" placeholder="instagram.com/..." />
                </div>

                <div className="addcomp-row">
                  <div className="addcomp-icbox addcomp-icbox--x" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 6L18 18"
                        stroke="#1F2937"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18 6L6 18"
                        stroke="#1F2937"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <input className="addcomp-input" placeholder="x.com/..." />
                </div>

                <div className="addcomp-row">
                  <div className="addcomp-icbox" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M10 4V18.2c0 1.5 1.3 2.8 2.8 2.8 1.7 0 3.2-1.4 3.2-3.1V8.2"
                        stroke="#111827"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 4c1.8 2 4.3 3 7 3"
                        stroke="#111827"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <input className="addcomp-input" placeholder="tiktok.com/@..." />
                </div>

                <div className="addcomp-row">
                  <div className="addcomp-icbox" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M14 9h2V6h-2c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.1l.9-3H14V9Z"
                        fill="#111827"
                      />
                    </svg>
                  </div>
                  <input className="addcomp-input" placeholder="facebook.com/..." />
                </div>
              </div>

              <div className="addcomp-group">
                <div className="addcomp-label">INDUSTRY SUGGESTIONS</div>
                <div className="addcomp-suggest">
                  <div className="addcomp-suggest-left">
                    <div className="addcomp-suggest-check" aria-hidden="true" />
                    <div className="addcomp-suggest-name">Velox Digital</div>
                  </div>
                  <div className="addcomp-suggest-plus" aria-hidden="true">
                    +
                  </div>
                </div>
              </div>
            </div>

            <div className="addcomp-divider" aria-hidden="true" />

            <div className="addcomp-right">
              <div className="addcomp-right-label">COMPETITOR PREVIEW</div>

              <div className="addcomp-preview">
                <div className="addcomp-preview-top">
                  <div className="addcomp-preview-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 20V6c0-1.1.9-2 2-2h8l6 6v10c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2Z"
                        fill="#8FA4C3"
                        opacity="0.55"
                      />
                      <path
                        d="M8 12h8M8 16h8M8 8h5"
                        stroke="#6B7D96"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="addcomp-preview-title">New Competitor</div>
                  <div className="addcomp-preview-sub">Market Analysis Pending</div>
                </div>

                <div className="addcomp-preview-icons" aria-hidden="true">
                  <div className="mini-ic" />
                  <div className="mini-ic" />
                  <div className="mini-ic" />
                  <div className="mini-ic" />
                  <div className="mini-ic" />
                </div>

                <div className="addcomp-scope">
                  <div className="addcomp-scope-title">ANALYSIS SCOPE</div>
                  <div className="addcomp-scope-text">
                    Data collection will begin across all verified profiles once added to your dashboard.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="addcomp-modal-foot">
            <button className="addcomp-cancel" onClick={() => navigate("/competitors")}>
              CANCEL
            </button>
            <button className="addcomp-start">START ANALYSIS</button>
          </footer>
        </section>
      </main>
    </div>
  );
}