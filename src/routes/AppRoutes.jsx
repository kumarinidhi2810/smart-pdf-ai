import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import UploadPdf from "../pages/upload/UploadPdf";
import SummaryPage from "../pages/summary/SummaryPage";
import History from "../pages/history/History";
import Profile from "../pages/profile/Profile";
import Settings from "../pages/settings/Settings";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/upload" element={<UploadPdf />} />

        <Route path="/summary" element={<SummaryPage />} />

        <Route path="/history" element={<History />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;