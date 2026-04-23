import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  // Simple array for calendar days
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const dates = [28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className="dashboard">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo-section">
          <h2 className="logo">GrowMarkt</h2>
          <p className="tagline">THE DATA CURATOR</p>
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

    <li>
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

      {/* MAIN */}
      <main className="main">
        {/* TOP BAR */}
        <div className="topbar">
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input placeholder="Search insights..." />
          </div>
          <div className="user-profile">
            <div className="notif-icon">🔔</div>
            <div className="profile-info">
              <p className="user-name">Alex Mercer</p>
              <p className="user-role">PREMIUM CURATOR</p>
            </div>
            <div className="avatar"></div>
          </div>
        </div>

        {/* METRIC CARDS */}
        <div className="cards">
          <div className="card">
            <h4>TOTAL REACH</h4>
            <h2>1.2M</h2>
            <p className="trend green">↗ 14.2% <span>vs last month</span></p>
          </div>
          <div className="card">
            <h4>ENGAGEMENT RATE</h4>
            <h2>4.82%</h2>
            <p className="trend green">↗ 0.9% <span>vs last month</span></p>
          </div>
          <div className="card">
            <h4>FOLLOWER GROWTH</h4>
            <h2>+12.4k</h2>
            <p className="trend red">↘ 2.1% <span>vs last month</span></p>
          </div>
        </div>

        {/* MIDDLE CONTENT */}
        <div className="content-grid">
          <div className="chart-card">
            <div className="card-header">
              <div>
                <h3>Audience Expansion</h3>
                <p className="subtext">Last 30 days growth analysis</p>
              </div>
              <div className="toggle-btns">
                <button className="active">DAILY</button>
                <button>WEEKLY</button>
              </div>
            </div>
            <div className="bars-container">
              <div className="bar" style={{ height: "40%" }}></div>
              <div className="bar" style={{ height: "55%" }}></div>
              <div className="bar" style={{ height: "70%" }}></div>
              <div className="bar active-bar" style={{ height: "85%" }}></div>
              <div className="bar" style={{ height: "50%" }}></div>
              <div className="bar peak-bar" style={{ height: "95%" }}>
                <span className="tooltip">Peak: 12.4k</span>
              </div>
              <div className="bar" style={{ height: "75%" }}></div>
              <div className="bar" style={{ height: "60%" }}></div>
            </div>
          </div>

          <div className="activity-card">
            <h3>Recent Activity</h3>
            <div className="activity-list">
              <div className="activity-item">
                <div className="icon-box green-bg">👍</div>
                <div>
                  <p className="act-title">New Milestone</p>
                  <p className="act-desc">"Q4 Strategy" post reached 50k likes...</p>
                  <p className="act-time">12 MIN AGO</p>
                </div>
              </div>
              {/* Add more items here */}
            </div>
            <button className="view-all">VIEW ALL ACTIVITY</button>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="bottom-grid">
          <div className="calendar-section">
             <h3>Post Calendar</h3>
             <div className="calendar-widget">
                <div className="cal-header">OCTOBER 2023</div>
                <div className="cal-grid">
                  {days.map(d => <span key={d} className="day-label">{d}</span>)}
                  {dates.map((d, i) => (
                    <span key={i} className={`date ${d === 6 ? 'active-date' : ''}`}>{d}</span>
                  ))}
                </div>
             </div>
          </div>

          <div className="scheduled-section">
            <p className="section-label">NEXT 3 SCHEDULED</p>
            <div className="sched-item">Sustainable Growth Hub</div>
            <div className="sched-item">Crypto Market Trends</div>
          </div>

          <div className="platforms-grid">
            <div className="p-card dark">Instagram <span>840k</span></div>
            <div className="p-card">LinkedIn <span>312k</span></div>
            <div className="p-card">X (Twitter) <span>128k</span></div>
            <div className="p-card">TikTok <span>56k</span></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;