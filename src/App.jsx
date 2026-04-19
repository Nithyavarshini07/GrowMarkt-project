import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./LoginPage";
import InitializeAccount from "./InitializeAccount";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/create-account" element={<InitializeAccount />} />
      </Routes>
    </Router>
  );
}

export default App;