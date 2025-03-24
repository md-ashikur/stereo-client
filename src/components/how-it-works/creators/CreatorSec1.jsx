import React from "react";

export default function CreatorSec1() {
  return (
    <div className="relative">
      <div>
        <div className="h-[273px] w-[273px] bg-[#5800B0] absolute lg:right-18 -right-[30vw] -top-36 -z-10 rounded-full blur-[100px] opacity-[0.75]"></div>
        <div className="hidden lg:block h-[670px] w-[670px] bg-[#5800B0] absolute -left-40 -z-10 rounded-full blur-[100px] opacity-[0.2]"></div>
        <div className="h-[260px] w-[260px] bg-[#5800B0] absolute left-40 -z-10 -bottom-16 rounded-full blur-[200px] opacity-[0.4]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 lg:px-20 mt-44 mb-20 space-y-10">
        <h1 className="max-w-[700px] lg:text-6xl text-6xl font-bold">
          Finally! You’ve got the right audience.
        </h1>
        <p className="text-2xl max-w-[715px]">
          Millions of people, individuals, businesses, content creators, fun
          lovers and so much more, ready to play your sound. No boundaries, no
          limits.
        </p>

        <a href="https://scanned.page/p/67b61e07751ed" target="blank">
          <button className="bg-[#5800B0] hover:scale-[0.95] transition duration-300 ease-in-out rounded-lg shadow-xl shadow-[#4C00AB]/30 text-white px-7 py-3">
            Download
          </button>
        </a>
      </div>
    </div>
  );
}
