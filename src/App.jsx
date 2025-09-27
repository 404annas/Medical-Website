import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./screens/AboutPage";
import ServicesPage from "./screens/ServicesPage";
import ContactPage from "./screens/ContactPage";
import BlogPage from "./screens/BlogPage";
import PopUp from "./components/PopUp"; // import PopUp

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // PopUp show on page load
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000); // 1 second delay optional

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />

      {showPopup && <PopUp onClose={handleClosePopup} />}
    </Router>
  );
}

export default App;
