"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import logo from "../../../public/images/logo.png";
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const closeSubmenu = () => {
    setSubmenuOpen(false);
  };

  useEffect(() => {
    if (submenuOpen) {
      window.addEventListener('click', closeSubmenu);
    } else {
      window.removeEventListener('click', closeSubmenu);
    }

    return () => {
      window.removeEventListener('click', closeSubmenu);
    };
  }, [submenuOpen]);

  const handleSubmenuClick = (e) => {
    e.stopPropagation();
    toggleSubmenu();
  };

  return (
    <nav className="bg-white/30 bg-opacity-30 backdrop-blur-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between  h-24">
          <div className="flex-shrink-0">
            <Link href="/" className=" !font-bold">
              <Image src={logo} alt="" className='h-auto w-full'/>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className={`px-3 py-2 rounded-md  font-medium ${pathname === '/' ? 'text-black !font-bold' : 'text-black'}`}>
                  Home
              </Link>
              <div className="relative group" onClick={handleSubmenuClick}>
                <button
                  className={`px-3 py-2 rounded-md  font-medium flex items-center ${pathname === '/how-it-works/creators' || pathname === '/how-it-works/listeners' ? 'text-black !font-bold' : 'text-black'}`}
                >
                  How does it work?
                  <FaChevronDown className={`ml-1 transition-transform ${submenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {submenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-0 mt-8 w-48 rounded-lg shadow-lg bg-white/30 p-3 bg-opacity-30 !backdrop-blur-md "
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Link href="/how-it-works/creators" className={`${pathname === '/how-it-works/creators' ? 'text-black !font-bold bg-white' : 'text-black'} block px-4 py-2 rounded-lg  `} onClick={handleSubmenuClick}>
                      Creators
                    </Link>
                    <Link href="/how-it-works/listeners" className={`${pathname === '/how-it-works/listeners' ? 'text-black !font-bold bg-white' : 'text-black'} block px-4 py-2 rounded-lg `} onClick={handleSubmenuClick}>
                      Listeners
                    </Link>
                  </motion.div>
                )}
              </div>
              <Link href="/about" className={`px-3 py-2 rounded-md  font-medium ${pathname === '/about' ? 'text-black !font-bold' : 'text-black'}`}>
                About us
              </Link>
              <Link href="/contact" className={`px-3 py-2 rounded-md  font-medium ${pathname === '/contact' ? 'text-black !font-bold' : 'text-black'}`}>
                Contact
              </Link>
              <Link href="/download" className="px-7 py-3 rounded-[10px] shadow-md shadow-[#5800B0]  font-medium text-white bg-[#5800B0] hover:bg-primary">
                Download
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/' ? 'text-black !font-bold' : 'text-black'}`}>
              Home
            </Link>
            <div className="relative">
              <button
                onClick={handleSubmenuClick}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center ${pathname === '/how-it-works' ? 'text-black !font-bold' : 'text-black'}`}
              >
                How does it work?
                <FaChevronDown className={`ml-1 transition-transform ${submenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {submenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pl-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link href="/how-it-works/creators" className="block px-4 py-2  text-black hover:bg-gray-100">
                    Creators
                  </Link>
                  <Link href="/how-it-works/listeners" className="block px-4 py-2  text-black hover:bg-gray-100">
                    Listeners
                  </Link>
                </motion.div>
              )}
            </div>
            <Link href="/about" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/about' ? 'text-black !font-bold' : 'text-black'}`}>
              About us
            </Link>
            <Link href="/contact" className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/contact' ? 'text-black !font-bold' : 'text-black'}`}>
              Contact
            </Link>
            <Link href="/download" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-purple-600 hover:bg-purple-700">
              Download
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;