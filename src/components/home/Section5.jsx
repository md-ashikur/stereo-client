import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

export default function Section5() {
  return (
    <div className="relative">

<div>
       
        <div className="h-[760px] w-[760px] bg-[#5800B0] absolute -left-40 -bottom-60 -z-10 rounded-full blur-[200px] opacity-[0.32]"></div>
        <div className="h-[826px] w-[821px] bg-[#5800B0] absolute -right-70 -bottom-80 -z-10 rounded-full blur-[200px] opacity-[0.28]"></div>
      </div>


      <div className=" my-16 px-20">
        <div className=" flex flex-col justify-center !items-start">
          
          <h1 className="font-bold text-4xl my-10 ">
            What do people think about us ?
          </h1>
    
        </div>

        {/* Are you still tuning for free ?------------- */}
       <div className="flex justify-center">
       <div className="bg-white/30 backdrop-blur-sm shadow-lg max-w-[1440px] w-full my-10 border border-white rounded-2xl flex flex-col items-center text-center justify-center p-14 space-y-8">
          <h1 className="text-4xl font-bold text-[#5800B0]">
            Are you still tuning for free ?
          </h1>
          <p>Download Stereo Pay now</p>
          <div className="flex lg:flex-row flex-col gap-6 mb-10">
            <button className="flex items-center bg-black text-white rounded-lg p-2">
              <span>
                <IoLogoGooglePlaystore className="text-5xl" />
              </span>
              <span className=" text-left">
                <p className="font-thin text-xs">Available on the</p>
                <p className=" text-xl">Google Play</p>
              </span>
            </button>
            <button className="flex items-center gap-2 bg-black text-white rounded-lg p-2">
              <span>
                <FaApple className="text-5xl" />
              </span>
              <span className=" text-left">
                <p className="font-thin text-xs">Download on the</p>
                <p className=" text-xl mr-4">App Store</p>
              </span>
            </button>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
}
