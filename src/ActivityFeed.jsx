import React, { useState } from "react";
import "./ActivityFeed.css";
import { useNavigate } from "react-router-dom";


function IconSearch(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10.8 18.2a7.4 7.4 0 1 0 0-14.8 7.4 7.4 0 0 0 0 14.8Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M20.4 20.4l-3.9-3.9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
const ActivityFeed = () => {
  const navigate = useNavigate();
const [selectedDate, setSelectedDate] = useState(new Date());
const [showPicker, setShowPicker] = useState(false);

const startDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
const endDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);

const formatDate = (date) =>
  date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  });
  


  return (
    <div className="activity-page">

{/* SIDEBAR — matches Dashboard structure */}
<aside className="sidebar">
  <div className="brand-header">
    <span className="brand-main">GrowMarkt</span>
    <span className="brand-subtitle">THE DATA CURATOR</span>
  </div>

  <nav className="nav-menu">
    <ul>
      <li className={location.pathname === "/dashboard" ? "active" : ""} onClick={() => navigate("/dashboard")}>
        <img src="/assets/dashboard.png" alt="dashboard" className="nav-icon" />
        DASHBOARD
      </li>

      <li className={location.pathname === "/campaign-timeline" ? "active" : ""} onClick={() => navigate("/campaign-timeline")}>
        <img
          src="/assets/campaign.png"
          alt="campaign"
          className="nav-icon"
        />
        CAMPAIGN MANAGER
      </li>

      <li className={location.pathname === "/analytics" ? "active" : ""} onClick={() => navigate("/analytics")}>
        <img src="/assets/analytics.png" alt="analytics" className="nav-icon" />
        ANALYTICS
      </li>

      <li className={location.pathname === "/competitor-analysis" ? "active" : ""} onClick={() => navigate("/competitor-analysis")} style={{ cursor: "pointer" }}>
        <img src="/assets/competition.png" alt="competitors" className="nav-icon" />
        COMPETITORS
      </li>

      <li className={location.pathname === "/settings" ? "active" : ""} onClick={() => navigate("/settings")}>
        <img
          src="/assets/settings.png"
          alt="settings"
          className="nav-icon"
        />
        SETTINGS
      </li>
    </ul>
  </nav>

  <button className="campaign-btn">+ NEW CAMPAIGN</button>
</aside>
      {/* MAIN */}
      <main className="activity-main">

        {/* TOP BAR */}
        <div className="af-top">

          <div className="af-search-container">
            <span className="af-search-icon">
              
<IconSearch />
            </span>
            <input className="af-search" placeholder="Search insights..." />
          </div>

          <div className="af-user">

            <div className="af-user-left">

              <div className="af-notif-icon">
                <img src="/assets/bell.png" alt="notification" />
                <span className="af-dot"></span>
              </div>

              <div className="af-user-info">
                <p className="af-name">Alex Mercer</p>
                <p className="af-role">PREMIUM CURATOR</p>
              </div>

            </div>

            <img src="/assets/alex.jpg" alt="avatar" className="af-avatar" />

          </div>
          
        </div>
          <div className="back-button-container">
    <button
      type="button"
      className="vm-back"
      onClick={() => navigate("/dashboard")}
    >
      <span className="vm-back-arrow" aria-hidden="true">
        ←
      </span>
      Back to Dashboard
    </button>
  </div>

        {/* HEADER */}
        <div className="af-header">

          <div className="af-header-left">
            <p className="af-label">SYSTEM LOGS</p>
            <h1 className="af-title">Activity Feed</h1>
            <p className="af-sub">
              A real-time editorial ledger tracking all growth actions,
              competitor shifts, and system health across your portfolio.
            </p>
          </div>

        <div className="af-date-box">
  <img src="/assets/cal.png" alt="calendar" className="af-cal-icon" />

  <span>
    {formatDate(startDate)} - {formatDate(endDate)}
  </span>

  <img
    src="/assets/down.png"
    alt="dropdown"
    className="af-down-icon"
    onClick={() => document.getElementById("realDatePicker").showPicker()}
  />

  <input
    id="realDatePicker"
    type="month"
    className="af-hidden-picker"
    value={`${selectedDate.getFullYear()}-${String(
      selectedDate.getMonth() + 1
    ).padStart(2, "0")}`}
    onChange={(e) => {
      const [year, month] = e.target.value.split("-");
      setSelectedDate(new Date(year, month - 1));
    }}
  />
</div>
        </div>

        {/* FILTERS */}
        <div className="af-filters">

          <span className="af-filter active">
            <img src="/assets/act1.png" alt="all" />
            All Activity
          </span>

          <span className="af-filter">
            <img src="/assets/act2.png" alt="published" />
            Published
          </span>

<span
  className="af-filter"
  onClick={() => navigate("/competitor-analysis")}
  style={{ cursor: "pointer" }}
>
  <img src="/assets/act3.png" alt="competitors" />
  Competitors
</span>

          <span className="af-filter">
            <img src="/assets/act4.png" alt="team" />
            Team
          </span>

          <span className="af-filter">
            <img src="/assets/act5.png" alt="alerts" />
            Alerts
          </span>

        </div>

        {/* FEED */}
        <div className="af-feed">

          <p className="af-day">TODAY, OCT 24</p>
          <div className="af-divider"></div>

          {/* ITEM 1 */}
          <div className="af-item">

            <div className="af-icon success">
              <img src="/assets/tick.png" />
            </div>

            <div className="af-content">

              <div className="af-row">
                <h3>Instagram Post Successful</h3>
                <span className="af-time">14:20 PM</span>
              </div>

              <p>
                Post titled "The Future of Growth" was successfully pushed to
                @GrowthMarktHQ. Engagement tracking initiated.
              </p>

              <div className="af-meta">
  <div className="af-user-mini">
    <img src="/assets/girl.jpg" alt="user" />
    <span>Sarah Chen</span>
  </div>

  <button>VIEW ANALYTICS</button>
</div>

            </div>
          </div>

          {/* ITEM 2 */}
          <div className="af-item">

            <div className="af-icon info">
              <img src="/assets/comp.png" alt="competitor" />
            </div>

            <div className="af-content">

              <div className="af-row">
                <h3>Competitor Campaign Detected</h3>
                <span className="af-time">11:05 AM</span>
              </div>

              <p>
                Axiom Systems launched a new seasonal campaign 'Fall Efficiency'
                across LinkedIn and Twitter.
              </p>

<div className="af-meta">
  <div className="af-user-mini">
    <div className="af-letter-avatar">SYS</div>
    <span>System Monitor</span>
  </div>
  <button>ANALYZE IMPACT</button>
</div>

            </div>
          </div>

          {/* YESTERDAY */}
          <p className="af-day">YESTERDAY, OCT 23</p>

          {/* ITEM 3 */}
          <div className="af-item">

            <div className="af-icon error">
              <img src="/assets/api.png" alt="error" />
            </div>

            <div className="af-content">

              <div className="af-row">
                <h3>API Connection Timeout</h3>
                <span className="af-time">18:45 PM</span>
              </div>

              <p>
                The connection to Meta Ad Manager was temporarily lost.
                Automatic retry successful after 3 minutes.
              </p>

<div className="af-meta">
  <div className="af-user-mini">
    <div className="af-letter-avatar">AOT</div>
    <span>Automated Recovery</span>
  </div>
</div>

            </div>
          </div>

          <div className="af-load">LOAD OLDER ACTIVITY</div>

        </div>
      </main>
    </div>
  );
};

export default ActivityFeed;