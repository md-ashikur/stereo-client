import Image from "next/image";
import gift from "../../../../public/images/how-it-works/Gift.png";
import music from "../../../../public/images/how-it-works/music room.jpg";
import coin from "../../../../public/images/about/Coin.png";
import social from "../../../../public/images/about/community.png";
import Discover from "@/components/home/Discover";

export default function ListenerSec2() {
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
               <Image src={coin} alt="" className="" />
               <div>
                 <h3 className="text-[#5800B0] font-bold text-xl text-primary">
                 Same Day, More Pay!
                 </h3>
                 <p className="mt-5 text-lg">
                 A regular day with Stereo Pay is no longer regular. It is more fun, more vibes and you are guaranteed to make extra income at the end.
                 </p>
               </div>
             </div>
             {/* card 2---------------- */}
             <div className="bg-white/30 backdrop-blur-sm shadow-lg p-10 text-center border border-white rounded-2xl flex flex-col items-center  space-y-10">
               <Image src={social} alt="" className="" />
               <div>
                 <h3 className="text-[#5800B0] font-bold text-xl text-primary">
                 Socialize
                 </h3>
                 <p className="mt-5 text-lg">
                 All your friends and favorite celebrities are on Stereo Pay. Connect, share moments, catch up with trends and have more fun hits, and be sure to earn more while you’re at it.
                 </p>
               </div>
             </div>
   
             {/* card 3---------------- */}
             <div className="bg-white/30 backdrop-blur-sm shadow-lg p-10 text-center border border-white rounded-2xl flex flex-col items-center  space-y-10">
               <Image src={gift} alt="" className="" />
               <div>
                 <h3 className="text-[#5800B0] font-bold text-xl text-primary">
                 Free
                 </h3>
                 <p className="mt-5 text-lg">
                 The best things in life are FREE! Stereo Pay is Free. Subscribe, press play, earn.
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
               <Image src={music} alt="people" className="scale-140 mt-10 h-auto w-auto"/>
             </div>
             <div className="space-y-5 flex flex-col justify-center items-start lg:p-12">
               <h2 className="font-bold text-4xl ">Everyone on Stereo Pay gets rewarded.</h2>
               <p className="text-lg">
               Listeners, content creators and users get a good share of the value offered by Stereo Pay.
               </p>
               <p className="text-lg">
               We provide a platform for inclusivity.
               </p>
               <p className="text-lg">
               You can increase your earning capacity by referring your friends. Use your referral code, invite your friends and share in the fun opportunity.
               </p>
   
               <button className="bg-[#5800B0] hover:scale-[0.95] transition duration-300 ease-in-out rounded-lg shadow-xl shadow-[#4C00AB]/30 text-white px-7 py-3">
                 Download
               </button>
             </div>
           </div>
         </div>
       </div>
  )
}
