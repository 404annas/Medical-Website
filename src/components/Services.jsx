import { PhoneCall, ArrowUpRightIcon } from 'lucide-react';
import React from 'react';
import ServicesAno from './ServicesAno';

// Arrow icon ke liye ek chota component. Isse code saaf rehta hai.
// A small component for the arrow icon. This keeps the code clean.
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>
);


const Services = () => {
  return (
    // Section container with light grey background and vertical padding.
    // Section container jisme halka grey background aur upar-neeche padding hai.
    <section className="bg-[#F1F1F1] py-20 px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left Column: Image */}
        {/* Baayi Taraf ka Column: Tasveer */}
        <div>
          <img
          loading="lazy"
            src="https://cdn.prod.website-files.com/686e5f117daf09c744bbab53/686f4811e6b2605289d088ca_49542412ea16da7ba06eb97cd4f73ca0_About%20Image-p-800.webp"
            alt="Caregiver assisting an elderly woman in a wheelchair"
            className="rounded-3xl w-[90%] object-cover"
          />
        </div>

        {/* Right Column: Content */}
        {/* Daayi Taraf ka Column: Content */}
        <div className="flex flex-col gap-4 text-left">
          <h2 className="text-[45px] font-medium text-[#000000] leading-tight">
            Reliable in-home elder care that prioritizes comfort, safety and emotional well-being for your loved ones.
          </h2>

          {/* Custom Button */}
          {/* Khaas Button */}
          <div className="mt-6 relative group flex items-center gap-4 font-medium text-base px-4 py-2 rounded-full border border-[#E6B59E] hover:border-[#E6B59E] cursor-pointer overflow-hidden transition-colors duration-500 bg-[#4D273F] w-fit">
            {/* Animated background */}
            <span className="absolute inset-0 bg-[#E6B59E] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>

            {/* Button content */}
            <p className="relative z-10 text-white group-hover:text-black transition-colors duration-500">More Services</p>

            <p className="relative z-10 flex items-center justify-center rounded-full p-3 bg-[#E6B59E] group-hover:bg-[#4D273F] text-black group-hover:text-[#E6B59E] transition-colors duration-500">
              <ArrowUpRightIcon size={16} />
            </p>
          </div>

          {/* Horizontal Line */}
          {/* Lakeer */}
          <hr className="my-14 border-t border-gray-300" />

          {/* Service Cards */}
          {/* Service ke Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Card 1: Resident care */}
            <div className="bg-white px-6 py-10 rounded-2xl">
              <div className="flex justify-between items-center mb-20">
                <span className="font-medium text-[#4D273F]">01</span>
                <div className="border border-gray-200 rounded-full p-4">
                  <ArrowUpRightIcon size={18}/>
                </div>
              </div>
              <h3 className="text-xl font-medium mt-4 text-[#1E1E1E]">Resident care</h3>
              <p className="text-gray-500 mt-1 text-base">Compassionate support, everyday comfort.</p>
            </div>

            {/* Card 2: Independent living */}
            <div className="bg-white p-6 py-10 rounded-2xl">
              <div className="flex justify-between items-center mb-20">
                <span className="font-medium text-[#4D273F]">02</span>
                <div className="border border-gray-200 rounded-full p-4">
                  <ArrowUpRightIcon size={18}/>
                </div>
              </div>
              <h3 className="text-xl font-medium mt-4 text-[#1E1E1E]">Independent living</h3>
              <p className="text-gray-500 mt-1 text-base">Safe environment, more freedom.</p>
            </div>

          </div>
        </div>
      </div>
      <ServicesAno />
    </section>
  );
};

export default Services;