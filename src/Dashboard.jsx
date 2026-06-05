import React from "react";
import "./Dashboard.css";
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

const Dashboard = () => {
   const navigate = useNavigate();
const today = new Date();

const days = ["S", "M", "T", "W", "T", "F", "S"];

// Get current month details
const year = today.getFullYear();
const month = today.getMonth();

// First day of month
const firstDay = new Date(year, month, 1).getDay();

// Number of days in month
const totalDays = new Date(year, month + 1, 0).getDate();

// Create empty slots + dates
const calendarDays = [];

// empty slots before month start
for (let i = 0; i < firstDay; i++) {
  calendarDays.push(null);
}

// actual dates
for (let d = 1; d <= totalDays; d++) {
  calendarDays.push(d);
}

  const rawValues = [102, 140, 115, 179, 153, 128, 243, 193];
  const values = [...rawValues, 166, 200, 140, 118];
  const max = Math.max(...values);

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
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

<li onClick={() => navigate("/campaign-timeline")}>
  <img
    src="/assets/campaign.png"
    alt="campaign"
    className="nav-icon"
  />
  CAMPAIGN MANAGER
</li>

<li onClick={() => navigate("/analytics")}>
  <img src="/assets/analytics.png" alt="analytics" className="nav-icon" />
  ANALYTICS
</li>

<li onClick={() => navigate("/competitor-analysis")} style={{ cursor: "pointer" }}>
  <img src="/assets/competition.png" alt="competitors" className="nav-icon" />
  COMPETITORS
</li>

<li onClick={() => navigate("/settings")}>
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
      <main className="main">

        {/* TOPBAR */}
        <div className="topbar">

          <div className="search-container">
            <span className="search-icon">
              <IconSearch />
            </span>
            <input placeholder="Search insights..." />
          </div>

          <div className="user-profile">

            <div className="user-profile-left">

              <div className="notif-icon">
                <img src="/assets/bell.png" alt="notification" />
                <span className="dot"></span>
              </div>

              <div className="profile-info">
                <p className="user-name">Alex Mercer</p>
                <p className="user-role">PREMIUM CURATOR</p>
              </div>

            </div>

            <img src="/assets/alex.jpg" alt="avatar" className="avatar" />

          </div>

        </div>

        {/* METRIC CARDS */}
        <div className="cards">

          <div className="card">
            <h4>TOTAL REACH</h4>
            <h2>1.2M</h2>
            <p className="trend">
              <img src="/assets/rate.png" className="trend-icon" />
              <span className="positive">14.2%</span>
              <span className="trend-text">vs last month</span>
            </p>
          </div>

          <div className="card">
            <h4>ENGAGEMENT RATE</h4>
            <h2>4.82%</h2>
            <p className="trend">
              <img src="/assets/rate.png" className="trend-icon" />
              <span className="positive">0.9%</span>
              <span className="trend-text">vs last month</span>
            </p>
          </div>

          <div className="card">
            <h4>FOLLOWER GROWTH</h4>
            <h2>+12.4k</h2>
            <p className="trend">
              <img src="/assets/rate2.png" className="trend-icon" />
              <span className="negative">2.1%</span>
              <span className="trend-text">vs last month</span>
            </p>
          </div>

        </div>

        {/* MIDDLE + RIGHT CONTENT (FIXED STRUCTURE) */}
        <div className="content-grid">

          {/* CHART */}
          <div className="chart-card">

            <div className="chart-header">

              <div className="chart-title">
                <h3>Audience Expansion</h3>
                <p className="subtext">Last 30 days growth analysis</p>
              </div>

              <div className="toggle-btns">
                <button className="active">DAILY</button>
                <button>WEEKLY</button>
              </div>

            </div>

            <div className="bars-wrapper">

              <div className="bars-container">
{values.map((val, i) => {
  const height = (val / max) * 100;

  let color = "#E5EEFF"; // default

  if (i === 4) {
    color = "#102A43"; // 5th bar
  } else if (i === 7) {
    color = "#6BFF8F"; // 8th bar
  }

  return (
    <div
      key={i}
      className="bar"
      style={{
        height: `${height}%`,
        backgroundColor: color,
      }}
    />
  );
})}          </div>

              <div className="bar-labels">
  <span>01 OCT</span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span>15 OCT</span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span>30 OCT</span>
</div>

            </div>

          </div>

{/* ACTIVITY */}
<div className="activity-card">

  <h3>Recent Activity</h3>

  <div className="activity-list">

    <div className="activity-item">
      <div className="icon-box green-bg">
        <img src="/assets/thumb.png" alt="thumb" />
      </div>

      <div className="activity-content">
        <p className="act-title">New Milestone</p>
        <p className="act-desc">Q4 Strategy post reached 50k likes in under 2 hours.</p>
        <p className="act-time">12 MIN AGO</p>
      </div>
    </div>

    <div className="activity-item">
      <div className="icon-box blue-bg">
        <img src="/assets/at.png" alt="mention" />
      </div>

      <div className="activity-content">
        <p className="act-title">Brand Mention</p>
        <p className="act-desc">@thefincurator mentioned you in "Top SaaS Tools 2024".</p>
        <p className="act-time">2 HOURS AGO</p>
      </div>
    </div>

    <div className="activity-item">
      <div className="icon-box blue-bg">
        <img src="/assets/share.png" alt="share" />
      </div>

      <div className="activity-content">
        <p className="act-title">Viral Velocity</p>
        <p className="act-desc">Shares are up 240% compared to previous Tuesday averages.</p>
        <p className="act-time">4 HOURS AGO</p>
      </div>
    </div>

  </div>

<button
  className="view-all"
  onClick={() => navigate("/activity-feed")}
>
  VIEW ALL ACTIVITY
</button>

</div>
</div>

        {/* BOTTOM SECTION */}
<div className="bottom-section">

  {/* LEFT - CALENDAR */}
  <div className="calendar-section">
    <h3>Post Calendar</h3>

    <div className="calendar-widget">

      <div className="cal-header">
        <span>OCTOBER 2023</span>

        <div className="cal-nav">
          <span>{"<"}</span>
          <span>{">"}</span>
        </div>
      </div>

      <div className="cal-grid">
        {days.map((d, i) => (
          <span key={i} className="day-label">{d}</span>
        ))}

        {calendarDays.map((d, i) => (
          <span
            key={i}
            className={`date ${d === today.getDate() ? "active-date" : ""}`}
          >
            {d || ""}
          </span>
        ))}
      </div>

    </div>
  </div>

  {/* RIGHT - SCHEDULE */}
{/* RIGHT - SCHEDULE */}
<div className="schedule-section">

  <h3><b>NEXT 3 SCHEDULED</b></h3>

  <div className="schedule-list">

    <div className="schedule-card">
      <p className="title">Sustainable Growth Hub</p>
      <p className="time">
        <img src="/assets/time.png" alt="time" className="time-icon" />
        TODAY, 4:00 PM
      </p>
    </div>

    <div className="schedule-card">
      <p className="title">Crypto Market Trends</p>
      <p className="time">
        <img src="/assets/time.png" alt="time" className="time-icon" />
        TOMORROW, 10:00 AM
      </p>
    </div>

    <div className="schedule-card">
      <p className="title">Weekly Performance Recap</p>
      <p className="time">
        <img src="/assets/time.png" alt="time" className="time-icon" />
        OCT 6, 9:00 AM
      </p>
    </div>

  </div>
</div>


<div className="platforms-wrapper">
  <div className="platforms-grid">

    <div className="p-card dark">
      <span className="label">INSTAGRAM</span>
      <h2>840k</h2>
      <div className="bar insta"></div>
    </div>

    <div className="p-card">
      <span className="label">LINKEDIN</span>
      <h2>312k</h2>
      <div className="bar linkedin"></div>
    </div>

    <div className="p-card">
      <span className="label">X (TWITTER)</span>
      <h2>128k</h2>
      <div className="bar twitter"></div>
    </div>

    <div className="p-card">
      <span className="label">TIKTOK</span>
      <h2>56k</h2>
      <div className="bar tiktok"></div>
    </div>

  </div>
</div>


        </div>

      </main>

    </div>
  );
};

export default Dashboard;