import Image from "next/image";
import React from "react";
import music from "../../../public/images/music.jpeg";
import logo from "../../../public/images/Group.png";
import driver from "../../../public/images/driver.jpg";
import painting from "../../../public/images/Incon_painting_kit.png";
import headphone from "../../../public/images/Incon_headphone.png";
import line from "../../../public/images/Vector 335.png";

export default function Section4() {
  return (
    <div className="relative">
      <div>
        <div className="h-[340px] w-[340px] bg-[#5800B0] absolute left-96 top-70 -z-10 rounded-full blur-[120px] opacity-[0.27]"></div>
        <div className="h-[640px] w-[640px] bg-[#5800B0] absolute -left-20 -bottom-60 -z-10 rounded-full blur-[120px] opacity-[0.27]"></div>
        <div className="h-[760px] w-[760px] bg-[#5800B0] absolute -right-72 bottom-38 -z-10 rounded-full blur-[200px] opacity-[0.37]"></div>
        <div className="h-[866px] w-[866px] bg-[#5800B0] absolute right-0 -bottom-96 -z-10 rounded-full blur-[200px] opacity-[0.17]"></div>
      </div>

      <div className="flex flex-col items-center justify-center my-16 px-20">
        <div className=" max-w-[1300px] flex flex-col items-center justify-center">
          <h1 className="font-bold text-4xl text-center my-10">
            Discover how does it work
          </h1>

          {/* $ circle----------------- */}
          <div className="max-w-[800px] w-[550px] flex justify-between items-center relative">
            <div className="-ml-12 -mb-24 z-1 rounded-full bg-white/30 backdrop-blur-sm shadow-lg border border-white flex items-center justify-center h-[85px] w-[85px] text-5xl font-bold">
              $
            </div>

            <div className="-mb-24 mr-5 z-1 rounded-full bg-white/30 backdrop-blur-sm shadow-lg border border-white flex items-center justify-center h-[85px] w-[85px] text-5xl font-bold">
              $
            </div>
          </div>

            <div className="relative max-w-[950px] w-[820px] flex justify-center items-center ">
              <Image src={line} alt="" className="-mb-56 " />
            </div>
          <div className="relative grid grid-cols-3 gap-8 mt-50">
            {/* card 1---------------- */}
            <div className="bg-white/30 backdrop-blur-sm shadow-lg border border-white rounded-2xl flex flex-col items-center ">
              <div className="h-[195px] w-[195px] rounded-full overflow-hidden -mt-24">
                <Image src={music} alt="" className="h-full w-auto" />
              </div>
              <div>
                <h3 className=" font-semibold text-2xl p-10 text-primary text-center">
                Creators and Advertisers promote their campaign on Stereo Pay
                </h3>
              </div>
            </div>
            {/* card 2---------------- */}
            <div className="bg-white/30 backdrop-blur-sm shadow-lg border border-white rounded-2xl flex flex-col items-center ">
              <div className="h-[195px] w-[195px] bg-[#FBC02D] flex justify-center items-center rounded-full overflow-hidden -mt-24">
                <Image src={logo} alt="music" className="h-auto " />
              </div>
              <div>
                <h3 className=" font-semibold text-2xl p-10 text-primary text-center">
                Stereo Pay shares the revenue with targeted drivers
                </h3>
              </div>
            </div>
            {/* card 3---------------- */}
            <div className="bg-white/30 backdrop-blur-sm shadow-lg border border-white rounded-2xl flex flex-col items-center ">
              <div className="h-[195px] w-[195px] rounded-full overflow-hidden -mt-24">
                <Image src={driver} alt="driver" className=" scale-150 -ml-10 mt-8" />
              </div>
              <div>
                <h3 className=" font-semibold text-2xl p-10 text-primary text-center">
                Drivers are rewarded for broadcasting content to their passengers
                </h3>
              </div>
            </div>
          </div>

          <button className="bg-[#5800B0] rounded-lg shadow-lg my-16 text-white px-4 py-2">
            How does it work ?
          </button>

          {/* Made for------------- */}
          <section>
            <h1 className="font-bold text-4xl text-center my-5">Made for</h1>

            <div className="grid grid-cols-2 gap-5 mt-38">
              {/* painting----------- */}
              <div className="flex flex-col items-center justify-center relative">
                <Image
                  src={painting}
                  alt=""
                  className="max-h-[370px] max-w-[370px] absolute -top-70"
                />
                <div className="bg-white/30 backdrop-blur-sm shadow-lg border border-white rounded-2xl flex flex-col items-center text-center justify-center p-14 space-y-8">
                  <h1 className="text-5xl font-bold text-[#5800B0]">
                    Creators and Advertisers:
                  </h1>
                  <p className="text-2xl">
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
                  <h1 className="text-5xl mt-4 font-bold text-[#5800B0]">
                    Listeners:
                  </h1>
                  <p className="text-2xl">
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
          </section>
        </div>
      </div>
    </div>
  );
}
