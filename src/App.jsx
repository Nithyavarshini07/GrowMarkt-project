import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./LoginPage";
import ResetPassword from "./ResetPassword";
import ResetLink from "./ResetLink";
import InitializeAccount from "./InitializeAccount";
import Dashboard from "./Dashboard"; // ✅ ADD THIS

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-link" element={<ResetLink />} />

        <Route path="/create-account" element={<InitializeAccount />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;