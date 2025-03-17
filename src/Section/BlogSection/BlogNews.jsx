/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import Blogs from "../../assets/Rectangle 5.png";
import { BlogNewsData, postNewsData } from "../../Constants";
import { Link, useNavigate } from "react-router-dom";

const BlogNews = () => {
  const navigate = useNavigate(); // Initialize navigate function
  useEffect(() => {
    // Function to speak the news titles
    const speakNews = () => {
      const newsTitles = document.querySelectorAll(".news-title");
      newsTitles.forEach((title) => {
        const speech = new SpeechSynthesisUtterance(title.textContent);
        speech.rate = 0.9; // Set rate of speech
      });
    };

    // Speak news titles once after page load
    speakNews();
  }, []);

  const handleCardClick = () => {
    navigate("/table");
    window.scrollTo(0, 0); //
  };

  return (
    <>
      {/* First Section - Blogs & News */}
      <section className="bg-gray-50 py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 text-start">
          {/* Title Section */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileInView={{ opacity: 1, scale: 0.92 }}
            transition={{ duration: 1 }}
          >
            Blogs & News
          </motion.h1>

          {/* Description Section */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileInView={{ opacity: 1, scale: 0.92 }}
            transition={{ duration: 1.5 }}
          >
            Stay updated with the latest company and car market news, as well as
            helpful car selection guides and reviews from our expert authors.
          </motion.p>
        </div>
      </section>

      {/* Second Section - Categories & Featured Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            {/* Categories Section */}
            <ul className="flex space-x-8 text-gray-700 text-sm md:text-lg sm:text-xl mb-4 sm:mb-0">
              <li className="font-semibold">Categories:</li>
              <li className="hover:text-blue-600 cursor-pointer">News</li>
              <li className="hover:text-blue-600 cursor-pointer">Guides</li>
              <li className="hover:text-blue-600 cursor-pointer">Reviews</li>
            </ul>

            {/* Featured Posts Section */}
            <motion.h3
              className="text-md md:text-2xl sm:text-2xl font-semibold text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Featured Posts
            </motion.h3>
          </div>

          {/* Featured Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* First Featured Post */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src={Blogs}
                alt="Featured Post"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm mb-2">
                  News
                </button>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  These new EV pick up trucks are about to be all the rage
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </motion.div>

            {/* Second Featured Post */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1737413583866-c5913ec04ada?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8MjAyMyUyME5pc3NhbiUyMEFsdGltYSUyMDIuMCUyMFNSJTIwUmV2aWV3JTNBJTIwQSUyMFNlbnNpYmxlJTJDJTIwU29tZXdoYXQlMjBTcG9ydHklMjBTZWRhbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Featured Post"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <button className="bg-green-600 text-white px-4 py-1 rounded-full text-sm mb-2">
                  Reviews
                </button>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  2023 Nissan Altima 2.0 SR Review: A Sensible, Somewhat Sporty
                  Sedan
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Third Section - Blog Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-25 gap-y-5 sm:gap-x-2 md:gap-x-4 lg:gap-x-25">
              {BlogNewsData.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md sm:w-70 md:w-75 lg:w-65 xl:w-80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, scale: 0.92 }}
                  transition={{ duration: 1 }}
                  onClick={handleCardClick}
                >
                  <img
                    src={item.Image}
                    alt={`Blog ${index + 1}`}
                    className="w-full h-48 object-cover mb-4 rounded-lg"
                  />
                  <button className="text-blue-600 hover:underline mb-4 bg-amber-100 px-4 rounded-md font-bold">
                    {item.button}
                  </button>
                  <h3 className="text-md font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-2 text-justify tracking-wider">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav aria-label="Page navigation">
                <ul className="inline-flex items-center space-x-2">
                  <li>
                    <a
                      className="px-4 py-2 text-sm font-semibold text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-200"
                      aria-label="Previous"
                    >
                      &laquo;
                    </a>
                  </li>
                  <li>
                    <a className="px-4 py-2 text-sm font-semibold text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-blue-500 hover:text-white">
                      1
                    </a>
                  </li>
                  <li>
                    <a className="px-4 py-2 text-sm font-semibold text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-blue-500 hover:text-white">
                      2
                    </a>
                  </li>
                  <li>
                    <a className="px-4 py-2 text-sm font-semibold text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-blue-500 hover:text-white">
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      className="px-4 py-2 text-sm font-semibold text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-200"
                      aria-label="Next"
                    >
                      &raquo;
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Fourth Section - News Cards */}
          <div className="max-w-7xl mx-auto py-10 px-6 sm:px-8 md:px-12">
            <h3 className="text-md md:text-3xl font-semibold text-gray-800 mb-8">
              Latest News
            </h3>

            <motion.div
              className="relative overflow-hidden h-260"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="flex flex-col space-y-8 animate-marquee">
                {postNewsData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-4 flex flex-row items-center rounded-lg shadow-md lg:w-85 lg:h-40 xl:w-100 xl:h-40 md:w-150 h-auto flex-shrink-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <img
                      src={item.Image}
                      alt={`News ${index + 5}`}
                      className="w-20 h-20 object-cover rounded-lg mr-4"
                    />
                    <div className="flex flex-col flex-grow items-start">
                      <button className="text-blue-600 hover:underline bg-amber-100 px-4 rounded-md font-bold">
                        {item.button}
                      </button>
                      <h4 className="text-md font-semibold text-gray-800 mb-2 news-title">
                        {item.title} {index + 1}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes marquee {
          100% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </>
  );
};

export default BlogNews;
