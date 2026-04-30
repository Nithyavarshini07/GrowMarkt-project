import React from "react";
import "./Analytics.css";
import { useNavigate } from "react-router-dom";

const Analytics = () => {
    const navigate = useNavigate();
  return (
    <div className="analytics-page">
      {/* SIDEBAR */}
      <aside className="analytics-sidebar">
      <div className="brand-header">
                  <span className="brand-main">GrowMarkt</span>
          <span className="brand-subtitle">THE DATA CURATOR</span>
  
        </div>
        <nav>
          <ul>
<li onClick={() => navigate("/dashboard")}>
  <img src="/assets/dashboard.png" className="nav-icon" alt="" />
  DASHBOARD
</li>
            <li>
              <img src="/assets/campaign.png" className="nav-icon" alt="" />
              CAMPAIGN MANAGER
            </li>
            <li className="active">
              <img src="/assets/analytics.png" className="nav-icon" alt="" />
              ANALYTICS
            </li>
            <li>
              <img src="/assets/competition.png" className="nav-icon" alt="" />
              COMPETITORS
            </li>
            <li>
              <img src="/assets/settings.png" className="nav-icon" alt="" />
              SETTINGS
            </li>
          </ul>
        </nav>
        <button className="campaign-btn">+ NEW CAMPAIGN</button>
      </aside>

      {/* MAIN */}
      <div className="analytics-main">
        {/* TOPBAR */}
        <div className="analytics-topbar">
          <input placeholder="Search insights..." />
          <div className="analytics-user">Alex Mercer</div>
        </div>

        {/* HEADER */}
        {/* HEADER */}
<div className="analytics-header">
  <div className="header-left">
    <h2>GROWTH TRACKING</h2>
    <div className="vertical-divider"></div>
  </div>
  
  <div className="header-right">
    <button className="add-metric-btn">
      <span className="plus-icon">+</span> ADD METRIC
    </button>
    
    <div className="date-picker-filter">
      <img src="/assets/calendar.png" className="calendar-icon" alt="" />
      <span>LAST 30 DAYS</span>
    </div>

    <div className="view-toggle">
      <button className="toggle-btn">DENSE</button>
      <button className="toggle-btn active">RELAXED</button>
    </div>
  </div>
</div>

        {/* CARDS */}
        <div className="analytics-cards">
          {/* AGGREGATE */}
          <div className="card">
            <p>AGGREGATE REACH</p>
            <h2>92,400</h2>
            <span className="green">↑ 14%</span>
            <svg className="sparkline-small" viewBox="-5 0 110 40">
              <path d="M5,28 L20,24 L40,26 L60,18 L80,22 L95,15" className="spark-green" fill="none" />
            </svg>
          </div>

          {/* INSTAGRAM */}
          <div className="card">
            <p>
  <img src="/assets/instagram.png" className="card-icon" />
  INSTAGRAM
</p>
            <h2>12.5k</h2>
            <span className="green">+2.4%</span>
            <svg className="sparkline-small" viewBox="-5 0 110 40">
              <path d="M5,28 L20,24 L40,26 L60,18 L80,22 L95,15" className="spark-pink" fill="none" />
            </svg>
          </div>

          {/* LINKEDIN */}
          <div className="card">
            <p>
  <img src="/assets/linkedin2.png" className="card-icon" />
  LINKEDIN
</p>
            <h2>4.2k</h2>
            <span className="green">+5.1%</span>
            <svg className="sparkline-small" viewBox="-5 0 110 40">
              <path d="M5,28 L20,24 L40,26 L60,18 L80,22 L95,15" className="spark-blue" fill="none" />
            </svg>
          </div>

          {/* X */}
          <div className="card">
            <p>
  <img src="/assets/twitter.png" className="card-icon" />
  TWITTER
</p>
            <h2>28.9k</h2>
            <span className="red">-0.4%</span>
            <svg className="sparkline-small" viewBox="-5 0 110 40">
              <path d="M5,28 L20,24 L40,26 L60,18 L80,22 L95,15" className="spark-gray" fill="none" />
            </svg>
          </div>
        </div>

        <div className="analytics-content">
          {/* GRAPH */}
          <div className="graph-box">
            <h3>Historical Growth vs Engagement</h3>
            <svg className="line-chart" viewBox="0 0 600 220">
              <line x1="0" y1="200" x2="600" y2="200" className="grid" />
              <line x1="0" y1="150" x2="600" y2="150" className="grid" />
              <line x1="0" y1="100" x2="600" y2="100" className="grid" />
              <line x1="0" y1="50" x2="600" y2="50" className="grid" />
              <path 
  d="M0,180 C100,140 200,120 300,130 C400,140 500,80 600,60" 
  className="line-blue" 
/>
<path 
  d="M0,170 C100,150 200,140 300,120 C400,100 500,120 600,100" 
  className="line-green dotted-line"
/>
              <circle cx="600" cy="60" r="5" className="dot blue" />
              <circle cx="600" cy="100" r="5" className="dot green" />
            </svg>
            <div className="graph-labels">
  <span>Sep 01</span>
  <span>Sep 10</span>
  <span>Sep 20</span>
  <span>Sep 30</span>
  <span>Oct 10</span>
  <span>Oct 20</span>
</div>
          </div>

          {/* SIDE PANEL */}
          {/* SIDE PANEL */}
<div className="side-box">
  <div className="side-box-header">
    <div className="title-with-icon">
      <img src="/assets/shield.png" className="shield-icon" />
      <h3>TOP PERFORMANCE NODES</h3>
    </div>
    <span className="view-all">VIEW ALL</span>
  </div>

  <div className="node-list">
    {/* Node 1 */}
    <div className="node-item">
      <div className="node-thumb">
  <img src="/assets/black.png" alt="Organic Reach" />
</div>
      <div className="node-info">
        <strong>Organic Reach Surge</strong>
        <p>Instagram Reel • 12.3k Reach</p>
      </div>
      <div className="node-trend">
  <img src="/assets/trend-up.png" />
</div>
    </div>

    {/* Node 2 */}
    <div className="node-item">
      <div className="node-thumb">
  <img src="/assets/node2.png" alt="Article" />
</div>
      <div className="node-info">
        <strong>Curator Ethos Article</strong>
        <p>LinkedIn Article • 8.4k Views</p>
      </div>
      <div className="node-trend">
  <img src="/assets/trend-up.png" />
</div>
    </div>
  </div>

  <div className="benchmark-section">
    <span className="benchmark-label">BENCHMARK STATUS</span>
    <div className="benchmark-tag">
      OUTPERFORMING (+8%)
    </div>
  </div>
</div>
        </div>

        {/* LOGS */}
        <div className="analytics-logs">
          <div className="logs-header">
            <div className="logs-title">
              <h3>MONTHLY PERFORMANCE LOG</h3>
              <p className="sub">Chronological analysis of growth events and revenue impact</p>
            </div>
            <div className="logs-actions">
              <button className="log-btn">💾 EXPORT DATA</button>
              <button className="log-btn">ALL PLATFORMS ▾</button>
              <button className="log-btn">MONTHLY VIEW ▾</button>
            </div>
          </div>

          {/* October Row */}
          <div className="log-row">
            <div className="log-col date">
              <strong>October 2023</strong>
              <p className="status-label">CURRENT PERIOD</p>
            </div>
            <div className="log-col growth">
              <span className="label">NET GROWTH</span>
              <span className="value positive">+2,451</span>
            </div>
            <div className="log-col revenue">
              <span className="label">CONVERSION & REVENUE</span>
              <span className="value">
                <strong>3.4%</strong> $12,490
              </span>
            </div>
            <div className="log-col spark">
              <svg viewBox="0 0 100 30" className="log-sparkline">
                <path d="M0,20 L20,15 L40,25 L60,10 L80,18 L100,5" fill="none" stroke="#10b981" strokeWidth="2" />
              </svg>
            </div>
            <div className="log-arrow">›</div>
          </div>

          {/* September Row */}
          <div className="log-row">
            <div className="log-col date">
              <strong>September 2023</strong>
              <p className="status-label">PREVIOUS MONTH</p>
            </div>
            <div className="log-col growth">
              <span className="label">NET GROWTH</span>
              <span className="value positive">+1,892</span>
            </div>
            <div className="log-col revenue">
              <span className="label">CONVERSION & REVENUE</span>
              <span className="value">
                <strong>2.9%</strong> $10,120
              </span>
            </div>
            <div className="log-col spark">
              <svg viewBox="0 0 100 30" className="log-sparkline">
                <path d="M0,22 L20,12 L40,18 L60,25 L80,10 L100,8" fill="none" stroke="#10b981" strokeWidth="2" />
              </svg>
            </div>
            <div className="log-arrow">›</div>
          </div>

          {/* August Row */}
          {/* August Row */}
<div className="log-row">
  <div className="log-col date">
    <strong>August 2023</strong>
    <p className="status-label">HISTORIC</p>
  </div>
  <div className="log-col growth">
    <span className="label">NET GROWTH</span>
    {/* 🔥 Changed from 'positive' to 'negative' to make it red */}
    <span className="value negative">+2,104</span> 
  </div>
  <div className="log-col revenue">
    <span className="label">CONVERSION & REVENUE</span>
    <span className="value">
      <strong>3.1%</strong> $11,350
    </span>
  </div>
  <div className="log-col spark">
    <svg viewBox="0 0 100 30" className="log-sparkline">
      <path d="M0,5 L20,8 L40,25 L60,18 L80,22 L100,28" fill="none" stroke="#ef4444" strokeWidth="2" />
    </svg>
  </div>
  <div className="log-arrow">›</div>
</div>

          <button className="load-more">LOAD MORE PERFORMANCE LOGS ▾</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;