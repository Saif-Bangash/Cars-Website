import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Debugging: Log the email value
    console.log("Submitted Email:", email);

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    
    // Simulate sending a password reset request
    setTimeout(() => {
      setMessage("We sent a password reset link to your email.");
      setLoading(false);
      setShowModal(true); // Show the modal after a successful email submission
    }, 2000); // Simulate a 2-second delay for the request
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    // Validate the new password and confirm password match
    if (!newPassword || !confirmPassword) {
      setPasswordMessage("Both fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordMessage("Passwords do not match.");
      return;
    }

    setPasswordMessage("Password successfully changed!");
    setShowModal(false);
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewPassword("");
    setConfirmPassword("");
    setPasswordMessage("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xs md:max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Forgot Password
        </h3>
        <p className="text-sm text-center text-gray-600 mb-4">
          We sent a password reset link to
        </p>

        {/* Forgot Password Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {/* Message after submission */}
        {message && (
          <div className="mt-4 text-center text-sm text-gray-600">
            {message}
          </div>
        )}

        {/* Back to Login Link */}
        <div className="text-center mt-4">
          <a
            href="/login"
            className="text-sm text-green-500 hover:underline focus:outline-none"
          >
            Back to Login
          </a>
        </div>
      </div>

      {/* Modal for New Password */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h4 className="text-xl font-semibold text-center text-gray-700 mb-4">
              Set New Password
            </h4>
            <form onSubmit={handlePasswordSubmit}>
              {/* New Password */}
              <div className="mb-4">
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium text-gray-600"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter new password"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-600"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Confirm new password"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Set Password
              </button>
            </form>

            {/* Password Validation Message */}
            {passwordMessage && (
              <div className="mt-4 text-center text-sm text-gray-600">
                {passwordMessage}
              </div>
            )}

            {/* Close Modal Button */}
            <div className="text-center mt-4">
              <button
                onClick={handleCloseModal}
                className="text-sm text-gray-500 hover:underline focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
