/* eslint-disable no-unused-vars */
import React from "react";
import Image from "../../assets/Desktop/Rectangle 4.png";
import frameimg from "../../assets/Frame 45.png";
import { aboutDetails } from "../../Constants";
import { motion } from "framer-motion"; // Import Framer Motion

const AboutImage = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Main container */}
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-center">
          
          {/* Left Image */}
          <motion.div
            className="w-full sm:w-full md:w-1/1 lg:w-1/2 mb-8 lg:mb-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img
              src={Image}
              alt="About"
              className="w-full h-100 md:h-180 sm:h-150 rounded-lg shadow-lg object-cover"
            />
          </motion.div>

          {/* Right Text Section */}
          <motion.div
            className="w-full sm:w-full md:w-1/1 lg:w-1/2 md:pl-12"
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h className="text-3xl font-semibold text-gray-800 mb-6">
              Why Choose Us
            </h>
            <p className="text-lg text-gray-600 mb-6">
              Quis blandit turpis cursus in hac. In hendrerit gravida rutrum
              quisque. Pellentesque habitant morbi tristique senectus et. Eget
              gravida cum sociis natoque. Pharetra diam sit amet nisl suscipit
              adipiscing bibendum. Porttitor massa id neque aliquam. In fermentum
              posuere urna nec. Rhoncus aenean vel elit scelerisque mauris
              pellentesque. Nullam ac tortor vitae purus faucibus ornare
              suspendisse sed nisi. Consequat id porta nibh venenatis cras sed.
            </p>

            {/* Mapped Content with Animation */}
            <div className="space-y-6">
              {aboutDetails.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <img
                    src={frameimg}
                    alt="icon"
                    className="w-8 h-8 inline-block bg-gray-200 p-2 rounded-full"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      {item.headline}
                    </h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutImage;
