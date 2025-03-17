import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaCog, FaUser, FaBars, FaTimes } from "react-icons/fa"; // Importing FontAwesome icons
import { IoIosArrowForward } from "react-icons/io";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Toggle Button for Small and Medium Screens */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-2 md:top-4 left-0  md:p-2 my-15 bg-gray-800 text-white rounded-md z-50"
      >
        {isSidebarOpen ? <FaTimes className="text-xl" /> : <IoIosArrowForward  className="text-xl" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-16 left-0 bottom-0 min-h-screen w-64 bg-gray-600  text-white p-6 overflow-auto transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <Link to={"/dashboard"}><h3 className="text-2xl font-semibold mb-8 text-gray-300">Dashboard</h3></Link>
        <ul>
          {/* Dashboard Link */}
          <li className="mb-4">
            <Link
              to="/dashboard"
              className="flex items-center text-lg text-gray-300 hover:text-gray-400 p-2 rounded-md transition-colors duration-200"
              onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
            >
              <FaTachometerAlt className="mr-3" />
              <span className="  lg:inline text-white">Dashboard</span>
            </Link>
          </li>

          {/* Settings Link */}
          <li className="mb-4">
            <Link
              to="/settings"
              className="flex items-center text-lg text-gray-300 hover:text-gray-400 p-2 rounded-md transition-colors duration-200"
              onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
            >
              <FaCog className="mr-3" />
              <span className="  lg:inline text-white">Settings</span>
            </Link>
          </li>

          {/* Profile Link */}
          <li className="mb-4">
            <Link
              to="/profile"
              className="flex items-center text-lg text-gray-300 hover:text-gray-400 p-2 rounded-md transition-colors duration-200"
              onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
            >
              <FaUser className="mr-3" />
              <span className="  lg:inline text-white">Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;