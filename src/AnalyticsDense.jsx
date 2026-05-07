import React from "react";
import { useNavigate } from "react-router-dom";
import "./AnalyticsDense.css";

const AnalyticsDense = () => {
  const navigate = useNavigate();

  return (
    <div className="analytics-dense dashboard">
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

            <li>
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

            <li>
              <img src="/assets/settings.png" alt="settings" className="nav-icon" />
              SETTINGS
            </li>
          </ul>
        </nav>

        <button className="campaign-btn">+ NEW CAMPAIGN</button>
      </aside>

      {/* MAIN */}
      <main className="main dense-main">
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

        <div className="dense-header">
          <div className="dense-left">
            <h2>GROWTH TRACKING</h2>
            <button className="dense-btn">+ ADD METRIC</button>
          </div>
          <div className="dense-right">
            <button className="dense-chip">LAST 30 DAYS</button>
            <button className="dense-chip active">DENSE</button>
            <button className="dense-chip" onClick={() => navigate("/analytics")}>RELAXED</button>
          </div>
        </div>

        <div className="dense-cards">
          <div className="dense-card agg">
            <p>AGGREGATE REACH</p>
            <h3>92,400 <span>14%</span></h3>
            <img src="/assets/top1.png" alt="agg" />
          </div>
          <div className="dense-card">
            <p>INSTAGRAM <strong>+2.4%</strong></p>
            <h3>12.5k</h3>
            <img src="/assets/top2.png" alt="ig" />
          </div>
          <div className="dense-card">
            <p>LINKEDIN <strong>+5.1%</strong></p>
            <h3>4.2k</h3>
            <svg viewBox="0 0 120 30"><path d="M0 24 C22 20 34 21 56 16 C80 11 97 8 118 7" /></svg>
          </div>
          <div className="dense-card">
            <p>X (TWITTER) <em>-0.4%</em></p>
            <h3>28.9k</h3>
            <svg viewBox="0 0 120 30"><path d="M0 6 C20 11 40 10 60 13 C80 16 100 20 120 24" /></svg>
          </div>
        </div>

        <div className="dense-mid">
          <section className="dense-graph">
            <h3>HISTORICAL GROWTH VS ENGAGEMENT</h3>
            <svg viewBox="0 0 640 230">
              <line x1="10" y1="190" x2="630" y2="190" />
              <line x1="10" y1="150" x2="630" y2="150" />
              <line x1="10" y1="110" x2="630" y2="110" />
              <line x1="10" y1="70" x2="630" y2="70" />
              <path className="main" d="M20 180 C90 162,140 176,200 150 C270 118,304 44,352 132 C390 200,430 218,458 128 C500 20,536 50,566 36 C590 34,608 58,620 98" />
              <path className="alt" d="M20 188 C90 176,140 167,208 160 C270 152,332 160,396 180 C452 198,510 170,566 132 C590 116,608 105,620 98" />
            </svg>
          </section>
          <aside className="dense-side">
            <div className="head">
              <h3>TOP PERFORMANCE NODES</h3>
              <span onClick={() => navigate("/performance-nodes")}>VIEW ALL</span>
            </div>
            <div className="node">
              <img src="/assets/black.png" alt="node1" />
              <div><strong>Organic Reach Surge</strong><small>Instagram Reel • 12.3k Reach</small></div>
              <img src="/assets/trend-up.png" alt="up" className="up" />
            </div>
            <div className="node">
              <img src="/assets/node2.png" alt="node2" />
              <div><strong>Curator Ethos Article</strong><small>LinkedIn Article • 8.4k Views</small></div>
              <img src="/assets/trend-up.png" alt="up" className="up" />
            </div>
            <div className="bench">
              <span>BENCHMARK STATUS</span>
              <strong>OUTPERFORMING (+8.5%)</strong>
            </div>
          </aside>
        </div>

        <section className="dense-logs">
          <div className="logs-head">
            <h3>MONTHLY PERFORMANCE LOG</h3>
            <div>
              <button>EXPORT DATA</button>
              <button>ALL PLATFORMS</button>
              <button>MONTHLY VIEW</button>
            </div>
          </div>
          <div className="row"><strong>October 2023</strong><b className="g">+2,451</b><span><b>3.4%</b> $12,490</span><svg viewBox="0 0 100 24"><path d="M0 16 L18 12 L36 19 L56 7 L74 12 L98 3" /></svg><i>›</i></div>
          <div className="row"><strong>September 2023</strong><b className="g">+1,892</b><span><b>2.9%</b> $10,120</span><svg viewBox="0 0 100 24"><path d="M0 18 L18 9 L40 14 L58 19 L80 8 L98 6" /></svg><i>›</i></div>
          <div className="row"><strong>August 2023</strong><b className="r">+2,104</b><span><b>3.1%</b> $11,350</span><svg viewBox="0 0 100 24" className="down"><path d="M0 4 L20 6 L40 8 L58 16 L76 13 L98 19" /></svg><i>›</i></div>
          <button className="load">LOAD MORE PERFORMANCE LOGS</button>
        </section>
      </main>
    </div>
  );
};

export default AnalyticsDense;