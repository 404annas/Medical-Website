import React, { useState, useEffect } from "react";
import { PhoneCall, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Animate navbar entrance
  useEffect(() => {
    const timer = setTimeout(() => {
      setNavbarVisible(true);
    }, 800); // Delay of 800ms before animation starts

    return () => clearTimeout(timer);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [sidebarOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 text-white px-4 py-4 transform transition-all duration-1000 ease-out
        ${
          navbarVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }
        ${
          isScrolled
            ? "bg-[#000000] backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-medium">Eldiora</h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-14 text-base">
          <Link to="/" onClick={() => scrollTo(0, 0)}>
            <p className="hover:text-[#E6B59E] transition-all duration-300">
              Home
            </p>
          </Link>
          <Link to="/about" onClick={() => scrollTo(0, 0)}>
            <p className="hover:text-[#E6B59E] transition-all duration-300">
              About
            </p>
          </Link>
          <Link to="/services" onClick={() => scrollTo(0, 0)}>
            <p className="hover:text-[#E6B59E] transition-all duration-300">
              Services
            </p>
          </Link>
          <Link to="/blog" onClick={() => scrollTo(0, 0)}>
            <p className="hover:text-[#E6B59E] transition-all duration-300">
              Blog
            </p>
          </Link>
          <Link to="/contact" onClick={() => scrollTo(0, 0)}>
            <p className="hover:text-[#E6B59E] transition-all duration-300">
              Contact
            </p>
          </Link>
        </div>

        {/* Contact Button Desktop */}
        <div className="hidden lg:flex relative group items-center gap-4 font-medium text-[17px] px-4 py-2 rounded-full border border-[#4D273F] hover:border-white cursor-pointer overflow-hidden transition-colors duration-500 bg-white">
          <span className="absolute inset-0 bg-[#4D273F] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
          <p className="relative z-10 text-black group-hover:text-white transition-colors duration-500">
            Get Care
          </p>
          <p className="relative z-10 flex items-center justify-center rounded-full p-2 bg-[#4D273F] group-hover:bg-[#E6B59E] text-white group-hover:text-black transition-colors duration-500">
            <PhoneCall size={16} />
          </p>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden cursor-pointer">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed lg:hidden block top-0 right-0 h-full bg-[#000000] w-3/4 max-w-xs z-50 transform transition-transform duration-500 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4 cursor-pointer">
          <button onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col gap-6 mt-10 ml-6 text-base">
          <a href="#home" onClick={() => setSidebarOpen(false)}>
            <li>Home</li>
          </a>
          <a href="#about" onClick={() => setSidebarOpen(false)}>
            <li>About</li>
          </a>
          <a href="#services" onClick={() => setSidebarOpen(false)}>
            <li>Services</li>
          </a>
          <a href="#blog" onClick={() => setSidebarOpen(false)}>
            <li>Blog</li>
          </a>
          <a href="#contact" onClick={() => setSidebarOpen(false)}>
            <li>Contact</li>
          </a>
        </ul>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
