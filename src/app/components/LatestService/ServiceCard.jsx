"use client";
import { motion } from "framer-motion";
const ServiceCard = () => {
  const services = [
    {
      number: "01.",
      title: "A Portfolio of Creativity",
      description:
        "Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency",
    },
    {
      number: "02.",
      title: "My Portfolio of Innovation",
      description:
        "My work is driven by the belief that thoughtful design and strategic planning can empower brands, transform businesses",
    },
    {
      number: "03.",
      title: "A Showcase of My Projects",
      description:
        "In this portfolio, you’ll find a curated selection of projects that highlight my skills in [Main Areas, e.g., responsive web design",
    },
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
    <div className=" w-full grid grid-cols-1 md:grid-cols-1 gap-6 cursor-pointer py-6 xl:py-8">
      {services.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, scaleZ: 20 }}
          whileInView={{ opacity: 1, scaleZ: 0 }}
          transition={{ duration: 0.2, delay: index * 0.2, ease: "easeInOut" }}
          viewport={{ once: false }}
          key={index}
          className={`tmponhover my_border p-12 rounded-[20px] text-center shadow-md transition space-y-6 `}
          onMouseMove={handleMouseMove}
          style={{
            "--color-primary": "#fb1359",
            "--color-gray-2": "#1a1a1a",
          }}
        >
          <h2 className=" text-start text-xl sm:text-2xl">
            <span className="mr-4 font-bold">{item.number}</span>
            <span className=" font-bold">{item.title}</span>
          </h2>
          <p className="text-gray-500">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceCard;
