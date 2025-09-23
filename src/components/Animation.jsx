import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sectionsData = [
    { text: 'Medication' },
    { text: 'Supervision' },
    { text: 'Hygiene' },
];

const AnimatedSection = ({ text }) => {
    const textRef = useRef(null);
    const triggerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                textRef.current,
                {
                    scale: 1,
                    autoAlpha: 1,
                    filter: 'blur(0px)',
                },
                {
                    scale: 1.4,
                    autoAlpha: 0,
                    filter: 'blur(10px)',
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: 'top top',
                        end: '+=100%',
                        pin: true,
                        scrub: 0.8,
                    },
                }
            );
        }, triggerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={triggerRef}
            className="relative h-screen w-full flex items-center justify-center bg-white"
        >
            <h1
                ref={textRef}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[178px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight font-medium text-black z-10 text-center px-4"
            >
                {text}
            </h1>
        </div>
    );
};

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
