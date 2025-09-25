import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionsData = [
  { text: "Medication" },
  { text: "Supervision" },
  { text: "Hygiene" },
];

const AnimatedSection = ({ text, index, totalSections }) => {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        {
          scale: 0.1,
          autoAlpha: 0,
          z: -1000,
          // filter: "blur(20px)",
        },
        {
          scale: 1.2,
          autoAlpha: 1,
          z: 0,
          filter: "blur(0px)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: `top+=${index * 100}% center`,
            end: `top+=${(index + 1) * 100}% center`,
            scrub: 0.8,
          },
        }
      );

      // Fade out after animation completes
      gsap.to(textRef.cAnimationurrent, {
        scale: 2,
        z: 400,
        autoAlpha: 0,
        filter: "blur(15px)",
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: `top+=${index * 100}% center`,
          end: `top+=${(index + 1) * 100}% center`,
          scrub: 0.8,
        },
      });
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <h1
      ref={textRef}
      className="absolute text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[178px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight font-medium text-black z-10 text-center px-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {text}
    </h1>
  );
};

const Animation = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${sectionsData.length * 100}%`,
        pin: true,
        pinSpacing: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative  h-screen w-full flex items-center justify-center bg-white overflow-hidden"
      style={{
        perspective: "3000px",
        perspectiveOrigin: "center center",
      }}
    >
      {sectionsData.map((section, index) => (
        <AnimatedSection
          key={index}
          text={section.text}
          index={index}
          totalSections={sectionsData.length}
        />
      ))}
    </div>
  );
};

export default Animation;
