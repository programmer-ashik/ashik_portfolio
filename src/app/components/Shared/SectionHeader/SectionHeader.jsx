"use client";

import { motion } from "framer-motion";

const SectionHeader = ({ title, subTitle, subtitle1, descriptions, state }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0,}}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className={` ${state ? "text-start":"text-center mb-12"} `}
    >
      {title && (
        <span className=" text-primary text-xl uppercase tracking-wider font-semibold block mb-2">
          {title}
        </span>
      )}
      <h2 className="text-xl sm:text-4xl leading-8 sm:leading-[3.5rem] font-bold text-white mb-4">
        {subTitle} <br /> {subtitle1}
      </h2>
      {descriptions && (
        <div className="w-full sm:w-3/4 mx-auto">
          <p className="text-center text-gray-400 text-md">{descriptions}</p>
        </div>
      )}
    </motion.div>
  );
};

export default SectionHeader;
