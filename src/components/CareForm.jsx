import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const CareForm = ({ isOpen = true, onClose = () => {} }) => {
  const [name, setName] = useState("");
  const [queryType, setQueryType] = useState("Senior Care");

  if (!isOpen) return null;

  const handleSubmit = () => {
    console.log("Form submitted", { name, queryType });
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/30 backdrop-blur-md flex justify-center items-center z-[999] p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-white backdrop-blur-3xl rounded-2xl shadow-xl p-6 max-w-sm w-full relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <h2 className="text-xl font-semibold mb-5 text-gray-900 pr-6">
            How can we help you?
          </h2>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4D273F] focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="queryType"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                I'm interested in...
              </label>
              <select
                id="queryType"
                value={queryType}
                onChange={(e) => setQueryType(e.target.value)}
                className="w-full px-3.5 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4D273F] focus:border-transparent transition-all appearance-none bg-white"
              >
                <option value="full-body-detoxification">
                  Full Body Detoxification
                </option>
                <option value="intravenous-nutraceutical">
                  Intravenous Nutraceutical
                </option>
                <option value="regenerative-medicine">
                  Regenerative Medicine
                </option>
                <option value="detox">Detox</option>
                <option value="infertility-consultation">
                  Infertility Consultation
                </option>
                <option value="physical-and-wellness">
                  Physical And Wellness
                </option>
              </select>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              className="w-full bg-[#4D273F] text-white font-medium py-2.5 px-4 rounded-lg hover:bg-[#3d1f32] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4D273F] transition-colors mt-2"
            >
              Submit
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CareForm;
