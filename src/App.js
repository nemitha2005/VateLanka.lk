import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import Developers from "./components/Developers";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Content />
        <Developers />
        <Footer />
    </div>
  );
};

export default App;
