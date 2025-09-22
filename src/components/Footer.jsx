import { ArrowUpRightIcon, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    // Footer ka main container. Background color aur padding set ki gayi hai.
    // The main footer container. Background color and padding are set.
    <footer className="bg-[#F1F1F1] text-[#1E1E1E]">
      <div className="container mx-auto pt-10 pb-12">
        {/* Top section of the footer with a responsive grid */}
        {/* Footer ka top section jo responsive grid istemal karta hai */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-left">

          {/* Column 1: Brand Info */}
          {/* Pehla Column: Brand ki maloomat */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-4xl font-semibold">Eldiora</h2>
            <p className="text-gray-600 mt-4 max-w-xs">
              Providing compassionate elder care with trusted specialists in health, nutrition, and wellness.
            </p>
            <div className="mt-6 relative group flex items-center gap-4 font-medium text-base px-4 py-2 rounded-full border border-[#E6B59E] hover:border-[#E6B59E] cursor-pointer overflow-hidden transition-colors duration-500 bg-[#4D273F] w-fit">
              {/* Animated background */}
              <span className="absolute inset-0 bg-[#E6B59E] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>

              {/* Button content */}
              <p className="relative z-10 text-white group-hover:text-black transition-colors duration-500">More Services</p>

              <p className="relative z-10 flex items-center justify-center rounded-full p-3 bg-[#E6B59E] group-hover:bg-[#4D273F] text-black group-hover:text-[#E6B59E] transition-colors duration-500">
                <ArrowUpRightIcon size={16} />
              </p>
            </div>
          </div>

          {/* Column 2: Address and Contact */}
          {/* Doosra Column: Pata aur Rabta */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            <p className="text-gray-600">123 Riverbend, California 94025, USA</p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:8884567890" className="text-gray-600 hover:text-[#4D273F] transition-colors">(888) 456 7890</a>
              </li>
              <li>
                <a href="mailto:info@example.com" className="text-gray-600 hover:text-[#4D273F] transition-colors">info@example.com</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          {/* Teesra Column: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-[#4D273F] transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#4D273F] transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#4D273F] transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#4D273F] transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#4D273F] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 4: Utility Pages */}
          {/* Chautha Column: Utility Pages */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Utility pages</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-[#4D273F] transition-colors">Style guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#4D273F] transition-colors">License</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#4D273F] transition-colors">Changelog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#4D273F] transition-colors">404</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#4D273F] transition-colors">Password protected</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar for copyright */}
        {/* Copyright ke liye neeche ka bar */}
        <div className="mt-16 pt-8 border-t border-gray-300 text-center text-gray-500 flex items-center justify-between">
          <p>© 2025 Eldiora. All Rights Reserved.</p>
          <div className='flex items-center gap-4'>
            <p className='border border-gray-300 rounded-full p-3 bg-white text-[#4D273F] cursor-pointer hover:text-white hover:bg-[#4D273F] transition-all duration-300'><Facebook size={20} /></p>
            <p className='border border-gray-300 rounded-full p-3 bg-white text-[#4D273F] cursor-pointer hover:text-white hover:bg-[#4D273F] transition-all duration-300'><Linkedin size={20} /></p>
            <p className='border border-gray-300 rounded-full p-3 bg-white text-[#4D273F] cursor-pointer hover:text-white hover:bg-[#4D273F] transition-all duration-300'><Instagram size={20} /></p>
            <p className='border border-gray-300 rounded-full p-3 bg-white text-[#4D273F] cursor-pointer hover:text-white hover:bg-[#4D273F] transition-all duration-300'><Twitter size={20} /></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;