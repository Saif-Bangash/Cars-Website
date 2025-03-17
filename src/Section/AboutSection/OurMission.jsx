/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import farmeimg from "../../assets/Frame.png";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const OurMission = () => {
  return (
    <>
      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          {/* Text Section */}
          <motion.div
            className="flex-1 pr-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Mission
            </h1>
            <p className="text-lg sm:text-xl md:text-xl  text-justify tracking-wider text-gray-600 leading-relaxed mb-6">
              Id ornare arcu odio ut sem nulla. Sagittis aliquam malesuada
              bibendum arcu vitae elementum curabitur. Velit dignissim sodales
              ut eu sem integer vitae justo. A erat nam at lectus urna duis
              convallis convallis. Feugiat scelerisque varius morbi enim nunc
              faucibus a pellentesque. Risus ultricies tristique nulla aliquet
              enim tortor. Consectetur a erat nam at. Elit sed vulputate mi sit
              amet mauris.
            </p>
            <p className="text-lg sm:text-xl md:text-xl text-justify tracking-wider text-gray-600 leading-relaxed mb-6">
              Platea dictumst quisque sagittis purus sit amet volutpat
              consequat. Porta nibh venenatis cras sed felis eget. Ultricies
              lacus sed turpis tincidunt id aliquet risus feugiat in. Neque
              convallis a cras semper auctor.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="flex-1 max-w-2xl rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <img
              src={farmeimg}
              alt="Our Mission"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto h-30 px-6 md:px-12">
          <motion.div
            className="text-center gap-2  flex flex-wrap justify-center items-center bg-blue-200 p-4 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xs sm:text-sm md:text-lg text-gray-700 mb-6 text-center w-full">
              Contact us for auto import assistance or to learn more about us.
            </h3>

            {/* WhatsApp Link */}
            <a
              href="https://wa.me/9715581819024"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-800 hover:text-green-500 transition mb-6 sm:mb-0"
            >
              <FaWhatsapp className="text-md" />
              <span className="text-xs md:text-base">+971 5581819024</span>
            </a>

            {/* Email Link */}
            <a
              href="mailto:request@example.com"
              className="inline-flex items-center gap-2 text-md text-gray-800 hover:text-red-500 transition mb-6 sm:mb-0"
            >
              <MdMarkEmailUnread className="text-md" />
              <span className="text-xs md:text-base">request@example.com</span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OurMission;
