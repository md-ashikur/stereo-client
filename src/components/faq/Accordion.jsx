'use client';

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
        <div key={index} className="pb-4 bg-white shadow-lg px-5 py-3 rounded-lg">
          <button
            className="w-full grid grid-cols-12 text-left lg:text-xl text-[#5800B0] focus:outline-none"
            onClick={() => handleToggle(index)}
          >
            <span className='col-span-11'>{question.q}</span>
            <span className='flex justify-end'><IoIosArrowDown
              className={`transition-transform  duration-300 ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
            /></span>
          </button>
          {activeIndex === index && (
            <p className="mt-2 lg:text-lg whitespace-pre-line">{question.a}</p>
          )}
        </div>
      ))}
    </div>
  );
};