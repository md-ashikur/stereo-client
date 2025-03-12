import React from "react";

export default function AboutSec1() {
  return (
    <div className="relative">
      <div>
        <div className="h-[273px] w-[273px] bg-[#5800B0] absolute right-28 -z-10 rounded-full blur-[120px] opacity-[0.75]"></div>
        <div className="h-[670px] w-[670px] bg-[#5800B0] absolute -left-80 -z-10 rounded-full blur-[100px] opacity-[0.2]"></div>
        <div className="h-[260px] w-[260px] bg-[#5800B0] absolute left-40 -bottom-16 rounded-full blur-[200px] opacity-[0.4]"></div>
      </div>
      <div className="flex flex-col justify-center items-center px-5 lg:px-20 lg:h-screen space-y-10 ">
        <div className="max-w-[820px] text-center lg:mt-16 mt-34">
          <h1 className="lg:text-5xl text-4xl font-bold ">
            <span className="text-[#5800B0]">
              You value your time? so do we.<br/>
            </span>
            You shouldn’t work round the clock. Rather the clock should
            workaround for you.
          </h1>
        </div>

        <div className="max-w-[850px] lg:text-xl text-center space-y-3">
          <h2 className=" font-semibold text-[#5800B0]">
            Stereo Pay is redefining the way audio is shared and valued.
          </h2>

          <p>
            Our platform <b>turns listening into earnings,</b> rewarding users for
            simply tuning in. <b>Drivers,</b> always on the move and sharing their
            space with passengers, are at the heart of this system—making them
            the most powerful broadcasters.
         
            By listening to curated playlists of <b>music, podcasts, news, and
            promotions,</b> drivers <b>earn money effortlessly</b> while creators gain real
            exposure without needing complex algorithms or curators.
          </p>

          <b>The more you listen, the more you earn—wherever you are. </b>
        </div>
      </div>
    </div>
  );
}
