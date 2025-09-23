import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Data for each section
const sectionsData = [
    { text: 'Medication' },
    { text: 'Supervision' },
    { text: 'Hygiene' },
];

// A reusable component for each full-screen animated section
const AnimatedSection = ({ text }) => {
    const textRef = useRef(null);
    const triggerRef = useRef(null);

    useLayoutEffect(() => {
        // Create a GSAP context for easy cleanup
        const ctx = gsap.context(() => {

            // Use gsap.fromTo() for more control over the animation
            gsap.fromTo(textRef.current, {
                // Starting state:
                scale: 1,
                autoAlpha: 1,
                filter: 'blur(0px)'
            }, {
                // Target state:
                scale: 1.4,
                autoAlpha: 0,
                filter: 'blur(10px)',
                ease: 'power2.out', // A smoother easing function

                // ScrollTrigger configuration:
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: 'top top',            // Start animation when the section hits the top of the viewport
                    end: '+=100%',             // End after scrolling a full viewport height
                    pin: true,                   // Pin the section while animating
                    scrub: 0.8,                  // Creates a smoother, tighter link to the scrollbar
                },
            });

        }, triggerRef);

        // Cleanup function to revert all animations on component unmount
        return () => ctx.revert();
    }, []);

    return (
        // Each section takes up the full height and width of the screen
        <div ref={triggerRef} className="relative h-screen w-full flex items-center justify-center bg-white">
            {/* The text to be animated */}
            <h1 ref={textRef} className="text-8xl md:text-[178px] leading-none font-medium text-black z-10">
                {text}
            </h1>
        </div>
    );
};

// Main component that renders the sequence of sections
const Animation = () => {
    return (
        <div>
            {sectionsData.map((section, index) => (
                <AnimatedSection key={index} text={section.text} />
            ))}
        </div>
    );
};

export default Animation;