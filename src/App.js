import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./Pages/DashboardPage";
import ProfilePage from "./Pages/ProfilePage";
import EditProfilePage from "./Pages/EditProfilePage";
import TransactionPage from "./Pages/TransactionPage";
import TransaksiPage from "./Pages/TransaksiPage";
import DetailTransactionPage from "./Pages/DetailTansactionPage";
import ModalPage from "./Pages/ModalPage";
import TutupBukuPage from "./Pages/TutupBukuPage";
import ContactPage from "./Pages/ContactPage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";

const AppContent = () => {
  const location = useLocation();

  // Daftar rute tanpa sidebar
  const noSidebarRoutes = ["/signup", "/login"];

  const isSidebarVisible = !noSidebarRoutes.includes(location.pathname);

  return (
    <div style={{ display: "flex" }} className="app-container">
      {/* Render sidebar hanya jika isSidebarVisible true */}
      {isSidebarVisible && <Sidebar />}
      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          {/* Pages with Sidebar */}
          <Route path="/" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route path="/transaction" element={<TransactionPage />} />
          <Route path="/transaksi" element={<TransaksiPage />} />
          <Route path="/modal" element={<ModalPage />} />
          <Route path="/tutup-buku" element={<TutupBukuPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Pages without Sidebar */}
          <Route path="/detail-transaction" element={<DetailTransactionPage />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes without Sidebar */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Routes with AppContent */}
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </Router>
  );
};

export default App;
