"use client";

import Image from "next/image";
import logo from "../../public/images/logo white.png";
import Link from "next/link";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import { usePathname } from "next/navigation";
const Footer = () => {
  const pathName = usePathname();

  if (pathName.includes("/admin")) {
    return <></>;
  }
  return (
    <div>
      <footer className="bg-[#5800B0] font-light text-sm text-white py-10 lg:px-20">
      <Image src={logo} alt="" className="h-full w-auto" />
        <div className="my-10 grid grid-cols-2 gap-8">
          {/* Logo and Contact */}
          <div className="space-y-4">
            
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/how-it-works/creators" className="hover:underline">
                  How does it works for creators
                </Link>
              </li>

              <li>
                <Link
                  href="/how-it-works/listeners"
                  className="hover:underline"
                >
                  How does it works for listeners
                </Link>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex mt-10 space-x-4 text-xl">
            <a href="/"> <IoLogoTwitter className="hover:scale-115 transition duration-150"/></a>
             <a href="/"><FaLinkedinIn className="hover:scale-115 transition duration-150"/></a>
             <a href="/"><FaInstagram className="hover:scale-115 transition duration-150"/></a>
             <a href="/"><FaFacebookF className="hover:scale-115 transition duration-150"/></a>
            </div>
          </div>

          <div>
            <ul className="border-l border-white space-y-2 pl-10">
              <li>
                <Link href="/about" className="hover:underline">
                  About us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
