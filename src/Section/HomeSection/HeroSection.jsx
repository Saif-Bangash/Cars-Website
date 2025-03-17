/* eslint-disable no-unused-vars */
import React from "react";
import HERO_IMG from "../../assets/Hero-img.jpeg";
import { FaWhatsapp } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { cardData } from "../../Constants";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        style={{ backgroundImage: `url(${HERO_IMG})` }}
        className="w-full h-[400px] md:w-full md:h-[650px]   sm:w-full sm:h-[400px] bg-cover bg-left-top flex justify-start items-center text-white relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="absolute inset-0 bg-gray-600 opacity-50"></div>
        <div className="relative z-10 text-start px-4 sm:px-4 md:px-16 max-w-3xl">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-gray-100"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Car import services with delivery to your doorstep.
          </motion.h1>
          <div className="flex justify-center gap-4 items-start flex-col sm:flex-row">
            <motion.button
              className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              Get a Quote
            </motion.button>
            <motion.a
              href="https://wa.me/9715581819024"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-green-500 transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <FaWhatsapp className="text-2xl" />
              <span>+971 5581819024</span>
            </motion.a>
            <motion.a
              href="mailto:request@example.com"
              className="flex items-center gap-2 text-lg hover:text-red-500 transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <MdMarkEmailUnread className="text-2xl" />
              <span>request@example.com</span>
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Card Section */}
      <motion.section
        className="absolute md:top-[630px] w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the section is visible
      >
        <div className="max-w-screen-xl mx-auto md:px-12">
          <div className="bg-gray-100 rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 text-black">
            {cardData.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 flex flex-col items-center lg:h-36 lg:p-4 md:h-40 md:p-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }} // Adding delay for staggered effect
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the card is visible
              >
                <div className="flex gap-5 mb-4 justify-center items-center text-black">
                  <span className="  bg-amber-600 p-2 rounded-full">
                    {item.icon}
                  </span>
                  <div className="flex flex-col justify-center items-start">
                    <h3 className="text-md font-bold text-gray-600 mb-2 md:text-xs">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-start text-sm md:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default HeroSection;
