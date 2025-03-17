/* eslint-disable no-unused-vars */
import React from "react";
import { carlogo } from "../../Constants";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const BrowserSection = () => {
  return (
    <>
      <section className=" bg-gradient-to-r from-blue-100 via-white to-blue-100 py-12 mt-15">
        <div className=" ">
          <motion.h1
            className="text-4xl font-semibold text-center mb-12 text-gray-800 tracking-wide"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Browser by Brand
          </motion.h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 md:px-20 lg:px-15 sm:px-8 px-10">
            {carlogo.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center lg:h-[180px] bg-white p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 80,
                }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <motion.img
                  src={item.image}
                  alt={item.logo}
                  className="w-28 h-28 object-contain mb-4 transition-transform transform hover:scale-110"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                />
                <motion.h1
                  className="text-xl font-semibold text-gray-800 hover:text-green-600 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  {item.logo}
                </motion.h1>
              </motion.div>
            ))}
          </div>
          <motion.button
            className="flex items-center gap-2 mt-8 px-10 lg:px-15 md:px-20 sm:px-10 py-3   text-gray-800 font-semibold rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            See All Brands
            <IoIosArrowDown className="transition-transform duration-300 hover:rotate-360" />
          </motion.button>
        </div>
      </section>
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  bg-gray-910 py-16  lg:pl-20 flex justify-between items-center">
        <div className=" text-start p-8 md:p-6 sm:p-8">
          <motion.h1
            className="text-xl md:text-3xl sm:2xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Send an inquiry now and get the best offers suitable for your
            requirements
          </motion.h1>
          <motion.p
            className="text-md text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </motion.p>
        </div>
        <motion.button
          className="px-4 py-3 ml-10   w-60 sm:ml-8 md:ml-8 lg:ml-20 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 transform hover:scale-100"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Get in Touch
        </motion.button>
      </section>
    </>
  );
};

export default BrowserSection;
