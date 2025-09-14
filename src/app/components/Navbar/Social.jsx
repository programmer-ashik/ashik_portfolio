import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const socialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/Ashik.998/",
  },
  { name: "Twitter", icon: <FaTwitter />, link: "https://x.com/ashikDevOps" },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/ashikhasan998/",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/ashik-hasan-0b00b028b/",
  },
];
const Social = ({ mobile }) => {
  return (
    <div className={` ${mobile ? " flex" : "hidden xl:flex items-center"} `}>
      {socialLinks.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden text-white bg-[#262323] rounded-full p-3 text-xl flex items-center justify-center mx-2 group"
        >
          {/* Background hover "pop effect" */}
          <span className="absolute inset-0 rounded-full scale-0 bg-[#fb1359] transition-transform duration-500 ease-out group-hover:scale-100 z-0" />

          {/* Icon (z-10 to stay above the expanding background) */}
          <span className="relative z-10 text-sm">{social.icon}</span>
        </Link>
      ))}
    </div>
  );
};

export default Social;
