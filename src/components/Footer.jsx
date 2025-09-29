import { ArrowUpRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/abstract-logo.svg";
import { footerData } from "../data/footerData";
import CareForm from "./CareForm";
const Footer = () => {
  const { brand, contact, quickLinks, utilityPages, socialMedia, copyright } =
    footerData;
  const [isFormOpen, setFormOpen] = useState(false);

  return (
    <footer className="bg-[#F1F1F1] text-[#1E1E1E]">
      <div className="container mx-auto pt-10 pb-12 px-10 ">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:gap-10  text-left">
          {/* Column 1: Brand Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div>
              <img src={logo} className="w-40 object-cover" />
            </div>
            <p className="text-gray-600 mt-4 max-w-full sm:max-w-xs text-sm sm:text-base">
              {brand.description}
            </p>
            <div className="mt-6 relative group flex items-center gap-3 sm:gap-4 font-medium text-sm sm:text-base px-4 py-2 rounded-full border border-[#E6B59E] hover:border-[#E6B59E] cursor-pointer overflow-hidden transition-colors duration-500 bg-[#4D273F] w-fit">
              <span className="absolute inset-0 bg-[#E6B59E] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
              <button
                onClick={() => setFormOpen(true)}
                className="relative z-10 text-white group-hover:text-black transition-colors duration-500"
              >
                Get In Touch
              </button>
              <p className="relative z-10 flex items-center justify-center rounded-full p-2 sm:p-3 bg-[#E6B59E] group-hover:bg-[#4D273F] text-black group-hover:text-[#E6B59E] transition-colors duration-500">
                <ArrowUpRightIcon size={16} />
              </p>
            </div>
          </div>

          {/* Column 2: Address and Contact */}
          <div className="sm:col-span-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">
              Address
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {contact.address}
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mt-6 sm:mt-8 mb-2 sm:mb-4">
              Contact
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>
                <a
                  href={`tel:${contact.phone}`}
                  className="text-gray-600 hover:text-[#4D273F] transition-colors"
                >
                  {contact.phone}
                </a>
              </li>
              {/* <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-gray-600 hover:text-[#4D273F] transition-colors"
                >
                  {contact.email}
                </a>
              </li> */}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">
              Quick links
            </h3>
            <ul className="space-y-2 sm:space-y-4 text-sm sm:text-base">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    onClick={() => scrollTo(0, 0)}
                    className="text-gray-600 hover:text-[#4D273F] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Utility Pages */}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-300 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 text-sm sm:text-base">
          <p>{copyright}</p>
          <div className="flex items-center gap-2 sm:gap-4">
            {socialMedia.map(({ Icon, url }, idx) => (
              <a
                key={idx}
                href={url}
                className="border border-gray-300 rounded-full p-2 sm:p-3 bg-white text-[#4D273F] cursor-pointer hover:text-white hover:bg-[#4D273F] transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <CareForm isOpen={isFormOpen} onClose={() => setFormOpen(false)} />
    </footer>
  );
};

export default Footer;
