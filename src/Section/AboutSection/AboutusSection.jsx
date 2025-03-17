/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const AboutusSection = () => {
  return (
    <section className="py-10 md:py20 bg-gradient-to-r from-blue-200 via-purple-200 to-yellow-200 text-gray-800">
      <div className="container mx-auto px-6 sm:px-8 md:px-12">
        {/* Title Section */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center leading-tight mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          About Us
        </motion.h1>

        {/* Content Section */}
        <motion.p
          className="text-sm sm:text-lg md:text-md    tracking-wider md:text-center  text-justify text-gray-800 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          We are a creative agency passionate about delivering unique and impactful experiences. Our goal is to bring your ideas to life and help you make a lasting impression. With a team of talented designers, developers, and strategists, we focus on crafting beautiful solutions to solve real-world problems.
        </motion.p>

        <motion.p
          className="text-sm sm:text-lg md:text-md   tracking-wider text-justify md:text-center text-gray-800 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          We believe in the power of collaboration, creativity, and innovation. Together, we create experiences that engage, inspire, and resonate with your audience. Let’s build something amazing together!
        </motion.p>

        {/* CTA Section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <button className="px-6 py-3 bg-green-400 text-white text-lg sm:text-xl font-semibold rounded-full hover:bg-green-400 transition duration-300">
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutusSection;
