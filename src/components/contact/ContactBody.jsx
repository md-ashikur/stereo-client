"use client"

import React from "react";
import { useForm } from "react-hook-form";

export default function ContactBody() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <div className="relative">
   <div >
        <div className="h-[273px] w-[273px] bg-[#5800B0] absolute right-18 -top-[24vh] -z-10 rounded-full blur-[100px] opacity-[0.5]"></div>
        <div className="h-[470px] w-[470px] bg-[#5800B0] absolute -left-10 -z-10 rounded-full blur-[100px] opacity-[0.2]"></div>
        <div className="h-[260px] w-[260px] bg-[#5800B0] absolute left-40 -top-[20vh] rounded-full blur-[200px] opacity-[0.4] -z-10"></div>

        <div className="h-[473px] w-[473px] bg-[#5800B0] absolute -right-24 -bottom-[44vh] -z-10 rounded-full blur-[100px] opacity-[0.36]"></div>
      </div>


      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-20 mb-28 mt-[28vh] ">
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
            <b>+234 234 567 890</b>
          </p>
         </div>

          <p className="text-lg font-light pr-20">
            You may choose to stay anonymous by using an alias. Your details are
            protected by our privacy policy and all information given will be
            treated with the utmost confidentiality.
          </p>
        </div>

        {/* contact form--------------- */}
        <div className="bg-white/30 bg-opacity-30 backdrop-blur-md shadow-lg rounded-2xl p-5 md:p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 p-10">
            <div>
              <label className="block text-lg font-medium">Name</label>
              <input
                {...register("name", { required: true })}
                className="w-full px-8 py-5 bg-white rounded-2xl outline-none shadow-md"
                placeholder="Type your name"
              />
              {errors.name && <span className="text-red-500">Name is required</span>}
            </div>
            
            <div>
              <label className="block text-lg font-medium">Surname</label>
              <input
                {...register("surname")}
                className="w-full px-8 py-5 bg-white rounded-2xl outline-none shadow-md"
                placeholder="Type your surname"
              />
            </div>

            <div>
              <label className="block text-lg font-medium">E-mail</label>
              <input
                {...register("email", { required: true })}
                className="w-full px-8 py-5 bg-white rounded-2xl outline-none shadow-md"
                placeholder="Type your E-mail"
                type="email"
              />
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>

            <div>
              <label className="block text-lg font-medium">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="w-full px-8 py-5 bg-white rounded-2xl outline-none shadow-md"
                placeholder="Type your message..."
                rows="5"
              />
              {errors.message && <span className="text-red-500">Message is required</span>}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#5800B0] hover:scale-[0.95] transition duration-300 ease-in-out rounded-xl shadow-lg text-white px-8 py-4 mt-5"
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