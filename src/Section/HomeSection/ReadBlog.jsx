/* eslint-disable no-unused-vars */
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { ReadBlogdata } from "../../Constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ReadBlog = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);  
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-lg sm:text-4xl md:text-2xl font-semibold text-gray-800 px-5">
          Read Our Blog
        </h1>
        <button className="text-sm md:text-xl font-semibold text-green-600 flex items-center hover:text-green-800 transition-all">
          All Articles <FaArrowRight className="ml-2" />
        </button>
      </div>

      <motion.div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ReadBlogdata.map((item, index) => {
          const delay = index * 0.3;
          let duration = 0.6;

          if (index === 1) duration = 0.8;
          if (index === 2) duration = 1.0;

          return (
            <Link 
              to={`${item.id}`} 
              key={index}
              onClick={handleScrollToTop}  // Call scrollToTop function on click
            >
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: duration, delay: delay },
                }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <motion.img
                  src={item.Readimg}
                  alt="Blog Post"
                  className="w-full h-48 object-cover rounded-lg mb-6 hover:opacity-80 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: delay }}
                  viewport={{ once: false, amount: 0.2 }}
                />
                <motion.button
                  className="text-green-600 font-semibold hover:text-green-800 transition-all mb-2 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: delay }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  {item.button}
                </motion.button>
                <motion.h3
                  className="text-xl font-semibold text-gray-700 mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: delay }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="text-gray-700 text-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: delay }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  {item.text}
                </motion.p>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </section>
  );
};

export default ReadBlog;
