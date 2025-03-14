import Image from "next/image";
import client from "../../../../public/images/how-it-works/client 2.jpg";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

export default function CreatorSec3() {
  return (
    <div className="relative">
      <div>
        <div className="h-[340px] w-[340px] bg-[#5800B0] absolute left-96 top-70 -z-10 rounded-full blur-[120px] opacity-[0.27]"></div>
        <div className="h-[640px] w-[640px] bg-[#5800B0] absolute -left-20 -bottom-60 -z-10 rounded-full blur-[120px] opacity-[0.27]"></div>
        <div className="h-[760px] w-[760px] bg-[#5800B0] absolute -right-72 bottom-38 -z-10 rounded-full blur-[200px] opacity-[0.37]"></div>
        <div className="h-[866px] w-[866px] bg-[#5800B0] absolute right-0 -bottom-96 -z-10 rounded-full blur-[200px] opacity-[0.17]"></div>
      </div>

      <div className="lg:px-20 px-5 py-20">

       {/* video section------------- */}
       <div className="flex justify-center my-10">
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/A3E3IWHAe5k"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* client testimonial-------------- */}
        <div className="max-w-[830px] mx-auto space-y-10 my-28">
          <p className="text-center text-3xl">
            <i>
              “After my first promoted music on Stereo Pay I understood the
              power of the driver community! I am never spending money on other
              social platform for my audio content, never!!”
            </i>
          </p>
          <div className="flex items-center justify-center gap-4 relative ">
            <p className="text-[600px] absolute text-white/30 backdrop-blur-sm border border-white blur -z-10">
              ”
            </p>
            <div className="h-[100px] w-[100px] rounded-full overflow-hidden">
              <Image src={client} alt="client" className="scale-120 mt-2" />
            </div>
            <div>
              <h3 className="font-bold text-xl">Sunny D</h3>
              <p>DJ & Music Producer</p>
            </div>
          </div>
        </div>

        {/* Pricing & transparency */}
        <div className=" ">
          <h1 className="font-bold text-3xl lg:text-4xl text-center">
            Pricing & transparency
          </h1>

          <div className="max-w-[845px] mx-auto lg:mt-15">
            <div className="grid lg:grid-cols-2 py-15 border-t-2 border-white">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#5800B0]">
                Pricing
              </h2>
              <p className="text-lg lg:px-5">
                Pricee depend on your target, location and frequency. Very easy!
              </p>
            </div>
          </div>
          <div className="max-w-[845px] mx-auto ">
            <div className="grid lg:grid-cols-2 py-15 border-t-2 border-white">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#5800B0]">
                Progress tracking
              </h2>
              <p className="text-lg lg:px-5">
                Follow your ads progression and anticipate your next campaigns!
              </p>
            </div>
          </div>
          <div className="max-w-[845px] mx-auto ">
            <div className="grid lg:grid-cols-2 py-15 border-t-2 border-white">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#5800B0]">
              PIN code
              </h2>
              <p className="text-lg lg:px-5">Build your followership and sell your PIN Code for promotion. Become an influencer on Stereo Pay!</p>
            </div>
          </div>
        </div>

        {/* Are you still tuning for free ?------------- */}
        <div className="flex justify-center ">
          <div className="bg-white/30 backdrop-blur-sm shadow-lg max-w-[1440px] w-full my-10 border border-white rounded-2xl flex flex-col items-center text-center justify-center p-14 space-y-8">
            <h1 className="lg:text-4xl text-3xl font-bold text-[#5800B0]">
              Make your best move now!
            </h1>
            <p className="text-lg">
              The time is now, Make your best move!
              <br />
              Download Stereo Pay.
            </p>

            <div className="flex lg:flex-row flex-col gap-6 mb-10">
              <a
                               href="https://appdistribution.firebase.google.com/pub/i/b1e1e3a45aee744f"
                               target="blank"
                             >
                              
                               <button className="flex items-center bg-black text-white rounded-lg p-2 hover:scale-[0.95] transition duration-300 ease-in-out">
                                 <span>
                                   <IoLogoGooglePlaystore className="text-5xl" />
                                 </span>
                                 <span className=" text-left">
                                   <p className="font-thin text-xs">Available on the</p>
                                   <p className=" text-xl">Google Play</p>
                                 </span>
                               </button>
                             </a>
             
                             <a
                               href="https://testflight.apple.com/join/J4mFFNAX"
                               target="blank"
                             >
                               <button className="flex items-center gap-2 bg-black text-white rounded-lg p-2 hover:scale-[0.95] transition duration-300 ease-in-out">
                                 <span>
                                   <FaApple className="text-5xl" />
                                 </span>
                                 <span className=" text-left">
                                   <p className="font-thin text-xs">Download on the</p>
                                   <p className=" text-xl mr-4">App Store</p>
                                 </span>
                               </button>
                             </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}