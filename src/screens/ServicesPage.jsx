import {
  ArrowUpRight,
  Award,
  Brain,
  Heart,
  Shield,
  Clock,
  Users,
  Stethoscope,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
} from "lucide-react";
import React, { useState } from "react";

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);

  const mainServices = [
    {
      id: 1,
      title: "Psychiatric Evaluation & Diagnosis",
      description:
        "Comprehensive mental health assessments using cutting-edge diagnostic tools and evidence-based methodologies.",
      icon: Brain,
      color: "from-purple-500 to-indigo-600",
      features: [
        "Advanced neuropsychological testing",
        "Personalized treatment planning",
        "Collaborative care approach",
      ],
    },
    {
      id: 2,
      title: "Addiction Treatment Programs",
      description:
        "Specialized addiction psychiatry with integrated therapeutic approaches and ongoing support systems.",
      icon: Heart,
      color: "from-rose-500 to-pink-600",
      features: [
        "Medication-assisted treatment",
        "Behavioral therapy integration",
        "Relapse prevention strategies",
      ],
    },
    {
      id: 3,
      title: "Telehealth Services",
      description:
        "Accessible mental health care through secure, HIPAA-compliant digital platforms available 24/7.",
      icon: Globe,
      color: "from-teal-500 to-cyan-600",
      features: [
        "Real-time video consultations",
        "Digital prescription management",
        "Remote monitoring capabilities",
      ],
    },
    {
      id: 4,
      title: "Crisis Intervention",
      description:
        "Immediate psychiatric support and emergency intervention services with rapid response protocols.",
      icon: Shield,
      color: "from-orange-500 to-red-600",
      features: [
        "24/7 emergency hotline",
        "Mobile crisis teams",
        "Emergency stabilization",
      ],
    },
  ];

  const specialtyServices = [
    {
      icon: Users,
      title: "Group Therapy Sessions",
      description:
        "Structured therapeutic groups for peer support and shared healing experiences.",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Clock,
      title: "Extended Care Programs",
      description:
        "Long-term treatment plans with continuous monitoring and adjustment protocols.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Award,
      title: "Specialized Treatment",
      description:
        "Expert care for complex psychiatric conditions and co-occurring disorders.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Sparkles,
      title: "Innovative Therapies",
      description:
        "Cutting-edge treatment modalities including TMS, ketamine therapy, and digital therapeutics.",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black pt-36 pb-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-0">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Services
            </h1>
            <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Pioneering Mental Health & Addiction Psychiatry with Innovative
              Treatment Solutions
            </p>
          </div>
        </div>
      </div>

      {/* Section 1 - Image + Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-32">
        <div className="flex justify-center lg:justify-start">
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/686e5f117daf09c744bbab53/686f4811e6b2605289d088ca_49542412ea16da7ba06eb97cd4f73ca0_About%20Image-p-800.webp"
            alt="Caregiver assisting an elderly woman in a wheelchair"
            className="rounded-3xl w-full max-w-[90%] object-cover"
          />
        </div>

        <div className="flex flex-col gap-6 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-snug sm:leading-snug md:leading-tight lg:leading-tight">
            Reliable in-home elder care that prioritizes comfort, safety and
            emotional well-being for your loved ones.
          </h2>

          <div className="mt-4 sm:mt-6 relative group flex items-center gap-4 font-medium text-sm sm:text-base px-4 py-2 rounded-full border border-[#E6B59E] cursor-pointer overflow-hidden transition-colors duration-500 bg-[#4D273F] w-fit">
            <span className="absolute inset-0 bg-[#E6B59E] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
            <p className="relative z-10 text-white group-hover:text-black transition-colors duration-500">
              More Services
            </p>
            <p className="relative z-10 flex items-center justify-center rounded-full p-3 bg-[#E6B59E] group-hover:bg-[#4D273F] text-black group-hover:text-[#E6B59E] transition-colors duration-500">
              <ArrowUpRight size={16} />
            </p>
          </div>

          <hr className="my-6 sm:my-10 border-t border-gray-300" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white px-6 py-10 rounded-2xl">
              <div className="flex justify-between items-center mb-16">
                <span className="font-medium text-[#4D273F]">01</span>
                <div className="border border-gray-200 rounded-full p-4">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-medium mt-2 text-[#1E1E1E]">
                Resident care
              </h3>
              <p className="text-gray-500 mt-1 text-sm sm:text-base">
                Compassionate support, everyday comfort.
              </p>
            </div>

            <div className="bg-white px-6 py-10 rounded-2xl">
              <div className="flex justify-between items-center mb-16">
                <span className="font-medium text-[#4D273F]">02</span>
                <div className="border border-gray-200 rounded-full p-4">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-medium mt-2 text-[#1E1E1E]">
                Independent living
              </h3>
              <p className="text-gray-500 mt-1 text-sm sm:text-base">
                Safe environment, more freedom.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Main Services */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Services Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm">
              <Stethoscope className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">
                Core Services
              </span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Mental Health Solutions
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Experience personalized psychiatric care with advanced treatment
            modalities designed for optimal outcomes
          </p>
        </div>

        {/* Interactive Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === index;

            return (
              <div
                key={service.id}
                className={`relative group cursor-pointer transition-all duration-700 ${isActive ? "scale-105" : "hover:scale-102"
                  }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
                ></div>
                <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-8 hover:border-gray-700/70 transition-all duration-500">
                  {/* Icon and Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-3xl font-bold text-gray-700/50">
                      0{service.id}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-400">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <button className="group/btn flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <div
                      className={`p-2 rounded-full bg-gradient-to-r ${service.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                    >
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Specialty Services */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Specialty Programs
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Advanced therapeutic interventions tailored to specific needs and
              conditions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialtyServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden h-full"
                >
                  <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 h-full hover:border-gray-700/70 transition-all duration-500 hover:-translate-y-2">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>

                    {/* Icon */}
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-4 shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <h4 className="text-lg font-semibold text-white mb-3">
                      {service.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Hover Arrow */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-2">
                      <ArrowUpRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20 rounded-3xl"></div>
          <div className="relative bg-black/40 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-teal-500">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-green-400 group-hover:to-teal-400 transition-all duration-300">
                  98%
                </div>
                <p className="text-gray-300">Patient Satisfaction Rate</p>
              </div>

              <div className="group">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  5000+
                </div>
                <p className="text-gray-300">Patients Served</p>
              </div>

              <div className="group">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-300">
                  24/7
                </div>
                <p className="text-gray-300">Emergency Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="relative group inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4D273F] to-[#E6B59E] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <button className="relative bg-gradient-to-r from-[#4D273F] to-[#E6B59E] text-white px-12 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            Take the first step towards better mental health today
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
