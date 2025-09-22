import React from 'react';
import { PhoneCall } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#000000] text-white px-4 py-4">
      <div className='flex items-center justify-between'>
        <h1 className='text-4xl'>Eldiora</h1>
        <div className='flex items-center gap-14 text-base'>
          <a href="#home"><p>Home</p></a>
          <a href="#about"><p>About</p></a>
          <a href="#services"><p>Services</p></a>
          <a href="#blog"><p>Blog</p></a>
          <a href="#contact"><p>Contact</p></a>
        </div>
        <div className="relative group flex items-center gap-4 font-medium text-lg px-4 py-2 rounded-full border border-[#4D273F] hover:border-white cursor-pointer overflow-hidden transition-colors duration-500 bg-white">
          {/* Animated background */}
          <span className="absolute inset-0 bg-[#4D273F] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>

          {/* Button content */}
          <p className="relative z-10 text-black group-hover:text-white transition-colors duration-500">(888) 456 7890</p>

          <p className="relative z-10 flex items-center justify-center rounded-full p-3 bg-[#4D273F] group-hover:bg-[#E6B59E] text-white group-hover:text-black transition-colors duration-500">
            <PhoneCall size={16} />
          </p>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
