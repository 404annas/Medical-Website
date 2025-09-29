import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function DepthAnimationSerivces() {
  const containerRef = useRef(null);
  const textContainerRef = useRef(null);

  const textData = [
    { id: "expertise", name: "Expertise" },
    { id: "alcoholTreatment", name: "Infertility Consultation" },
    { id: "innovative", name: "Physical And Wellness" },
    { id: "rapidDetox", name: "Rapid Detox" },
    { id: "photobiomodulation", name: "Full Body Detoxification" },
    { id: "getCareNow", name: "Regenerative" }, // ✅ new item
    { id: "getCareNow", name: "Get Care Now" },
  ];

  useEffect(() => {
    // Set up the GSAP timeline linked to the scroll trigger
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 3, // Smoothly scrubs the animation on scroll
      },
    });

    // Animate the entire text container along the Z-axis for the main depth effect
    timeline.to(
      textContainerRef.current,
      {
        z: "170rem",
        ease: "none",
      },
      0 // Start this animation at the very beginning of the timeline
    );

    // Animate each text element to fade in and out sequentially
    textData.forEach((_, index) => {
      const textSelector = `.text-${index}`;
      const animationStartTime = index * 0.1; // Stagger the start time for each text
      const animationDuration = 0.1; // Total duration for one text's fade in/out cycle

      // --- Fade In and Sharpen Animation ---
      // The text starts transparent and blurred, then becomes opaque and sharp.
      timeline.fromTo(
        textSelector,
        { opacity: 0, filter: "blur(3px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: animationDuration / 2, // Half the duration for fade-in
          ease: "power1.in",
        },
        animationStartTime // Position this animation on the master timeline
      );

      // --- Fade Out and Blur Animation ---
      // The text fades back to transparent and becomes blurred again.
      if (index !== textData.length - 1) {
        timeline.to(
          textSelector,
          {
            opacity: 0,
            filter: "blur(1px)",
            duration: animationDuration / 2,
            ease: "power1.out",
          },
          animationStartTime + animationDuration / 2
        );
      }
    });

    // Cleanup function to kill all ScrollTriggers when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    // Main container that defines the scrollable height
    <div ref={containerRef} className="h-[750vh] relative">
      {/* Sticky container that holds the 3D scene */}
      <div
        className="h-screen w-screen sticky top-0 flex items-center justify-center overflow-hidden bg-white"
        style={{ perspective: "1200px" }} // Enables the 3D perspective
      >
        {/* The container for all the text elements, which will be moved in 3D space */}
        <div
          ref={textContainerRef}
          className="relative h-auto w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {textData.map((item, index) => (
            <div
              key={item.id}
              // Set initial opacity to 0 so it's invisible before GSAP takes over
              className={`text-${index} absolute w-full h-full top-0 flex items-center justify-center opacity-0`}
              style={{
                transform: `translateZ(${-index * 40}rem)`,
                transformStyle: "preserve-3d",
              }}
            >
              <h1 className="text-5xl md:text-8xl max-w-xl  text-center text-black font-bold">
                {item.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
