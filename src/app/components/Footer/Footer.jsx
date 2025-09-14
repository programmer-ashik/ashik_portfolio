// components/Footer.tsx
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Social from "../Navbar/Social";
import LogoAndNewsLetter from "./LogoAndNewsLetter";
const quickMenu = [
  {
    name: "About Me",
    path: "/about",
  },
  {
    name: "Service",
    path: "/service",
  },
  {
    name: "Contact Me",
    path: "/contact",
  },
  {
    name: "Pricing",
    path: "/service",
  },
];

const Footer = () => {
  return (
    <footer className=" h-full sm:h-[350px] text-white py-10 sm:py-14 font-sans font-semibold">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Newsletter */}
          <div className="">
            <LogoAndNewsLetter />
          </div>
          {/* Quick Links */}
          <div>
            <h5 className="text-xl font-semibold mb-6">Quick Links</h5>
            <ul className="space-y-2">
              {quickMenu.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.path}
                    className="hover:text-primary relative text-white text-lg transition-colors duration-500 hover:text-[#fb1359]
          after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:rounded-md after:w-0 after:bg-[#fb1359] 
          after:transition-all after:duration-500 hover:after:w-full tracking-wide"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h1 className="text-2xl font-semibold mb-6">Contact</h1>
            <ul className="space-y-4 text-sm">
              {/* Email */}
              <li className="flex items-start gap-3">
                <a
                  href="mailto:ashikhasan998@gmail.com"
                  className="relative text-white text-lg transition-colors duration-500 hover:text-[#fb1359]
          after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:rounded-md after:w-0 after:bg-[#fb1359] 
          after:transition-all after:duration-500 hover:after:w-full tracking-wide"
                >
                  <p className="flex items-center gap-2">
                    <FaEnvelope className="mt-1 text-primary" />
                    <span>ashikhasan998@gmail.com</span>
                  </p>
                </a>
              </li>

              {/* Address (non-clickable or link to map if needed) */}
              <li className="flex items-start gap-3">
                <a
                  href="https://maps.google.com/?q=3891+Ranchview+Dr,+Richardson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-white text-lg transition-colors duration-500 hover:text-[#fb1359]
          after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:rounded-md after:w-0 after:bg-[#fb1359] 
          after:transition-all after:duration-500 hover:after:w-full tracking-wide"
                >
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="mt-1 text-primary" />
                    <span>Dhaka, Bangladesh</span>
                  </p>
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3">
                <a
                  href="tel:01245789321"
                  className="relative text-white text-lg transition-colors duration-500 hover:text-[#fb1359]
          after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:rounded-md after:w-0 after:bg-[#fb1359] 
          after:transition-all after:duration-500 hover:after:w-full tracking-wide"
                >
                  <p className="flex items-center gap-2">
                    <FaPhone className="mt-1 text-primary" />
                    <span>01773122981</span>
                  </p>
                </a>
              </li>
            </ul>

            <div className="my-4">
              <Social />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
