import Image from "next/image";
import React from "react";
import pic1 from "../../../public/images/Rectangle 293.png";
import pic2 from "../../../public/images/Rectangle 293 (1).png";
import user from "../../../public/images/user.png";
import playlist from "../../../public/images/playlist.png";
import star from "../../../public/images/star.png";
import trending from "../../../public/images/trending.png";
export default function Section3() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center px-20 space-y-16">
        <div className="max-w-[1440px] grid grid-cols-2 gap-5">
          <div>
            <Image src={pic1} alt="" className="h-auto w-full" />
          </div>
          <div className="p-10 space-y-5">
            <h2 className="text-4xl font-bold">
              We made it easy with 3 simple steps
            </h2>
            <p>How does it work?</p>
            <ul className="list-disc list-inside ml-2">
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
                Sign up with a referral code (If no referral code, no worries)
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

        <div className="max-w-[1440px] grid grid-cols-2 gap-5">
          <div className="py-10 pr-10 space-y-5">
            <h2 className="text-4xl font-bold">We promote inclusivity</h2>
       
            <div className="grid grid-cols-8 gap-3">
                <Image  src={user} alt="" className="h-10 w-auto"/>
              <p className="col-span-7">
                <b>Real Users, Real Engagement</b> – Your content reaches a
                network of real drivers and passengers, not just passive
                scrollers. Analytics will talk for you!
              </p>
            </div>
            <div className="grid grid-cols-8 gap-3">
            <Image  src={playlist} alt="" className="h-10 w-auto"/>
              <p className="col-span-7">
                <b>No Need for Playlist Curation </b>– Your content is automatically
                placed in a general playlist, ensuring it gets played.
              </p>
            </div>

            <div className="grid grid-cols-8 gap-3">
            <Image  src={star} alt="" className="h-10 w-auto"/>
                <p className="col-span-7"><b>100% Play Rate</b> – Unlike other platforms where users can skip, your content is fully heard.</p>
            </div>
            <div className="grid grid-cols-8 gap-3">
            <Image  src={trending} alt="" className="h-10 w-auto"/>
                <p className="col-span-7"><b>Get Trending</b> – The Top 100 ranks the most engaging content and profiles, boosting your visibility</p>
            </div>
          </div>

          <div>
            <Image src={pic2} alt="" className="h-auto w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
