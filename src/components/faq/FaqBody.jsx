"use client";

import { useState } from "react";
import Accordion from "./Accordion";

export default function FaqBody() {
  const [activeSection, setActiveSection] = useState("Listeners");

  const listenersQuestions = [
    {
      q: "Why do I earn money by listening to Stereo Pay playlists?",
      a: `We believe sound should benefit everyone who uses it. When you listen, you give value to the audio content, so it’s only fair that you’re included in the value chain. A portion of the payment from creators is shared with the community. The more you earn, the more we earn—so we do our best to maximize your earnings!`,
    },
    {
      q: "Do I have to pay to use Stereo Pay?",
      a: "Yes, A one time subscription fee of N1,950",
    },
    {
      q: " How can I start using Stereo Pay?",
      a: `It’s simple! Just follow these steps:\n• Download the app on your phone\n• Sign up\n• Verify your driving license\n• Add your bank account details`,
    },
    {
      q: "How does the referral system work?",
      a: `You earn an extra 5% on the earnings of every person you refer—without limits! Here’s how to get started:\n• Find your referral code in your account settings\n• Share your code with others\n• Track your extra earnings in the earnings section\n\nNote: You must remain active to unlock your referral earnings.`,
    },
    {
      q: "How does the affiliate function work?",
      a: `Stereo Pay allows users to affiliate with A group, Union, Associations, bodies and organizations. \n\nThis provides extra benefits, including:\n• Automatic following: Get updates directly from your affiliate organization.\n• Better communication: Stay informed with direct audio updates from your affiliate.\n\nTo affiliate, go to your account settings and select affiliate of your choice.`,
    },
    {
      q: "Can I cancel a referral?",
      a: `No, referrals are permanent unless an account is deleted. Only the owner of the referral code can contact us for such requests.`,
    },
    {
      q: "Can the person who referred me see my earnings?",
      a: `No, your earnings are private.`,
    },
    {
      q: " I’m a driver. Can I also promote my audio content?",
      a: `Yes! You can create a Creator account and share your own audio content.`,
    },
    {
      q: "Can my voice be heard on the playlist too?",
      a: `Absolutely! Whether it’s music, business promotions, political opinions, sports debates, or breaking news—you can share it all.`,
    },
    {
      q: "How can I use my earnings?",
      a: `You can withdraw your earnings anytime.`,
    },
    {
      q: "Do my earnings expire?",
      a: `No, your earnings have no expiration date.`,
    },
    {
      q: "Can I transfer my earnings to a relative?",
      a: `Coming soon! Stay tuned for this feature.`,
    },
  ];

  const creatorsQuestions = [
    {
      q: "How can I start using Stereo Pay?",
      a: `All you need is:\n• Downloading the app on your phone.\n• Signing up to the app.`,
    },
    {
      q: "How can I post a song?",
      a: `In the homepage, the collection button on the bottom right gives you an overview of all your uploaded sounds. From there you can post and promote as well.`,
    },
    {
      q: "How can I be sure people will hear my promoted post?",
      a: `Because we are thoroughly verifying our user identity, it is not possible to use fake accounts on Stereo Pay. Only active and real drivers!\nThen, you can follow the progress of your promoted sounds.`,
    },
    {
      q: "Can I promote multiple time the same sound?",
      a: "Yes, unlimited times!",
    },
    {
      q: "I want to promote something but I don’t have a jingle, can Stereo Pay help me?",
      a: `You knocked at the right door! Stereo Pay offers a jingle creation service.\nAsk for it when you create your post.`,
    },
    {
      q: "Can I also listen and earn from the app?",
      a: `If you are also a Driver, you can create a Driver account and use Stereo Pay as you use your vehicle.`,
    },
  ];

  return (
    <div className="relative">
      <div>
        <div className="h-[273px] w-[273px] bg-[#5800B0] absolute right-18 -top-[20vh] -z-10 rounded-full blur-[100px] opacity-[0.75]"></div>
        <div className="h-[670px] w-[670px] bg-[#5800B0] absolute -left-40 -top-[20vh] -z-10 rounded-full blur-[100px] opacity-[0.2]"></div>
        <div className="h-[260px] w-[260px] bg-[#5800B0] absolute left-40 -top-[20vh] -z-10 -bottom-16 rounded-full blur-[200px] opacity-[0.4]"></div>
        
        <div className="h-[273px] w-[273px] bg-[#5800B0] absolute -left-[5vw] -bottom-[20vh] -z-10 rounded-full blur-[100px] opacity-[0.50]"></div>
        <div className="h-[573px] w-[573px] bg-[#5800B0] absolute -right-[10vw] -bottom-[44vh] -z-10 rounded-full blur-[100px] opacity-[0.36]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto lg:my-[28vh] my-30 px-5 lg:px-20">
        <div className="flex flex-col items-center space-y-10">
          <h1 className="font-bold text-7xl ">FAQ</h1>
          <p className="text-2xl text-center max-w-[680px]">
            All your answers about Stereo Pay are here
          </p>
        </div>

        {/* accordion-container----------- */}
        <div className="max-w-[760px] mx-auto my-16">
          <div className="flex justify-center gap-5">
            <button
              className={`${
                activeSection === "Listeners"
                  ? "bg-[#5800B0] text-white"
                  : "text-[#5800B0] bg-white"
              } hover:scale-[0.95] transition duration-300 ease-in-out rounded-xl shadow-xl shadow-[#5800B0]/10 px-12 lg:px-24 py-4 mt-5`}
              onClick={() => setActiveSection("Listeners")}
            >
              Listeners
            </button>
            <button
              className={`${
                activeSection === "Creators"
                  ? "bg-[#5800B0] text-white"
                  : "text-[#5800B0] bg-white"
              } hover:scale-[0.95] transition duration-300 ease-in-out rounded-xl shadow-xl shadow-[#5800B0]/10 px-12 lg:px-24 py-4 mt-5`}
              onClick={() => setActiveSection("Creators")}
            >
              Creators
            </button>
          </div>

          {/* accordion-options---------- */}
          <div className="mt-10 ">
            {activeSection === "Listeners" && (
              <Accordion questions={listenersQuestions} />
            )}
            {activeSection === "Creators" && (
              <Accordion questions={creatorsQuestions} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
