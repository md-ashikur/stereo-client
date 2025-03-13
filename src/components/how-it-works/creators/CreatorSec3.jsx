import Image from 'next/image'
import client from "../../../../public/images/apptester.jpg";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";


export default function CreatorSec3() {
  return (

   <div className='relative'>
     <div>
    <div className="h-[340px] w-[340px] bg-[#5800B0] absolute left-96 top-70 -z-10 rounded-full blur-[120px] opacity-[0.27]"></div>
    <div className="h-[640px] w-[640px] bg-[#5800B0] absolute -left-20 -bottom-60 -z-10 rounded-full blur-[120px] opacity-[0.27]"></div>
    <div className="h-[760px] w-[760px] bg-[#5800B0] absolute -right-72 bottom-38 -z-10 rounded-full blur-[200px] opacity-[0.37]"></div>
    <div className="h-[866px] w-[866px] bg-[#5800B0] absolute right-0 -bottom-96 -z-10 rounded-full blur-[200px] opacity-[0.17]"></div>
  </div>
  
    <div className='px-20 py-20'>
      <div className='max-w-[830px] mx-auto space-y-10'>
        <p className='text-center text-3xl'><i>“When Stereo Pay told me the price to promote my business, I understood why it’s so viral! It is very affordable, and people can have access to my store from my bio.”</i></p>
        <div className='flex items-center justify-center gap-4 relative '>
        <p className='text-[600px] absolute text-white/30 backdrop-blur-sm border border-white blur -z-10'>”</p>
            <div className='h-[100px] w-[100px] rounded-full overflow-hidden'><Image src={client} alt='client' className='scale-180'/></div>
            <div>
                <h3 className='font-bold text-xl'>Maria Olatusin</h3>
                <p>Shop owner</p>
            </div>
        </div>
      </div>

      {/* Pricing & transparency */}
      <div className='pt-28 '>
        <h1 className='font-bold text-4xl text-center'>Pricing & transparency</h1>

        <div className='max-w-[845px] mx-auto mt-15'>
            <div className='grid grid-cols-2 py-15 border-t-2 border-white'>
                <h2 className='text-4xl font-bold text-[#5800B0]'>Pricing</h2>
                <p className='text-lg px-5'>Pricee depend on your target, location and frequency. Very easy!</p>
            </div>
        </div>
        <div className='max-w-[845px] mx-auto '>
            <div className='grid grid-cols-2 py-15 border-t-2 border-white'>
                <h2 className='text-4xl font-bold text-[#5800B0]'>Progress tracking</h2>
                <p className='text-lg px-5'>Follow your ads progression and anticipate your next campaigns!</p>
            </div>
        </div>
        <div className='max-w-[845px] mx-auto '>
            <div className='grid grid-cols-2 py-15 border-t-2 border-white'>
                <h2 className='text-4xl font-bold text-[#5800B0]'>Premium</h2>
                <p className='text-lg px-5'>(Explanation soon)</p>
            </div>
        </div>
      </div>

       {/* Are you still tuning for free ?------------- */}
              <div className="flex justify-center ">
                <div className="bg-white/30 backdrop-blur-sm shadow-lg max-w-[1440px] w-full my-10 border border-white rounded-2xl flex flex-col items-center text-center justify-center p-14 space-y-8">
                  <h1 className="lg:text-4xl text-2xl font-bold text-[#5800B0]">
                  Make your best move now!
                  </h1>
                  <p>The time is now, Make your best move! 
                  Download Stereo Pay.</p>
      
                  
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
