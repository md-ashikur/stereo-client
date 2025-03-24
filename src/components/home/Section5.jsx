"use client";

import React, { useState, useRef } from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
//  Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import apptest from "../../../public/images/Jon Adeyole.jpg";
import keke from "../../../public/images/Adenike Uka.jpg";
import texi from "../../../public/images/Olamide Obi.jpg";
import dj from "../../../public/images/apptester.jpg";

const cards = [
  {
    number: 1,
    pic: apptest,
    title: "Jon Adeyole",
    role: "App tester",
    description:
      "Wow ! This app is a revolution for Nigeria. My use of radio will totally change. Amazing experience during the test of the app 👍",
  },
  {
    number: 2,
    pic: keke,
    title: "Adenike Uka",
    role:"Keke driver",
    description:
      "Stereo Pay is the only social media for driver 😁 \nIt is interactive, content better and different than radio stations",
  },
  {
    number: 3,
    pic: texi,
    title: "Olamide Obi",
    role: "Taxi Driver",
    description:
      "So excited to this app exist! Sound is money now The more drivers the bigger it will be for us! \nAbeg my community join us NOW !",
  },
  {
    number: 4,
    pic: dj,
    title: "Martin G",
    role: "Dj & music producer",
    description:
      "Music artists have a big chance to be successful, promotion is so easy! \nThe algorithm make us visible, not by breaking the bank or matter of influence like for radio stations",
  },
];

export default function Section5() {

   const [direction, setDirection] = useState("right");
    const swiperRef = useRef(null);
  
    const handleNavigation = () => {
      if (!swiperRef.current) return;
  
      if (direction === "right") {
        if (swiperRef.current.swiper.activeIndex < cards.length - 1) {
          swiperRef.current.swiper.slideNext();
        } else {
          setDirection("left");
        }
      } else {
        if (swiperRef.current.swiper.activeIndex > 0) {
          swiperRef.current.swiper.slidePrev();
        } else {
          setDirection("right");
        }
      }
    };
  
  return (
    <div className="relative">
      <div>
        <div className="h-[760px] w-[760px] bg-[#5800B0] absolute -left-40 -bottom-60 -z-10 rounded-full blur-[200px] opacity-[0.32]"></div>
        <div className="h-[826px] w-[821px] bg-[#5800B0] absolute -right-70 -bottom-80 -z-10 rounded-full blur-[200px] opacity-[0.28]"></div>
      </div>

      <div className="lg:ml-20 mx-5 lg:mx-0 mt-20">
      <h1 className="font-bold text-4xl ">
            What do people think about us ?
          </h1>
        <div className=" relative ">
         
          {/* carousel ------------- */}
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 2.6,
              spaceBetween: 20,
            },
          }}
          onSlideChange={(swiper) => {
            if (swiper.activeIndex === cards.length - 1) {
              setDirection("left");
            } else if (swiper.activeIndex === 0) {
              setDirection("right");
            }
          }}
          
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/30 backdrop-blur-sm shadow-lg border border-white rounded-2xl p-10 mx-2 my-10 lg:h-[440px]">
              
              <div className="flex items-center gap-5 my-6">
                <div className="h-[114px] w-[114px] rounded-full overflow-hidden">
                  <Image src={card.pic} alt="" className="h-auto w-auto scale-150"/>
                </div>
              <div>
                <h3 className="lg:text-2xl text-xl font-bold  ">
                  {card.title}
                </h3>
                <p>{card.role}</p>
                </div>
              </div>
              <div className="flex gap-2 text-[#FFDE2E] my-5 text-3xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
                <p className="text-xl whitespace-pre-line"><i>“{card.description}”</i></p>
              </div>
            </SwiperSlide>
          ))}
          <div
            className="absolute top-36 z-10 lg:right-26 right-5 !text-xl bg-white  rounded-full cursor-pointer h-[60px] w-[60px] shadow-lg flex justify-center items-center"
            onClick={handleNavigation}
          >
      
          {direction === "right" ? (
              <IoIosArrowForward className="text-[#5800B0]" />
            ) : (
              <IoIosArrowBack className="text-[#5800B0]" />
            )}
          </div>
        </Swiper>
        </div>

      
      </div>
        {/* Are you still tuning for free ?------------- */}
        <div className="flex justify-center lg:mx-20 mx-5 lg:my-10 ">
          <div className="bg-white/30 backdrop-blur-sm shadow-lg max-w-[1440px] w-full my-10 border border-white rounded-2xl flex flex-col items-center text-center justify-center p-14 space-y-8">
            <h1 className="lg:text-4xl text-2xl font-bold text-[#5800B0]">
              Are you still tuning for free ?
            </h1>
            <p>Download Stereo Pay now</p>

            
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
  );
}
