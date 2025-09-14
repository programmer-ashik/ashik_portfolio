"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa6";
import { LiaPencilRulerSolid } from "react-icons/lia";
import { PiBezierCurveLight } from "react-icons/pi";
const services = [
  {
    icon: <LiaPencilRulerSolid className="text-[50px] text-[#fb1359]" />,
    title: "Web Design",
    projects: "50 Projects",
    href: "/service-details",
  },
  {
    icon: <PiBezierCurveLight className="text-[50px] text-[#fb1359]" />,
    title: "Ui/Ux Design",
    projects: "20 Projects",
    href: "/service-details",
  },
  {
    icon: <FaRegLightbulb className="text-[50px] text-[#fb1359]" />,
    title: "Web Research",
    projects: "20 Projects",
    href: "/service-details",
  },
  {
    icon: <FaRegEnvelope className="text-[50px] text-[#fb1359]" />,
    title: "Marketing",
    projects: "100 Projects",
    href: "/service-details",
  },
];

export default function ServiceSection() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className=" flex flex-col justify-center items-center border-[2px] border-[rgba(251,19,89,0.1)] shadow-lg rounded-lg p-12 w-full sm:w-[45%] lg:w-[22%] text-center hover:shadow-xl transition duration-300"
            >
              <div className="mb-4 text-center">{service.icon}</div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 my-2">
                <Link
                  href={service.href}
                  className="relative text-white text-xl transition-colors duration-500 hover:text-[#fb1359]
             after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:rounded-md after:w-0 after:bg-[#fb1359] 
             after:transition-all after:duration-500 hover:after:w-full tracking-wide"
                >
                  {service.title}
                </Link>
              </h4>
              <p className="text-gray-400">{service.projects}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
