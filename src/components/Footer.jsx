import { ArrowUpRightIcon, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#F1F1F1] text-[#1E1E1E]">
      <div className="container mx-auto pt-10 pb-12 px-4">

        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 text-left">

          {/* Column 1: Brand Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-semibold">Eldiora</h2>
            <p className="text-gray-600 mt-4 max-w-full sm:max-w-xs text-sm sm:text-base">
              Providing compassionate elder care with trusted specialists in health, nutrition, and wellness.
            </p>
            <div className="mt-6 relative group flex items-center gap-3 sm:gap-4 font-medium text-sm sm:text-base px-4 py-2 rounded-full border border-[#E6B59E] hover:border-[#E6B59E] cursor-pointer overflow-hidden transition-colors duration-500 bg-[#4D273F] w-fit">
              <span className="absolute inset-0 bg-[#E6B59E] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
              <p className="relative z-10 text-white group-hover:text-black transition-colors duration-500">More Services</p>
              <p className="relative z-10 flex items-center justify-center rounded-full p-2 sm:p-3 bg-[#E6B59E] group-hover:bg-[#4D273F] text-black group-hover:text-[#E6B59E] transition-colors duration-500">
                <ArrowUpRightIcon size={16} />
              </p>
            </div>
          </div>

          {/* Column 2: Address and Contact */}
          <div className="sm:col-span-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Address</h3>
            <p className="text-gray-600 text-sm sm:text-base">123 Riverbend, California 94025, USA</p>

            <h3 className="text-lg sm:text-xl font-semibold mt-6 sm:mt-8 mb-2 sm:mb-4">Contact</h3>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li><a href="tel:8884567890" className="text-gray-600 hover:text-[#4D273F] transition-colors">(888) 456 7890</a></li>
              <li><a href="mailto:info@example.com" className="text-gray-600 hover:text-[#4D273F] transition-colors">info@example.com</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Quick links</h3>
            <ul className="space-y-2 sm:space-y-4 text-sm sm:text-base">
              <li><Link to="/" className="text-gray-600 hover:text-[#4D273F] transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-[#4D273F] transition-colors duration-300">About</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-[#4D273F] transition-colors duration-300">Services</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-[#4D273F] transition-colors duration-300">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-[#4D273F] transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Utility Pages */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Utility pages</h3>
            <ul className="space-y-1 sm:space-y-3 text-sm sm:text-base">
              <li><a href="#" className="text-gray-600 hover:text-[#4D273F] transition-colors">Style guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#4D273F] transition-colors">License</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#4D273F] transition-colors">Changelog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#4D273F] transition-colors">404</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#4D273F] transition-colors">Password protected</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-300 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 text-sm sm:text-base">
          <p>© 2025 Eldiora. All Rights Reserved.</p>
          <div className='flex items-center gap-2 sm:gap-4'>
            {[Facebook, Linkedin, Instagram, Twitter].map((Icon, idx) => (
              <button key={idx} className='border border-gray-300 rounded-full p-2 sm:p-3 bg-white text-[#4D273F] cursor-pointer hover:text-white hover:bg-[#4D273F] transition-all duration-300'>
                <Icon size={20} />
              </button>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
