import Image from "next/image";
import React from "react";
import pic1 from "../../../public/images/we made.png";
import pic2 from "../../../public/images/connect.png";
import user from "../../../public/images/user.png";
import playlist from "../../../public/images/playlist.png";
import star from "../../../public/images/star.png";
import trending from "../../../public/images/trending.png";
export default function Section3() {
  return (
    <div className="relative">
      <div>
        <div className=" h-[336px] w-[336px] bg-[#5800B0] absolute -left-32 lg:bottom-38 bottom-[150vh] -z-10 rounded-full blur-[120px] opacity-[0.54]"></div>
        <div className="h-[1024px] w-[1024px] bg-[#5800B0] absolute lg:-left-72 lg:-bottom-28 bottom-[100vh] -z-10 rounded-full blur-[120px] opacity-[0.10]"></div>
        <div className=" h-[724px] w-[724px] bg-[#5800B0] absolute -right-72 -bottom-38 -z-10 rounded-full blur-[100px] opacity-[0.37]"></div>
      </div>

      <div className="flex flex-col justify-center items-center px-5 lg:px-20 space-y-16">
        <div className="max-w-[1440px] grid lg:grid-cols-2 gap-5">
          <div>
            <Image src={pic1} alt="" className="lg:h-[450px] lg:w-[610px] h-auto w-full" />
          </div>
          <div className="lg:p-10  space-y-5">
            <h2 className="lg:text-4xl text-2xl font-bold">
              We made it easy with 3 simple steps
            </h2>
            <p>How does it work?</p>
            <ul className="list-disc list-inside ml-2 space-y-2">
              <li>
                <a
                  href="https://scanned.page/p/67b61e07751ed"
                  target="_blank"
                  className="text-[#5800B0] font-semibold underline"
                >
                  Download here for iOS or Android
                </a>
              </li>
              <li>
                Sign up with a referral code - Driver need it to onboard
              </li>
              <li>Drivers can get verified for greater earning rates</li>
              <li>
                <b>Press play:</b> To enjoy unlimited entertaining audio
                content.
              </li>
            </ul>
            <p className="text-justify">
              Share your referral code to earn extra cash and track your
              earnings in real time! Explore unlimited entertaining content and
              never have a dull moment. The good part; you earn while you play
              this content.
            </p>
          </div>
        </div>

        {/* ------------------- */}

        <div className="max-w-[1440px] grid lg:grid-cols-2 gap-5">
          <div className="py-10 pr-8 space-y-5">
            <h2 className="lg:text-4xl text-2xl font-bold">We promote inclusivity</h2>

            <div className="grid grid-cols-9 gap-3">
              <Image src={user} alt="" className="col-span-2 lg:col-span-1 h-10 w-10" />
              <p className="lg:col-span-8 col-span-7">
                <b>Real Users, Real Engagement</b> – Your content reaches a
                network of real drivers and passengers, not just passive
                scrollers. Analytics will talk for you!
              </p>
            </div>
            <div className="grid grid-cols-9 gap-3">
              <Image src={playlist} alt="" className="col-span-2 lg:col-span-1 h-10 w-10" />
              <p className="lg:col-span-8 col-span-7">
                <b>No Need for Playlist Curation </b>– Your content is
                automatically placed in a general playlist, ensuring it gets
                played.
              </p>
            </div>

            <div className="grid grid-cols-9 gap-3">
              <Image src={star} alt="" className="col-span-2 lg:col-span-1 h-10 w-10" />
              <p className="lg:col-span-8 col-span-7">
                <b>100% Play Rate</b> – Unlike other platforms where users can
                skip, your content is fully heard.
              </p>
            </div>
            <div className="grid grid-cols-9 gap-3">
              <Image src={trending} alt="" className="col-span-2 lg:col-span-1 h-10 w-10" />
              <p className="lg:col-span-8 col-span-7">
                <b>Get Trending</b> – The Top 100 ranks the most engaging
                content and profiles, boosting your visibility
              </p>
            </div>
          </div>

          <div>
            <Image src={pic2} alt="" className="lg:h-[450px] lg:w-[610px] h-auto w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
