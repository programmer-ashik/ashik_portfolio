"use client"
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
  const serviceCategories = [
    "TechPros",
    "NetWorks",
    "DataMasters",
    "Dibetics section",
    "DigitalSolutions",
    "CodeGenius",
  ];
const ServiceList = () => {
     const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };
  return (
    <div className="lg:col-span-4  lg:pr-8 ">
          <div className="bg-[#1a1a1a] tmponhover my_border hover:tmponhover p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 tmponhover"
           onMouseMove={handleMouseMove}
                  style={{
                    '--color-primary': '#fb1359',
                    '--color-gray-2': '#1a1a1a',
                  }}
          >
          <h3 className="text-xl font-bold text-white mb-4">Service Category</h3>
          <div className="space-y-3 ">
            {serviceCategories.map((title, index) => (
              <Link
                key={index}
                href="#"
                className="flex justify-between items-center p-3 rounded-md bg-[#0f0f0f] hover:bg-[#fb1359] hover:text-white transition-colors duration-300"
              >
                <p className="text-sm font-medium">{title}</p>
                <FaAngleRight className="text-sm" />
              </Link>
            ))}
          </div>
        </div>
      </div>
  )
}

export default ServiceList