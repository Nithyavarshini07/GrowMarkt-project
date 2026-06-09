import React from "react";
import { useNavigate } from "react-router-dom";
import "./AnalyticsDense.css";

const AnalyticsDense = () => {
  const navigate = useNavigate();

  return (
    <div className="ad-page">
<aside className="sidebar">
  <div className="brand-header">
    <span className="brand-main">GrowMarkt</span>
    <span className="brand-subtitle">THE DATA CURATOR</span>
  </div>

  <nav>
    <ul>
      <li onClick={() => navigate("/dashboard")}>
        <img src="/assets/dashboard.png" alt="dashboard" className="nav-icon" />
        DASHBOARD
      </li>

      <li onClick={() => navigate("/campaign-timeline")}>
        <img src="/assets/campaign.png" alt="campaign" className="nav-icon" />
        CAMPAIGN MANAGER
      </li>

      <li className="active" onClick={() => navigate("/analytics")}>
        <img src="/assets/analytics.png" alt="analytics" className="nav-icon" />
        ANALYTICS
      </li>

      <li onClick={() => navigate("/competitor-analysis")} style={{ cursor: "pointer" }}>
        <img src="/assets/competition.png" alt="competitors" className="nav-icon" />
        COMPETITORS
      </li>

      <li onClick={() => navigate("/settings")}>
        <img src="/assets/settings.png" alt="settings" className="nav-icon" />
        SETTINGS
      </li>
    </ul>
  </nav>

  <button className="campaign-btn">+ NEW CAMPAIGN</button>
</aside>

      <main className="ad-main">
        <header className="ad-topbar">
          <div className="ad-search">
            <span className="ad-search-glyph">⌕</span>
            <input value="Search data..." readOnly />
          </div>

          <div className="ad-profile">
            <span className="ad-profile-bell">•</span>

            <div className="ad-profile-text">
              <strong>Alex Mercer</strong>
              <small>PREMIUM CURATOR</small>
            </div>

            <div className="ad-profile-avatar">
              <img src="/assets/settings.png" alt="" />
            </div>
          </div>
        </header>

        <section className="ad-body">
          <div className="ad-head-row">
            <div className="ad-head-left">
              <span className="ad-crumb">
                WORKSPACE / GROWTH TRACKING
              </span>

              <button type="button" className="ad-add-btn">
                + ADD METRIC
              </button>
            </div>

            <div className="ad-head-right">
              <button type="button" className="ad-range-btn">
                LAST 30 DAYS
              </button>

              <div className="ad-density-toggle">
                <button type="button" className="is-active">
                  DENSE
                </button>

<button 
  type="button" 
  onClick={() => navigate("/Analytics")}
>
  RELAXED
</button>
              </div>
            </div>
          </div>

          <div className="ad-metric-row">
            <article className="ad-card ad-card-aggregate">
              <div className="ad-card-title">
                <span>AGGREGATE REACH</span>
                <span>...</span>
              </div>

              <div className="ad-card-value-wrap">
                <h2>92.4k</h2>
                <em>+14%</em>
              </div>

              <div className="ad-card-graph-wrap">
                <svg
                  viewBox="0 0 180 22"
                  className="ad-card-spark ad-green-line"
                >
                  <path d="M0 18 C15 15,28 16,40 16 C52 16,64 8,78 10 C92 12,102 24,116 20 C132 15,145 4,160 5 C170 6,176 12,180 16" />
                </svg>
              </div>
            </article>

            <article className="ad-card ad-card-platform">
              <div className="ad-platform-top">
                <div>
                  <img src="/assets/instagram.png" alt="" />
                  <span>INSTAGRAM</span>
                </div>

                <em>+2.4%</em>
              </div>

              <h2>12.5k</h2>

              <div className="ad-card-graph-wrap">
                <svg
                  viewBox="0 0 180 22"
                  className="ad-card-spark ad-pink-line"
                >
                  <path d="M0 14 C18 11,35 9,52 13 C70 17,88 20,108 12 C124 6,142 7,160 10 C170 12,176 9,180 6" />
                </svg>
              </div>
            </article>

            <article className="ad-card ad-card-platform">
              <div className="ad-platform-top">
                <div>
                  <img src="/assets/linkedin2.png" alt="" />
                  <span>LINKEDIN</span>
                </div>

                <em>+5.1%</em>
              </div>

              <h2>4.2k</h2>

              <div className="ad-card-graph-wrap">
                <svg
                  viewBox="0 0 180 22"
                  className="ad-card-spark ad-blue-line"
                >
                  <path d="M0 18 C18 18,36 17,58 15 C78 13,96 10,118 6 C138 4,158 3,180 3" />
                </svg>
              </div>
            </article>

            <article className="ad-card ad-card-platform">
              <div className="ad-platform-top">
                <div>
                  <img src="/assets/twitter.png" alt="" />
                  <span>X (TWITTER)</span>
                </div>

                <em className="is-red">-0.4%</em>
              </div>

              <h2>28.9k</h2>

              <div className="ad-card-graph-wrap">
                <svg
                  viewBox="0 0 180 22"
                  className="ad-card-spark ad-dark-line"
                >
                  <path d="M0 5 C22 8,44 9,66 11 C88 13,110 14,132 16 C150 18,166 20,180 20" />
                </svg>
              </div>
            </article>
          </div>

          <div className="ad-middle-row">
            <section className="ad-growth-box">
              <div className="ad-growth-head">
                <h3>HISTORICAL GROWTH VS ENGAGEMENT</h3>

                <div className="ad-growth-icons">
                  ↺ ⇩ ⛶
                </div>
              </div>

              <div className="ad-growth-chart-wrap">
                <svg
                  viewBox="0 0 640 230"
                  className="ad-growth-chart"
                >
                  <line x1="12" y1="190" x2="628" y2="190" />
                  <line x1="12" y1="150" x2="628" y2="150" />
                  <line x1="12" y1="110" x2="628" y2="110" />
                  <line x1="12" y1="70" x2="628" y2="70" />
                  <line x1="12" y1="30" x2="628" y2="30" />

                  <path
                    className="ad-growth-line-main"
                    d="M20 182 C 70 172, 120 176, 170 167 C 220 158, 258 100, 300 84 C 340 70, 392 116, 430 164 C 470 209, 520 176, 560 76 C 586 14, 612 32, 628 86"
                  />

                  <path
                    className="ad-growth-line-alt"
                    d="M20 187 C 88 178, 130 174, 170 168 C 212 160, 258 154, 300 153 C 338 152, 382 154, 420 156 C 462 160, 512 145, 552 130 C 582 118, 606 109, 628 97"
                  />

                  <text x="18" y="220">SEPT 01</text>
                  <text x="130" y="220">SEPT 10</text>
                  <text x="240" y="220">SEPT 20</text>
                  <text x="350" y="220">SEPT 30</text>
                  <text x="462" y="220">OCT 10</text>
                  <text x="572" y="220">OCT 20</text>
                </svg>
              </div>
            </section>

            <aside className="ad-nodes-box">
              <div className="ad-nodes-head">
                <div>
                  <img src="/assets/shield.png" alt="" />
                  <span>TOP PERFORMANCE NODES</span>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    navigate("/performance-nodes")
                  }
                >
                  VIEW ALL
                </button>
              </div>

              <div className="ad-node-row">
                <img
                  src="/assets/black.png"
                  alt=""
                  className="ad-node-thumb"
                />

                <div className="ad-node-copy">
                  <strong>Organic Reach Surge</strong>
                  <small>IG Reel • 12.3k Reach</small>
                </div>

                <img
                  src="/assets/trend-up.png"
                  alt=""
                  className="ad-node-trend"
                />
              </div>

              <div className="ad-node-row">
                <img
                  src="/assets/node2.png"
                  alt=""
                  className="ad-node-thumb"
                />

                <div className="ad-node-copy">
                  <strong>Curator Ethos Article</strong>
                  <small>LI Article • 8.4k Views</small>
                </div>

                <img
                  src="/assets/trend-up.png"
                  alt=""
                  className="ad-node-trend"
                />
              </div>

              <div className="ad-benchmark-row">
                <span>BENCHMARK STATUS</span>
                <strong>OUTPERFORMING (+8%)</strong>
              </div>
            </aside>
          </div>

          <section className="ad-bottom-box">
            <div className="ad-bottom-head">
              <div className="ad-bottom-title">
                DATA EXPLORER: GROWTH TRENDS
              </div>

              <div className="ad-bottom-filters">
                <button type="button">
                  ALL PLATFORMS
                </button>

                <button type="button">
                  MONTHLY
                </button>
              </div>

              <div className="ad-bottom-actions">
                <button type="button">
                  EXPORT CSV
                </button>

                <button type="button">
                  EXPORT PDF
                </button>
              </div>
            </div>

            <div className="ad-table-row ad-table-head-row">
              <span>TIME PERIOD</span>
              <span>NET GROWTH</span>
              <span>CONV. RATE</span>
              <span>NET REVENUE</span>
              <span>DAILY TREND</span>
              <span>ACTIONS</span>
            </div>

            <div className="ad-table-row">
              <strong>October 2023</strong>
              <em className="is-green">+2,451</em>
              <span>3.4%</span>
              <strong>$12,490</strong>

              <svg
                viewBox="0 0 94 22"
                className="ad-daily-trend"
              >
                <path d="M2 15 L20 13 L34 18 L50 7 L67 10 L92 2" />
              </svg>

              <span className="ad-kebab">⋮</span>
            </div>

            <div className="ad-table-row">
              <strong>September 2023</strong>
              <em className="is-green">+1,892</em>
              <span>2.9%</span>
              <strong>$10,120</strong>

              <svg
                viewBox="0 0 94 22"
                className="ad-daily-trend"
              >
                <path d="M2 16 L20 8 L39 12 L55 15 L72 7 L92 5" />
              </svg>

              <span className="ad-kebab">⋮</span>
            </div>

            <div className="ad-table-row">
              <strong>August 2023</strong>
              <em className="is-red">+2,104</em>
              <span>3.1%</span>
              <strong>$11,350</strong>

              <svg
                viewBox="0 0 94 22"
                className="ad-daily-trend is-red"
              >
                <path d="M2 5 L20 7 L38 9 L55 16 L72 13 L92 19" />
              </svg>

              <span className="ad-kebab">⋮</span>
            </div>

            <div className="ad-bottom-foot">
              <span>
                DISPLAYING 1-12 OF 48 RECORDS
              </span>

              <div>
                <span>‹</span>
                <span>›</span>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default AnalyticsDense;