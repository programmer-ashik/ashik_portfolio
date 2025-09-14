"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
const PriceCard = ({ title, price, features, isActive }) => {
      const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };
  return (
    <motion.div
     initial={{ opacity: 0, y: 100, scale: 0.5 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration:0.6, ease: "easeInOut" }}
    viewport={{ once: false }}
      className={`rounded-[20px] p-12 shadow-[20px] ${
        isActive ? "tmponhover my_border h-[570px] translate-y-[-40px]" : " h-[470px] bg-gray-900 text-white"
              } transition-all duration-300 hover:scale-[1.02] tmponhover space-y-12`}
           onMouseMove={handleMouseMove}
                  style={{
                    '--color-primary': '#fb1359',
                    '--color-gray-2': '#1a1a1a',
                  }}
    >
      <span className="text-sm font-semibold primary uppercase">
        {title}
      </span>
      <h3 className="text-5xl font-bold mt-4">${price}</h3>
      <p className="text-sm text-gray-400 my-3">Per Month</p>
<hr className="border-t border-gray-700 mb-6" />
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <FaCircleCheck className="text-[#fb1359]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium ${
          isActive
            ? "bg-black hover:bg-[#fb1359] text-white"
            : " text-white bg-[#fb1359] hover:bg-[#fb1359]/80"
        } transition duration-700 group`}
      >
        Get Started
        <span className="inline-flex items-center gap-1">
          <FaArrowRight className="text-sm opacity-0 translate-x-[-100px] text-black group-hover:text-white group-hover:opacity-100 group-hover:translate-x-3 transition duration-1000" />
        </span>
      </Link>
    </motion.div>
  );
};

export default PriceCard;
