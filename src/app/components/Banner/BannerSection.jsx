"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Social from "../Navbar/Social";
export default function BannerSection() {
  return (
    <section className="py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false }}
            className="lg:w-7/12 mb-10 lg:mb-0"
          >
            <span className="text-xl uppercase text-gray-200">
              Welcome to my world
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-4 text-gray-300">
              {"I’m Ashik Hasan"} <br /> A{" "}
              <span className="text-gradient">
                <TypeAnimation
                  sequence={[
                    "Web Developer.",
                    2000,
                    "Frontend Developer.",
                    2000,
                    "Full Stack Developer.",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="inline-block text-[#fb1359] font-bold"
                />
              </span>
            </h1>
            <p className="mt-6 text-gray-300 font-primery text-base max-w-xl">
              A personal portfolio is a collection of your work, achievements,
              and skills that highlights your abilities and professional growth.
              It serves as...
            </p>

            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-2 text-gray-400">
                Find me on
              </h2>
              <Social />
            </div>
          </motion.div>

          {/* Right Image */}
          <div className="lg:w-5/12 px-4 pb-4 border-r-4 border-b-4 border-[#fb1359] rounded-[30px] bg-gray-600 ">
            <Image
              src="/ashiki.png"
              alt="Instructor"
              width={500}
              height={500}
              className="object-contain w-full h-auto p-4 rounded-[40px] "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
