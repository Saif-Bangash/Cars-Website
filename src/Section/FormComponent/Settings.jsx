import React, { useState } from "react";

const Settings = () => {
  // State to manage settings changes (for example, dark mode toggle)
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-300 ml-0 sm:ml-0 md:ml-0 lg:ml-60 md:max-w-7xl mx-auto min-h-screen `}
    >
      <div className="max-w-7xl mx-auto p-6">
        {/* Settings Header */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h1 className="text-xl md:text-3xl font-semibold text-gray-900 mb-4">
            Settings
          </h1>
          <p className="text-xs md:text-lg text-gray-700">
            Customize your preferences and manage your account settings here.
          </p>
        </div>

        {/* Settings Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Account Settings Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-md font-semibold text-gray-900 mb-4">
              Account Settings
            </h1>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  placeholder=" username"
                  className="w-full p-1 md:p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="email"
                placeholder="  email"
                className="w-full p-1 md:p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Privacy Settings Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-md font-semibold text-gray-900 mb-4">
              Privacy Settings
            </h1>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-gray-700">
                  Enable Two-Factor Authentication
                </label>
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-gray-700">
                  Share Data with Third-Party Apps
                </label>
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Notification Settings Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-md font-semibold text-gray-900 mb-4">
              Notification Settings
            </h1>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-gray-700">
                  Email Notifications
                </label>
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-gray-700">
                  SMS Notifications
                </label>
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Dark Mode Toggle Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg md:col-span-2 lg:col-span-3">
            <h1 className="text-md font-semibold text-gray-900 mb-4">
              Display Settings
            </h1>
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-gray-700">
                Enable Dark Mode
              </label>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={handleDarkModeChange}
                className="w-4 h-4 bg-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="text-right mt-6">
          <button className="px-6 py-2 md:py-3 text-xs md:text-md bg-blue-600 font-bold w-full md:max-w-40 text-white rounded-md hover:bg-blue-700 transition duration-200">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
