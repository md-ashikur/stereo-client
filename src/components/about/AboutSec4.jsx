import Image from "next/image";
import ceo from "../../../public/images/about/Paul Rufus.png";
import coo from "../../../public/images/about/Vianney.png";
import pr from "../../../public/images/about/Gabriel Obaseki.png";


const teamMembers = [
  {
    name: "Paul Rufus",
    role: "CEO",
    image: ceo,
    description:
      "Co-founder",
  },
  {
    name: "Vianney",
    role: "COO",
    image: coo,
    description:
      "Co-founder",
  },
  {
    name: "Gabriel Obaseki",
    role: "Key advisory and PR",
    image: pr,
    description:
      "Co-founder",
  },
  
];

export default function AboutSec4() {
  return (
    <div className="relative">
      <div>
        <div className="hidden lg:block h-[355px] w-[357px] bg-[#5800B0] absolute left-0 top-40 rounded-full blur-[100px] opacity-[0.36]  -z-10"></div>
        <div className="h-[856px] w-[856px] bg-[#5800B0] absolute -right-52 -top-20 rounded-full blur-[200px] opacity-[0.36] -z-10"></div>
      </div>

      
      {/* // ==============OUR TEAM ================= */}
      <div className="max-w-[1440px] mx-auto my-40">
        <div className="flex flex-col items-center max-w-[1440px] px-5 lg:px-20 space-y-20 ">
          <h1 className="text-4xl font-bold text-center pb-10 ">Our team</h1>
       

          <div className="relative grid lg:grid-cols-3 max-w-[900px] gap-5 lg:space-y-0 space-y-20 justify-center">
            {teamMembers.slice(0, 4).map((member, index) => (
              <div
                key={index}
                className="bg-white/30 backdrop-blur-sm shadow-lg border border-white rounded-2xl flex flex-col items-center p-8 "
              >
                <div className="h-[132px] w-[132px] rounded-full overflow-hidden -mt-24">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="h-auto w-auto "
                  />
                </div>
                <div className="text-center mt-3">
                  <h3 className="font-semibold text-xl text-[#5800B0] my-2">
                    {member.name}
                  </h3>
                  <h4 className="font-semibold text-lg mb-5">{member.role}</h4>
                  <p className="text-lg">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
