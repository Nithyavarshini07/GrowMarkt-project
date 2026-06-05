import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import LoginPage from "./LoginPage";
import ResetPassword from "./ResetPassword";
import ResetLink from "./ResetLink";
import InitializeAccount from "./InitializeAccount";
import Dashboard from "./Dashboard";
import ActivityFeed from "./ActivityFeed";

import Analytics from "./Analytics";
import AnalyticsDense from "./AnalyticsDense";
import PerformanceNodesLibrary from "./PerformanceNodesLibrary";
import PostImpact from "./PostImpact";
import MonthlyPerformance from "./MonthlyPerformance";
import CompetitorAnalysis from "./CompetitorAnalysis";
import VortexMedia from "./VortexMedia";
import LuminaCreative from "./LuminaCreative";
import PerformanceMetric from "./PerformanceMetric";
import TrendingCompetitorFeed from "./TrendingCompetitorFeed";

// NEW IMPORTS
import Settings from "./settings";
import CreateUnifiedPost from "./createUnifiedPost";
import MonthlyObjective from "./monthlyObjective";
import Billing from "./billing";
import Help from "./help";
import CampaignTimeline from "./campaignTimeline";
import AddNewCompetitor from "./addNewCompetitor";
import Notification from "./notification";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-link" element={<ResetLink />} />

        <Route path="/create-account" element={<InitializeAccount />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/activity-feed" element={<ActivityFeed />} />

        <Route path="/analytics" element={<Analytics />} />
        <Route path="/analytics-dense" element={<AnalyticsDense />} />
        <Route path="/competitor-analysis" element={<CompetitorAnalysis />} />
        <Route path="/vortex-media" element={<VortexMedia />} />
        <Route path="/lumina-creative" element={<LuminaCreative />} />
        <Route path="/performance-metric" element={<PerformanceMetric />} />
        <Route path="/trending-feed" element={<TrendingCompetitorFeed />} />

        <Route path="/performance-nodes" element={<PerformanceNodesLibrary />} />
        <Route path="/post-impact" element={<PostImpact />} />
        <Route path="/monthly-performance" element={<MonthlyPerformance />} />

        {/* NEW ROUTES */}
        <Route path="/settings" element={<Settings />} />
        <Route path="/create-unified-post" element={<CreateUnifiedPost />} />
        <Route path="/monthly-objective" element={<MonthlyObjective />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/help" element={<Help />} />
        <Route path="/campaign-timeline" element={<CampaignTimeline />} />
        
<Route path="/add-new-competitor" element={<AddNewCompetitor />} />
<Route path="/notifications" element={<Notification />} />
      </Routes>
    </Router>
  );
}

export default App;