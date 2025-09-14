"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const CounterCards = () => {
  const counters = [
    { value: 50, suffix: "+", label: "Our Project Complete" },
    { value: 10, suffix: "+", label: "Our Natural Products" },
    { value: 100, suffix: "+", label: "Clients Reviews" },
    { value: 100, suffix: "+", label: "Our Satisfied Clients" },
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: false }}
      className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6"
    >
      {counters.map((counter, i) => (
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false }}
          key={i}
          onMouseMove={handleMouseMove}
          className="tmponhover my_border p-6 rounded-[20px] text-center shadow-md transition flex flex-col justify-center items-center"
          style={{
            "--color-primary": "#fb1359",
            "--color-gray-2": "#1a1a1a",
          }}
        >
          <h3 className="text-4xl font-bold text-white mb-1">
            <CountUp end={counter.value} duration={3} />
            {counter.suffix}
          </h3>
          <p className="text-gray-400 text-sm">{counter.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CounterCards;
