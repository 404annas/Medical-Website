import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImCross } from "react-icons/im";
import { FaHeartbeat, FaStethoscope, FaMedkit } from "react-icons/fa";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${name}! We'll contact you at ${email}`);
    setShowPopup(false);
  };

  const smallIcons = [
    <FaHeartbeat size={24} className="text-white animate-bounce" />,
    <FaStethoscope size={24} className="text-white animate-bounce delay-150" />,
    <FaMedkit size={24} className="text-white animate-bounce delay-300" />,
  ];

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-xl rounded-xl shadow-2xl overflow-hidden flex flex-col items-center justify-center text-white h-80"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
            exit={{ y: "-100vh", opacity: 0, transition: { duration: 0.3 } }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Close button */}
            <button
              className="absolute z-40 top-4 right-4 text-white hover:text-gray-200 cursor-pointer transition-all duration-300"
              onClick={() => setShowPopup(false)}
            >
              <ImCross size={18} />
            </button>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center p-6 sm:p-8 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 sm:mb-2">
                Your Health Matters!
              </h2>
              <p className="text-center text-sm sm:text-base text-white/90 mb-6">
                Book a consultation with our experts and get personalized care.
              </p>

              {/* Small icons */}
              <div className="flex gap-4 mb-6">{smallIcons.map((icon, idx) => <div key={idx}>{icon}</div>)}</div>

              {/* Lead form */}
              <form className="w-full flex flex-col gap-3 z-50" onSubmit={handleSubmit}>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#4D273F] to-[#E6B59E] font-semibold p-3 rounded-md hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  Book Now
                </button>
              </form>

              <p className="text-xs text-white/70 mt-4 text-center">
                We respect your privacy. No spam, ever.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
