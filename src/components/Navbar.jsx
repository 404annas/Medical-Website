import React, { useState, useEffect } from 'react';
import { PhoneCall, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [sidebarOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-[#000000] text-white px-4 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-medium">Eldiora</h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-14 text-base">
          <a href="#home"><p>Home</p></a>
          <a href="#about"><p>About</p></a>
          <a href="#services"><p>Services</p></a>
          <a href="#blog"><p>Blog</p></a>
          <a href="#contact"><p>Contact</p></a>
        </div>

        {/* Contact Button Desktop */}
        <div className="hidden lg:flex relative group items-center gap-4 font-medium text-[17px] px-4 py-2 rounded-full border border-[#4D273F] hover:border-white cursor-pointer overflow-hidden transition-colors duration-500 bg-white">
          <span className="absolute inset-0 bg-[#4D273F] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
          <p className="relative z-10 text-black group-hover:text-white transition-colors duration-500">(888) 456 7890</p>
          <p className="relative z-10 flex items-center justify-center rounded-full p-3 bg-[#4D273F] group-hover:bg-[#E6B59E] text-white group-hover:text-black transition-colors duration-500">
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
        className={`fixed top-0 right-0 h-full bg-[#000000] w-3/4 max-w-xs z-50 transform transition-transform duration-500 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-end p-4 cursor-pointer">
          <button onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col gap-6 mt-10 ml-6 text-base">
          <a href="#home" onClick={() => setSidebarOpen(false)}><li>Home</li></a>
          <a href="#about" onClick={() => setSidebarOpen(false)}><li>About</li></a>
          <a href="#services" onClick={() => setSidebarOpen(false)}><li>Services</li></a>
          <a href="#blog" onClick={() => setSidebarOpen(false)}><li>Blog</li></a>
          <a href="#contact" onClick={() => setSidebarOpen(false)}><li>Contact</li></a>
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
