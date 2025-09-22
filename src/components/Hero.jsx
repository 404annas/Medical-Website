import React, { useState, useEffect } from "react";

const images = [
  "https://cdn.prod.website-files.com/686e5f117daf09c744bbab53/686f4811e6b2605289d088ef_a46d45f37e2acf0ffaba6688204ba24a_Hero%25203-p-1600.webp",
  "https://cdn.prod.website-files.com/686e5f117daf09c744bbab53/686f4811e6b2605289d088b6_9da4f998159a5884c516bd139a1240d5_Hero%25201-p-1600.webp",
  "https://cdn.prod.website-files.com/686e5f117daf09c744bbab53/686f453bc26dec69dc947b2e_faq%20Image%20Two.webp"
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {prev !== null && (
        <img
          src={images[prev]}
          alt={`Hero ${prev}`}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out translate-x-[-100%]"
        />
      )}
      <img
        src={images[current]}
        alt={`Hero ${current}`}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out translate-x-0`}
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Welcome to Our Website
        </h2>
        <button className="bg-[#4D273F] text-white px-6 py-3 rounded-full font-medium hover:bg-[#E6B59E] transition-colors duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
