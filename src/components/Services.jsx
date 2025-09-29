import { PhoneCall, ArrowUpRightIcon } from "lucide-react";
import React, { useState } from "react";
import serviceImg from "../assets/1.webp";
import ServicesAno from "./ServicesAno";
import ServicesAnoAno from "./ServicesAnoAno";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="bg-[#F1F1F1] py-16 sm:py-20 px-4 sm:px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Column: Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-full max-w-[90%] aspect-square">
            <img
              loading="lazy"
              src={serviceImg}
              className="rounded-3xl w-full h-full object-cover object-top-right"
            />
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col gap-6 text-left">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-medium text-[#000000] leading-snug sm:leading-snug md:leading-tight lg:leading-tight">
            Comprehensive care from detox and regenerative therapies to
            fertility, sexual health, and wellness designed to restore balance,
            boost vitality, and support lasting health with compassions
          </h2>

          {/* Custom Button */}
          <div className="mt-4 sm:mt-6 relative group flex items-center gap-4 font-medium text-sm sm:text-base md:text-base px-4 py-2 rounded-full border border-[#E6B59E] hover:border-[#E6B59E] cursor-pointer overflow-hidden transition-colors duration-500 bg-[#4D273F] w-fit">
            <span className="absolute inset-0 bg-[#E6B59E] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
            <Link
              to={"/about"}
              onClick={() => scrollTo(0, 0)}
              className="relative z-10 text-white group-hover:text-black transition-colors duration-500"
            >
              Proven Results
            </Link>
            <p className="relative z-10 flex items-center justify-center rounded-full p-3 bg-[#E6B59E] group-hover:bg-[#4D273F] text-black group-hover:text-[#E6B59E] transition-colors duration-500">
              <ArrowUpRightIcon size={16} />
            </p>
          </div>

          {/* Horizontal Line */}
          <hr className="my-6 sm:my-10 border-t border-gray-300" />

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1: Resident care */}
            <div className="bg-white px-4 sm:px-6 py-8 sm:py-10 rounded-2xl">
              <div className="flex justify-between items-center mb-16 sm:mb-20">
                <span className="font-medium text-[#4D273F]">01</span>
                <div className="border border-gray-200 rounded-full p-3 sm:p-4">
                  <ArrowUpRightIcon size={18} />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-medium mt-2 sm:mt-4 text-[#1E1E1E]">
                Detox
              </h3>
              <p className="text-gray-500 mt-1 text-sm sm:text-base">
                Compassionate support, everyday comfort.
              </p>
            </div>

            {/* Card 2: Independent living */}
            <div className="bg-white px-4 sm:px-6 py-8 sm:py-10 rounded-2xl">
              <div className="flex justify-between items-center mb-16 sm:mb-20">
                <span className="font-medium text-[#4D273F]">02</span>
                <div className="border border-gray-200 rounded-full p-3 sm:p-4">
                  <ArrowUpRightIcon size={18} />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-medium mt-2 sm:mt-4 text-[#1E1E1E]">
                Independent living
              </h3>
              <p className="text-gray-500 mt-1 text-sm sm:text-base">
                Safe environment, more freedom.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block mt-16">
        <ServicesAno />
      </div>

      {/* Show ServicesAnoAno only below lg */}
      <div className="block lg:hidden mt-16">
        <ServicesAnoAno />
      </div>
    </section>
  );
};

export default Services;
