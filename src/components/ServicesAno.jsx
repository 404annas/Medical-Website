import React, { useState } from "react"

// Services ka saara data yahan ek array mein rakha hai. Isse manage karna aasan hai.
// All the services data is stored here in an array. This makes it easy to manage.
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
                                        className={`h-full bg-[#2a2a2a] transition-all duration-500 ease-in-out ${activeService === index ? "w-full" : "w-0"
                                            }`}
                                    ></div>
                                </div>

                                {/* Image */}
                                <img
                                    loading="lazy"
                                    key={index}
                                    src={service.imageUrl}
                                    alt={service.title}
                                    className={`absolute z-20 top-0 right-28 w-60 h-60 object-cover transition-opacity duration-700 ease-in-out ${activeService === index ? "opacity-100" : "opacity-0"
                                        }`}
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ServicesAno;