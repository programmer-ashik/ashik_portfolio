"use client";

import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  {
    name: "Services",
    link: "service",
  },
  {
    name: "Project",
    link: "/project",
  },
  { name: "Contact", link: "/contact" },
];

export default function NavbarMenu({ mobile }) {
  return (
    <nav className={`${mobile ? "block" : "hidden xl:block"} `}>
      <div className={`${mobile ? "block" : "flex text-md"}`}>
        {navItems.map((item, index) => (
          <div key={index} className="relative group">
            {!item.dropdown ? (
              <Link
                href={item.link}
                className="text-white text-md hover:text-[#fb1359] hover:bg-[#281115] px-4 py-2 rounded-md transition duration-300 ease-in-out flex items-center"
              >
                {item.name}
              </Link>
            ) : (
              <>
                <div className="flex items-center px-4 py-2 text-white text-md  hover:text-[#fb1359] hover:bg-[#281115] rounded-md transition duration-300 ease-in-out cursor-pointer">
                  {item.name}
                  <FaChevronDown className="ml-2 text-md group-hover:rotate-180 transition duration-300" />
                </div>

                {/* Dropdown with slide-from-top animation */}
                <div
                  className={`
  transition-all duration-500 ease-in-out z-50 min-w-[180px] overflow-hidden
  ${
    mobile
      ? "absolute -left-44 -mt-8 invisible opacity-0 translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0"
      : "absolute left-0 mt-2 invisible opacity-0 translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0"
  }
   text-white hover:text-[#fb1359] my-2
`}
                >
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.link}
                      className=" py-2 text-white hover:text-[#fb1359]
             flex items-center justify-between px-8 group-hover:px-2
              rounded-md transition-all duration-500 ease-in-out"
                    >
                      {subItem.name}
                      <FaChevronDown className="ml-2 text-md transform rotate-270 hover:translate-x-1 transition-all duration-500 ease-in-out" />
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
