import Image from "next/image";
import React from "react";
import cash from "../../../public/images/Cash.png";
import creditCard from "../../../public/images/Credit Card.png";
import review from "../../../public/images/Review.png";

export default function Section2() {
  return (
    <div className="relative flex flex-col items-center justify-center lg:mx-auto">
      <div>
        <div className="h-[355px] w-[357px] bg-[#5800B0] absolute left-0 top-40 rounded-full blur-[100px] opacity-[0.36]"></div>
        <div className="h-[856px] w-[856px] bg-[#5800B0] absolute -right-52 lg:-top-20 top-[90vh] rounded-full blur-[200px] opacity-[0.36]"></div>
      </div>

      <div className="max-w-[1440px] flex lg:flex-row flex-col gap-5 py-38 space-y-30 lg:space-y-0">
        {/* card 1---------------- */}
        <div className="lg:mx-0 mx-5 bg-white/30 backdrop-blur-sm shadow-lg p-8 lg:w-[400px] border border-white rounded-2xl flex flex-col items-center justify-center">
          <Image src={cash} alt="" className="relative -top-34" />
          <div>
            <h3 className="text-[#5800B0] font-semibold text-2xl text-primary -mt-28">
              Earn up to 50k monthly by listening
            </h3>
            <p className="mt-12">
              Make extra income by playing trending music, podcasts, audio
              content, and entertaining sound. The more you listen, the more you
              earn. The more you tell your friends and families, the more you
              earn.
            </p>
          </div>
        </div>
        {/* card 2---------------- */}
        <div className="lg:mx-0 mx-5 bg-white/30 backdrop-blur-sm shadow-lg p-8 lg:w-[400px] border border-white rounded-2xl flex flex-col items-center justify-center">
          <Image src={creditCard} alt="" className="relative -top-28" />
          <div>
            <h3 className="text-[#5800B0] font-semibold text-2xl text-primary -mt-18">
              Your voice can go viral with over 2 million subscribers
            </h3>
            <p className="mt-4">
              You can reach a wide range of audiences as well as a specific
              target for your sound. Stay trending on our top-rated sound charts
              while millions of listeners get to know your voice.
            </p>
          </div>
        </div>

        {/* card 3---------------- */}
        <div className="lg:mx-0 mx-5 bg-white/30 backdrop-blur-sm shadow-lg p-8 lg:w-[400px] border border-white rounded-2xl flex flex-col items-center justify-center">
          <Image src={review} alt="" className="relative -top-28" />
          <div>
            <h3 className="text-[#5800B0] font-semibold text-2xl text-primary -mt-16">
              100% Guaranteed payments
            </h3>
            <p className="mt-10">
              Our system is fully verified, safe and transparent, to ensure a
              smooth and enjoyable experience. There is absolutely no risk to
              you and the reward is hassle-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
