"use client"

import Image from "next/image";
import logo from "../../public/images/logo white.png";
import Link from "next/link";

import { usePathname } from "next/navigation";
const Footer = () => {

  const pathName = usePathname();

  if(pathName.includes('/admin')){
    return (
      <></>
    )
  }
  return (
    <div>
     

      <footer className="bg-[#5800B0] font-light text-sm text-white py-10 lg:px-20">
        <div className=" px-6 flex  gap-8">
          {/* Logo and Contact */}
          <div className="space-y-4">
            <Image src={logo} alt="" className="w-28" />
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                Home
                </Link>
              </li>
              
              <li>
                <Link href="#" className="hover:underline">
                How does it works for creators
                </Link>
              </li>
             
              <li>
                <Link href="/cgv" className="hover:underline">
                How does it works for listeners
                </Link>
              </li>
            </ul>
        
            {/* Social Icons */}
            <div className="flex space-x-4">
              
            </div>
          </div>

          <div>
          <div className="border-l border-white"></div>
          <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                About us
                </Link>
              </li>
              
              <li>
                <Link href="#" className="hover:underline">
                Contact
                </Link>
              </li>
             
              <li>
                <Link href="/cgv" className="hover:underline">
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
