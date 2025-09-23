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
    <div className={`py-4 sm:py-6 ${!isLast ? "border-b border-gray-300" : ""}`}>
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left focus:outline-none cursor-pointer"
      >
        <span className="text-base sm:text-lg md:text-xl text-black font-medium">{item.question}</span>
        <span
          className={`text-xl sm:text-2xl font-light text-gray-500 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          {isOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[999px] mt-2 sm:mt-4" : "max-h-0"}`}
      >
        <p className="text-gray-600 text-sm sm:text-base mt-2">{item.answer}</p>
      </div>
    </div>
  );
};

const Faqs = () => {
  const [activeCategory, setActiveCategory] = useState('General questions');
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setOpenQuestionIndex(null);
  };

  const handleQuestionClick = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const categories = Object.keys(faqData);
  const currentQuestions = faqData[activeCategory];

  return (
    <section className="bg-[#F1F1F1] py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">

        {/* Left Column: Category Navigation */}
        <div className="lg:col-span-1 order-1">
          <div className="bg-[#F1F1F1] shadow-sm rounded-xl overflow-hidden">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`w-full text-left px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center transition-colors duration-200 cursor-pointer border-b border-gray-300 ${activeCategory === category ? 'bg-[#4D273F] text-white' : 'text-black'}`}
              >
                <span className='font-medium text-sm sm:text-base md:text-lg'>{category}</span>
                <span className="transform transition-transform duration-300 text-base sm:text-lg md:text-xl">→</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Questions and Answers */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <div className="bg-[#F1F1F1] rounded-xl p-4 sm:p-6 md:p-8 border border-gray-300">
            {currentQuestions.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openQuestionIndex === index}
                onClick={() => handleQuestionClick(index)}
                isLast={index === currentQuestions.length - 1}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Faqs;