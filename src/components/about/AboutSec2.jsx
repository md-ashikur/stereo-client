import React from "react";
import coin from "../../../public/images/about/Coin.png";
import community from "../../../public/images/about/community.png";
import passion from "../../../public/images/about/passion.png";
import growth from "../../../public/images/about/growth.png";
import Image from "next/image";

export default function AboutSec2() {
  return (
    <div className="relative">
      <div>
        <div className="h-[355px] w-[357px] bg-[#5800B0] absolute -left-60 lg:top-80 top-[140vh] rounded-full blur-[100px] opacity-[0.36]"></div>
        <div className="h-[856px] w-[856px] bg-[#5800B0] absolute -right-52 top-40 rounded-full blur-[140px] opacity-[0.36]"></div>
      </div>

      {/* ---------our values----------------- */}
      <div className="max-w-[1440px] mx-auto lg:px-20 px-5 py-10">
        <h1 className="text-4xl font-bold mb-16 text-center">Our values</h1>

        <div className=" grid lg:grid-cols-4 gap-5 ">
          {/* card 1---------------- */}
          <div className="bg-white/30 backdrop-blur-sm shadow-lg py-10 px-8 text-center border border-white rounded-2xl flex flex-col items-center  space-y-10">
            <Image src={coin} alt="" className="" />
            <div>
              <h3 className="text-[#5800B0] font-bold text-xl text-primary">
                Innovative
              </h3>
              <p className="mt-5 text-lg">
                We are altering the way users consume digital audio content.
                With Stereo Pay, you get paid to listen.
              </p>
            </div>
          </div>
          {/* card 2---------------- */}
          <div className="bg-white/30 backdrop-blur-sm shadow-lg py-10 px-8 text-center border border-white rounded-2xl flex flex-col items-center  space-y-10">
            <Image src={community} alt="" className="" />
            <div>
              <h3 className="text-[#5800B0] font-bold text-xl text-primary">Community</h3>
              <p className="mt-5 text-lg">
                A simple network of people who have an equal opportunity to
                maximize their time. Our pop culture embraces a large number of
                people connected by the same goal in one app.
              </p>
            </div>
          </div>

          {/* card 3---------------- */}
          <div className="bg-white/30 backdrop-blur-sm shadow-lg p-10 text-center border border-white rounded-2xl flex flex-col items-center  space-y-10">
            <Image src={passion} alt="" className="" />
            <div>
              <h3 className="text-[#5800B0] font-bold text-xl text-primary">Passions</h3>
              <p className="mt-5 text-lg">
                We feel your energy and resilience, and we are ready to propel
                your ambitions into tangible results. Your energy cannot be
                destroyed!
              </p>
            </div>
          </div>

          {/* card 4---------------- */}
          <div className="bg-white/30 backdrop-blur-sm shadow-lg p-10 text-center border border-white rounded-2xl flex flex-col items-center space-y-10">
            <Image src={growth} alt="" className="" />
            <div>
              <h3 className="text-[#5800B0] font-bold text-xl text-primary">Growth</h3>
              <p className="mt-5 text-lg">
                Steady and consistent collaboration, openness, inclusivity,
                investment, and, excellence to drive growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stereo Pay in numbers------------ */}
      <div className="bg-white/30 bg-opacity-30 backdrop-blur-md lg:h-64 my-20 px-5 lg:px-20 py-10">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="font-bold text-4xl text-center">
            Stereo Pay in numbers
          </h1>

          <div className="grid lg:grid-cols-4 gap-5 text-center my-10">
            <div className="space-y-5">
              <h1 className="text-5xl font-bold">250k</h1>
              <p>Subscribers to the most anticipated waitlist</p>
            </div>
            <div className="space-y-5">
              <h1 className="text-5xl font-bold">6000+</h1>
              <p>registered cars </p>
            </div>
            <div className="space-y-5">
              <h1 className="text-5xl font-bold">98%</h1>
              <p>referral rate</p>
            </div>
            <div className="space-y-5">
              <h1 className="text-5xl font-bold">2 million </h1>
              <p>listeners reach over</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
