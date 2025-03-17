import React, { useState } from "react";
import { menu } from "../Constants";
import Headeritem from "./Headeritem";
import { CiSearch } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  // State to handle the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to handle the search bar visibility
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // State to handle the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle the search bar visibility
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  // Handle the input change in the search field
  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  // You can handle the actual search functionality in a separate function if needed
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for: ", searchQuery);
    // You can perform your search functionality here (e.g., call an API, filter data, etc.)
  };

  return (
    <header className="bg-gray-600 text-white sticky top-0 left-0 w-full z-50">
      <nav>
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo and Menu Section (left aligned) */}
          <div className="flex items-center space-x-6 md:px-6">
            {/* Logo Section */}
            <Link to={"/"} className="text-2xl font-bold font-tag md:mb-2">
              <span className="text-green-600">e</span>Cars
            </Link>

            {/* Menu Section (visible on medium screens and above) */}
            <ul className="hidden lg:flex space-x-6">
              {menu.map((item, index) => (
                <Link to={item.path} key={index}>
                  <Headeritem name={item.name} icon={item.icon} />
                </Link>
              ))}
            </ul>
          </div>

          {/* Icons and Buttons Section (visible on all screens) */}
          <div className="flex items-center space-x-4 ml-auto hidden md:hidden lg:flex">
            {/* Search Icon - Clicking this toggles the search input visibility */}
            <CiSearch
              className="text-2xl cursor-pointer hover:text-green-500 transition-colors"
              onClick={toggleSearch} // Toggle search bar visibility
            />

            {/* If search bar is open, show the input field */}
            {isSearchOpen && (
              <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2 ml-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search..."
                  className="p-2 rounded-lg"
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-400 transition-colors"
                >
                  Search
                </button>
              </form>
            )}

            {/* Heart and Account Icons */}
            <FaHeart className="text-xl cursor-pointer hover:text-green-500 transition-colors" />
            <MdManageAccounts className="text-2xl cursor-pointer hover:text-green-500 transition-colors" />

            {/* Login and Register Buttons */}
            <Link to={"/login"}>
              <button className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-400 transition-colors">
                Login
              </button>
            </Link>

            <Link to={"/register"}>
              <button className="border border-green-500 text-green-500 py-2 px-4 rounded-full hover:bg-green-500 hover:text-white transition-colors">
                Register
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button className="lg:hidden flex items-center space-x-2" onClick={toggleMenu}>
            <span className="text-2xl">☰</span>
          </button>
        </div>

        {/* Mobile Menu Section */}
        <div className={`lg:hidden flex flex-col items-start space-y-4 bg-gray-700 p-4 ${isMenuOpen ? "block" : "hidden"}`}>
          {menu.map((item, index) => (
            <Link to={item.path} key={index}>
              <Headeritem name={item.name} icon={item.icon} />
            </Link>
          ))}

          {/* Mobile Icons and Buttons Section */}
          <div className="flex items-center space-x-4 mt-4">
            <CiSearch className="text-2xl cursor-pointer hover:text-green-500 transition-colors" onClick={toggleSearch} />
            <FaHeart className="text-xl cursor-pointer hover:text-green-500 transition-colors" />
            <MdManageAccounts className="text-2xl cursor-pointer hover:text-green-500 transition-colors" />

            <Link to={"/login"}>
              <button className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-400 transition-colors">
                Login
              </button>
            </Link>

            <Link to={"/register"}>
              <button className="border border-green-500 text-green-500 py-2 px-4 rounded-full hover:bg-green-500 hover:text-white transition-colors">
                Register
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
