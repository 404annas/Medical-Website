import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Card component to handle its own animation based on the shared scroll progress
const Card = ({ card, index, z }) => {
  // Use useTransform to create motion values for opacity and blur
  // This smoothly transitions opacity from 0 to 1 based on z value
  const opacity = useTransform(z, [index * 50 - 15, index * 50 - 8], [0, 1]);

  // This smoothly transitions blur from 0px to 10px based on z value
  const blur = useTransform(
    z,
    [index * 55 + 15, index * 55 + 20],
    ["blur(0px)", "blur(10px)"]
  );

  return (
    <motion.div
      style={{
        transform: `translate3d(0px,0px,${-index * 50}rem)`,
        transformStyle: "preserve-3d",
        // REMOVED: transition: "all ease 0.3s", // This was causing the conflict and jerking
        filter: blur, // Apply the motion value directly
      }}
      className={`absolute w-full top-0 bottom-0 flex items-center ${
        index % 2 === 0
          ? "right-[50%] md:right-[50%]"
          : "left-[50%] md:left-[70%] "
      } `}
    >
      <motion.div
        style={{
          opacity: opacity, // Apply the motion value directly
          textShadow: "2px 2px 20px rgba(0, 0, 0, 0.5)",
        }}
        className={`text-white z-10 w-full absolute transition-all duration-200 ease-in ${
          index % 2 === 0 ? "left-[60%]" : "right-[60%] "
        }`}
      >
        <h1
          style={{
            textShadow: "20px 20px 20px rgba(0, 0, 0, 0.5)",
          }}
          className="text-8xl text-black w-full"
        >
          {card.name}
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default function DepthAnimation() {
  const containerRef = useRef(null);
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0
  );
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 1030 : false
  );
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.4,
    restDelta: 0.001,
  });

  const z = useTransform(smoothScroll, [0, 1], [0, 300]);

  // Create a transform to apply the z value with the 'rem' unit
  const zTransform = useTransform(
    z,
    (latest) => `translate3d(0px, 0px, ${latest}rem)`
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1030);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardData = [
    { id: "centerCard", name: "Olivia Pierson" },
    { id: "fifthCard", name: "Jenny Farley" },
    { id: "firstCard", name: "FunnyMike" },
    { name: "Bhad Bhabie" },
    { id: "leftCard", name: "Ray William Johnson" },
    { id: "rightCard", name: "Brittany Furlan" },
  ];

  return (
    <div
      ref={containerRef}
      className="h-[1500vh] relative flex justify-center scroll-smooth"
    >
      <div
        className="h-[100vh] w-screen flex justify-center items-center overflow-hidden bg-cover bg-center bg-no-repeat sticky top-0 bg-white"
        style={{ perspective: "1000px" }}
      >
        {/* Converted to motion.div to accept transform motion value */}
        <motion.div
          className="relative w-[12rem] md:w-[16rem] lg:w-[40rem] md:h-[16rem] lg:h-[20rem] flex flex-col lg:flex-row max-lg:gap-6 py-10 lg:pt-36 max-lg:items-center justify-center"
          style={{
            transform: zTransform, // Apply the motion value for transform
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="text-5xl font-bold anton text-black text-center uppercase"
            style={{
              transform: "translate3d(0px,0px,-300rem)",
              transformStyle: "preserve-3d",
            }}
          ></div>

          {/* Map over cardData and render the new Card component */}
          {cardData.map((card, index) => (
            <Card key={index} card={card} index={index} z={z} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
