import React from 'react';
import { Award, MapPin, GraduationCap, Stethoscope, Brain, Heart } from 'lucide-react';

const About = () => {
    const specialties = [
        "Addiction Psychiatry",
        "Mental Health Treatment and Management"
    ];

    const expertise = [
        "Mental Health",
        "Alcohol and Drug Addiction Treatment",
        "Innovative Addiction Psychiatry",
        "Rapid Anesthesia-Assisted Drug Detox",
        "Photobiomodulation",
        "Neural Regeneration",
        "Nano-Particle Infusions",
        "Telemedicine",
        "First Aid & Mental Health Training",
        "Addiction Recovery Management",
        "Holistic and Evidence-Based Treatment Approaches",
        "Holistic and Evidence-Based Treatment Approaches"
    ];

    const qualifications = [
        "MBBS (Punjab University)",
        "Postgraduate Diploma in Hospital Management (Australia)",
        "Diploma in Mental Health (Australia)",
        "Diploma in Training Design & Development (Australia)",
        "Diploma in Vocational Education & Training (Australia)",
        "Diploma in Business (Australia)",
        "Master Trainer in First Aid and Mental Health"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-orange-200/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-[#4D273F] to-[#E6B59E] mb-8 mx-auto shadow-2xl">
                            <Stethoscope className="w-12 h-12 text-white" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Dr. Muhammad Ahmad Rana
                        </h1>
                        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Pioneering Mental Health & Addiction Psychiatry with Innovative Treatment Solutions
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                                <Award className="w-5 h-5 mr-2" />
                                <span>MBBS, Multiple Diplomas</span>
                            </div>
                            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                                <Brain className="w-5 h-5 mr-2" />
                                <span>Addiction Specialist</span>
                            </div>
                            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                                <Heart className="w-5 h-5 mr-2" />
                                <span>Mental Health Expert</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6 uppercase">
                                    About <span style={{ color: '#4D273F' }}>Dr. Rana</span>
                                </h2>
                                <div className="w-24 h-1 rounded-full mb-8" style={{ backgroundColor: '#E6B59E' }}></div>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Dr. Muhammad Ahmad Rana is a highly skilled and dedicated professional specializing in mental health, addiction psychiatry, and innovative treatment methods. His expertise spans cutting-edge addiction treatment practices, including rapid anesthesia-assisted drug detox, photobiomodulation, and neural regeneration.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                His commitment to improving patient outcomes involves advanced techniques such as nano-particle infusions and telemedicine. Dr. Rana's innovative approach delivers comprehensive care that addresses both the physical and psychological aspects of addiction, empowering individuals to overcome challenges and achieve lasting recovery.
                            </p>
                            <div className="bg-gradient-to-r from-purple-50 to-orange-50 p-6 rounded-2xl border-l-4" style={{ borderColor: '#4D273F' }}>
                                <p className="text-gray-800 font-medium italic">
                                    "Deeply committed to providing compassionate, evidence-based care, ensuring each person receives the personalized support they need for their recovery journey."
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#4D273F] to-[#E6B59E] rounded-3xl transform rotate-3"></div>
                            <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                                <div className="text-center mb-6">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#4D273F] to-[#E6B59E] mx-auto mb-4 flex items-center justify-center">
                                        <Stethoscope className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold" style={{ color: '#4D273F' }}>Contact Information</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <MapPin className="w-6 h-6 mt-1 mr-3" style={{ color: '#4D273F' }} />
                                        <div>
                                            <p className="font-semibold text-gray-900">Office Location</p>
                                            <p className="text-gray-600">2307 Beverley Rd<br />Brooklyn, New York 11226<br />United States</p>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-gray-200">
                                        <p className="text-sm font-medium text-gray-500">Specialized Services</p>
                                        <p className="text-gray-800 mt-1">Innovative addiction psychiatry, rapid anesthesia-assisted detox, mental health treatment, neural regeneration, photobiomodulation, and telemedicine for comprehensive recovery solutions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialties Grid */}
            <section className="py-20 bg-gradient-to-r from-[#4D273F] to-[#1a0e1f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4 uppercase">Areas of Specialization</h2>
                        <div className="w-24 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: '#E6B59E' }}></div>
                        <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                            Pioneering innovative treatments and comprehensive care approaches in mental health and addiction recovery
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {specialties.map((specialty, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#E6B59E' }}>
                                        <Brain className="w-6 h-6" style={{ color: '#4D273F' }} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{specialty}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 text-center uppercase">Core Expertise</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {expertise.map((item, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300">
                                    <p className="text-white font-medium">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Qualifications */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 uppercase">
                            <span style={{ color: '#4D273F' }}>Education & Qualifications</span>
                        </h2>
                        <div className="w-24 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: '#E6B59E' }}></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive academic background spanning medical education and specialized training across multiple disciplines
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <div className="flex items-center mb-8">
                                <GraduationCap className="w-8 h-8 mr-4" style={{ color: '#4D273F' }} />
                                <h3 className="text-2xl font-bold text-gray-900">Academic Credentials</h3>
                            </div>
                            <div className="space-y-4">
                                {qualifications.map((qualification, index) => (
                                    <div key={index} className="flex items-start group">
                                        <div className="flex-shrink-0 w-4 h-4 rounded-full mt-2 mr-4 transition-all duration-300" style={{ backgroundColor: '#E6B59E' }}></div>
                                        <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300 font-medium">{qualification}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-purple-100 to-orange-100 rounded-2xl p-8 h-full">
                                <h3 className="text-2xl font-bold mb-6" style={{ color: '#4D273F' }}>Educational Journey</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg mb-2">Punjab University</h4>
                                        <p className="text-gray-700">Bachelor of Medicine, Bachelor of Surgery (MBBS)</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg mb-2">Australian Institutions</h4>
                                        <p className="text-gray-700">Multiple specialized diplomas in Mental Health, Hospital Management, Training Design & Development, Vocational Education & Training, and Business</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg mb-2">Professional Certification</h4>
                                        <p className="text-gray-700">Master Trainer certification in First Aid and Mental Health</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Begin Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a77996] to-[#E6B59E]">Recovery Journey?</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        Experience innovative, evidence-based treatment approaches designed to address your unique needs and support lasting recovery.
                    </p>
                    <div className="inline-flex items-center bg-gradient-to-r from-[#4D273F] to-[#E6B59E] rounded-full px-8 py-4 text-white font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                        <Heart className="w-6 h-6 mr-2" />
                        Schedule Your Consultation
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;