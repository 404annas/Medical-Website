import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";
import heroImg from "../assets/hero.png";
import StickyPhone from "./StickyPhone";
import WhatsAppButton from "./WhatsAppButton";
import CareForm from "./CareForm";
const heading = "We support seniors with dignity and personal care";

const Hero = () => {
  const [isFormOpen, setFormOpen] = useState(false);

  // Animation variants... (no changes needed here)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1.5,
      },
    },
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <StickyPhone />
        <WhatsAppButton />
        <motion.img
          loading="lazy"
          src={heroImg}
          alt="Hero"
          className="absolute top-0 left-0 w-full h-full object-cover object-top-center lg:object-top"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 1.2,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute w-full h-full bg-black/50 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        />
        <motion.div
          className="absolute inset-0 flex pt-24 lg:pt-20 flex-col justify-center items-start px-4 sm:px-6 md:px-12 z-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none font-medium text-white mb-6 drop-shadow-lg max-w-full md:max-w-xl"
            variants={slideInFromLeft}
          >
            {heading}
          </motion.h2>
          <motion.div
            className="relative group flex items-center gap-4 font-medium text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] px-4 py-1 rounded-full border-[#4D273F] hover:border-white cursor-pointer overflow-hidden transition-colors duration-500 bg-white"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFormOpen(true)}
          >
            <span className="absolute inset-0 bg-[#4D273F] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
            <div className="relative z-10 text-black group-hover:text-white transition-colors duration-500">
              Get care now
            </div>
            <p className="relative z-10 flex items-center justify-center rounded-full p-3 bg-[#4D273F] group-hover:bg-[#E6B59E] text-white group-hover:text-black transition-colors duration-500">
              <ArrowUpRightIcon size={16} />
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-2 mt-6 sm:mt-8 md:mt-10 text-white"
            variants={slideInFromRight}
          >
            <motion.p
              className="font-medium text-lg sm:text-xl md:text-2xl"
              variants={fadeInUp}
            >
              Senior Care
            </motion.p>
            <motion.p
              className="text-[12px] sm:text-[14px] md:text-[16px] leading-snug max-w-xs sm:max-w-sm md:max-w-md text-gray-300"
              variants={fadeInUp}
            >
              Comprehensive support that promotes comfort, dignity, and
              independence daily.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
      <CareForm isOpen={isFormOpen} onClose={() => setFormOpen(false)} />
    </>
  );
};

export default Hero;
