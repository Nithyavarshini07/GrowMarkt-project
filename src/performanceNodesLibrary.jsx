import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./performanceNodesLibrary.css";

const platformTabs = [
  { key: "ALL", label: "ALL" },
  { key: "INSTAGRAM", label: "INSTAGRAM" },
  { key: "LINKEDIN", label: "LINKEDIN" },
  { key: "X", label: "X" },
  { key: "TIKTOK", label: "TIKTOK" },
];

const defaultNodes = [
  {
    id: "node-1",
    platform: "INSTAGRAM",
    title: "Optimized Peak Productivity",
    published: "PUBLISHED OCT 24, 2023",
    engagementLabel: "ENGAGEMENT",
    engagementValue: "4.82%",
    reachLabel: "REACH",
    reachValue: "12.5k",
    mediaVariant: "instagram-1",
    showTopPerformer: true,
  },
  {
    id: "node-2",
    platform: "LINKEDIN",
    title: "The Future of AI Curation",
    published: "PUBLISHED OCT 22, 2023",
    engagementLabel: "ENGAGEMENT",
    engagementValue: "3.15%",
    reachLabel: "REACH",
    reachValue: "8.9k",
    mediaVariant: "linkedin-1",
  },
  {
    id: "node-3",
    platform: "TIKTOK",
    title: "Viral Hooks: 3-Second Rule",
    published: "PUBLISHED OCT 19, 2023",
    engagementLabel: "ENGAGEMENT",
    engagementValue: "12.4%",
    reachLabel: "REACH",
    reachValue: "45.2k",
    mediaVariant: "tiktok-1",
  },
  {
    id: "node-4",
    platform: "INSTAGRAM",
    title: "Minimalist Branding Tips",
    published: "PUBLISHED OCT 15, 2023",
    engagementLabel: "ENGAGEMENT",
    engagementValue: "5.20%",
    reachLabel: "REACH",
    reachValue: "15.1k",
    mediaVariant: "instagram-2",
  },
  {
    id: "node-5",
    platform: "X",
    title: "Workplace Culture Thread",
    published: "PUBLISHED OCT 12, 2023",
    engagementLabel: "ENGAGEMENT",
    engagementValue: "2.88%",
    reachLabel: "REACH",
    reachValue: "22.0k",
    mediaVariant: "x-1",
  },
  {
    id: "node-6",
    platform: "LINKEDIN",
    title: "Scaling Content Operations",
    published: "PUBLISHED OCT 10, 2023",
    engagementLabel: "ENGAGEMENT",
    engagementValue: "6.12%",
    reachLabel: "REACH",
    reachValue: "5.4k",
    mediaVariant: "linkedin-2",
  },
];

function NavIcon({ kind }) {
  if (kind === "dashboard") {
    return (
      <svg className="pnl-nav-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 13.2c0-1.1 0-1.6.2-2 .2-.4.5-.7.9-.9.4-.2.9-.2 2-.2h1.6c1.1 0 1.6 0 2 .2.4.2.7.5.9.9.2.4.2.9.2 2V18H4v-4.8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M14 6.8c0-1.1 0-1.6.2-2 .2-.4.5-.7.9-.9.4-.2.9-.2 2-.2h1.6c1.1 0 1.6 0 2 .2.4.2.7.5.9.9.2.4.2.9.2 2V18h-8V6.8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M4 18h20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (kind === "campaign") {
    return (
      <svg className="pnl-nav-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6 9.5V7.8c0-.7.6-1.3 1.3-1.3h9.4c.7 0 1.3.6 1.3 1.3v1.7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M6 18.2c0 .7.6 1.3 1.3 1.3h9.4c.7 0 1.3-.6 1.3-1.3V9.5c0-.7-.6-1.3-1.3-1.3H7.3C6.6 8.2 6 8.8 6 9.5v8.7Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M8.6 12.2l1.6 1.6 5-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (kind === "analytics") {
    return (
      <svg className="pnl-nav-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5 20V10c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M8 15l2-2 2 2 4-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (kind === "competitors") {
    return (
      <svg className="pnl-nav-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M8 20V10.7c0-.9.7-1.7 1.7-1.7h4.6c.9 0 1.7.8 1.7 1.7V20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M6 20h12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M9.3 9.1c.7-2.1 2-3.3 2.7-3.3.7 0 2 1.2 2.7 3.3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg className="pnl-nav-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2 4 5.2v6.4c0 5.2 3.3 9.7 8 10.4 4.7-.7 8-5.2 8-10.4V5.2L12 2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg className="pnl-bookmark-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7.5 4.7c0-.8.7-1.5 1.5-1.5h6c.8 0 1.5.7 1.5 1.5v16.3l-6-3-6 3V4.7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg className="pnl-share-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M10 14 21 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M15.5 3H21v5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 14.2v4.1c0 .9-.7 1.7-1.7 1.7H4.7c-.9 0-1.7-.7-1.7-1.7V6.9c0-.9.7-1.7 1.7-1.7h4.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PerformanceNodesLibrary({ nodes = defaultNodes }) {
  const [activeTab, setActiveTab] = useState("ALL");
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    if (activeTab === "ALL") return nodes;
    return nodes.filter((n) => n.platform === activeTab);
  }, [activeTab, nodes]);

  return (
    <div className="pnl-page">
      <aside className="pnl-sidebar">
        <div className="pnl-brand">
          <span className="pnl-brand-main">GrowMarkt</span>
          <span className="pnl-brand-sub">THE DATA CURATOR</span>
        </div>

        <nav className="pnl-nav">
          <ul className="pnl-nav-list">
            <li className="pnl-nav-item" >
              <NavIcon kind="dashboard" />
              DASHBOARD
            </li>
            <li className="pnl-nav-item">
              <NavIcon kind="campaign" />
              CAMPAIGN MANAGER
            </li>
            <li className="pnl-nav-item pnl-nav-item--active">
              <NavIcon kind="analytics" />
              ANALYTICS
            </li>
            <li className="pnl-nav-item">
              <NavIcon kind="competitors" />
              COMPETITORS
            </li>
            <li className="pnl-nav-item">
              <NavIcon kind="settings" />
              SETTINGS
            </li>
          </ul>
        </nav>

        <button type="button" className="pnl-new-campaign">
          + NEW CAMPAIGN
        </button>
      </aside>

      <main className="pnl-main">
        <div className="pnl-topbar">
          <div className="pnl-search-wrap">
            <div className="pnl-search">
              <svg className="pnl-search-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M10.5 18.5a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M16.9 16.9 21 21"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
              <input placeholder="Search data..." />
            </div>
          </div>

          <div className="pnl-user-area">
            <div className="pnl-user-text">
              <div className="pnl-user-name-row">
                <svg className="pnl-leaf" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4 14c6-10 14-9 16-9-1 2-2 10-9 16-4 3-7 1-7-7Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 15c2 0 5-2 7-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="pnl-user-name">Alex Mercer</span>
              </div>
              <div className="pnl-user-tier">PREMIUM CURATOR</div>
            </div>

            <div className="pnl-avatar" aria-hidden="true" />
          </div>
        </div>

        <div className="pnl-header-row">
          <div className="pnl-header-left">
            <div className="pnl-archive">
              <span className="pnl-archive-dot" />
              ARCHIVE 2024
            </div>
            <h1 className="pnl-title">Performance Nodes Library</h1>
            <div className="pnl-subtitle">
              Found 1,284 high-impact editorial nodes
            </div>
          </div>

          <div className="pnl-header-right">
            <button type="button" className="pnl-view-btn" aria-label="Grid view">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button type="button" className="pnl-view-btn" aria-label="List view">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 6h16v2H4V6Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="pnl-filter-bar">
          <div className="pnl-tabs">
            {platformTabs.map((t) => (
              <button
                key={t.key}
                type="button"
                className={
                  t.key === activeTab
                    ? "pnl-tab pnl-tab--active"
                    : "pnl-tab"
                }
                onClick={() => setActiveTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="pnl-filter-right">
            <button type="button" className="pnl-date-pill">
              <span>Last 30 Days</span>
              <span className="pnl-chevron" aria-hidden="true" />
            </button>

            <div className="pnl-sort">
              <span className="pnl-sort-label">SORT BY</span>
              <span className="pnl-sort-value">Engagement Rate</span>
            </div>
          </div>
        </div>

        <div className="pnl-grid">
          {filtered.map((n) => (
            <article key={n.id} className="pnl-card">
              <div
                className={[
                  "pnl-card-media",
                  `pnl-card-media--${n.mediaVariant}`,
                ].join(" ")}
              >
                <img
                  className="pnl-media-img"
                  src={
                    n.mediaVariant.includes("linkedin")
                      ? "/assets/node2.png"
                      : n.mediaVariant.includes("tiktok")
                        ? "/assets/historical-growth.png"
                        : "/assets/black.png"
                  }
                  alt=""
                />

                <span
                  className={[
                    "pnl-platform-badge",
                    `pnl-platform-badge--${n.platform.toLowerCase()}`,
                  ].join(" ")}
                >
                  {n.platform === "X" ? "X" : n.platform === "TIKTOK" ? "TIKTOK" : n.platform}
                </span>

                {n.showTopPerformer ? (
                  <span className="pnl-top-performer">TOP PERFORMER</span>
                ) : null}

                <div className="pnl-media-overlay" />
              </div>

              <div className="pnl-card-body">
                <div className="pnl-card-title-row">
                  <h2 className="pnl-card-title">{n.title}</h2>
                  <button type="button" className="pnl-bookmark" aria-label="Bookmark">
                    <BookmarkIcon />
                  </button>
                </div>

                <div className="pnl-card-published">{n.published}</div>

                <div className="pnl-card-stats">
                  <div className="pnl-stat-box">
                    <div className="pnl-stat-label">{n.engagementLabel}</div>
                    <div className="pnl-stat-value pnl-stat-value--positive">
                      {n.engagementValue}
                    </div>
                  </div>
                  <div className="pnl-stat-box">
                    <div className="pnl-stat-label">{n.reachLabel}</div>
                    <div className="pnl-stat-value">{n.reachValue}</div>
                  </div>
                </div>

                <button
                  type="button"
                  className="pnl-analyze-btn"
                  onClick={() => navigate("/post-impact")}
                >
                  <span>ANALYZE IMPACT</span>
                  <span className="pnl-analyze-arrow" aria-hidden="true">
                    →
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="pnl-bottom-divider" />

        <div className="pnl-pagination">
          <button type="button" className="pnl-page-link pnl-page-link--left">
            <span className="pnl-page-chevron">‹</span>
            PREVIOUS
          </button>

          <div className="pnl-page-numbers">
            <button type="button" className="pnl-page-number pnl-page-number--active">
              1
            </button>
            <button type="button" className="pnl-page-number">
              2
            </button>
            <button type="button" className="pnl-page-number">
              3
            </button>
            <button type="button" className="pnl-page-number">42</button>
          </div>

          <button type="button" className="pnl-page-link pnl-page-link--right">
            NEXT
            <span className="pnl-page-chevron">›</span>
          </button>
        </div>
      </main>
    </div>
  );
}