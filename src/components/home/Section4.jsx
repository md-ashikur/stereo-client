import Image from "next/image";
import React from "react";

import painting from "../../../public/images/Incon_painting_kit.png";
import headphone from "../../../public/images/Incon_headphone.png";
import Discover from "./Discover";


export default function Section4() {
  return (
    <div className="relative ">
      <div>
        <div className="h-[340px] w-[340px] bg-[#5800B0] absolute left-96 top-70 -z-10 rounded-full blur-[120px] opacity-[0.27]"></div>
        <div className="h-[640px] w-[640px] bg-[#5800B0] absolute -left-20 -bottom-60 -z-10 rounded-full blur-[120px] opacity-[0.27]"></div>
        <div className="h-[760px] w-[760px] bg-[#5800B0] absolute -right-72 bottom-38 -z-10 rounded-full blur-[200px] opacity-[0.37]"></div>
        <div className="h-[866px] w-[866px] bg-[#5800B0] absolute right-0 -bottom-96 -z-10 rounded-full blur-[200px] opacity-[0.17]"></div>
      </div>

      <div className="max-w-[1300px] mx-auto lg:px-14 px-5">
      {/* Discover how does it work */}
        <div className="my-20">
          <h1 className="font-bold lg:text-4xl text-2xl text-center my-10">
            Discover how does it work
          </h1>

          <div className=" relative lg:my-0 my-[16vh]">
                   <Discover />
                   <div className="flex justify-center">
          <button className="bg-[#5800B0] rounded-lg shadow-lg my-16 text-white px-4 py-2">
            How does it work ?
          </button>
          </div>
                 </div>

         
          </div>


          {/* Made for------------- */}
          <div>
            <h1 className="font-bold text-4xl text-center my-5">Made for</h1>

            <div className="grid lg:grid-cols-2 gap-5 lg:mt-38 mt-58 lg:space-y-0 space-y-60">
              {/* painting----------- */}
              <div className="flex flex-col items-center justify-center relative">
                <Image
                  src={painting}
                  alt=""
                  className="max-h-[370px] max-w-[370px] absolute -top-70"
                />
                <div className="bg-white/30 backdrop-blur-sm shadow-lg border border-white rounded-2xl flex flex-col items-center text-center justify-center p-14 space-y-8 !w-full mx-10">
                  <h1 className="lg:text-5xl text-2xl font-bold text-[#5800B0]">
                    Creators and Advertisers:
                  </h1>
                  <p className="lg:text-2xl">
                    Music artists, composers, business owners, advertisers,
                    producers, authors, writers and everyone who creates amazing
                    content.
                  </p>

                  <button className="bg-[#5800B0] rounded-lg shadow-lg  text-white px-4 py-2">
                    Discover your benefits
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center relative">
                <Image
                  src={headphone}
                  alt=""
                  className="max-h-[370px] max-w-[370px] absolute -top-66"
                />
                <div className="bg-white/30 backdrop-blur-sm shadow-lg border border-white rounded-2xl flex flex-col items-center text-center justify-center p-14 space-y-8">
                  <h1 className="lg:text-5xl text-2xl mt-4 font-bold text-[#5800B0]">
                    Listeners:
                  </h1>
                  <p className="lg:text-2xl">
                    Car owners, music lovers, fit fam, entertainment and
                    lifestyle enthusiasts. Working on the road or from home,
                    working out or cooking, this playlist is made for you !
                  </p>

                  <button className="bg-[#5800B0] rounded-lg shadow-lg  text-white px-4 py-2">
                    Discover your benefits
                  </button>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
}
