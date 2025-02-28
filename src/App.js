import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutVateLanka from "./components/AboutVateLanka";
import Content from "./components/Content";
import Developers from "./components/Developers";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";
import BackToTopButton from "./BackToTopButton";
import AdminLogin from "./components/AdminLogin";
import AdminPanel from "./components/AdminPanel";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "1234") {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  return (
    <Router>
      <AppContent isAuthenticated={isAuthenticated} handleLogin={handleLogin} />
    </Router>
  );
};

const AppContent = ({ isAuthenticated, handleLogin }) => {
  const location = window.location.pathname;
  const isStandalonePage = 
    location === "/adminlogin" || 
    location === "/adminpanel" ||
    location === "/privacy-policy" || 
    location === "/terms-conditions";

  return (
    <div>
      {/* Only render the Navbar on the main site pages */}
      {!isStandalonePage && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <AboutVateLanka />
              <Content />
              <Developers />
              <ContactForm />
              <Footer />
              <BackToTopButton />
              <Analytics />
            </>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route
          path="/adminlogin"
          element={<AdminLogin onLogin={handleLogin} />}
        />
        <Route
          path="/adminpanel"
          element={
            isAuthenticated ? (
              <AdminPanel />
            ) : (
              <Navigate to="/adminlogin" replace />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;