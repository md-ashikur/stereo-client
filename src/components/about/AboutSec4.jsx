import Image from "next/image";
import ceo from "../../../public/images/about/ceo.jpg";
import president from "../../../public/images/about/president.jpg";
import cfo from "../../../public/images/about/cfo.jpg";
import cmo from "../../../public/images/about/cmo.jpg";
import cpo from "../../../public/images/about/cpo.jpg";
import vp from "../../../public/images/about/vp.jpg";
import cfo2 from "../../../public/images/about/cfo2.jpg";

const teamMembers = [
  {
    name: "Maria Dupont",
    role: "CEO",
    image: ceo,
    description:
      "Donec aenean diam pharetra a. Velit neque eros pellentesque pellentesque ullamcorper.",
  },
  {
    name: "John Doe",
    role: "President",
    image: president,
    description:
      "Donec aenean diam pharetra a. Velit neque eros pellentesque pellentesque ullamcorper.",
  },
  {
    name: "Jane Smith",
    role: "CFO",
    image: cfo,
    description:
      "Donec aenean diam pharetra a. Velit neque eros pellentesque pellentesque ullamcorper.",
  },
  {
    name: "Mark Johnson",
    role: "CMO",
    image: cmo,
    description:
      "Donec aenean diam pharetra a. Velit neque eros pellentesque pellentesque ullamcorper.",
  },
  {
    name: "Emily Davis",
    role: "CPO",
    image: cpo,
    description:
      "Donec aenean diam pharetra a. Velit neque eros pellentesque pellentesque ullamcorper.",
  },
  {
    name: "William Brown",
    role: "VP & HR",
    image: vp,
    description:
      "Donec aenean diam pharetra a. Velit neque eros pellentesque pellentesque ullamcorper.",
  },
  {
    name: "Sophia Taylor",
    role: "CFO",
    image: cfo2,
    description:
      "Donec aenean diam pharetra a. Velit neque eros pellentesque pellentesque ullamcorper.",
  },
];

export default function AboutSec4() {
  return (

    // ==============OUR TEAM =================
    <div className="max-w-[1440px] mx-auto my-10">
      <div className="flex flex-col items-center max-w-[1440px] px-5 lg:px-20 space-y-20 ">
        <h1 className="text-4xl font-bold text-center pb-10 ">Our team</h1>
        <div className="relative grid lg:grid-cols-4 gap-5 lg:space-y-0 space-y-20">
          {teamMembers.slice(0, 4).map((member, index) => (
            <div
              key={index}
              className="bg-white/30 backdrop-blur-sm shadow-lg border border-white rounded-2xl flex flex-col items-center p-8 "
            >
              <div className="h-[132px] w-[132px] rounded-full overflow-hidden -mt-24">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="h-auto w-auto scale-125 mt-5"
                />
              </div>
              <div className="text-center mt-3">
                <h3 className="font-semibold text-xl text-primary my-2">
                  {member.name}
                </h3>
                <h4 className="font-semibold text-lg mb-5">{member.role}</h4>
                <p className="text-lg">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative grid lg:grid-cols-3 max-w-[900px] gap-5 mt-10 lg:space-y-0 space-y-20 justify-center">
          {teamMembers.slice(4).map((member, index) => (
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
                <h3 className="font-semibold text-xl text-primary my-2">
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
  );
}
