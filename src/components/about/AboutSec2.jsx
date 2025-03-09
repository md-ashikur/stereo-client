import React from "react";
import coin from "../../../public/images/about/Coin.png";
import community from "../../../public/images/about/community.png";
import passion from "../../../public/images/about/passion.png";
import growth from "../../../public/images/about/growth.png";
import Image from "next/image";


export default function AboutSec2() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center px-20 ">
        <h1 className="text-4xl font-bold my-16">Our values</h1>

        <div className="max-w-[1440px] grid grid-cols-4 gap-5 ">
        
        {/* card 1---------------- */}
          <div className="bg-white/30 backdrop-blur-sm shadow-lg p-8 text-center border border-white rounded-2xl flex flex-col items-center justify-center space-y-10">
            <Image src={coin} alt="" className="" />
           <div>
           <h3 className="text-[#5800B0] text-xl text-primary">
           Innovative
            </h3>
            <p className="mt-12 text-lg">
            We are altering the way users consume digital audio content. With Stereo Pay, you get paid to listen.
            </p>
           </div>
          </div>
        {/* card 2---------------- */}
          <div className="bg-white/30 backdrop-blur-sm shadow-lg p-8 text-center border border-white rounded-2xl flex flex-col items-center justify-center space-y-10">
            <Image src={community} alt="" className="" />
            <div>
            <h3 className="text-[#5800B0] text-xl text-primary">
            Community
            </h3>
            <p className="mt-4 text-lg">
            A simple network of people who have an equal opportunity to maximize their time. Our pop culture embraces a large number of people connected by the same goal in one app.
            </p>
            </div>
          </div>
        
        {/* card 3---------------- */}
          <div className="bg-white/30 backdrop-blur-sm shadow-lg p-8 text-center border border-white rounded-2xl flex flex-col items-center justify-center space-y-10">
            <Image src={passion} alt="" className="" />
            <div>
            <h3 className="text-[#5800B0] text-xl text-primary">
            Passions
            </h3>
            <p className="mt-10 text-lg">
            We feel your energy and resilience, and we are ready to propel your ambitions into tangible results. Your energy cannot be destroyed!
            </p>
            </div>
          </div>
        
        {/* card 4---------------- */}
          <div className="bg-white/30 backdrop-blur-sm shadow-lg p-8 text-center border border-white rounded-2xl flex flex-col items-center justify-center space-y-10">
            <Image src={growth} alt="" className="" />
            <div>
            <h3 className="text-[#5800B0] text-xl text-primary">
            Growth
            </h3>
            <p className="mt-10 text-lg">
            Steady and consistent collaboration, openness, inclusivity, investment, and, excellence to drive growth.
            </p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}
