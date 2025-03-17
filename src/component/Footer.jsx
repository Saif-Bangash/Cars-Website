import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo and Description Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="#" className="text-3xl font-bold text-green-600 hover:text-green-500">
              <span className="text-white">e</span>Cars
            </a>
            <p className="mt-4 text-gray-400 text-sm">
              Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-xl text-gray-400 hover:text-green-500">
                <FaFacebook />
              </a>
              <a href="#" className="text-xl text-gray-400 hover:text-green-500">
                <FaTwitter />
              </a>
              <a href="#" className="text-xl text-gray-400 hover:text-green-500">
                <FaYoutube />
              </a>
              <a href="#" className="text-xl text-gray-400 hover:text-green-500">
                <FaSquareInstagram />
              </a>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><Link to={"About-Us"} className="hover:text-green-500">About Us</Link></li>
              <li><Link to={"Blogs"} className="hover:text-green-500">Blog</Link></li>
              <li><a href="#" className="hover:text-green-500">FAQ</a></li>
            </ul>
          </div>

          {/* Cars Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Cars</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-green-500">Special Offers</a></li>
              <li><a href="#" className="hover:text-green-500">New Cars</a></li>
              <li><a href="#" className="hover:text-green-500">Used Cars</a></li>
              <li><a href="#" className="hover:text-green-500">Brands</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <a
              href="https://wa.me/9715581819024"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg text-gray-400 hover:text-green-500 transition"
            >
              <FaWhatsapp className="text-md" />
              <span className="text-xs">+971 5581819024</span>
            </a>
            <a
              href="mailto:request@example.com"
              className="flex items-center gap-2 text-lg text-gray-400 hover:text-red-500 transition mt-2"
            >
              <MdMarkEmailUnread className="text-md" />
              <span className="text-xs ">request@example.com</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex justify-around items-center text-center text-gray-400 text-sm">
          <p>eCars © 2022. All rights reserved.</p>
          <ul className=" space-x-2 inline-block">
            <li className="inline">
              <a href="#" className="hover:text-green-500">Privacy Policy</a>
            </li>
            <li className="inline">
              <a href="#" className="hover:text-green-500">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
