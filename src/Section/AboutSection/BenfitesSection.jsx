/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";  
import { benefitsData } from "../../Constants";  

const BenfitesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Introductory Text */}
        <div className="mb-12 text-start">
          <motion.h1
            className="text-4xl sm:text-2xl md:text-3xl lg:text-6xl font-extrabold text-gray-800 mb-6 xl:px-20 "
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}  
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}  
          >
            Benefits
          </motion.h1>
          <motion.p
            className="text-lg sm:text-md   lg:text-xl text-justify tracking-wider text-gray-700 mb-4 max-w-5xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}  
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}  
          >
            Quis blandit turpis cursus in hac. In hendrerit gravida rutrum
            quisque. Pellentesque habitant morbi tristique senectus et. Eget
            gravida cum sociis natoque. Pharetra diam sit amet nisl suscipit
            adipiscing bibendum. Porttitor massa id neque aliquam. In fermentum
            posuere urna nec.
          </motion.p>
          <motion.p
            className="text-lg sm:text-xl md:text-xl lg:text-xl text-justify tracking-wider text-gray-700 max-w-5xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}  
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} 
          >
            Rhoncus aenean vel elit scelerisque mauris pellentesque. Nullam ac
            tortor vitae purus faucibus ornare suspendisse sed nisi. Consequat
            id porta nibh venenatis cras sed.
          </motion.p>
        </div> 

        {/* Benefits Cards Section */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:p-8 ">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-blue-200/50 p-4 rounded-xl shadow-xl shadow-blue-500/50 transform transition duration-300 ease-in-out bg-blue-300/50 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 hover:translate-y-[-10px]"
              initial={{ opacity: 0, y: 50 }}  
              whileInView={{ opacity: 1, y: 0 }}  
              transition={{ duration: 0.6, delay: 0.3 * index, ease: "easeOut" }} 
              viewport={{ once: false, amount: 0.2 }}  
            >
              <div className="flex justify-start mb-4">
                <div className="text-4xl text-blue-500">{benefit.icon}</div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-start px-4">
                {benefit.title}
              </h3>
              <p className="text-lg text-gray-600 text-start px-4">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenfitesSection;
