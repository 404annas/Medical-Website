import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa"; // Importing phone icon

export default function StickyPhone() {
    const [isPanelOpen, setIsPanelOpen] = useState(false); // State to manage panel visibility

    const togglePanel = () => {
        setIsPanelOpen(!isPanelOpen); // Toggle panel state
    };

    return (
        <div className="relative">
            {/* Sticky Button (Opens & Closes the Panel) */}
            <button
                onClick={togglePanel}
                className={`fixed top-[570px] left-0 transform -translate-y-1/2 flex items-center justify-center bg-[#4D273F] cursor-pointer text-white p-4 md:p-5 rounded-r-lg shadow-lg hover:bg-[#2b1523] transition-all  duration-500 z-[60] ${isPanelOpen ? "translate-x-[250px]" : "translate-x-0"
                    }`}
            >
                <FaPhoneAlt className="text-xl" />
            </button>

            {/* Sliding Panel */}
            <div
                className={`fixed top-[570px] left-0 transform z-100  -translate-y-1/2 bg-white shadow-lg max-w-[250px] w-full transition-all duration-500 ease-in-out ${isPanelOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Panel Content */}
                <div className="flex flex-col items-center py-1">
                    <p className="text-gray-700 font-medium text-center">
                        Call Now for Immediate Help.
                    </p>
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-first text-lg" />
                        <p className="text-first font-bold text-lg">+(92) 3305511662</p>
                    </div>
                </div>
            </div>
        </div>
    );
}