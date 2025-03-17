/* eslint-disable no-unused-vars */
import React from "react";
import { clientOverview } from "../../Constants";
import { motion } from "framer-motion";

const HappyClientAbout = () => {
  return (
    <motion.section
      className="px-6 py-16 "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-lg md:text-4xl font-bold text-center text-gray-800 mb-12">
        What Our <span className="text-purple-600">Happy Clients</span> Say About Us
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-10 max-w-6xl mx-auto">
        {clientOverview.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg lg:hover:scale-1.02 lg:hover:rotate-2 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}  
            transition={{ duration: 0.6, delay: index * 0.1 }}
            // whileHover={{
            //   scale: 1.02,
            //   rotate: 2,  
            //   boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
            //   transition: { duration: 0.2 },
            // }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={item.clientimg}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-purple-200"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <span className="text-xs text-gray-500">{item.title}</span>
              </div>
              <img
                src={item.starimg}
                alt="Rating"
                className="w-22 h-6  mb-6 ml-auto"
              />
            </div>

            <p className="text-gray-600 leading-relaxed text-xs md:text-lg">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default HappyClientAbout;
