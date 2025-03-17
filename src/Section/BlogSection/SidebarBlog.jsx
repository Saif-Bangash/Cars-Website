import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCar, FaListAlt, FaBlog, FaNewspaper } from "react-icons/fa"; // Import icons
import { IoIosArrowForward } from "react-icons/io"; // Arrow icon
import { FaTimes } from "react-icons/fa"; // Close icon

const SidebarBlog = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Toggle button for mobile */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-2 md:top-4 left-0 md:p-2 my-15 bg-gray-800 text-white rounded-md z-50"
      >
        {isSidebarOpen ? (
          <FaTimes className="text-xl" />
        ) : (
          <IoIosArrowForward className="text-xl" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-16 left-0 bottom-0 min-h-screen w-64 bg-gray-600 text-white p-6 overflow-auto transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:w-64 md:w-64 sm:w-64 md:py-15 `} // Adjust width for different screen sizes
      >
        <h3 className="text-xl md:text-2xl sm:text-2xl font-semibold text-gray-100 mb-8">Table of Content</h3>
        <ul className="space-y-6">
          {/* Auto News */}
          <li className="hover:bg-teal-700 rounded-md px-4 py-2 transition duration-300 hover:scale-105 cursor-pointer">
            <Link
              to={"/auto"}
              className="flex items-center text-lg font-medium text-white px-2 hover:text-teal-200"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FaCar className="mr-2 text-xl" />
              Auto News
            </Link>
          </li>

          {/* Featured Posts */}
          <li className="hover:bg-teal-700 rounded-md px-4 py-2 transition duration-300 hover:scale-105 cursor-pointer">
            <Link
              to={"/Categories"}
              className="flex items-center text-lg font-medium text-white px-2 hover:text-purple-200"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FaListAlt className="mr-2 text-xl" /> {/* List Icon */}
              Featured Posts
            </Link>
          </li>

          {/* Blog Posts */}
          <li className="hover:bg-teal-700 rounded-md px-4 py-2 transition duration-300 hover:scale-105 cursor-pointer">
            <Link
              to={"/Blogpost"}
              className="flex items-center text-lg font-medium text-white px-2 hover:text-indigo-200"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FaBlog className="mr-2 text-xl" /> {/* Blog Icon */}
              Blog Posts
            </Link>
          </li>

          {/* Latest News */}
          <li className="hover:bg-teal-700 rounded-md px-4 py-2 transition duration-300 hover:scale-105 cursor-pointer">
            <Link
              to={"/latestnews"}
              className="flex items-center text-lg font-medium text-white px-2 hover:text-pink-200"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FaNewspaper className="mr-2 text-xl" /> {/* Newspaper Icon */}
              Latest News
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SidebarBlog;
