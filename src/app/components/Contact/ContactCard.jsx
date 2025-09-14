"use client";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const contactData = [
  {
    title: "Address",
    description: "300ft, Dhaka, Bangladesh",
    icon: <FaLocationDot />,
  },
  {
    title: "Phone",
    description: "+880-177-3122981",
    icon: <FaPhone />,
  },
  {
    title: "E-Mail",
    description: "ashikhasanashik998@gmail.com",
    icon: <FaEnvelope />,
  },
];
const ContactCard = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };
  return (
    <div className=" px-12 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {contactData.map((item, index) => (
        <div
          key={index}
          onMouseMove={handleMouseMove}
          style={{
            "--color-primary": "#fb1359",
            "--color-gray-2": "#1a1a1a",
          }}
          className="tmponhover my_border flex flex-col items-center justify-center gap-6 mb-6 bg-[#141414] py-20 px-16 rounded-[20px] hover:cursor-pointer"
        >
          <div className="text-3xl text-[#fb1359] p-4 bg-[#43201F] rounded-full text-center">
            {item.icon}
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-3xl tracking-wider font-bold">{item.title}</h2>
            <p className="text-gray-200">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;
