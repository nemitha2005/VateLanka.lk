import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutVateLanka from "./components/AboutVateLanka";
import Content from "./components/Content";
import Developers from "./components/Developers";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import BackToTopButton from "./BackToTopButton";
import AdminLogin from "./components/AdminLogin";
import AdminPanel from "./components/AdminPanel";
import { Analytics } from "@vercel/analytics/react"
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
  const isAdminPage = location === "/adminlogin" || location === "/adminpanel";

  return (
    <div>
      {/* Conditionally render the Navbar */}
      {!isAdminPage && <Navbar />}
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
