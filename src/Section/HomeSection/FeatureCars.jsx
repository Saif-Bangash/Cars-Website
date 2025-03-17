import React from "react";
import { Featurecards } from "../../Constants";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // Import Framer Motion

const FeatureCars = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-300">
      <div className="flex flex-col justify-center items-center text-center space-y-6">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-gray-200"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          How It Works
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </motion.p>
      </div>

      {/* Grid Container for Feature Cards with animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-8 px-6 mt-10 lg:px-15 max-w-7xl mx-auto">
        {Featurecards.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-6  text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: index * 0.4, // Stagger animation for each card
              type: "spring",
              stiffness: 60, // Slightly slower stiffness
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex items-center justify-center relative mb-4">
              <motion.div
                className="text-2xl font-semibold text-gray-800 bg-amber-200 p-2 px-5 rounded-full"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                {item.number}
              </motion.div>
            </div>

            <motion.h3
              className="text-xl font-semibold text-gray-100 mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {item.title}
            </motion.h3>
            <motion.p
              className="text-gray-200 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {item.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCars;
