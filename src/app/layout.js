import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbars/Navbar";
import Footer from "@/components/Footer";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import PopUp from "@/components/pop-up/PopUp";

const Gotham = localFont({
  src: [
    {
      path: "../../public/fonts/Gotham-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gotham-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gotham-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gotham-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GOTHAM-BOLD.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/GothamNarrow-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gotham",
});

export const metadata = {
  title: "Stereo Pay",
  description: "Turn your daily routine into daily money. One app to transform your audio content into real money. The only playlist that values your time is on Stereo Pay.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Gotham.variable} antialiased font-gotham`}>
      {/* <PopUp/> */}
        <Navbar />
        {children}
        <Footer />

        {/* Social Icons */}
        <div className="hidden lg:block fixed right-5 top-[38vh] text-[#5800B0] text-xl z-10">
          <a href="https://x.com/stereopay?s=11&t=6yYZh2nte2HGIYRBfkp1MA" target="blank">
           
            <FaXTwitter className="my-5 hover:scale-115 transition duration-150" />
          </a>
          <a href="https://www.linkedin.com/company/stereopay/" target="blank">
            <FaLinkedinIn className="my-5 hover:scale-115 transition duration-150" />
          </a>
          <a href="https://www.instagram.com/stereopay/" target="blank">
            <FaInstagram className="my-5 hover:scale-115 transition duration-150" />
          </a>
          <a href="https://www.facebook.com/stereopay" target="blank">
            <FaFacebookF className="my-5 hover:scale-115 transition duration-150" />
          </a>
        </div>

       
      </body>
    </html>
  );
}
