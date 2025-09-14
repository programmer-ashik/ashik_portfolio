"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";
import { GiAirplaneDeparture } from "react-icons/gi";
import SectionHeader from '../Shared/SectionHeader/SectionHeader';
const portfolioItems = [
  {
    title: 'Digital Transformation Advisors',
    category: 'Development Coaches',
    image: 'portfoli-img-1.jpg',
    href:"project-details.html",
  },
  {
    title: 'My work is driven by the belief that thoughtful.',
    category: 'Development App',
    image: 'portfoli-img-2.jpg',
    href:"project-details.html",
  },
  {
    title: 'In this portfolio, you’ll find a curated selection',
    category: 'Web Design',
    image: 'portfoli-img-3.jpg',
    href:"project-details.html",
  },
  {
    title: 'I’ve had the privilege of working with various',
    category: 'App Development',
    image: 'portfoli-img-4.jpg',
    href:"project-details.html",
  },
];

const Portfolio = () => {
  return (
    <div className="h-full bg-gray-950 py-16">
          <div className="container mx-auto px-4">
              {/* Section Header */}
              <SectionHeader
                  title={"Latest Portfolio"}
                  subTitle={"Transforming Ideas into"}
                  subtitle1={"Exceptional" }
                  descriptions={`"Business consulting consultants provide expert advice and guide businesses to help them improve their
            performance, efficiency, and organizational"`}
              />
        {/* Portfolio Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
          {portfolioItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay:0.2 * index, ease: "easeInOut" }}
              viewport={{ once: false }}
              key={index}
              className={`rounded-lg shadow-md overflow-hidden`}
            >
              <div className="portfoli-card-img">
                <a
                  className="block tmp-scroll-trigger tmp-zoom-in"
                  href="project-details.html"
                >
                  <Image
                    src={`/images/latest-portfolio/${item.image}`}
                    alt="Thumbnail"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                  priority
                  />
                </a>
              </div>
              <div className=" group bg-black flex items-center justify-between p-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800 my-2">
                <Link href={item?.href} className="relative text-white text-xl transition-colors duration-1000 hover:text-[#fb1359]
             after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:rounded-md after:w-0 after:bg-[#fb1359] 
             after:transition-all after:duration-500 hover:after:w-full tracking-wide">
              {item.title}
              </Link>
              </h4>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
                 <Link href={item.href} className="group relative inline-block">
      <div className="w-14 h-14 border border-gray-700 bg-primary rounded-md flex items-center justify-center overflow-hidden transition-colors duration-500 group-hover:bg-red-500">
        {/* First arrow: visible by default, moves out on hover */}
        <FaArrowRight
          className="absolute text-2xl text-white transform rotate-[-45deg] transition-all duration-500 group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:opacity-0"
        />

        {/* Second arrow: hidden by default, enters from bottom-left on hover */}
        <GiAirplaneDeparture
          className="absolute text-3xl text-white transform rotate-[-45deg] translate-x-[-1.5rem] translate-y-[1.5rem] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
        />
      </div>
    </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
