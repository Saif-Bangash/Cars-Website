/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Cars = () => {
  const carsData = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lqxZU5L0wPTTdYyeMMTcla0zszyCcjrCOQ&s",
      title: "2025 Tesla Model S",
      description: "The Tesla Model S is a fully electric luxury sedan with advanced features and high performance.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStktwgz-Yg4XDcoT0tfZCGZvEe713Ua6laiQ&s",
      title: "2025 BMW M4",
      description: "The BMW M4 is a high-performance luxury sports coupe known for its thrilling driving experience.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqA7JxTQQYW1HL5rN8iKPxF4b-nNoXf0Plfg&s",
      title: "2025 Audi Q7",
      description: "The Audi Q7 is a luxurious 3-row SUV with a spacious interior and top-tier technology.",
    },
  ];

  return (
    <section className="py-16 bg-light-blue-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Latest Cars
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carsData.map((car, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden hover:scale-105 transform transition duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, scale:0.96 }}
              transition={{ duration: 1 }}
            >
              <img
                src={car.image}
                alt={car.title}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-1.05"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{car.title}</h3>
                <p className="text-gray-600 mb-4">{car.description}</p>
                <button className="bg-blue-400 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-500 transition duration-300 w-full">
                  View More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactUs = () => {
  return (
    <section className="py-16 bg-light-green-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h2>
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg mx-auto">
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-4 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-4 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                className="w-full p-4 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-400 text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-500 transition duration-300 w-full"
              >
                Submit
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <>
      <Cars />
      <ContactUs />
    </>
  );
};

export default Contact;
