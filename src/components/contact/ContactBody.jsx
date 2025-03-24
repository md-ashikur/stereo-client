"use client"

import React from "react";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactBody() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      toast.success('Email sent successfully');
      reset();
    } catch (error) {
      toast.error('Error sending email');
    }
  };

  return (
    <div className="relative">
      <ToastContainer />
      <div>
        <div className="h-[273px] w-[273px] bg-[#5800B0] absolute right-18 -top-[24vh] -z-10 rounded-full blur-[100px] opacity-[0.5]"></div>
        <div className="h-[470px] w-[470px] bg-[#5800B0] absolute -left-10 -z-10 rounded-full blur-[100px] opacity-[0.2]"></div>
        <div className="h-[260px] w-[260px] bg-[#5800B0] absolute left-40 -top-[20vh] rounded-full blur-[200px] opacity-[0.4] -z-10"></div>
        <div className="h-[473px] w-[473px] bg-[#5800B0] absolute -right-24 -bottom-[44vh] -z-10 rounded-full blur-[100px] opacity-[0.36]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-20 mb-28 lg:mt-[28vh] mt-[16vh]">
        <div className="space-y-5 text-xl ">
          <h1 className="font-bold text-4xl">Reach us</h1>
          <div className="pr-[13vw] space-y-7">
            <p>
              We have an agile support team ready to respond to any questions,
              complaints, inquiries, or suggestions.
            </p>
            <p>
              Enter your name (or alias), surname (optional) email, and details of
              your message. Or simply call our support phone number:
            </p>
            <p>
              <b>contact@stereopay.co</b>
            </p>
            <p>
              <b>+234 810 576 4324</b>
            </p>
          </div>
          <p className="text-lg font-light lg:pr-20">
            You may choose to stay anonymous by using an alias. Your details are
            protected by our privacy policy and all information given will be
            treated with the utmost confidentiality.
          </p>
        </div>

        {/* contact form--------------- */}
        <div className="bg-white/30 bg-opacity-30 backdrop-blur-md shadow-lg rounded-2xl p-5 md:p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 lg:p-10 p-3">
            <div>
              <label className="block text-lg font-medium">Name</label>
              <input
                {...register("name", { required: true })}
                className="w-full px-8 py-5 bg-white rounded-2xl outline-none shadow-xl shadow-black/5"
                placeholder="Type your name"
              />
              {errors.name && <span className="text-red-500">Name is required</span>}
            </div>
            
            <div>
              <label className="block text-lg font-medium">Surname</label>
              <input
                {...register("surname")}
                className="w-full px-8 py-5 bg-white rounded-2xl outline-none shadow-xl shadow-black/5"
                placeholder="Type your surname"
              />
            </div>

            <div>
              <label className="block text-lg font-medium">E-mail</label>
              <input
                {...register("email", { required: true })}
                className="w-full px-8 py-5 bg-white rounded-2xl outline-none shadow-xl shadow-black/5"
                placeholder="Type your E-mail"
                type="email"
              />
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>

            <div>
              <label className="block text-lg font-medium">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="w-full px-8 py-5 bg-white rounded-2xl outline-none shadow-xl shadow-black/5"
                placeholder="Type your message..."
                rows="5"
              />
              {errors.message && <span className="text-red-500">Message is required</span>}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#5800B0] hover:scale-[0.95] transition duration-300 ease-in-out rounded-xl shadow-xl shadow-[#5800B0]/30 text-white px-8 py-4 mt-5 font-bold"
              >
                Submit my form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}