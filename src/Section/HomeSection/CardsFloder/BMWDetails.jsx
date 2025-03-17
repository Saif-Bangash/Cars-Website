import React from "react";
import CarDetails from "../CardsFloder/CarDetails ";

const BMWData = [
  {
    model: "2019 BMW 640i Gran Turismo xDrive",
    type: "Luxury Sedan",
    engine: "3.0L Turbocharged Inline-6",
    power: "335 horsepower @ 5,500 rpm",
    torque: "332 lb-ft @ 1,380-5,200 rpm",
    transmission: "8-speed automatic transmission",
    driveType: "All-Wheel Drive (xDrive)",
    fuelEconomy: "20 mpg city / 27 mpg highway",
    description:
      "The 2019 BMW 640i Gran Turismo xDrive is a high-performance luxury sedan designed to offer the perfect blend of comfort, cutting-edge technology, and exhilarating driving dynamics. It features a 3.0L Turbocharged Inline-6 engine that delivers a robust 335 horsepower and 332 lb-ft of torque, ensuring powerful acceleration and smooth performance. With its advanced all-wheel-drive system (xDrive), the BMW 640i Gran Turismo provides exceptional stability and traction, making it ideal for both city driving and long-distance journeys.",
    features: [
      "Adaptive Air Suspension",
      "Apple CarPlay and Android Auto",
      "Harman Kardon Sound System",
      "Dual-zone Automatic Climate Control",
      "Wireless Charging",
    ],
    images: [
      "https://images.clickdealer.co.uk/vehicles/6598/6598969/large1/157657612.jpg",
      "https://images.clickdealer.co.uk/vehicles/6598/6598969/large1/157657615.jpg",
      "https://images.clickdealer.co.uk/vehicles/6598/6598969/large1/157657649.jpg",
      "https://images.clickdealer.co.uk/vehicles/6598/6598969/large1/157657623.jpg",
      "https://images.clickdealer.co.uk/vehicles/6598/6598969/large1/157657626.jpg",
      "https://images.clickdealer.co.uk/vehicles/6598/6598969/large1/157657631.jpg",
    ],
  },
];

const BMWDetails = () => {
  return (
    <div>
      {BMWData.map((car, index) => (
        <div>
          <CarDetails key={index} car={car} />
        </div>
      ))}
    </div>
  );
};

export default BMWDetails;
