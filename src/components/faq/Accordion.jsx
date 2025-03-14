'use client'

import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

// Accordion Component
export default function Accordion ({ questions }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <div className="space-y-4">
      {questions.map((question, index) => (
        <div key={index} className=" pb-4 shadow-lg px-5 py-3 rounded-lg">
          <button
            className="w-full flex justify-between items-center text-left text-xl text-[#5800B0] focus:outline-none"
            onClick={() => handleToggle(index)}
          >
            {question.q}
            <IoIosArrowDown
              className={`transition-transform duration-300 ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {activeIndex === index && (
            <p className="mt-2 text-lg">{question.a}</p>
          )}
        </div>
      ))}
    </div>
  );
};