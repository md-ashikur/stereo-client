import Image from 'next/image'
import client from "../../../../public/images/apptester.jpg";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

export default function ListenerSec3() {
  return (
      <div className='relative'>
         <div>
        <div className="h-[340px] w-[340px] bg-[#5800B0] absolute left-96 top-70 -z-10 rounded-full blur-[120px] opacity-[0.27]"></div>
        <div className="h-[640px] w-[640px] bg-[#5800B0] absolute -left-20 -bottom-60 -z-10 rounded-full blur-[120px] opacity-[0.27]"></div>
        <div className="h-[760px] w-[760px] bg-[#5800B0] absolute -right-72 bottom-38 -z-10 rounded-full blur-[200px] opacity-[0.37]"></div>
        <div className="h-[866px] w-[866px] bg-[#5800B0] absolute right-0 -bottom-96 -z-10 rounded-full blur-[200px] opacity-[0.17]"></div>
      </div>
      
        <div className='lg:px-20 px-5 py-20'>
          <div className='max-w-[750px] mx-auto space-y-10'>
            <p className='text-center text-3xl'><i>“Stereo Pay is the only social media for driver 😁 It is interactive, content better and different than radio stations”</i></p>
            <div className='flex items-center justify-center gap-4 relative '>
            <p className='text-[600px] absolute text-white/30 backdrop-blur-sm border border-white blur -z-10'>”</p>
                <div className='h-[100px] w-[100px] rounded-full overflow-hidden'><Image src={client} alt='client' className='scale-180'/></div>
                <div>
                    <h3 className='font-bold text-xl'>David Jones</h3>
                    <p>Driver</p>
                </div>
            </div>
          </div>
    
          {/* Pricing & transparency */}
          <div className='pt-28 '>
            <h1 className='font-bold text-3xl lg:text-4xl text-center'>Pricing & transparency</h1>
    
            <div className='max-w-[845px] mx-auto lg:mt-15'>
                <div className='grid lg:grid-cols-2 py-15 border-t-2 border-white'>
                    <h2 className='text-3xl lg:text-4xl font-bold text-[#5800B0]'>Earnings</h2>
                    <p className='text-lg lg:px-5'>Your earnings are generated thanks to the Cfreators paid ads, i’s a circular economy.</p>
                </div>
            </div>
            <div className='max-w-[845px] mx-auto '>
                <div className='grid lg:grid-cols-2 py-15 border-t-2 border-white'>
                    <h2 className='text-3xl lg:text-4xl font-bold text-[#5800B0]'>Boost mode</h2>
                    <p className='text-lg lg:px-5'>Boost mode! Listen for 3 hours, the next hour is super pumped!</p>
                </div>
            </div>
            <div className='max-w-[845px] mx-auto '>
                <div className='grid lg:grid-cols-2 py-15 border-t-2 border-white'>
                    <h2 className='text-3xl lg:text-4xl font-bold text-[#5800B0]'>Referral</h2>
                    <p className='text-lg lg:px-5'>Refer your friends and family to earn 0,5% income.</p>
                </div>
            </div>
          </div>
    
           {/* Are you still tuning for free ?------------- */}
                  <div className="flex justify-center ">
                    <div className="bg-white/30 backdrop-blur-sm shadow-lg max-w-[1440px] w-full my-10 border border-white rounded-2xl flex flex-col items-center text-center justify-center p-14 space-y-8"> 
                      <h1 className="lg:text-4xl text-3xl font-bold text-[#5800B0]">
                      Make your best move now!
                      </h1>
                      <p className='text-lg max-w-[500px]'>Within exactly 2 minutes, you will make your smartest move yet. Download, register and start using the best app in your mobile device.</p>
          
                      
                      <div className="flex lg:flex-row flex-col gap-6 mb-10">
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
        </div>
    
       </div>
  )
}
