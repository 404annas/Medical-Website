import React, { useState } from 'react';

// --- Data for all FAQ categories and their questions ---
const faqData = {
  'General questions': [
    {
      question: 'What services do you provide for seniors?',
      answer: 'We offer a comprehensive range of services including personal care assistance, medication reminders, 24/7 live-in care, companionship, meal preparation, and home safety monitoring to ensure your loved ones are comfortable and safe.',
    },
    {
      question: 'How do I know if my loved one needs elder care services?',
      answer: 'Common signs include difficulty with daily tasks, recent falls, memory loss, changes in hygiene, or feelings of isolation. We offer a free consultation to help you assess your loved one’s needs.',
    },
    {
      question: 'Do you offer both in-home and facility-based care?',
      answer: 'Our primary focus is on providing high-quality, personalized in-home care, allowing seniors to age comfortably in their own homes. We do not operate facility-based care centers.',
    },
    {
      question: 'Are your services available 24/7?',
      answer: 'Yes, our services are available 24 hours a day, 7 days a week, including holidays. We can provide everything from a few hours of help a week to full-time, live-in care.',
    },
    {
      question: 'How quickly can care services begin?',
      answer: 'Care can often begin within 24-48 hours of the initial assessment, depending on the specific needs and caregiver availability in your area. We strive to start as quickly as possible.',
    },
  ],
  'Caregiver qualifications': [
    {
      question: 'What services do you provide for seniors?',
      answer: 'We offer a comprehensive range of services including personal care assistance, medication reminders, 24/7 live-in care, companionship, meal preparation, and home safety monitoring to ensure your loved ones are comfortable and safe.',
    },
    {
      question: 'How do I know if my loved one needs elder care services?',
      answer: 'Common signs include difficulty with daily tasks, recent falls, memory loss, changes in hygiene, or feelings of isolation. We offer a free consultation to help you assess your loved one’s needs.',
    },
    {
      question: 'Do you offer both in-home and facility-based care?',
      answer: 'Our primary focus is on providing high-quality, personalized in-home care, allowing seniors to age comfortably in their own homes. We do not operate facility-based care centers.',
    },
    {
      question: 'Are your services available 24/7?',
      answer: 'Yes, our services are available 24 hours a day, 7 days a week, including holidays. We can provide everything from a few hours of help a week to full-time, live-in care.',
    },
    {
      question: 'How quickly can care services begin?',
      answer: 'Care can often begin within 24-48 hours of the initial assessment, depending on the specific needs and caregiver availability in your area. We strive to start as quickly as possible.',
    },
  ],
  'Pricing and packages': [
    {
      question: 'What services do you provide for seniors?',
      answer: 'We offer a comprehensive range of services including personal care assistance, medication reminders, 24/7 live-in care, companionship, meal preparation, and home safety monitoring to ensure your loved ones are comfortable and safe.',
    },
    {
      question: 'How do I know if my loved one needs elder care services?',
      answer: 'Common signs include difficulty with daily tasks, recent falls, memory loss, changes in hygiene, or feelings of isolation. We offer a free consultation to help you assess your loved one’s needs.',
    },
    {
      question: 'Do you offer both in-home and facility-based care?',
      answer: 'Our primary focus is on providing high-quality, personalized in-home care, allowing seniors to age comfortably in their own homes. We do not operate facility-based care centers.',
    },
    {
      question: 'Are your services available 24/7?',
      answer: 'Yes, our services are available 24 hours a day, 7 days a week, including holidays. We can provide everything from a few hours of help a week to full-time, live-in care.',
    },
    {
      question: 'How quickly can care services begin?',
      answer: 'Care can often begin within 24-48 hours of the initial assessment, depending on the specific needs and caregiver availability in your area. We strive to start as quickly as possible.',
    },
  ],
  'Emergency situations': [
    {
      question: 'What services do you provide for seniors?',
      answer: 'We offer a comprehensive range of services including personal care assistance, medication reminders, 24/7 live-in care, companionship, meal preparation, and home safety monitoring to ensure your loved ones are comfortable and safe.',
    },
    {
      question: 'How do I know if my loved one needs elder care services?',
      answer: 'Common signs include difficulty with daily tasks, recent falls, memory loss, changes in hygiene, or feelings of isolation. We offer a free consultation to help you assess your loved one’s needs.',
    },
    {
      question: 'Do you offer both in-home and facility-based care?',
      answer: 'Our primary focus is on providing high-quality, personalized in-home care, allowing seniors to age comfortably in their own homes. We do not operate facility-based care centers.',
    },
    {
      question: 'Are your services available 24/7?',
      answer: 'Yes, our services are available 24 hours a day, 7 days a week, including holidays. We can provide everything from a few hours of help a week to full-time, live-in care.',
    },
    {
      question: 'How quickly can care services begin?',
      answer: 'Care can often begin within 24-48 hours of the initial assessment, depending on the specific needs and caregiver availability in your area. We strive to start as quickly as possible.',
    },
  ],
  'Family involvement': [
    {
      question: 'What services do you provide for seniors?',
      answer: 'We offer a comprehensive range of services including personal care assistance, medication reminders, 24/7 live-in care, companionship, meal preparation, and home safety monitoring to ensure your loved ones are comfortable and safe.',
    },
    {
      question: 'How do I know if my loved one needs elder care services?',
      answer: 'Common signs include difficulty with daily tasks, recent falls, memory loss, changes in hygiene, or feelings of isolation. We offer a free consultation to help you assess your loved one’s needs.',
    },
    {
      question: 'Do you offer both in-home and facility-based care?',
      answer: 'Our primary focus is on providing high-quality, personalized in-home care, allowing seniors to age comfortably in their own homes. We do not operate facility-based care centers.',
    },
    {
      question: 'Are your services available 24/7?',
      answer: 'Yes, our services are available 24 hours a day, 7 days a week, including holidays. We can provide everything from a few hours of help a week to full-time, live-in care.',
    },
    {
      question: 'How quickly can care services begin?',
      answer: 'Care can often begin within 24-48 hours of the initial assessment, depending on the specific needs and caregiver availability in your area. We strive to start as quickly as possible.',
    },
  ],
};

// --- Helper component for the Accordion Item ---
const AccordionItem = ({ item, isOpen, onClick, isLast }) => {
  return (
    <div className={`py-6 ${!isLast ? "border-b border-gray-300" : ""}`}>
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left focus:outline-none cursor-pointer"
      >
        <span className="text-lg text-black">{item.question}</span>
        <span
          className={`text-2xl font-light text-gray-500 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
        >
          {isOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[999px] mt-4" : "max-h-0"
          }`}
      >
        <p className="text-gray-600">{item.answer}</p>
      </div>
    </div>
  );
};


// --- Main Faqs Component ---
const Faqs = () => {
  // State to track the active category (e.g., 'General questions')
  const [activeCategory, setActiveCategory] = useState('General questions');

  // State to track the currently open question's index
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setOpenQuestionIndex(null); // Reset open question when category changes
  };

  const handleQuestionClick = (index) => {
    // If the clicked question is already open, close it. Otherwise, open it.
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const categories = Object.keys(faqData);
  const currentQuestions = faqData[activeCategory];

  return (
    <section className="bg-[#F1F1F1] py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">

        {/* Left Column: Category Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-[#F1F1F1] shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`w-full text-left px-4 py-6 flex justify-between items-center transition-colors duration-200 cursor-pointer border-b border-gray-300 ${activeCategory === category
                  ? 'bg-[#4D273F] text-white'
                  : 'text-black'
                  }`}
              >
                <span className='font-medium text-lg'>{category}</span>
                <span className="transform transition-transform duration-300">→</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Questions and Answers */}
        <div className="lg:col-span-2">
          <div className="bg-[#F1F1F1] rounded-xl p-6 sm:p-10 border border-gray-300">
            {currentQuestions.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openQuestionIndex === index}
                onClick={() => handleQuestionClick(index)}
                isLast={index === currentQuestions.length - 1} // ✅ pass last check
              />
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;