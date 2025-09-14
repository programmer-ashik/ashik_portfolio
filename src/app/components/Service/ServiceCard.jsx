import { motion } from "framer-motion";
const services = [
  {
    icon: <FaCode className="text-3xl text-pink-600" />,
    title: "UI/UX Design",
    description:
      "Each one showcases my approach and dedication to detail, creativity. Each one showcases my approach and dedication to detail, creativity",
  },
  {
    icon: <FaPalette className="text-3xl text-blue-600" />,
    title: "Web Development",
    description:
      "Business consulting consul us to a provide expert advice businesses. Each one showcases my approach and dedication to detail, creativity",
  },
  {
    icon: <FaPrint className="text-3xl text-green-600" />,
    title: "Business Solutions",
    description:
      "Each one showcases my approach and dedication to detail, creativity. Each one showcases my approach and dedication to detail, creativity",
  },
  {
    icon: <FaHandshake className="text-3xl text-yellow-600" />,
    title: "Profit Partners",
    description:
      "Business consulting consul us to a provide expert advice businesses. Each one showcases my approach and dedication to detail, creativity",
  },
];
const ServiceCard = () => {
 const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };
  return (
    <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase ">What I Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-300">
            What I Provide For You
          </h2>
        </div>

        {services.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.9, delay: index * 0.01, ease: "easeInOut" }}
              viewport={{ once: false }}
                  key={index}
                  className={`tmponhover my_border p-12 rounded-[20px] text-center shadow-md transition space-y-6 `}
                  onMouseMove={handleMouseMove}
                  style={{
                    '--color-primary': '#fb1359',
                    '--color-gray-2': '#1a1a1a',}}>
                  <h2 className=" text-start text-xl sm:text-2xl">
                    <span className="mr-4 font-bold">{item.number}</span>
                   <span className=" font-bold">{item.title}</span> 
                  </h2>
                  <p className=" text-gray-500">{item.description}</p>
                </motion.div>))}
      </div>
  )
}

export default ServiceCard