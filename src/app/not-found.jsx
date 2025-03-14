import Image from "next/image";
import Link from "next/link";
import React from "react";
import radio from "../../public/images/RADIO_404_new 1.png"


export default function NotFound() {
  return (

   <div className="relative overflow-hidden">
     <div >
    <div className="h-[273px] w-[273px] bg-[#5800B0] absolute lg:right-18 -right-[20vw]  -z-10 rounded-full blur-[100px] opacity-[0.50]"></div>
    <div className="h-[670px] w-[670px] bg-[#5800B0] absolute -left-40 -z-10 rounded-full blur-[100px] opacity-[0.2]"></div>
    <div className="h-[260px] w-[260px] bg-[#5800B0] absolute left-40 -bottom-16 rounded-full blur-[200px] opacity-[0.4]"></div>
  </div>
    <div className="max-w-[1440px] mx-auto my-28 px-5 lg:px-20 grid lg:grid-cols-5 gap-5">
    <div className="lg:col-span-3 flex flex-col justify-center space-y-5">
    <h2 className="text-6xl font-bold">Not found</h2>
      <p className="text-2xl">The page you are looking for is no longer available</p>
      <Link href="/">

        <button
          className="bg-[#5800B0] hover:scale-[0.95] transition duration-300 ease-in-out rounded-xl shadow-xl shadow-[#5800B0]/30 text-white px-8 py-4 mt-5 font-bold"
        >
          Go to homepage
        </button>
      </Link>
    </div>
    <div className="lg:col-span-2 flex flex-col justify-center space-y-5 relative right-[6vw]">
      <Image src={radio} alt="radio" className="scale-140 h-auto w-auto mt-20 lg:mt-0"/>
    </div>
    </div>
   </div>
  );
}
