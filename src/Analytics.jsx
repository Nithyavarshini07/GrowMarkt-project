import React from "react";
import "./Dashboard.css";
import "./Analytics.css";
import { useNavigate } from "react-router-dom";

const Analytics = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="brand-header">
                  <span className="brand-main">GrowMarkt</span>
          <span className="brand-subtitle">THE DATA CURATOR</span>
  
  
        </div>

        <nav>
          <ul>
            <li onClick={() => navigate("/dashboard")} style={{ cursor: "pointer" }}>
              <img src="/assets/dashboard.png" alt="dashboard" className="nav-icon" />
              DASHBOARD
            </li>

<li onClick={() => navigate("/campaign-timeline")} style={{ cursor: "pointer" }}>
              <img src="/assets/campaign.png" alt="campaign" className="nav-icon" />
              CAMPAIGN MANAGER
            </li>

<li className="active">
  <img src="/assets/analytics.png" alt="analytics" className="nav-icon" />
  ANALYTICS
</li>

            <li onClick={() => navigate("/competitor-analysis")} style={{ cursor: "pointer" }}>
              <img src="/assets/competition.png" alt="competitors" className="nav-icon" />
              COMPETITORS
            </li>

<li onClick={() => navigate("/settings")} style={{ cursor: "pointer" }}>
              <img src="/assets/settings.png" alt="settings" className="nav-icon" />
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
              <img src="/assets/search.png" alt="search" />
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

        <div className="page-content">
        <div className="analytics-header">
          <div className="header-left">
            <h2>GROWTH TRACKING</h2>
            <button className="add-metric-btn">+ ADD METRIC</button>
          </div>
          <div className="header-right">
            <button className="header-chip date-chip">
              <img src="/assets/calendar.png" alt="calendar" />
              LAST 30 DAYS
            </button>
            <button className="header-chip" onClick={() => navigate("/analytics-dense")}>DENSE</button>
            <button className="header-chip active" onClick={() => navigate("/analytics")}>RELAXED</button>
          </div>
        </div>

        <div className="analytics-cards">
          <div className="metric-card aggregate-card">
            <div className="card-head">
              <p>AGGREGATE REACH</p>
              <span>...</span>
            </div>
            <div className="aggregate-main">
              <h3>92,400</h3>
              <div className="agg-trend">
                <span>▲</span>
                <strong>14%</strong>
              </div>
            </div>
            <img src="/assets/top1.png" alt="aggregate trend" className="metric-wave" />
          </div>

          <div className="metric-card social-card">
            <div className="social-head">
              <div className="social-title">
                <img src="/assets/instagram.png" alt="instagram" />
                <p>INSTAGRAM</p>
              </div>
              <span className="positive">+2.4%</span>
            </div>
            <h3>12.5k <small>subs</small></h3>
            <img src="/assets/top2.png" alt="instagram trend" className="metric-wave" />
          </div>

          <div className="metric-card social-card">
            <div className="social-head">
              <div className="social-title">
                <img src="/assets/linkedin2.png" alt="linkedin" />
                <p>LINKEDIN</p>
              </div>
              <span className="positive">+5.1%</span>
            </div>
            <h3>4.2k <small>conn.</small></h3>
            <svg viewBox="0 0 120 34" className="mini-wave blue">
              <path d="M2,27 C22,24 28,24 44,22 C64,19 66,12 85,10 C95,9 103,8 118,7" />
            </svg>
          </div>

          <div className="metric-card social-card">
            <div className="social-head">
              <div className="social-title">
                <img src="/assets/twitter.png" alt="x" />
                <p>X (TWITTER)</p>
              </div>
              <span className="negative">-0.4%</span>
            </div>
            <h3>28.9k <small>flw.</small></h3>
            <svg viewBox="0 0 120 34" className="mini-wave dark">
              <path d="M2,14 C17,18 26,17 41,16 C56,14 66,20 81,22 C96,24 105,26 118,28" />
            </svg>
          </div>
        </div>

        <div className="analytics-content">
          <section className="graph-box">
            <div className="graph-header">
              <div>
                <h3>HISTORICAL GROWTH VS ENGAGEMENT</h3>
                <p>Aggregated cross-platform analytics for current period</p>
              </div>
              <div className="graph-tools">
                <span>↺</span>
                <span>⇅</span>
                <span>⤢</span>
              </div>
            </div>

            <div className="chart-surface">
              <svg viewBox="0 0 640 300" className="line-chart">
                <line x1="40" y1="40" x2="610" y2="40" className="grid" />
                <line x1="40" y1="90" x2="610" y2="90" className="grid" />
                <line x1="40" y1="140" x2="610" y2="140" className="grid" />
                <line x1="40" y1="190" x2="610" y2="190" className="grid" />
                <line x1="40" y1="240" x2="610" y2="240" className="grid" />
                <path className="growth-line" d="M70,200 C120,176 170,188 220,160 C275,124 300,38 360,150 C392,210 423,224 454,134 C495,18 528,46 560,32 C582,30 594,58 600,96" />
                <path className="engagement-line" d="M70,216 C130,201 182,190 238,176 C292,160 339,168 390,188 C438,210 490,186 548,146 C576,126 592,112 600,106" />
              </svg>
            </div>

            <div className="graph-labels">
              <span>SEPT 01</span>
              <span>SEPT 10</span>
              <span>SEPT 20</span>
              <span>SEPT 30</span>
              <span>OCT 10</span>
              <span>OCT 20</span>
            </div>
          </section>

          <aside className="side-box">
            <div className="side-box-header">
              <div className="title-with-icon">
                <img src="/assets/shield.png" className="shield-icon" alt="shield" />
                <h3>TOP PERFORMANCE NODES</h3>
              </div>
              <span className="view-all" onClick={() => navigate("/performance-nodes")}>VIEW ALL</span>
            </div>

            <div className="node-list">
              <div className="node-item">
                <div className="node-thumb">
                  <img src="/assets/black.png" alt="Organic Reach Surge" />
                </div>
                <div className="node-info">
                  <strong>Organic Reach Surge</strong>
                  <p>Instagram Reel • 12.3k Reach</p>
                </div>
                <div className="node-trend">
                  <img src="/assets/trend-up.png" alt="trend up" />
                </div>
              </div>
              <div className="node-item">
                <div className="node-thumb">
                  <img src="/assets/node2.png" alt="Curator Ethos Article" />
                </div>
                <div className="node-info">
                  <strong>Curator Ethos Article</strong>
                  <p>LinkedIn Article • 8.4k Views</p>
                </div>
                <div className="node-trend">
                  <img src="/assets/trend-up.png" alt="trend up" />
                </div>
              </div>
            </div>

            <div className="benchmark-section">
              <span className="benchmark-label">BENCHMARK STATUS</span>
              <div className="benchmark-tag">OUTPERFORMING (+8.5%)</div>
            </div>
          </aside>
        </div>

        <section className="analytics-logs">
          <div className="logs-header">
            <div className="logs-title">
              <h3>MONTHLY PERFORMANCE LOG</h3>
              <p className="sub">Chronological analysis of growth events and revenue impact</p>
            </div>
            <div className="logs-actions">
              <button className="log-btn">EXPORT DATA</button>
              <button className="log-btn">ALL PLATFORMS</button>
              <button className="log-btn">MONTHLY VIEW</button>
            </div>
          </div>

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
              <span className="label">CONVERSION &amp; REVENUE</span>
              <span className="value"><strong>3.4%</strong> $12,490</span>
            </div>
            <div className="log-col spark">
              <svg viewBox="0 0 100 30" className="log-sparkline up"><path d="M0,20 L20,15 L40,25 L60,10 L80,18 L100,5" /></svg>
            </div>
            <div className="log-arrow">›</div>
          </div>

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
              <span className="label">CONVERSION &amp; REVENUE</span>
              <span className="value"><strong>2.9%</strong> $10,120</span>
            </div>
            <div className="log-col spark">
              <svg viewBox="0 0 100 30" className="log-sparkline up"><path d="M0,22 L20,12 L40,18 L60,25 L80,10 L100,8" /></svg>
            </div>
            <div className="log-arrow">›</div>
          </div>

          <div className="log-row">
            <div className="log-col date">
              <strong>August 2023</strong>
              <p className="status-label">HISTORIC</p>
            </div>
            <div className="log-col growth">
              <span className="label">NET GROWTH</span>
              <span className="value negative">+2,104</span>
            </div>
            <div className="log-col revenue">
              <span className="label">CONVERSION &amp; REVENUE</span>
              <span className="value"><strong>3.1%</strong> $11,350</span>
            </div>
            <div className="log-col spark">
              <svg viewBox="0 0 100 30" className="log-sparkline down"><path d="M0,5 L20,8 L40,25 L60,18 L80,22 L100,28" /></svg>
            </div>
            <div className="log-arrow">›</div>
          </div>

          <button className="load-more">LOAD MORE PERFORMANCE LOGS</button>
        </section>
        </div>
      </main>
    </div>
  );
};

export default Analytics;