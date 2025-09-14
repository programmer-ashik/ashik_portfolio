"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CounterCards from "./CounterCard";
import Stats from "./Counter";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartCount(true);
    }
  }, [isInView]);

  return (
    <section className="h-full my-8  text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Left Section - Experience */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            ref={ref}
            className="w-full lg:w-1/2 bg-gradient-to-br from-black to-red-900 px-4 sm:px-8 md:px-12 py-10 rounded-lg shadow-lg"
          >
            <div className="mb-6 flex items-center gap-8">
              <div className="flex flex-col items-center text-[#fb1359] text-[100px] xl:text-[200px] font-bold leading-none">
                <Stats digits={[4]} />
              </div>
              <h3 className="text-4xl md:text-5xl font-semibold leading-snug">
                <span>Years Of</span>
                <br />
                <span>Experience</span>
              </h3>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400"
            >
              <p>
                Business consulting consultants provide expert advice and guide
                businesses to help improve their performance and efficiency.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Section - Counters */}
          <div className="w-full lg:w-1/2">
            <CounterCards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
