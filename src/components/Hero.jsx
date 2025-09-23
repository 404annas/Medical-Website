import React, { useState, useEffect } from "react";
import { ArrowUpRightIcon } from "lucide-react";

const images = [
  "https://cdn.prod.website-files.com/686e5f117daf09c744bbab53/686f4811e6b2605289d088ef_a46d45f37e2acf0ffaba6688204ba24a_Hero%25203-p-1600.webp",
  "https://cdn.prod.website-files.com/686e5f117daf09c744bbab53/686f4811e6b2605289d088b6_9da4f998159a5884c516bd139a1240d5_Hero%25201-p-1600.webp",
  "https://cdn.prod.website-files.com/686e5f117daf09c744bbab53/686f453bc26dec69dc947b2e_faq%20Image%20Two.webp"
];

const headings = [
  "Dignified living, personalized for your loved ones",
  "We support seniors with dignity and personal care",
  "Nurturing lives with respect and kindness"
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Previous image */}
      {prev !== null && (
        <img
          loading="lazy"
          src={images[prev]}
          alt={`Hero ${prev}`}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out translate-x-[-100%]"
        />
      )}

      {/* Current image */}
      <img
        loading="lazy"
        src={images[current]}
        alt={`Hero ${current}`}
        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out translate-x-0"
      />

      {/* Overlay */}
      <div className="absolute w-full h-full bg-black/50 z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 md:px-12 z-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none font-medium text-white mb-6 drop-shadow-lg transition-opacity duration-700 ease-in-out max-w-full md:max-w-xl">
          {headings[current]}
        </h2>

        {/* Button */}
        <div className="relative group flex items-center gap-4 font-medium text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] px-4 py-2 rounded-full border border-[#4D273F] hover:border-white cursor-pointer overflow-hidden transition-colors duration-500 bg-white">
          <span className="absolute inset-0 bg-[#4D273F] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
          <p className="relative z-10 text-black group-hover:text-white transition-colors duration-500">
            Get care now
          </p>
          <p className="relative z-10 flex items-center justify-center rounded-full p-3 bg-[#4D273F] group-hover:bg-[#E6B59E] text-white group-hover:text-black transition-colors duration-500">
            <ArrowUpRightIcon size={16} />
          </p>
        </div>

        {/* Info section */}
        <div className="flex flex-col gap-2 mt-6 sm:mt-8 md:mt-10 text-white">
          <p className="font-medium text-lg sm:text-xl md:text-2xl">Senior Care</p>
          <p className="text-[12px] sm:text-[14px] md:text-[16px] leading-snug max-w-xs sm:max-w-sm md:max-w-md text-gray-300">
            Comprehensive support that promotes comfort, dignity, and independence daily.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
