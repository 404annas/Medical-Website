import React, { useState } from "react";

const servicesData = [
    {
        title: 'Personal care assistance',
        description: 'Compassionate support with bathing, dressing, and daily personal needs.',
        imageUrl: 'https://cdn.prod.website-files.com/686e5f117daf09c744bbab53/686f4811e6b2605289d088ce_Features%201.webp'
    },
    {
        title: 'Medication reminders',
        description: 'Reliable prompts that ensure seniors take prescriptions safely on time.',
        imageUrl: 'https://cdn.prod.website-files.com/686e5f117daf09c744bbab53/686f477d192abf7b5c45472d_features%2520slide%2520imagen%25203-p-500.webp'
    },
    {
        title: '24/7 live-in or overnight care',
        description: 'Continuous day and night assistance providing safety, comfort, and trust.',
        imageUrl: 'https://cdn.prod.website-files.com/686e5f117daf09c744bbab53/686f45caad3f5754f5a47c03_Feature%2520image-p-800.webp'
    },
    {
        title: 'Home safety monitoring',
        description: 'Regular checks and monitoring that create a secure, worry-free home.',
        imageUrl: 'https://cdn.prod.website-files.com/686e5f117daf09c744bbab53/686f4811e6b2605289d088e0_Blog%25207-p-500.webp'
    }
];

const ServicesAnoAno = () => {
    const [activeService, setActiveService] = useState(0);

    return (
        <section className="bg-[#F1F1F1] py-16 px-4 sm:px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center mb-12 sm:mb-16 max-w-3xl mx-auto text-black">
                    Compassionate home care services for your aging loved ones
                </h2>

                {/* Grid layout: 1 column on mobile, 2 columns on md+, relative for images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">

                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setActiveService(index)}
                            className="relative cursor-pointer flex flex-col md:flex-row items-start gap-4 sm:gap-6"
                        >
                            {/* Image for md+ screens */}
                            <div className={`flex-shrink-0 w-full md:w-48 h-48 md:h-48 relative transition-all duration-700 ease-in-out
                                ${activeService === index ? "opacity-100" : "opacity-50"}`}>
                                <img
                                    loading="lazy"
                                    src={service.imageUrl}
                                    alt={service.title}
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                />
                            </div>

                            {/* Title + Description */}
                            <div className="flex flex-col">
                                <h3 className="text-2xl sm:text-3xl font-medium text-[#1E1E1E]">{service.title}</h3>
                                <p className="text-gray-600 mt-2 text-base sm:text-lg leading-6">{service.description}</p>

                                {/* Animated line */}
                                <div className="mt-4 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                                    <div className={`h-full bg-[#2a2a2a] transition-all duration-500 ease-in-out ${activeService === index ? "w-full" : "w-0"}`}></div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ServicesAnoAno;
