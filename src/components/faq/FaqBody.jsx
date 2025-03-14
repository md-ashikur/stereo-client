'use client'


import { useState } from "react";
import Accordion from "./Accordion";


export default function FaqBody() {
    const [activeSection, setActiveSection] = useState('Listeners');
  
    const listenersQuestions = [
      { q: 'Listener Question 1', a: 'Answer to listener question 1.' },
      { q: 'Listener Question 2', a: 'Answer to listener question 2.' },
      { q: 'Listener Question 3', a: 'Answer to listener question 3.' },
      { q: 'Listener Question 4', a: 'Answer to listener question 4.' },
      { q: 'Listener Question 5', a: 'Answer to listener question 5.' },
      { q: 'Listener Question 6', a: 'Answer to listener question 6.' },
      { q: 'Listener Question 7', a: 'Answer to listener question 7.' },
    ];
  
    const creatorsQuestions = [
      { q: 'How can I start using Stereo Pay?', a: 'Answer to creator question 1.' },
      { q: 'How can I post on the playlist?', a: 'Answer to creator question 2.' },
      { q: 'How can I be sure people will hear my promoted post?', a: 'Answer to creator question 3.' },
      { q: 'Can I promote multiple time the same post?', a: 'Answer to creator question 4.' },
      { q: 'I want to promote something but I don’t have a jingle, can Stereo Pay help me?', a: 'Answer to creator question 5.' },
      { q: 'Can I also listen and earn from the app?', a: 'Answer to creator question 6.' },
      { q: 'Can I use my earnings to promote my post on the app?', a: 'Answer to creator question 7.' },
    ];
  
    return (
      <div>
        <div className='max-w-[1440px] mx-auto my-[28vh] px-5 lg:px-20'>
          <div className='flex flex-col items-center space-y-10'>
            <h1 className='font-bold text-7xl '>FAQ</h1>
            <p className='text-2xl text-center max-w-[680px]'>Quisque sodales vestibulum gravida at vestibulum lectus consequat egestas. Sed odio cursus massa.</p>
          </div>
  
          {/* accordion-container----------- */}
          <div className='max-w-[760px] mx-auto my-16'>
            <div className='flex justify-center gap-5'>
              <button
                className={`${
                  activeSection === 'Listeners'
                    ? 'bg-[#5800B0] text-white'
                    : 'text-[#5800B0]'
                } hover:scale-[0.95] transition duration-300 ease-in-out rounded-xl shadow-xl shadow-[#5800B0]/10 px-12 lg:px-24 py-4 mt-5`}
                onClick={() => setActiveSection('Listeners')}
              >
                Listeners
              </button>
              <button
                className={`${
                  activeSection === 'Creators'
                    ? 'bg-[#5800B0] text-white'
                    : 'text-[#5800B0]'
                } hover:scale-[0.95] transition duration-300 ease-in-out rounded-xl shadow-xl shadow-[#5800B0]/10 px-12 lg:px-24 py-4 mt-5`}
                onClick={() => setActiveSection('Creators')}
              >
                Creators
              </button>
            </div>
  
            {/* accordion-options---------- */}
            <div className='mt-10'>
              {activeSection === 'Listeners' && (
                <Accordion questions={listenersQuestions} />
              )}
              {activeSection === 'Creators' && (
                <Accordion questions={creatorsQuestions} />
              )}
            
            </div>
          </div>
        </div>
      </div>
    );
  }