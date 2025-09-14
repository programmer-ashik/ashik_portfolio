"use client";
import { motion } from "framer-motion";
import MyForm from "./Form";
const GetInTouch = () => {
  
      const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };
  return (
      <section
           onMouseMove={handleMouseMove}
                  style={{
                    '--color-primary': '#fb1359',
                    '--color-gray-2': '#1a1a1a',
                  }}
          className="tmponhover my_border rounded-[20px] py-16 bg-[#141414] p-4 sm:p-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 ">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 150 }}
            whileInView={{ opacity: 1, scale:1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className=" w-full sm:w-2/5 text-white ">
            <span className="text-xl font-semibold uppercase primary tracking-wide">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-2 leading-relaxed tracking-wider">
            <div>Elevate your</div>
            <div className=" mt-2">brand with Me</div>
            </h2>
            <p className=" text-base leading-relaxed text-white">
              It is a long established fact that a reader will be distracted by the readable content of a page.
              It is a long established fact that a reader will be distracted.
            </p>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 150 }}
            whileInView={{ opacity: 1, scale:1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            
            className="w-full sm:w-3/5  bg-transparent rounded-lg shadow-md py-6 ">
            <MyForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
