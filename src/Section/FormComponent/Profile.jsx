import React, { useState } from "react";

const Profile = () => {
  // Initialize userData state with default empty values
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    bio: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value, // Update the specific field of userData
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-6  ml-0 md:ml-0 sm:ml-0 lg:ml-60   max-w-7xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs xl:max-w-4xl md:max-w-2xl sm:max-w-lg mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Profile</h1>

        {/* User Information Display */}
        <div className="space-y-4 mb-4">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label className="block text-sm text-gray-600 font-semibold">Name</label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block text-sm text-gray-600 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-1/2">
              <label className="block text-sm text-gray-600 font-semibold">Phone</label>
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block text-sm text-gray-600 font-semibold">Address</label>
              <input
                type="text"
                placeholder="Address"
                name="address"
                value={userData.address}
                onChange={handleInputChange}
                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 font-semibold">Bio</label>
            <textarea
              name="bio"
              value={userData.bio}
              onChange={handleInputChange}
              rows="4"
              placeholder="Tell us about yourself"
              className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            ></textarea>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-center">
          <button
            onClick={() => alert("Profile updated successfully!")}
            className="bg-blue-400 w-full text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition duration-200"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
