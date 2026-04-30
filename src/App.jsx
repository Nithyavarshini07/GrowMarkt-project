import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./LoginPage";
import ResetPassword from "./ResetPassword";
import ResetLink from "./ResetLink";
import InitializeAccount from "./InitializeAccount";
import Dashboard from "./Dashboard"; 
import ActivityFeed from "./ActivityFeed";
import Analytics from "./Analytics"; 

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
      </Routes>
    </Router>
  );
}

export default App;