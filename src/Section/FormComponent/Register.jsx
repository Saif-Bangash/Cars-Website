import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "",
    city: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Navigate hook for page redirection

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit and redirect to login page after successful registration
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    
    // After successful submission, redirect to login page
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen  bg-gray-100 py-15">
      <form
        className="bg-white p-10 rounded-lg shadow-lg w-full max-w-xs md:max-w-2xl space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Sign Up</h2>

        {/* Full Name */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Country Code */}
        <div className="mb-4">
          <label htmlFor="countryCode" className="block text-sm font-medium text-gray-600">
            Country Code
          </label>
          <input
            type="text"
            id="countryCode"
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* City */}
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-600">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-green-400 text-white font-semibold rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Form;
