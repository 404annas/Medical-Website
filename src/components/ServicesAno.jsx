import React, { useState } from "react";
import img1 from "../assets/services1.webp";
import img2 from "../assets/services2.webp";
import img3 from "../assets/services3.webp";
import img4 from "../assets/services4.webp";
import img5 from "../assets/services5.webp";
import img6 from "../assets/services6.webp";

const servicesData = [
  {
    title: "Full Body Detoxification",
    description:
      "Cleanse your body with expert detox programs designed to eliminate toxins and restore vitality.",
    imageUrl: img1,
  },
  {
    title: "Intravenous Nutraceutical",
    description:
      "Replenish essential nutrients and boost immunity with customized IV therapy tailored to your needs.",
    imageUrl: img2,
  },
  {
    title: "Regenerative Medicine",
    description:
      "Experience cutting-edge treatments like stem cell therapy for tissue repair and anti-aging benefits.",
    imageUrl: img3,
  },
  {
    title: "Detox",
    description:
      "Experience safe, medically supervised detox treatments in the privacy of your home with 24/7 support.",
    imageUrl: img4,
  },
  {
    title: "Infertility Consultation",
    description:
      "Get a personalized fertility assessment and treatment strategy to support your journey to parenthood.",
    imageUrl: img5,
  },
  {
    title: "Physical And Wellness",
    description:
      "Enhance your health with personalized programs focusing on fitness, nutrition, and mental well-being.",
    imageUrl: img6,
  },
];

const ServicesAno = () => {
  // Yeh state track karega ke konsa service item abhi active hai (jis par hover kiya gaya hai).
  // This state will track which service item is currently active (being hovered on).
  const [activeService, setActiveService] = useState(0); // Pehla item by default active hoga.

  return (
    <section className="bg-[#F1F1F1] py-20 px-4">
      <div className="container mx-auto">
        {/* Section ka main title */}
        {/* Main title of the section */}
        <h2 className="text-4xl lg:text-5xl font-medium text-center mb-16 max-w-3xl mx-auto text-black">
          Compassionate home care services for your aging loved ones
        </h2>

        {/* Main grid layout: 1 column mobile pe, 2 columns desktop pe */}
        {/* Main grid layout: 1 column on mobile, 2 columns on desktop */}
        <div className="">
          {/* Left Column: List of services */}
          {/* Baayi Taraf ka Column: Services ki list */}
          <div className="flex flex-col gap-6">
            {servicesData.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveService(index)}
                className="cursor-pointer py-6 relative"
              >
                {/* Title aur description ka wrapper */}
                <div className="flex flex-col">
                  {/* Title */}
                  <h3 className="text-3xl font-medium text-[#1E1E1E]">
                    {service.title}
                  </h3>

                  {/* Description sirf active service par */}
                  <p
                    className={`text-gray-600 mt-2 transition-all duration-500 ease-in-out text-[16px] leading-6 max-w-xl`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Animated line */}
                <div className="mt-6 h-0.5 w-full bg-gray-200">
                  <div
                    className={`h-full bg-[#2a2a2a] transition-all duration-500 ease-in-out ${
                      activeService === index ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>

                {/* Image */}
                <img
                  loading="lazy"
                  key={index}
                  src={service.imageUrl}
                  alt={service.title}
                  className={`absolute z-20 top-0 right-28 w-60 h-60 object-cover transition-opacity duration-700 ease-in-out ${
                    activeService === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAno;
