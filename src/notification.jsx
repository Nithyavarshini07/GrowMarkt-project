import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import "./settings.css";
import "./notification.css";

function IconDashboard(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 13.5V6.8A2.8 2.8 0 0 1 6.8 4h3.9A2.8 2.8 0 0 1 13.5 6.8v3.9A2.8 2.8 0 0 1 10.7 13.5H4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 20H6.8A2.8 2.8 0 0 1 4 17.2v-1.7h6.5V20Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M14.8 20H17.2A2.8 2.8 0 0 0 20 17.2v-3.9A2.8 2.8 0 0 0 17.2 10.5h-2.4A2.8 2.8 0 0 0 12 13.3v3.9A2.8 2.8 0 0 0 14.8 20Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M14 4h3.2A2.8 2.8 0 0 1 20 6.8v1.9h-6V6.8A2.8 2.8 0 0 1 16.8 4H14Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCampaign(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 8.5h16v9.2A2.3 2.3 0 0 1 17.7 20H6.3A2.3 2.3 0 0 1 4 17.7V8.5Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M7 8.5V6.7A2.7 2.7 0 0 1 9.7 4h4.6A2.7 2.7 0 0 1 17 6.7v1.8"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M4 12.2h16"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconAnalytics(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 20V4"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M6.5 18h13.5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M8 16V12"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M12 16V8"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M16 16V10"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M20 16V6"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCompetitors(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M16 11a4 4 0 1 0-8 0"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M4 20v-1.2A4.8 4.8 0 0 1 8.8 14h6.4A4.8 4.8 0 0 1 20 18.8V20"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M20 9.8a3.2 3.2 0 0 0-2.1-3"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconSettings(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 15.7a3.7 3.7 0 1 0 0-7.4 3.7 3.7 0 0 0 0 7.4Z"
        stroke="currentColor"
        strokeWidth="1.9"
      />
      <path
        d="M19.4 12a7.56 7.56 0 0 0-.1-1l2-1.6-1.9-3.3-2.5 1a7.8 7.8 0 0 0-1.7-1L15 3h-6l-.2 2.1a7.8 7.8 0 0 0-1.7 1l-2.5-1L2.7 8.4l2 1.6a7.56 7.56 0 0 0 0 2l-2 1.6 1.9 3.3 2.5-1a7.8 7.8 0 0 0 1.7 1L9 21h6l.2-2.1a7.8 7.8 0 0 0 1.7-1l2.5 1 1.9-3.3-2-1.6c.1-.3.1-.7.1-1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

function IconBell(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M14 19a2 2 0 1 1-4 0"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconWifi(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2.8 9.9a14.7 14.7 0 0 1 18.4 0"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M6 13.2a9.9 9.9 0 0 1 12 0"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M9.3 16.3a5.2 5.2 0 0 1 5.4 0"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M12 20.2h0"
        stroke="currentColor"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMoon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20.5 14.6A7.6 7.6 0 0 1 9.4 3.5a6.5 6.5 0 1 0 11.1 11.1Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.5 7.2h15v9.6a1.8 1.8 0 0 1-1.8 1.8H6.3a1.8 1.8 0 0 1-1.8-1.8V7.2Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="m5.4 8 6.6 5 6.6-5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconDesktop(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 5.8h14a2 2 0 0 1 2 2v7.7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7.8a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M9 20h6"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M12 17.5V20"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMobile(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8.2 3.8h7.6A2.2 2.2 0 0 1 18 6v12a2.2 2.2 0 0 1-2.2 2.2H8.2A2.2 2.2 0 0 1 6 18V6a2.2 2.2 0 0 1 2.2-2.2Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M11 17.4h2"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Switch({ checked, onChange, ariaLabel }) {
  return (
    <button
      type="button"
      className={`notif-switch ${checked ? "on" : "off"}`}
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      onClick={() => onChange(!checked)}
    >
      <span className="notif-switch-thumb" />
    </button>
  );
}

export default function Notification() {
  const navigate = useNavigate();
  const [emailOn, setEmailOn] = useState(true);
  const [desktopOn, setDesktopOn] = useState(false);
  const [mobileOn, setMobileOn] = useState(true);

  const quietDays = useMemo(
    () => [
      { k: "m", label: "M", active: true },
      { k: "t", label: "T", active: true },
      { k: "w", label: "W", active: true },
      { k: "t2", label: "T", active: true },
      { k: "f", label: "F", active: true },
      { k: "s", label: "S", active: false },
      { k: "s2", label: "S", active: false },
    ],
    []
  );

  return (
    <div className="settings-page">
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

            <li onClick={() => navigate("/analytics")}>
              <img src="/assets/analytics.png" alt="analytics" className="nav-icon" />
              ANALYTICS
            </li>

            <li onClick={() => navigate("/competitor-analysis")} style={{ cursor: "pointer" }}>
              <img src="/assets/competition.png" alt="competitors" className="nav-icon" />
              COMPETITORS
            </li>

            <li className="active">
              <img src="/assets/settings.png" alt="settings" className="nav-icon" />
              SETTINGS
            </li>
          </ul>
        </nav>

        <button className="campaign-btn">+ NEW CAMPAIGN</button>
      </aside>

      <main className="settings-main notif-main">
        <header className="settings-topbar">
          <div className="settings-search">
            <span className="settings-search-icon" aria-hidden="true">
              <IconSearch />
            </span>
            <input placeholder="Search data..." />
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
        </header>

        <section className="settings-header">
          <h1>Notifications</h1>
          <p>Manage your global notification preferences and delivery channels.</p>
        </section>

        <section className="settings-tabs" role="tablist" aria-label="Settings sections">
          <button type="button" onClick={() => navigate("/settings")}>
            ACCOUNT &amp; TEAM
          </button>
          <button type="button" onClick={() => navigate("/billing")}>
            BILLING &amp; PAYMENT
          </button>
          <button type="button" onClick={() => navigate("/help")}>
            SUPPORT &amp; HELP
          </button>
          <button type="button" className="active">
            NOTIFICATIONS
          </button>
        </section>

        <section className="notif-body">
          <div className="notif-left">
            <div className="notif-card notif-card-white notif-card-delivery">
              <div className="notif-card-title">
                <span className="notif-card-ic" aria-hidden="true">
                  <IconWifi />
                </span>
                <span>Delivery Channels</span>
              </div>

              <div className="notif-channel-box">
                <div className="notif-channel-row">
                  <div className="notif-channel-left">
                    <div className="notif-channel-ic" aria-hidden="true">
                      <IconMail />
                    </div>
                    <div className="notif-channel-meta">
                      <div className="notif-channel-name">Email Notifications</div>
                      <div className="notif-channel-sub">Daily digests and critical security alerts.</div>
                    </div>
                  </div>
                  <Switch checked={emailOn} onChange={setEmailOn} ariaLabel="Email notifications" />
                </div>

                <div className="notif-channel-row">
                  <div className="notif-channel-left">
                    <div className="notif-channel-ic" aria-hidden="true">
                      <IconDesktop />
                    </div>
                    <div className="notif-channel-meta">
                      <div className="notif-channel-name">Desktop Push</div>
                      <div className="notif-channel-sub">Real-time browser notifications for updates.</div>
                    </div>
                  </div>
                  <Switch checked={desktopOn} onChange={setDesktopOn} ariaLabel="Desktop push" />
                </div>

                <div className="notif-channel-row">
                  <div className="notif-channel-left">
                    <div className="notif-channel-ic" aria-hidden="true">
                      <IconMobile />
                    </div>
                    <div className="notif-channel-meta">
                      <div className="notif-channel-name">Mobile App</div>
                      <div className="notif-channel-sub">Push alerts for iOS and Android devices.</div>
                    </div>
                  </div>
                  <Switch checked={mobileOn} onChange={setMobileOn} ariaLabel="Mobile app notifications" />
                </div>
              </div>
            </div>

            <div className="notif-card notif-card-white notif-card-alerts">
              <div className="notif-alerts-title">Campaign Activity Alerts</div>
              <div className="notif-alerts-grid">
                <div className="notif-alert">
                  <span className="notif-alert-check" aria-hidden="true">
                    ✅
                  </span>
                  <div className="notif-alert-meta">
                    <div className="notif-alert-name">Successful Posts</div>
                    <div className="notif-alert-sub">
                      Notify when content is live on all selected platforms.
                    </div>
                  </div>
                </div>

                <div className="notif-alert">
                  <span className="notif-alert-check" aria-hidden="true">
                    ✅
                  </span>
                  <div className="notif-alert-meta">
                    <div className="notif-alert-name">Scheduling Conflicts</div>
                    <div className="notif-alert-sub">Alert me if multiple posts overlap in the queue.</div>
                  </div>
                </div>

                <div className="notif-alert notif-alert-wide">
                  <span className="notif-alert-check" aria-hidden="true">
                    ✅
                  </span>
                  <div className="notif-alert-meta">
                    <div className="notif-alert-name">Approval Requests</div>
                    <div className="notif-alert-sub">
                      Required for team collaboration environments when a draft is ready for review.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="notif-right">
            <div className="notif-card notif-quiet">
              <div className="notif-quiet-head">
                <div className="notif-quiet-top">
                  <span className="notif-quiet-ic" aria-hidden="true">
                   <img src="/assets/moon.png" alt="Dark mode" className="icon-moon" />
                  </span>
                  <div className="notif-quiet-title">Quiet Hours</div>
                </div>
                <div className="notif-quiet-sub">
                  Automatically silence all non-critical notifications during your focus time.
                </div>
              </div>

              <div className="notif-quiet-row">
                <div className="notif-quiet-label">STATUS</div>
                <div className="notif-quiet-pill">ACTIVE</div>
              </div>

              <div className="notif-quiet-timegrid">
                <div className="notif-quiet-time">
                  <div className="notif-quiet-mini">FROM</div>
                  <div className="notif-quiet-input">
                    <span>22:00</span>
                    <span className="notif-quiet-clock" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 21a9 9 0 1 0-9-9 9 9 0 0 0 9 9Z"
                          stroke="currentColor"
                          strokeWidth="1.9"
                        />
                        <path
                          d="M12 7v5l3 2"
                          stroke="currentColor"
                          strokeWidth="1.9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="notif-quiet-time">
                  <div className="notif-quiet-mini">UNTIL</div>
                  <div className="notif-quiet-input">
                    <span>07:00</span>
                    <span className="notif-quiet-sun" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 16.8a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6Z"
                          stroke="currentColor"
                          strokeWidth="1.9"
                        />
                        <path d="M12 2.8v2.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
                        <path d="M12 19v2.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
                        <path d="M2.8 12h2.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
                        <path d="M19 12h2.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
                        <path d="M4.9 4.9l1.6 1.6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
                        <path d="M17.5 17.5l1.6 1.6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
                        <path d="M19.1 4.9l-1.6 1.6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
                        <path d="M6.5 17.5l-1.6 1.6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="notif-quiet-days">
                {quietDays.map((d) => (
                  <div key={d.k} className={`notif-day ${d.active ? "on" : "off"}`}>
                    {d.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="notif-card notif-efficiency" aria-label="Notification efficiency">
              <div className="notif-efficiency-overlay">
                <div className="notif-efficiency-label">NOTIFICATION EFFICIENCY</div>
                <div className="notif-efficiency-val">94.2%</div>
                <div className="notif-efficiency-sub">
                  Reduction in interruption noise after tuning.
                </div>
              </div>
            </div>
          </aside>
        </section>

        <footer className="notif-footer">
          <button type="button" className="notif-discard">
            DISCARD CHANGES
          </button>
          <button type="button" className="notif-save">
            SAVE PREFERENCES
          </button>
        </footer>
      </main>
    </div>
  );
}