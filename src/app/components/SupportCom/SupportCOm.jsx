"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  'company-logo-1.svg',
  'company-logo-2.svg',
  'company-logo-3.svg',
  'company-logo-4.svg',
  'company-logo-5.svg',
  'company-logo-6.svg',
  'company-logo-7.svg',
  'company-logo-8.svg',
];

const SupportCom = () => {
  return (
    <div className="our-supported-company-area tmp-section-gapTop pt-10 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {logos.map((logo, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: .8, ease: "easeInOut" }}
              viewport={{ once: false }}
              key={index}
              className={`border-1 border-gray-900 p-12`}
            >
              <Image
                src={`/images/our-supported-company/${logo}`}
                alt={`Company Logo ${index + 1}`}
                      className="h-16 w-[200px] object-contain"
                      width={100}
                      height={100}
                      priority
                      loading="eager"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportCom;
