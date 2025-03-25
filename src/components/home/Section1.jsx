"use client";

import React from "react";
import radio from "../../../public/images/RADIO_HOME 1.png";

// brand logo-----------
import medpau from "../../../public/images/medpau logo 1.png";
import toan from "../../../public/images/TOAN png 1.png";
import auaton from "../../../public/images/auaton png 1.png";
import nomba from "../../../public/images/NOMBA LOGO 1.png";
import studio from "../../../public/images/360 DESIGNS STUDIO 1.png";
import hoh from "../../../public/images/HOH 1.png";

import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function Section1() {
  return (
    <div className="relative">
      <div>
        <div className=" h-[273px] w-[273px] bg-[#5800B0] absolute lg:right-18 -right-40 lg:top-0 -z-10 rounded-full blur-[100px] opacity-[0.75]"></div>
        <div className="h-[670px] w-[670px] bg-[#5800B0] absolute -left-40 -z-10 rounded-full blur-[100px] opacity-[0.2]"></div>
        <div className="h-[260px] w-[260px] bg-[#5800B0] absolute left-40 -z-10 -bottom-16 rounded-full blur-[200px] opacity-[0.4]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-5 gap-5 lg:px-20 px-5 ">
          {/* for mobile version */}
          <div className="block lg:hidden mt-[6vh] px-5">
            <Image src={radio} alt="" className="h-auto w-full" />
          </div>

          <div className="lg:col-span-3">
            <div className="lg:mt-44">
              <h1 className="text-6xl font-bold">
                To make Audio Money,
                <br />
                <span className="text-[#5800B0]">Press Play</span>
              </h1>
              <p className="text-2xl my-10">
                Turn your daily routine into daily money. One app to transform
                your audio content into real money. The only playlist that
                values your time is on Stereo Pay.
              </p>

              <div className="flex gap-7 mb-10">
                <a
                  href="https://appdistribution.firebase.google.com/pub/i/b1e1e3a45aee744f"
                  target="blank"
                >
                  <button className="flex items-center bg-black text-white rounded-lg p-2 hover:scale-[0.95] transition duration-300 ease-in-out">
                    <span>
                      <IoLogoGooglePlaystore className="lg:text-5xl text-3xl" />
                    </span>
                    <span className="text-left">
                      <p className="font-thin text-xs">Available on the</p>
                      <p className="lg:text-xl">Google Play</p>
                    </span>
                  </button>
                </a>

                <a
                  href="https://testflight.apple.com/join/J4mFFNAX"
                  target="blank"
                >
                  <button className="flex items-center gap-2 bg-black text-white rounded-lg p-2 hover:scale-[0.95] transition duration-300 ease-in-out">
                    <span>
                      <FaApple className="lg:text-5xl text-3xl" />
                    </span>
                    <span className="text-left">
                      <p className="font-thin text-xs">Download on the</p>
                      <p className="lg:text-xl mr-4">App Store</p>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* for desktop version  */}
          <div className="hidden lg:block flex justify-center lg:col-span-2 lg:px-8 px-5">
            <Image src={radio} alt="" className="h-auto w-full lg:pt-12" />
          </div>
        </div>
      </div>

      {/* brand logos---------------- */}
      <div className="my-16 lg:px-20 px-5 ">
        <Swiper
          spaceBetween={10}
          slidesPerView={6}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <Image src={medpau} alt="medpau" className="lg:h-full h-14 w-auto" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Image src={toan} alt="Toan" className="lg:h-full h-14 w-auto" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Image
              src={auaton}
              alt="Auaton"
              className="lg:h-full h-14 w-auto"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Image src={nomba} alt="Nomba" className="lg:h-full h-14 w-auto" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Image
              src={studio}
              alt="Studio"
              className="lg:h-full h-14 w-auto"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <Image src={hoh} alt="HOH" className="lg:h-full h-14 w-auto" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}