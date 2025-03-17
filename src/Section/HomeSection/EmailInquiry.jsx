/* eslint-disable no-unused-vars */
import React from "react";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { MdAttachEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const EmailInquiry = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400">
      {/* Adjusting grid for different screen sizes */}
      <div className="flex justify-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 w-full max-w-4xl">
          {/* Inquiry Block 1 */}
          <div
            className="flex flex-col items-center bg-blue-50 p-8 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:rotate-2 hover:shadow-xl"
            style={{ maxHeight: "450px" }} // Limit max height for mobile devices
          >
            <MdAttachEmail className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-start">
              Send an inquiry and our managers will offer you the best deals.
            </h3>
            <p className="text-gray-600 mb-6 text-start">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <button className="bg-blue-600 text-white font-bold px-6 py-2 rounded-md hover:bg-blue-700 transition-all">
              Get a quote
            </button>
          </div>

          {/* Inquiry Block 2 */}
          <div
            className="flex flex-col items-center bg-green-50 p-8 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:rotate-2 hover:shadow-xl"
            style={{ maxHeight: "450px" }} // Limit max height for mobile devices
          >
            <HiQuestionMarkCircle className="text-4xl text-green-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-start">
              Do you still have questions? Contact us for answers.
            </h3>
            <p className="text-gray-600 mb-6 text-start">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
           <Link to={'/contacts'}>
           <button className="bg-green-600 text-white font-bold px-6 py-2 rounded-md hover:bg-green-700 transition-all">
              Contact Us
            </button>
           </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailInquiry;
