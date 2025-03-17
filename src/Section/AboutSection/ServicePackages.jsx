/* eslint-disable no-unused-vars */
import React from "react";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const ServicePackages = () => {
  return (
    <>
      {/* Car Imports Section */}
      <motion.section
         className="bg-gray-50 py-16 sm:py-20 md:py-25"
        initial={{ opacity: 0, y: 50 }} // Initial state (invisible and slightly down)
        whileInView={{ opacity: 1, y: 0 }} // State when in view (visible and in place)
        viewport={{ once: true, amount: 0.2 }} // Triggers once when 20% of the section is in view
        transition={{ duration: 1 }} // Duration of the animation
      >
        <div  className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 text-start">
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Car Imports: A Full Package of Services
          </h1>
          <p className="text-lg sm:text-xl md:text-xl text-gray-600 leading-relaxed mb-8">
            Id ornare arcu odio ut sem nulla. Sagittis aliquam malesuada
            bibendum arcu vitae elementum curabitur. Velit dignissim sodales ut
            eu sem integer vitae justo. A erat nam at lectus urna duis convallis
            convallis. Feugiat scelerisque varius morbi enim nunc faucibus a
            pellentesque. Risus ultricies tristique nulla aliquet enim tortor.
            Consectetur a erat nam at. Elit sed vulputate mi sit amet mauris.
            Platea dictumst quisque sagittis purus sit amet volutpat consequat.
            Porta nibh venenatis cras sed felis eget. Ultricies lacus sed turpis
            tincidunt id aliquet risus feugiat in. Neque convallis a cras semper
            auctor. Odio tempor orci dapibus ultrices. Et malesuada fames ac
            turpis. Nulla pellentesque dignissim enim sit amet venenatis. Sed
            euismod nisi porta lorem mollis aliquam.
          </p>
        </div>
      </motion.section>

      {/* Send Inquiry Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-gray-50 ">
        <div className="max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  mx-auto bg-blue-300/50 px-6 md:px-12 rounded-lg shadow-lg flex items-center justify-between p-8">
          <div className="flex items-center space-x-4">
            <motion.div
              className="text-4xl text-blue-500"
              initial={{ opacity: 0, x: -50 }} // Initial state for icon
              whileInView={{ opacity: 1, x: 0 }} // State when in view
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <MdEmail />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }} // Initial state for icon
              whileInView={{ opacity: 1, y: 0 }} // State when in view
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl  font-semibold text-gray-800">
                Send an Inquiry
              </h3>
              <p className="text-lg md:text-sm text-gray-600 mt-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </motion.div>
          </div>

          <motion.button
            className="mt-4  md:mt-5 md:ml-20 md:w-xs   sm:w-md py-3  bg-blue-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            initial={{ opacity: 0, scale: 0.4 }} // Initial state (slightly smaller)
            whileInView={{ opacity: 1, scale: 1 }} // State when in view (normal size)
            transition={{ duration: 0.6 }}
          >
            Get a Quote
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default ServicePackages;
