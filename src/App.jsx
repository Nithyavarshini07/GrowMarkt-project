import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./LoginPage";
import ResetPassword from "./ResetPassword"; // this is your "forgot password" page
import ResetLink from "./ResetLink"; // ✅ NEW PAGE
import InitializeAccount from "./InitializeAccount";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        {/* Step 1: user enters email */}
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Step 2: user sets new password */}
        <Route path="/reset-link" element={<ResetLink />} />

        <Route path="/create-account" element={<InitializeAccount />} />
      </Routes>
    </Router>
  );
}

export default App;