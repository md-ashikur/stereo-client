import Image from "next/image";
import music from "../../../public/images/music.jpeg";
import logo from "../../../public/images/Group.png";
import driver from "../../../public/images/driver.jpg";
import line from "../../../public/images/Vector 335.png";


export default function Discover() {
  return (
    <div className="flex flex-col items-center">
      {/* $ circle----------------- */}
      <div className=" max-w-[800px] w-[550px] flex justify-between items-center relative">
        <div className="-ml-12 -mb-14 z-1 rounded-full bg-white/30 backdrop-blur-sm shadow-lg border border-white flex items-center justify-center h-[85px] w-[85px] text-5xl font-bold">
          $
        </div>

        <div className="-mb-14 mr-5 z-1 rounded-full bg-white/30 backdrop-blur-sm shadow-lg border border-white flex items-center justify-center h-[85px] w-[85px] text-5xl font-bold">
          $
        </div>
      </div>

      <div className="lg:block hidden relative max-w-[950px] w-[820px]">
        <Image src={line} alt="" className="-mb-54 ml-2" />
      </div>
      <div className="relative grid lg:grid-cols-3 gap-8 lg:mt-42 lg:space-y-0 space-y-28 ">
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
        <div className=" bg-white/30 backdrop-blur-sm shadow-lg border border-white rounded-2xl flex flex-col items-center ">
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
            <Image
              src={driver}
              alt="driver"
              className=" scale-150 -ml-10 mt-8"
            />
          </div>
          <div>
            <h3 className=" font-semibold text-2xl p-10 text-center">
              Drivers are rewarded for broadcasting content to their passengers
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
