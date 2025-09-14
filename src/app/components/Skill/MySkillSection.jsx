"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { LuBuilding2, LuCalendar, LuPenTool } from "react-icons/lu";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";

const skills = [
  {
    icon: <LuBuilding2 className="text-3xl md:text-5xl text-primary" />,
    title: "UI/Visual Design",
    done: "21 Done",
    description:
      "Skilled in creating intuitive user interfaces and visually appealing layouts that enhance usability and brand identity.",
  },
  {
    icon: <LuCalendar className="text-3xl md:text-5xl text-primary" />,
    title: "Web Design",
    done: "18 Done",
    description:
      "Experienced in designing responsive and accessible websites, ensuring seamless user experiences across devices.",
  },
  {
    icon: <LuPenTool className="text-3xl md:text-5xl text-primary" />,
    title: "Motion Design",
    done: "20 Done",
    description:
      "Proficient in crafting engaging animations and motion graphics that bring digital experiences to life.",
  },
];
const MySkillSection = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [hoverY, setHoverY] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (index) => {
    const card = cardRefs.current[index];
    if (card && containerRef.current) {
      const cardRect = card.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      const offsetY = cardRect.top - containerRect.top;

      setHoverY(offsetY);
      setCardHeight(cardRect.height);
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section className="my-skill py-16 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={"My Skill"}
          subTitle={"Elevated Designs Personalized"}
          subtitle1={"the best Experiences"}
          state={true}
        />
        <div ref={containerRef} className="relative grid grid-cols-1 gap-6">
          {/* Sliding background */}
          <div
            className={`pointer-events-none absolute left-0 w-full bg-[#fb1359] text-white transition-all duration-500 ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transform: `translateY(${hoverY}px)`,
              height: `${cardHeight}px`,
            }}
          />

          {skills.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="relative group cursor-pointer z-10 flex flex-col sm:flex-row justify-between items-center bg-transparent border-b-[1px] border-gray-700 py-16 px-8 shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="w-full sm:w-2/6 flex flex-col sm:flex-row sm:items-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                {skill.icon}
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-semibold">{skill.title}</h3>
                  <p className="text-sm text-white">{skill.done}</p>
                </div>
              </div>

              <div className="w-full sm:w-3/6 text-center sm:text-left mt-6 sm:mt-0">
                <p className="text-white text-sm">{skill.description}</p>
              </div>

              <div className="w-full sm:w-1/6 flex justify-end mt-6 sm:mt-0">
                <Link
                  href="#"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Read More
                  <FaAngleRight className="ml-2 text-sm" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkillSection;
