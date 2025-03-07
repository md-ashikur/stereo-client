"use client"

import Image from "next/image";
import logo from "../../public/images/logo.png";
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
      {/* Top Design */}
      <div className="-mb-6 bg-secondary">
        <div className="top-design2 "></div>

        <div className="top-design1 "></div>
      </div>

      <footer className="bg-[#5800B0] font-light text-sm text-white py-10 lg:px-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Contact */}
          <div className="space-y-4">
            <Image src={logo} alt="" className="w-28" />

            <p className="text-sm">
              805 route de Sully 45460 Bray en Val <br />
              <a
                href="mailto:contact@loungeandspa.fr"
                className="hover:underline"
              >
                contact@loungeandspa.fr
              </a>
              <br />
              06 43 17 68 68
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-semibold mb-4 text-xl">Menu</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                A propos de nous
                </a>
              </li>
              
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
             
              <li>
                <Link href="/cgv" className="hover:underline">
                  CGV
                </Link>
              </li>
            </ul>
          </div>

          {/* Meet Lounge and Spa */}
          <div>
            <h3 className="font-semibold mb-4  text-xl">Meet Lounge and Spa</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  EVJF
                </a>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline">
                  Gallery
                </Link>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline">
                  ENTREPRISES (jusqu&apos;à 80 pers)
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  CARTES CADEAUX
                </a>
              </li>
            </ul>
          </div>

       
        </div>
      </footer>
    </div>
  );
};

export default Footer;
