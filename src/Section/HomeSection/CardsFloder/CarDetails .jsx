import React, { useState } from "react";

const CarDetails = ({ car }) => {
  const [mainImage, setMainImage] = useState(car.images[0]); // Set the default main image

  // Handle image change
  const handleImageClick = (image) => {
    setMainImage(image); // Update the main image when a thumbnail is clicked
  };

  return (
    <div className="bg-gray-50 font-sans leading-relaxed text-gray-800 py-10">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-xl md:text-4xl font-bold">{car.model}</h1>
          <p className="mt-2 text-sm md:text-xl">{car.type}</p>
        </div>
      </header>

      {/* Main Section */}
      <section className="container mx-auto p-8 mt-6 bg-white shadow-xl rounded-lg  max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="justify-center items-center">
            <img
              src={mainImage}
              alt={car.model}
              className="rounded-xl shadow-xl w-full  max-w-lg  object-cover"
            />
            <div className="my-5 flex gap-x-4   overflow-x-auto    ">
              {car.images.map((image, index) => {
                if (image !== mainImage) {
                  return (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-20 h-auto cursor-pointer border-2 border-gray-300 rounded-md transition-transform transform hover:scale-110"
                      onClick={() => handleImageClick(image)}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>

          {/* Car Details */}
          <div className="space-y-6">
            <h1 className="text-xl md:text-3xl font-semibold text-blue-900">
              Car Specifications
            </h1>

            <ul className="space-y-4 text-[9px] md:text-lg">
              <li className="flex items-center">
                <span className="w-32 font-medium">Engine:</span>
                <span className="text-gray-600">{car.engine}</span>
              </li>
              <li className="flex items-center">
                <span className="w-32 font-medium">Power:</span>
                <span className="text-gray-600">{car.power}</span>
              </li>
              <li className="flex items-center">
                <span className="w-32 font-medium">Torque:</span>
                <span className="text-gray-600">{car.torque}</span>
              </li>
              <li className="flex items-center">
                <span className="w-32 font-medium">Transmission:</span>
                <span className="text-gray-600">{car.transmission}</span>
              </li>
              <li className="flex items-center">
                <span className="w-32 font-medium">Drive Type:</span>
                <span className="text-gray-600">{car.driveType}</span>
              </li>
              <li className="flex items-center">
                <span className="w-32 font-medium">Fuel Economy:</span>
                <span className="text-gray-600">{car.fuelEconomy}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Car Description Section */}
      <section className="container mx-auto p-8 mt-6 bg-white shadow-lg rounded-lg  max-w-6xl ">
        <h1 className="text-xl md:text-3xl font-semibold text-blue-900 mb-6">
          Car Description
        </h1>
        <p className="text-sm md:text-lg text-gray-600">{car.description}</p>
      </section>

      {/* Features Section */}
      <section className="container mx-auto p-8 mt-10 bg-gray-100 shadow-lg rounded-lg  max-w-6xl ">
        <h1 className="text-xl md:text-3xl font-semibold text-blue-900 mb-6">
          Key Features
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {car.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4">
              <span className="text-sm md:text-2xl text-blue-900">
                &#10003;
              </span>
              <p className="text-sm md:text-[16px]">{feature}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CarDetails;
