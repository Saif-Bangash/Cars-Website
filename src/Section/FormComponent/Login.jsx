import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  // Handle input changes for login form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  // Handle form submit (for login)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Details:", loginData);
    // Add your login logic here (API request, etc.)
    navigate("/dashboard");
  };

  // Navigate to Forgot Password page (You can replace this with your actual route)
  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xs md:max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Login</h2>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={loginData.name}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
            value={loginData.password}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Login
        </button>

        {/* Forgot Password Link */}
        <div className="text-center mt-4">
         <Link to={'/forgatepassword'}>
         <button
            type="button"
            onClick={handleForgotPassword}
            className="text-sm text-green-500 hover:underline focus:outline-none"
          >
            Forgot Password?
          </button>
         </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
