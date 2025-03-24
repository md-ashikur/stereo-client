"use client";

import Image from "next/image";
import logo from "../../public/images/logo white.png";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
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
      <footer className="bg-[#5800B0] font-light text-sm text-white py-10 lg:px-20 px-5">
      <Image src={logo} alt="" className="h-full w-auto" />
        <div className="my-10 grid lg:grid-cols-2 gap-8">
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

           
          </div>

          <div>
            <ul className="lg:border-l border-white space-y-2 lg:pl-10">
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
              <li>
                <Link href="/faq" className="hover:underline">
                 FAQ
                </Link>
              </li>
            </ul>
          </div>
           {/* Social Icons */}
           <div className="flex mt-10 space-x-4 text-xl">
            <a href="https://x.com/stereopay?s=11&t=6yYZh2nte2HGIYRBfkp1MA"> <FaXTwitter className="hover:scale-115 transition duration-150"/></a>
             <a href="https://www.linkedin.com/company/stereopay/"><FaLinkedinIn className="hover:scale-115 transition duration-150"/></a>
             <a href="https://www.instagram.com/stereopay/"><FaInstagram className="hover:scale-115 transition duration-150"/></a>
             <a href="https://www.facebook.com/stereopay"><FaFacebookF className="hover:scale-115 transition duration-150"/></a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
