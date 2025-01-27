import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import Developers from "./components/Developers";
import Footer from "./components/Footer";
import "./App.css";
import AboutVateLanka from "./components/AboutVateLanka";
import ContactForm from "./components/ContactForm";
import BackToTopButton from "./BackToTopButton";

const App = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <AboutVateLanka />
        <Content />
        <Developers />
        <ContactForm />
        <Footer />
        <BackToTopButton />
    </div>
  );
};

export default App;
