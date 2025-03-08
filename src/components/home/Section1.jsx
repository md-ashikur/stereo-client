import React from "react";
import radio from "../../../public/images/RADIO_HOME 1.png";
import shopify from "../../../public/images/Spotify_Logo_CMYK_Green 1 (Traced).png";
import uber from "../../../public/images/2560px-Uber_logo_2018 1 (Traced).png";
import bolt from "../../../public/images/1024px-Bolt_logo 1 (Traced).png";
import deezer from "../../../public/images/1280px-Deezer_logo 1 (Traced).png";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import Image from "next/image";


export default function Section1() {
  return (
    <div>
      <div >
        <div className="h-[273px] w-[273px] bg-[#5800B0] absolute right-18 -z-10 rounded-full blur-[100px] opacity-[0.75]"></div>
        <div className="h-[670px] w-[670px] bg-[#5800B0] absolute -left-40 -z-10 rounded-full blur-[100px] opacity-[0.2]"></div>
        <div className="h-[260px] w-[260px] bg-[#5800B0] absolute left-40 -bottom-16 rounded-full blur-[200px] opacity-[0.4]"></div>
      </div>

      <div className="max-w-[1440px]  flex flex-col items-center justify-center mx-auto">
        <div className="grid lg:grid-cols-5 gap-5 lg:px-20 px-5 ">
          <div className="lg:col-span-3  flex flex-col justify-center ">
           <div className="mt-32">
           <h1 className="text-6xl font-bold">
              To make Audio Money,
              <span className="text-[#5800B0]">Press Play</span>
            </h1>
            <p className="text-2xl my-10">
              Turn your daily routine into daily money. One app to transform
              your audio content into real money. The only playlist that values
              your time is on Stereo Pay.
            </p>

           <div className="flex lg:flex-row flex-col gap-7 mb-10">
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

          <div className="flex justify-center lg:col-span-2 lg:px-8 px-5 ">
            <Image src={radio} alt="" className="h-auto w-full lg:pt-12" />
          </div>
        </div>
      </div>
      {/* brand logos---------------- */}
      <div className="flex justify-center flex-wrap my-16 space-x-20 lg:px-20 px-5">
        <Image src={shopify} alt="" className="h-full w-auto" />
        <Image src={uber} alt="" className="h-full w-auto" />
        <Image src={bolt} alt="" className="h-full w-auto" />
        <Image src={deezer} alt="" className="h-full w-auto" />
        <Image src={shopify} alt="" className="h-full w-auto" />
        <Image src={uber} alt="" className="h-full w-auto" />
      </div>
    </div>
  );
}
