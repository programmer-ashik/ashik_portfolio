'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import MenuButton from '../MenuButton';
import NavbarMenu from '../NavbarMenu';
import Social from '../Social';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false)
    const togoleMenu = () => { 
        setIsOpen(!isOpen);
        setIsMobile(!isMobile)
    }
  return (
    <div className="block xl:hidden">
      {/* Menu toggle button */}
          <div  onClick={togoleMenu} className="">
              <MenuButton />
          </div>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={togoleMenu} />

      {/* Slide-in drawer */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-[#1a1a1a] text-white z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <div className="relative w-28 h-10">
            <Image src="/images/logo/logo-white-2.png" alt="Logo" fill className="object-contain" />
          </div>
          <button onClick={togoleMenu}  className="text-2xl">
            <FaXmark />
          </button>
        </div>

        {/* Nav Links */}
        <NavbarMenu mobile={isMobile} />
<div className="my-4 border-b-1 border-gray-500"></div>
        {/* Socials */}
        <Social mobile={isMobile} />
      </div>
    </div>
  );
}
