'use client';

import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FaExclamation, FaTimes } from 'react-icons/fa';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { motion, AnimatePresence } from 'framer-motion';

export default function PopUp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const [hideText, setHideText] = useState(false);
  const { register, handleSubmit, control, reset, formState: { errors } } = useForm();
  const options = countryList().getData();

  const togglePopup = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      reset(); // Reset form when popup is closed
    }
  };

  const handleHideText = () => {
    setHideText(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    togglePopup();
  };

  return (
    <div>
      {/* Circle button with "i" icon */}
      <button
        onClick={togglePopup}
        className="fixed bottom-10 right-3 bg-[#5800B0] text-white p-4 rounded-full shadow-lg z-60"
      >
        <FaExclamation size={24} />
      </button>

      {/* Popup Form */}
      <AnimatePresence>
        {isOpen && (
          <div
            
            className="fixed top-0 inset-0 bg-white/30 bg-opacity-30 backdrop-blur-md flex items-center justify-center z-60"
          >
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }} className="mx-5 bg-white/30 bg-opacity-30 backdrop-blur-md border-2 border-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={togglePopup}
                  className="text-[#5800B0] rounded-lg"
                >
                  <FaTimes />
                </button>
              </div>

              <h2 className="text-2xl text-[#5800B0] text-center font-bold mb-4">Join the waiting list</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    placeholder="Type your name"
                    className="w-full px-3 py-2 outline-none bg-white shadow-md rounded-lg"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    {...register('email', { 
                      required: 'Email is required', 
                      pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    placeholder="Type your email"
                    className="w-full px-3 py-2 outline-none bg-white shadow-md rounded-lg"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Phone Number</label>
                  <input
                    {...register('phone', { required: 'Phone number is required' })}
                    type="tel"
                    placeholder="WhatsApp/Telegram"
                    className="w-full px-3 py-2 outline-none bg-white shadow-md rounded-lg"
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Location</label>
                  <Controller
                    name="location"
                    control={control}
                    rules={{ required: 'Location is required' }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={options}
                        placeholder="Select your state of residence"
                        className="w-full !outline-none !border-none bg-white shadow-md !rounded-lg"
                      />
                    )}
                  />
                  {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Referrer Phone Number</label>
                  <input
                    {...register('referrer')}
                    type="tel"
                    placeholder="Referrer phone number"
                    className="w-full px-3 py-2 outline-none bg-white shadow-md rounded-lg"
                  />
                
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#5800B0] text-white px-4 py-2 rounded-lg"
                  >
                    Join
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Sliding text effect */}
      <AnimatePresence>
        {showText && !hideText && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="z-50 fixed bottom-10 right-12 bg-white text-[#5800B0] px-5 py-4 rounded-full flex items-center"
          >
            <button onClick={handleHideText}>
              <FaTimes />
            </button>
            <span className="mx-8 font-bold">Join the waiting list!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}