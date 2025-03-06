import React from "react";
import radio from "../../../public/images/RADIO_HOME 1.png";
import Image from "next/image";
export default function Section1() {
  return (
    <div className="grid grid-cols-5 gap-5 px-20 ">
      <div className="col-span-3 my-20 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold">To make Audio Money, <span className="text-[#5800B0]">Press Play</span></h1>
        <p className="text-2xl my-10">Turn your daily routine into daily money. One app to transform your audio content into real money. The only playlist that values your time is on Stereo Pay.</p>
      </div>

      <div className="flex justify-center col-span-2 px-8 ">
        <Image src={radio} alt="" className="h-auto w-full pt-12"/>
   
      </div>
    </div>
  );
}
