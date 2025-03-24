import Image from "next/image";
import story from "../../../public/images/about/our story.png";

export default function AboutSec3() {
  return (
    <div className="relative">
      <div>
        <div className="h-[355px] w-[357px] bg-[#5800B0] absolute left-0 lg:top-40 top-[120vh] rounded-full blur-[100px] opacity-[0.36]  -z-10"></div>
        <div className="h-[856px] w-[856px] bg-[#5800B0] absolute -right-52 -top-20 rounded-full blur-[200px] opacity-[0.36] -z-10"></div>
      </div>
      <div className="relative max-w-[1440px] mx-auto my-10 lg:px-20 px-5">
        <h1 className="text-4xl font-bold ">Our story</h1>
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 space-y-5 text-lg py-10 max-w-[679px]">
            <p>
              <i>
                Stereo Pay was conceived in 2019 with a strong drive to{" "}
                <b>make sound a commodity.</b>
              </i>
            </p>
            <p>
              <i>
                The way media and audio are consumed has been the same across
                all platforms – unbalanced. We looked for a solution that offers
                both social and economic equity. A solution that makes both{" "}
                <b>the sound producers and the consumers equally rewarded.</b>
              </i>
            </p>

            <p>
              <i>
                In 2021, we identified a solution that not only solves the
                problem, but is also scalable across the globe. This solution
                initiated our first move – a collaboration with like-minded
                skilled individuals in France, to drive execution excellence.
              </i>
            </p>

            <p>
              <i>
                We then researched on the most consumed audio content worldwide
                and its origin – Afro Beat, originating from Africa. The most
                populous country consuming Afro Beat in Africa? – Nigeria. This
                research informed the most suitable hotspot to launch Stereo Pay
                for the first time in the history of sound disruption.
              </i>
            </p>

            <p>
              <i>
                For the first time ever, listeners are paid to tune in while
                creators get true value as their content is now listened to by
                people who value them. Opportunity knocks every day. Here is one
                for you to take and make the true change!
              </i>
            </p>

            <p>
              <i>
                <b>We believe in making true change for you and society.</b>
              </i>
            </p>
          </div>

          <div>
            <Image
              src={story}
              alt="story"
              className="lg:py-10 lg:h-full lg:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
