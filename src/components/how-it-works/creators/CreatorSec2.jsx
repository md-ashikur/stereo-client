import Image from "next/image";
import mike from "../../../../public/images/how-it-works/mike.png";
import people from "../../../../public/images/how-it-works/creator (1).png";
import coin from "../../../../public/images/about/Coin.png";
import growth from "../../../../public/images/about/growth.png";
import Discover from "@/components/home/Discover";

export default function CreatorSec2() {
  return (
    <div className="relative">
  <div>
        <div className="h-[355px] w-[357px] bg-[#5800B0] absolute left-0 top-80 rounded-full blur-[100px] opacity-[0.36] -z-10"></div>
        <div className="h-[856px] w-[856px] bg-[#5800B0] absolute -right-52 -top-10 rounded-full blur-[200px] opacity-[0.36] -z-10"></div>
        
        <div className="h-[355px] w-[357px] bg-[#5800B0] absolute left-[40vw] bottom-80 rounded-full blur-[100px] opacity-[0.36] -z-10"></div>

        {/* Your audience is right here on Stereo Pay */}
        <div className="h-[355px] w-[357px] bg-[#5800B0] absolute left-0 -bottom-[5vh] rounded-full blur-[100px] opacity-[0.6] -z-10"></div>
        <div className="h-[556px] w-[556px] bg-[#5800B0] absolute -right-[20vw] -bottom-[30vh] rounded-full blur-[200px] opacity-[0.6] -z-10"></div>
      
      </div>


      <div className="max-w-[1440px] mx-auto lg:px-20 px-5 py-10">
        <div className=" grid lg:grid-cols-3 gap-5 ">
          {/* card 1---------------- */}
          <div className="bg-white/30 backdrop-blur-sm shadow-lg py-10 px-8 text-center border border-white rounded-2xl flex flex-col items-center  space-y-10">
            <Image src={mike} alt="" className="" />
            <div>
              <h3 className="text-[#5800B0] font-bold text-xl text-primary">
                Just speak! They are listening
              </h3>
              <p className="mt-5 text-lg">
                A precisely targeted and selected audience, who value your voice
                and are rewarded for playing your sound. The value is absolutely
                mutual.
              </p>
            </div>
          </div>
          {/* card 2---------------- */}
          <div className="bg-white/30 backdrop-blur-sm shadow-lg p-10 text-center border border-white rounded-2xl flex flex-col items-center  space-y-10">
            <Image src={coin} alt="" className="" />
            <div>
              <h3 className="text-[#5800B0] font-bold text-xl text-primary">
                Why break the bank?
              </h3>
              <p className="mt-5 text-lg">
                With the same budget, you will get more alarming results and
                more audience than you have ever imagined.
              </p>
            </div>
          </div>

          {/* card 3---------------- */}
          <div className="bg-white/30 backdrop-blur-sm shadow-lg p-10 text-center border border-white rounded-2xl flex flex-col items-center  space-y-10">
            <Image src={growth} alt="" className="" />
            <div>
              <h3 className="text-[#5800B0] font-bold text-xl text-primary">
                Get better insights:
              </h3>
              <p className="mt-5 text-lg">
                Now you can see clearly the activities and performance of your
                content. Analyze better, make quicker decisions, and understand
                your listeners better.
              </p>
            </div>
          </div>
        </div>

        {/* discover-------------- */}
        <div className="lg:my-20 my-[24vh]">
          <Discover />
        </div>

        {/* Your audience is right here on Stereo Pay */}

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="rounded-lg overflow-hidden">
            <Image src={people} alt="people" className="h-auto w-auto"/>
          </div>
          <div className="space-y-5 flex flex-col justify-center items-start lg:p-14">
            <h2 className="font-bold text-4xl ">Your audience is right here on Stereo Pay</h2>
            <p className="text-lg">
              Millions of users who are ready to listen to you, love you, and
              purchase your value.
            </p>
            <p className="text-lg">
              Stereo Pay can build you a strong fan base, it’s time to share
              your story.
            </p>

<a href="https://scanned.page/p/67b61e07751ed" target='blank'>  <button className="bg-[#5800B0] hover:scale-[0.95] transition duration-300 ease-in-out rounded-lg shadow-xl shadow-[#4C00AB]/30 text-white px-7 py-3">
              Download
            </button></a>
          
          </div>
        </div>
      </div>
    </div>
  );
}
