"use client";
import { motion } from "framer-motion";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import EducationCard from "./EducationCard";
const educationData = [
  {
    title: "Trainer Marketing",
    year: "2005-2009",
    description:
      "A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio.",
  },
  {
    title: "Assistant Director",
    year: "2010-2014",
    description:
      "Each project here showcases my commitment to excellence and adaptability, tailored to meet each client’s unique needs.",
  },
  {
    title: "Design Assistant",
    year: "2008-2012",
    description:
      "I’ve had the privilege of working with various clients, from startups to established companies, helping bring their visions to life.",
  },
  {
    title: "Design Assistant",
    year: "2008-2012",
    description:
      "Each project here showcases my commitment to excellence and adaptability, tailored to meet each client’s unique needs a personal.",
  },
];

const experienceData = [
  {
    company: "Soft Tech (2 Years)",
    role: "UI/UX Designer",
    description:
      "Designed and optimized user interfaces and experiences, creating visually appealing, user-friendly, and responsive designs to enhance customer satisfaction.",
  },
  {
    company: "ModernTech (3 Years)",
    role: "App Developer",
    description:
      "Developed and maintained mobile applications, focusing on performance, usability, and scalability to deliver seamless digital solutions.",
  },
];

const EducationExperience = () => {
  return (
    <section className="education-experience tmp-section-gapTop py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          title={"Education & Experience"}
          subTitle={"Empowering Creativity"}
          subtitle1={"through"}
          descriptions={
            " Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational"
          }
        />
        {/* Education Section */}
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false }}
          className="text-2xl font-bold mb-8 flex items-center gap-2 tmp-scroll-trigger tmp-fade-in animation-order-1"
        >
          Education
          <img
            src="/images/custom-line/custom-line.png"
            alt="custom-line"
            className="inline-block"
          />
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <EducationCard />
        </motion.div>

        {/* Experience Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: false }}
              className="text-2xl font-bold mb-8 flex items-center gap-2 tmp-scroll-trigger tmp-fade-in animation-order-1"
            >
              Experiences
              <img
                src="/images/custom-line/custom-line.png"
                alt="custom-line"
                className="inline-block"
              />
            </motion.h2>

            {experienceData.map((exp, index) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                key={index}
                className={`mb-8 space-y-4 py-5 rounded-[20px] shadow-md transition`}
              >
                <p className="uppercase text-md primary mb-2">experience</p>
                <h2 className="text-lg font-bold text-white">{exp.company}</h2>
                <h3 className="text-md font-semibold text-gray-300">
                  {exp.role}
                </h3>
                <p className="text-gray-200 mt-2">{exp.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              className="rounded-lg w-full h-auto object-cover tmp-scroll-trigger tmp-zoom-in animation-order-1"
              src="/images/experiences/expert-img.jpg"
              alt="expert-img"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
