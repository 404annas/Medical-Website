import React from 'react'
import About from '../components/About';

const AboutPage = () => {
    const services = [
        {
            title: 'Personalized daily assistance',
            description: 'Tailored support for daily routines ensuring comfort and independence for every senior.',
            imageUrl: 'https://images.pexels.com/photos/4046317/pexels-photo-4046317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Replace with your actual image URL
        },
        {
            title: 'Light housekeeping support',
            description: 'Gentle home cleaning tasks to maintain a safe and welcoming living space daily.',
            imageUrl: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Replace with your actual image URL
        },
        {
            title: 'Medication reminder services',
            description: 'Timely alerts and guidance to help seniors manage their prescriptions with ease.',
            imageUrl: 'https://images.pexels.com/photos/4046317/pexels-photo-4046317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Replace with your actual image URL
        },
    ];

    return (
        <>
            <About />
            <div className=''>
                <section className="pt-10 pb-20">
                    <div className="size-[520px] rounded-full absolute blur-[300px] -z-10 bg-[#E6B59E]"></div>
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl uppercase md:text-4xl font-bold text-[#4D273F] leading-tight">
                                Compassionate home care services
                                <br />
                                for your aging loved ones
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white rounded-3xl p-6 border border-[#E6B59E] flex flex-col">
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                                        <p className="text-gray-600 mb-5 text-sm">{service.description}</p>
                                        <a href="#" className="text-[#4D273F] font-semibold inline-flex items-center group">
                                            View more
                                            <span aria-hidden="true" className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                                                &rarr;
                                            </span>
                                        </a>
                                    </div>
                                    <div className="mt-8">
                                        <img
                                            loading='lazy'
                                            src={service.imageUrl}
                                            alt={service.title}
                                            className="w-full h-60 object-cover rounded-2xl hover:scale-95 transition-all duration-300"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="flex flex-col md:flex-row items-center justify-center gap-10">
                    <div className="size-[520px] rounded-full absolute blur-[300px] -z-10 bg-[#E6B59E]"></div>
                    <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
                        <img className="max-w-md w-full object-cover rounded-2xl"
                            src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
                            alt="" />
                        <div className="gap-1 max-w-72 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white size-16 flex items-center justify-center aspect-square backdrop-blur rounded-full">
                            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.027 3.371c0-1.374 1.512-2.213 2.678-1.484l9.11 5.693a1.75 1.75 0 0 1 0 2.969l-9.11 5.693c-1.166.729-2.678-.11-2.678-1.484z"
                                    fill="#fff" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="text-sm text-slate-600 max-w-3xl">
                        <h1 className="text-xl uppercase font-semibold text-slate-700">What we do?</h1>
                        <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
                        <p className="mt-8">PrebuiltUI helps you build faster by transforming your design vision into fully functional,
                            production-ready UI components. </p>
                        <p className="mt-4">Whether you're launching a SaaS app, landing page or dashboard, our collection of Tailwind
                            CSS components is crafted to boost your development speed and improve user experience.</p>
                        <p className="mt-4">From UI design systems to automation-ready layouts, PrebuiltUI empowers you to build
                            beautifully and scale effortlessly.</p>
                        <button
                            className="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-indigo-600 to-[#8A7DFF] py-3 px-8 rounded-full text-white">
                            <span>Read more</span>
                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                                    fill="#fff" />
                            </svg>
                        </button>
                    </div>
                </section>

                <h1 className="text-3xl font-semibold text-center mx-auto pt-20 uppercase text-[#4D273F]">About our apps</h1>
                <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
                    A visual collection of our most recent works - each piece crafted with intention, emotion and style.
                </p>
                <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 py-10">
                    <div className="size-[520px] rounded-full absolute blur-[300px] -z-10 bg-[#E6B59E]"></div>
                    <img className="max-w-sm w-full rounded-xl h-auto"
                        src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
                        alt="" />
                    <div>
                        <h1 className="text-3xl font-semibold">Our Latest features</h1>
                        <p className="text-sm text-slate-500 mt-2">
                            Ship Beautiful Frontends Without the Overhead — Customizable, Scalable and Developer-Friendly UI
                            Components.
                        </p>

                        <div className="flex flex-col gap-10 mt-6">
                            <div className="flex items-center gap-4">
                                <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                    <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-slate-600">Lightning-Fast Performance</h3>
                                    <p className="text-sm text-slate-500">Built with speed — minimal load times and optimized.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                    <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-slate-600">Beautifully Designed Components</h3>
                                    <p className="text-sm text-slate-500">Modern, pixel-perfect UI components ready for any project.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                    <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt="" />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-slate-600">Plug-and-Play Integration</h3>
                                    <p className="text-sm text-slate-500">Simple setup with support for React, Next.js and Tailwind css.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutPage