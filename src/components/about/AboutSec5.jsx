"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
//  Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const cards = [
  {
    number: 1,
    title: "Send your CV/Resume",
    description:
      "Send your CV/Resume to jobs@stereopay.com with the role you are applying for as the subject of the email.",
  },
  {
    number: 2,
    title: "Respond",
    description:
      "We will get in touch with you upon the success of your application. Confirm details of correspondence as a follow-up.",
  },
  {
    number: 3,
    title: "Interview",
    description:
      "Attend the interview. You may be required to go through a series of stages or a single stage depending on the role you want to fill.",
  },
  {
    number: 4,
    title: "You’re in!",
    description:
      "Join our team and explore endless possibilities with your creativity. It is highly rewarding, vibrant, and inclusive.",
  },
];

export default function AboutSec5() {
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
        <div className="hidden lg:block h-[355px] w-[357px] bg-[#5800B0] absolute left-0 top-40 rounded-full blur-[100px] opacity-[0.36]  -z-10"></div>
        <div className="h-[856px] w-[856px] bg-[#5800B0] absolute -right-52 -top-20 rounded-full blur-[200px] opacity-[0.36] -z-10"></div>
      </div>

      <div className="my-20 p-5 lg:ml-16 relative ">
        <h1 className="text-4xl font-bold text-center">Join our team</h1>
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
              slidesPerView: 2.3,
              spaceBetween: 80,
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
              <div className="lg:h-auto h-[290px] bg-white/30 backdrop-blur-sm shadow-lg border border-white rounded-2xl p-10 mt-20 mb-5">
                <h2 className="text-7xl font-bold -mt-20">{`${card.number}.`}</h2>
                <h3 className="text-2xl font-bold text-[#5800B0] my-6">
                  {card.title}
                </h3>
                <p>{card.description}</p>
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

        <div className="flex flex-col justify-center items-center">
          <button className="bg-[#5800B0] hover:scale-[0.95] transition duration-300 ease-in-out rounded-lg shadow-lg my-16 text-white px-16 py-2">
            See available jobs
          </button>

          <div className="text-center space-y-5 max-w-[880px] text-lg">
            <h3 className="font-bold text-xl">Disclaimer:</h3>
            <p>
              Stereo Pay will never request payment of fees for any kind of
              application or interview scheduling for any positions you are
              applying to.
            </p>

            <p>
              If you see any job advert, requesting you to register or apply
              with an attached fee, kindly call our support team +234 810 576 4324 or email <b>support@stereopay.co</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
