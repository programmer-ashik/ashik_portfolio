"use client";
import { motion } from "framer-motion";
const EducationCard = () => {
  const educationData = [
    {
      title: "ICT Instructor",
      year: "{2021-2023}",
      description:
        "Delivered ICT training and guidance to students, focusing on digital literacy, computer systems, and modern technologies to enhance learning outcomes.",
    },
    {
      title: "Innovations Project Incharge",
      year: "{2023-2024}",
      description:
        "Led innovation-driven projects, managing resources and teams to successfully design and implement creative technology solutions.",
    },
    {
      title: "VSATNET Communications Project Manager",
      year: "{2023-2024}",
      description:
        "Oversaw satellite communication projects, ensuring timely delivery, system integration, and seamless connectivity for diverse clients.",
    },
    {
      title: "Junior IT Consultant",
      year: "{2024-2025}",
      description:
        "Provided IT consultancy services, assisting businesses in improving system efficiency, troubleshooting issues, and implementing strategic technology solutions.",
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
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 cursor-pointer py-4 xl:py-8">
      {educationData.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          key={index}
          className={`tmponhover my_border p-12 rounded-[20px] shadow-md transition
                       space-y-2 `}
          onMouseMove={handleMouseMove}
          style={{
            "--color-primary": "#fb1359",
            "--color-gray-2": "#1a1a1a",
          }}
        >
          <h1 className=" font-bold text-white">{item.title}</h1>
          <p className="mr-4 font-bold">{item.year}</p>

          <p className=" text-gray-200">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default EducationCard;
