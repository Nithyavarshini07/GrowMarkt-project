import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import "./CompetitorAnalysis.css";

const leaderboardRows = [
  {
    rank: "01",
    name: "GrowMarkt (You)",
    tag: "PRIMARY BRAND",
    reach: "1.2M",
    engagement: "4.8%",
    growth: "+12.4%",
    growthClass: "positive",
    sentiment: "88%",
    voice: "32.4%",
  },
  {
    rank: "02",
    name: "Vortex Media",
    tag: "DIRECT COMPETITOR",
    reach: "980K",
    engagement: "3.2%",
    growth: "+8.1%",
    growthClass: "positive",
    sentiment: "74%",
    voice: "26.1%",
  },
  {
    rank: "03",
    name: "Apex Social",
    tag: "MARKET CHALLENGER",
    reach: "1.5M",
    engagement: "2.1%",
    growth: "-2.4%",
    growthClass: "negative",
    sentiment: "62%",
    voice: "41.5%",
  },
];

const posts = [
  {
    image: "/assets/post1.jpg",
    title: "Revolutionizing AI Workflows",
    meta: "VORTEX MEDIA  •  2h ago",
    likes: "12.4K",
    shares: "1.2K",
  },
  {
    image: "/assets/post2.jpg",
    title: "The Future of Remote Culture",
    meta: "APEX SOCIAL  •  5h ago",
    likes: "8.2K",
    shares: "450",
  },
  {
    image: "/assets/post3.jpg",
    title: "How We Scaled Our Engineering",
    meta: "VORTEX MEDIA  •  1d ago",
    likes: "15.1K",
    shares: "2.1K",
    highlighted: true,
  },
];

const heatmap = [
  [2, 4, 1, 5, 2, 5, 1],
  [3, 6, 2, 7, 1, 4, 2],
  [4, 1, 1, 5, 4, 3, 1],
  [2, 5, 1, 3, 2, 4, 1],
];

const CompetitorAnalysis = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard competitor-page">
      <aside className="sidebar competitor-sidebar">
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
            <li>
              <img src="/assets/campaign.png" alt="campaign" className="nav-icon" />
              CAMPAIGN MANAGER
            </li>
            <li onClick={() => navigate("/analytics")}>
              <img src="/assets/analytics.png" alt="analytics" className="nav-icon" />
              ANALYTICS
            </li>
            <li className="active" onClick={() => navigate("/competitor-analysis")}>
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

      <main className="main competitor-main">
        <header className="topbar competitor-topbar">
          <div className="search-container">
            <span className="search-icon">
              <img src="/assets/search.png" alt="search" />
            </span>
            <input placeholder="Search competitors or metrics..." readOnly />
          </div>

          <div className="user-profile">
            <div className="user-profile-left">
              <div className="notif-icon">
                <img src="/assets/bell.png" alt="notification" />
                <span className="dot" />
              </div>
              <div className="profile-info">
                <p className="user-name">Alex Mercer</p>
                <p className="user-role">PREMIUM CURATOR</p>
              </div>
            </div>
            <img src="/assets/alex.jpg" alt="avatar" className="avatar" />
          </div>
        </header>

        <section className="competitor-heading-row">
          <div>
            <p className="eyebrow">MARKET INTELLIGENCE</p>
            <h2>Competitor Analysis</h2>
          </div>
          <button type="button" className="add-competitor-btn">
            <span>⊹</span> ADD COMPETITOR
          </button>
        </section>

        <section className="panel leaderboard-panel">
          <div className="panel-head">
            <div className="panel-title">
              <span className="panel-title-icon">◫</span>
              <h3>Competitor Leaderboard &amp; Performance Matrix</h3>
            </div>
            <div className="last-days-chip">LAST 30 DAYS</div>
          </div>

          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>#</th>
                <th>COMPETITOR NAME</th>
                <th>REACH</th>
                <th>ENG. RATE</th>
                <th>GROWTH</th>
                <th>AVG. SENTIMENT</th>
                <th>SHARE OF VOICE</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {leaderboardRows.map((row, index) => (
                <tr
                  key={row.rank}
                  className={`${index === 0 ? "highlight-row clickable-row" : ""}`}
                  onClick={index === 0 ? () => navigate("/vortex-media") : undefined}
                >
                  <td>{row.rank}</td>
                  <td>
                    <div className="competitor-cell">
                      <span className="company-dot">{index === 0 ? "G" : "◉"}</span>
                      <div>
                        <strong>{row.name}</strong>
                        <small>{row.tag}</small>
                      </div>
                    </div>
                  </td>
                  <td>{row.reach}</td>
                  <td>{row.engagement}</td>
                  <td className={row.growthClass}>{row.growth}</td>
                  <td>{row.sentiment}</td>
                  <td>{row.voice}</td>
                  <td className="dropdown-cell">⌄</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mid-grid">
          <div className="panel growth-panel">
            <div className="mini-panel-head">
              <div>
                <h4>Follower Growth Curve</h4>
                <p>WEEKLY TRAJECTORY</p>
              </div>
              <div className="legend">
                <span>
                  <i className="legend-dot dark" />
                  YOU
                </span>
                <span>
                  <i className="legend-dot light" />
                  AVG
                </span>
              </div>
            </div>

            <div className="bar-chart">
              <div className="avg-bars">
                {[30, 48, 40, 56, 52].map((height, i) => (
                  <span key={`avg-${i}`} style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="you-bars">
                {[50, 66, 84, 92, 96].map((height, i) => (
                  <span key={`you-${i}`} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>

            <div className="chart-labels">
              <span>W1</span>
              <span>W2</span>
              <span>W3</span>
              <span>W4</span>
              <span>W5</span>
            </div>
          </div>

          <div className="panel heatmap-panel">
            <div className="mini-panel-head">
              <div>
                <h4>Engagement Heatmap</h4>
                <p>INTERACTION EFFICIENCY</p>
              </div>
              <span className="filter-icon">⌯</span>
            </div>

            <div className="heatmap-grid">
              {heatmap.flat().map((value, index) => (
                <span key={index} className={`heat h-${value}`} />
              ))}
            </div>

            <div className="heatmap-days">
              <span>M</span>
              <span>T</span>
              <span>W</span>
              <span>T</span>
              <span>F</span>
              <span>S</span>
              <span>S</span>
            </div>
          </div>
        </section>

        <section className="panel feed-panel">
          <div className="feed-head">
            <h4>Trending Competitor Posts Feed</h4>
            <button type="button">EXPLORE ALL ↗</button>
          </div>

          <div className="feed-list">
            {posts.map((post) => (
              <article
                className={`post-row ${post.highlighted ? "highlighted" : ""}`}
                key={post.title}
              >
                <img src={post.image} alt={post.title} />
                <div className="post-info">
                  <h5>{post.title}</h5>
                  <p>{post.meta}</p>
                </div>
                <div className="post-metrics">
                  <span>♡ {post.likes}</span>
                  <span>⇆ {post.shares}</span>
                </div>
                <button type="button" className="analyze-btn">
                  ANALYZE
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CompetitorAnalysis;
