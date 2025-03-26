import Image from "next/image";
import client from "../../../../public/images/how-it-works/client.jpg";
import googlePlay from "../../../../public/images/google-play.png"
import appStore from "../../../../public/images/appStore.png"

export default function ListenerSec3() {
  return (
    <div className="relative">
      <div>
        <div className="h-[340px] w-[340px] bg-[#5800B0] absolute left-96 top-70 -z-10 rounded-full blur-[120px] opacity-[0.27]"></div>
        <div className="h-[640px] w-[640px] bg-[#5800B0] absolute -left-20 -bottom-60 -z-10 rounded-full blur-[120px] opacity-[0.27]"></div>

        <div className="h-[560px] w-[560px] bg-[#5800B0] absolute -right-62 top-[100vh] -z-10 rounded-full blur-[200px] opacity-[0.56]"></div>
        <div className="hidden lg:block h-[560px] w-[560px] bg-[#5800B0] absolute -left-62 bottom-[100vh] -z-10 rounded-full blur-[200px] opacity-[0.56]"></div>

        <div className="h-[760px] w-[760px] bg-[#5800B0] absolute -right-72 bottom-38 -z-10 rounded-full blur-[200px] opacity-[0.37]"></div>
        <div className="h-[866px] w-[866px] bg-[#5800B0] absolute right-0 -bottom-96 -z-10 rounded-full blur-[200px] opacity-[0.17]"></div>
      </div>

      <div className="lg:px-20 px-5 py-20">
        {/* video section------------- */}
        <div className="max-w-[1300px] mx-auto my-10">
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/ETzKNH7JBg8?si=PIOh7bT9F2gTyyoc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* client testimonial-------------- */}
        <div className="max-w-[750px] mx-auto space-y-10 my-28">
          <p className="text-center text-3xl">
            <i>
              “I never thought drivers would be the core of any new social
              platform. Now with Stereo Pay, we are understood and valued for
              transmitting message through our car stereo. Podcast, music,
              trendy audio and comedies... it’s all here with the money!”
            </i>
          </p>
          <div className="flex items-center justify-center gap-4 relative ">
            <p className="text-[600px] absolute text-white/30 backdrop-blur-sm border border-white blur -z-10">
              ”
            </p>
            <div className="h-[100px] w-[100px] rounded-full overflow-hidden">
              <Image src={client} alt="client" className="scale-150 mt-4" />
            </div>
            <div>
              <h3 className="font-bold text-xl">Olawale</h3>
              <p>E Hailing Driver</p>
            </div>
          </div>
        </div>

        {/* Pricing & transparency */}
        <div>
          <h1 className="font-bold text-3xl lg:text-4xl text-center">
            Pricing & transparency
          </h1>

          <div className="max-w-[845px] mx-auto mt-15">
            <div className="grid lg:grid-cols-2 py-15 border-t-2 border-white">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#5800B0]">
                Earnings
              </h2>
              <p className="text-lg lg:px-5">
                Your earnings are generated thanks to the Creators paid ads,
                it’s a circular economy.
              </p>
            </div>
          </div>
          <div className="max-w-[845px] mx-auto ">
            <div className="grid lg:grid-cols-2 py-15 border-t-2 border-white">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#5800B0]">
                Affiliate
              </h2>
              <p className="text-lg lg:px-5">
                Select your affiliation for special offers
              </p>
            </div>
          </div>
          <div className="max-w-[845px] mx-auto ">
            <div className="grid lg:grid-cols-2 py-15 border-t-2 border-white">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#5800B0]">
                Referral
              </h2>
              <p className="text-lg lg:px-5">
                Refer your friends and family to earn 5% income
              </p>
            </div>
          </div>
        </div>

        {/* Are you still tuning for free ?------------- */}
        <div className="flex justify-center ">
          <div className="bg-white/30 backdrop-blur-sm shadow-lg max-w-[1440px] w-full my-10 border border-white rounded-2xl flex flex-col items-center text-center justify-center p-14 space-y-8">
            <h1 className="lg:text-4xl text-3xl font-bold text-[#5800B0]">
              Make your best move now!
            </h1>
            <p className="text-lg max-w-[500px]">
              Within exactly 2 minutes, you will make your smartest move yet.
              Download, register and start using the best app in your mobile
              device.
            </p>

            <div className="flex lg:flex-row flex-col gap-6 mb-10">
              <a
                href="https://appdistribution.firebase.google.com/pub/i/b1e1e3a45aee744f"
                target="blank"
              >
                <Image src={googlePlay} alt="google play" className="hover:scale-[0.95] transition duration-300 ease-in-out"/>
              </a>

              <a
                href="https://testflight.apple.com/join/J4mFFNAX"
                target="blank"
              >
                                 <Image src={appStore} alt="app store" className="hover:scale-[0.95] transition duration-300 ease-in-out"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
